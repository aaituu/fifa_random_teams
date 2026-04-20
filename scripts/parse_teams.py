
import json

# Input text from user
input_text = """
АНГЛИЯ (88 команд)
Premier League: Arsenal, Aston Villa, Bournemouth, Brentford, Brighton, Chelsea, Crystal Palace, Everton, Fulham, Ipswich Town, Leicester City, Liverpool, Man City, Man Utd, Newcastle Utd, Nottingham Forest, Southampton, Tottenham, West Ham, Wolves.
Championship: Blackburn, Bristol City, Burnley, Cardiff, Coventry, Derby County, Hull, Leeds, Luton, Middlesbrough, Millwall, Norwich, Oxford Utd, Plymouth, Portsmouth, Preston, QPR, Sheffield Utd, Sheffield Wed, Stoke, Sunderland, Swansea, Watford, West Brom.
League One: Barnsley, Birmingham City, Blackpool, Bolton, Bristol Rovers, Burton, Cambridge, Charlton, Crawley Town, Exeter, Huddersfield, Leyton Orient, Lincoln City, Mansfield, Northampton, Peterborough, Reading, Rotherham, Shrewsbury, Stevenage, Stockport, Wigan, Wrexham, Wycombe.
League Two: Accrington, AFC Wimbledon, Barrow, Bromley, Carlisle, Cheltenham, Chesterfield, Colchester, Crewe Alexandra, Doncaster, Fleetwood, Gillingham, Grimsby, Harrogate, MK Dons, Morecambe, Newport County, Notts County, Port Vale, Salford City, Swindon, Tranmere, Walsall.
ИСПАНИЯ (42 команды)
La Liga: Alavés, Athletic Club, Atlético Madrid, Barcelona, Celta Vigo, Espanyol, Getafe, Girona, Las Palmas, Leganés, Mallorca, Osasuna, Rayo Vallecano, Real Betis, Real Madrid, Real Sociedad, Sevilla, Valencia, Valladolid, Villarreal.
La Liga 2: Albacete, Almería, Burgos, Cádiz, Castellón, Córdoba, Deportivo La Coruña, Eibar, Elche, Eldense, Ferrol, Granada, Huesca, Levante, Mirandés, Oviedo, Racing Santander, Sporting Gijón, Tenerife, Zaragoza.
ГЕРМАНИЯ (56 команд)
Bundesliga: Augsburg, Bayern München, Bochum, Dortmund, Gladbach, Frankfurt, Freiburg, Heidenheim, Hoffenheim, Holstein Kiel, RB Leipzig, Leverkusen, Mainz, St. Pauli, Stuttgart, Union Berlin, Werder Bremen, Wolfsburg.
2. Bundesliga: Darmstadt, Elversberg, Düsseldorf, Fürth, Hamburg, Hannover, Hertha BSC, Kaiserslautern, Karlsruhe, Köln, Magdeburg, Münster, Nürnberg, Paderborn, Regensburg, Schalke 04, Ulm.
3. Liga: Aue, Bielefeld, Cottbus, Dresden, Essen, Hannover II, Ingolstadt, Viktoria Köln, Mannheim, Osnabrück, Rostock, Saarbrücken, Sandhausen, Stuttgart II, Unterhaching, Verl, Wiesbaden.
ИТАЛИЯ (40 команд)
Serie A: AC Milan, Atalanta, Bologna, Cagliari, Como, Empoli, Fiorentina, Genoa, Hellas Verona, Inter, Juventus, Lazio*, Lecce, Monza, Napoli*, Parma, Roma*, Torino, Udinese, Venezia.
Serie B: Bari, Brescia, Carrarese, Catanzaro, Cesena, Cittadella, Cosenza, Cremonese, Frosinone, Juve Stabia, Mantova, Modena, Palermo, Pisa, Reggiana, Salernitana, Sampdoria, Sassuolo, Spezia, Südtirol.
ФРАНЦИЯ (36 команд)
Ligue 1: Angers, Auxerre, Monaco, Brest, Le Havre, Lille, Montpellier, Nantes, Nice, Lyon, Marseille, PSG, Lens, Reims, Rennes, Saint-Étienne, Strasbourg, Toulouse.
Ligue 2: Ajaccio, Amiens, Annecy, Bastia, Caen, Clermont, Dunkerque, Grenoble, Guingamp, Laval, Lorient, Martigues, Metz, Paris FC, Pau, Red Star, Rodez, Troyes.
США / КАНАДА (29 команд)
MLS: Atlanta Utd, Austin, Charlotte, Chicago, Cincinnati, Colorado, Columbus, D.C. Utd, Dallas, Houston, Inter Miami, LA Galaxy, LAFC, Minnesota, Montréal, Nashville, New England, NY Red Bulls, NYCFC, Orlando, Philadelphia, Portland, Salt Lake, San Jose, Seattle, Sporting KC, St. Louis, Toronto, Vancouver.
САУДОВСКАЯ АРАВИЯ (18 команд)
Saudi Pro League: Al Ahli, Al Ettifaq, Al Fateh, Al Fayha, Al Hilal, Al Ittihad, Al Khaleej, Al Kholood, Al Nassr, Al Okhdood, Al Qadsiah, Al Raed, Al Riyadh, Al Shabab, Al Taawoun, Al Wehda, Damac, Oruba.
ПОРТУГАЛИЯ (18 команд)
Liga Portugal: Arouca, Benfica, Boavista, Braga, Casa Pia, Estoril, Estrela, Famalicão, Farense, Gil Vicente, Moreirense, Nacional, Porto, Rio Ave, Santa Clara, Sporting CP, Vitória SC, Vilafranquense.
НИДЕРЛАНДЫ (18 команд)
Eredivisie: Ajax, Almere, AZ, Feyenoord, Fortuna Sittard, Go Ahead Eagles, Groningen, Heerenveen, Heracles, NAC Breda, NEC Nijmegen, PEC Zwolle, PSV, RKC Waalwijk, Sparta Rotterdam, Twente, Utrecht, Willem II.
ТУРЦИЯ (19 команд)
Süper Lig: Adana Demirspor, Alanyaspor, Antalyaspor, Beşiktaş, Bodrum, Fenerbahçe, Galatasaray, Gaziantep, Göztepe, Hatayspor, Başakşehir, İstanbulspor, Kasımpaşa, Kayserispor, Konyaspor, Rizespor, Samsunspor, Sivasspor, Trabzonspor.
АРГЕНТИНА (28 команд)
Liga Profesional: Argentinos Jrs, Atlético Tucumán, Banfield, Barracas, Belgrano, Boca Juniors, Central Córdoba, Defensa, Deportivo Riestra, Estudiantes, Gimnasia, Godoy Cruz, Huracán, Independiente, Independiente Rivadavia, Lanús, Newell's, Platense, Racing, River Plate, Rosario Central, San Lorenzo, Sarmiento, Talleres, Tigre, Unión, Vélez Sarsfield, Instituto.
REST OF WORLD (Прочие)
Shakhtar Donetsk, Dynamo Kyiv, PAOK, Olympiacos, Panathinaikos, AEK Athens, Ferencváros, Slavia Praha, Sparta Praha, Viktoria Plzeň, HNK Rijeka, Dinamo Zagreb, HJK Helsinki, Club Brugge, Anderlecht, Genk, Gent, Celtic, Rangers, Hearts, Aberdeen, Young Boys, Basel, Zurich, Lugano, RB Salzburg, Sturm Graz, Rapid Wien, FC Copenhagen, Brøndby, Midtjylland, Legia, Lech Poznan, Rakow, Bodø/Glimt, Molde, Rosenborg, Malmö, AIK, Djurgården, FCSB, CFR Cluj, Rapid Bucuresti, Ulsan Hyundai, Jeonbuk, Shanghai Port, Shandong Taishan, Shamrock Rovers, Derry City.
МУЖСКИЕ СБОРНЫЕ (National Teams)
Argentina, Austria, Belgium, Brazil (generic players), Croatia, Czech Republic, Denmark, England, Finland, France, Germany, Ghana, Greece, Hungary, Iceland, Ireland, Italy, Mexico, Morocco, Netherlands, New Zealand, Northern Ireland, Norway, Poland, Portugal, Qatar, Romania, Scotland, Spain, Sweden, Switzerland, Ukraine, USA, Wales.
"""

