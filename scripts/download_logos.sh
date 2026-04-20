#!/bin/bash

# Configuration
BASE_URL="https://raw.githubusercontent.com/luukhopman/football-logos/master/logos"
TARGET_DIR="../assets/logos"
TEMP_DIR="../assets/temp"

mkdir -p "$TARGET_DIR" "$TEMP_DIR"

# Function to download and convert
download_and_convert() {
    local country=$1
    local league=$2
    local team=$3
    local target_name=$4

    # Encode spaces for URL
    local encoded_country="${country// /%20}"
    local encoded_league="${league// /%20}"
    local encoded_team="${team// /%20}"
    
    local url="${BASE_URL}/${encoded_country}%20-%20${encoded_league}/${encoded_team}.png"
    local temp_file="${TEMP_DIR}/${target_name}.png"
    local final_file="${TARGET_DIR}/${target_name}.webp"

    echo "Downloading ${team} from ${country} - ${league}..."
    
    curl -s -L "$url" -o "$temp_file"

    if [ -f "$temp_file" ] && [ s "$(wc -c <"$temp_file")" -gt 100 ]; then
        echo "Converting to WebP..."
        sips -s format webp "$temp_file" --out "$final_file" > /dev/null
        rm "$temp_file"
        echo "✅ Success: ${final_file}"
    else
        echo "❌ Failed to download ${team} (URL: $url)"
        [ -f "$temp_file" ] && rm "$temp_file"
    fi
}

# Phase 1: Premier League
echo "--- Phase 1: Premier League ---"
TEAMS=("Arsenal" "Aston Villa" "Bournemouth" "Brentford" "Brighton & Hove Albion" "Burnley" "Chelsea" "Crystal Palace" "Everton" "Fulham" "Liverpool" "Manchester City" "Manchester United" "Newcastle United" "Nottingham Forest" "Tottenham Hotspur" "West Ham United" "Wolverhampton Wanderers")

for team in "${TEAMS[@]}"; do
    # Try with " FC" suffix first as it's common in this repo
    download_and_convert "England" "Premier League" "${team} FC" "$team"
done

# Special cases or missing ones in Premier League
# Some might not have " FC" or have other names
download_and_convert "England" "Premier League" "Leeds United" "Leeds United"

# Phase 2: La Liga
echo "--- Phase 2: LALIGA EA SPORTS ---"
LA_LIGA=("Real Madrid" "FC Barcelona" "Atletico de Madrid" "Girona FC" "Sevilla FC" "Valencia CF" "Real Betis" "Real Sociedad" "Villarreal CF")
for team in "${LA_LIGA[@]}"; do
    download_and_convert "Spain" "LALIGA EA SPORTS" "$team" "$team"
done

# cleanup temp
rmdir "$TEMP_DIR" 2>/dev/null

echo "Done!"
