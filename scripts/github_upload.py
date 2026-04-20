#!/usr/bin/env python3
"""
Push project files to GitHub via API (base64 + PUT for each file).
Use when git push fails due to credential issues.
"""
import os
import base64
import json
import urllib.request
import urllib.error

TOKEN = "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"
REPO = "aaituu/fifa_random_teams"
BRANCH = "main"

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json"
}

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SKIP_DIRS = {'.git', 'scripts', '__pycache__', 'assets/temp', '.DS_Store'}
SKIP_FILES = {'.DS_Store', 'logos.zip', 'teamsData.json'}

def api_request(method, url, data=None):
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read()), resp.status
    except urllib.error.HTTPError as e:
        return json.loads(e.read()), e.code

def get_sha(path):
    url = f"https://api.github.com/repos/{REPO}/contents/{path}?ref={BRANCH}"
    data, status = api_request("GET", url)
    if status == 200:
        return data.get("sha")
    return None

def upload_file(local_path, remote_path):
    with open(local_path, "rb") as f:
        content = base64.b64encode(f.read()).decode()
    sha = get_sha(remote_path)
    payload = {
        "message": f"Add {remote_path}",
        "content": content,
        "branch": BRANCH
    }
    if sha:
        payload["sha"] = sha
    url = f"https://api.github.com/repos/{REPO}/contents/{remote_path}"
    _, status = api_request("PUT", url, payload)
    return status in (200, 201)

def should_skip(path, name, is_dir):
    if name in SKIP_FILES:
        return True
    if is_dir and name in SKIP_DIRS:
        return True
    return False

# Collect files to upload
files_to_upload = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    # Remove skipped dirs
    dirnames[:] = [d for d in dirnames if not should_skip(dirpath, d, True)]
    for fname in filenames:
        if should_skip(dirpath, fname, False):
            continue
        local = os.path.join(dirpath, fname)
        remote = os.path.relpath(local, ROOT).replace("\\", "/")
        files_to_upload.append((local, remote))

total = len(files_to_upload)
print(f"Found {total} files to upload")

for i, (local, remote) in enumerate(files_to_upload):
    size = os.path.getsize(local)
    if size > 50_000_000:  # skip files > 50MB
        print(f"[{i+1}/{total}] SKIP (too large): {remote}")
        continue
    ok = upload_file(local, remote)
    status = "✅" if ok else "❌"
    print(f"[{i+1}/{total}] {status} {remote}")

print("\nDone! Check: https://github.com/" + REPO)