def slugify(text):
    return text.lower().replace(' ', '-').replace('/', '-').replace(' ', '').replace('(', '').replace(')', '').replace('*', '').strip()

sections = [
    {"id": "leagues", "name": "Leagues", "countries": []},
    {"id": "national", "name": "National Teams", "teams": []},
    {"id": "row", "name": "Rest of World", "teams": []}
]

# Mapping to match logo folders
folder_map = {
    "England": "England",
    "Spain": "Spain",
    "Germany": "Germany",
    "Italy": "Italy",
    "France": "France",
    "USA": "USA",
    "Saudi Arabia": "Saudi Arabia",
    "Portugal": "Portugal",
    "Netherlands": "Netherlands",
    "Turkey": "Türkiye",
    "Argentina": "Argentina"
}

league_folder_map = {
    "Premier League": "Premier League",
    "La Liga": "LaLiga",
    "Bundesliga": "Bundesliga",
    "Serie A": "Serie A",
    "Eredivisie": "Eredivisie",
    "Liga Portugal": "Liga Portugal",
    "Süper Lig": "Süper Lig",
    "Ligue 1": "Ligue 1"
}

lines = input_text.strip().split('\n')
current_country = None

for line in lines:
    line = line.strip()
    if not line or line.startswith('('): continue
    
    if line.isupper() or '(' in line and line.split('(')[0].strip().isupper():
        country_name = line.split('(')[0].strip()
        if country_name == "REST OF WORLD":
            current_country = "row"
        elif country_name == "МУЖСКИЕ СБОРНЫЕ":
            current_country = "national"
        else:
            country_translation = {
                "АНГЛИЯ": "England",
                "ИСПАНИЯ": "Spain",
                "ГЕРМАНИЯ": "Germany",
                "ИТАЛИЯ": "Italy",
                "ФРАНЦИЯ": "France",
                "США / КАНАДА": "USA",
                "САУДОВСКАЯ АРАВИЯ": "Saudi Arabia",
                "ПОРТУГАЛИЯ": "Portugal",
                "НИДЕРЛАНДЫ": "Netherlands",
                "ТУРЦИЯ": "Turkey",
                "АРГЕНТИНА": "Argentina"
            }
            eng_name = country_translation.get(country_name, country_name)
            current_country = {"id": slugify(eng_name), "name": eng_name, "leagues": []}
            sections[0]["countries"].append(current_country)
    
    elif current_country == "row":
        teams = [t.strip() for t in line.split(',')]
        sections[2]["teams"].extend(teams)
    elif current_country == "national":
        teams = [t.strip() for t in line.split(',')]
        sections[1]["teams"].extend(teams)
    elif ':' in line:
        league_name, teams_str = line.split(':', 1)
        teams = [t.strip().replace('*', '') for t in teams_str.split(',')]
        
        # Handle licensing note for Italy
        if current_country["name"] == "Italy" and league_name == "Serie A":
            teams = [t.replace('Lazio', 'Latium').replace('Napoli', 'Parthenope').replace('Roma', 'Roma FC') for t in teams]
            
        folder_prefix = folder_map.get(current_country["name"], current_country["name"])
        folder_suffix = league_folder_map.get(league_name.strip(), league_name.strip())
        
        current_country["leagues"].append({
            "id": slugify(league_name),
            "name": league_name.strip(),
            "teams": teams,
            "folderName": f"{folder_prefix} - {folder_suffix}"
        })

print(json.dumps({"sections": sections}, indent=4, ensure_ascii=False))
