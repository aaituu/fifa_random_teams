#!/usr/bin/env python3
"""
Copies all logos from logos/ subdirectories into a flat assets/logos/ folder.
Also prints the mapping of team display name -> filename for use in app.js.
"""
import os
import shutil

src_root = 'logos'
dst_dir = 'assets/logos'

os.makedirs(dst_dir, exist_ok=True)

copied = 0
skipped = 0

for folder in sorted(os.listdir(src_root)):
    folder_path = os.path.join(src_root, folder)
    if not os.path.isdir(folder_path):
        continue
    for fname in sorted(os.listdir(folder_path)):
        if not fname.endswith('.png'):
            continue
        src = os.path.join(folder_path, fname)
        dst = os.path.join(dst_dir, fname)
        if os.path.exists(dst):
            skipped += 1
        else:
            shutil.copy2(src, dst)
            copied += 1

print(f"Done! Copied: {copied}, Skipped (already exist): {skipped}")
print(f"Total logos in assets/logos: {len([f for f in os.listdir(dst_dir) if f.endswith('.png')])}")
