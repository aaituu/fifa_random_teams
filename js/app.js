// ==========================================
// FC 26 TEAM RANDOMIZER - Complete Database
// ==========================================

// Direct mapping: display name -> logo filename (in assets/logos/)
const logoMap = {
    // ENGLAND - Premier League
    "Arsenal": "Arsenal FC.png",
    "Aston Villa": "Aston Villa.png",
    "Bournemouth": "AFC Bournemouth.png",
    "Brentford": "Brentford FC.png",
    "Brighton": "Brighton & Hove Albion.png",
    "Chelsea": "Chelsea FC.png",
    "Crystal Palace": "Crystal Palace.png",
    "Everton": "Everton FC.png",
    "Fulham": "Fulham FC.png",
    "Ipswich Town": "Ipswich.png",
    "Leicester City": "Leicester City.png",
    "Liverpool": "Liverpool FC.png",
    "Man City": "Manchester City.png",
    "Man Utd": "Manchester United.png",
    "Newcastle Utd": "Newcastle United.png",
    "Nottingham Forest": "Nottingham Forest.png",
    "Southampton": "Southampton FC.png",
    "Tottenham": "Tottenham Hotspur.png",
    "West Ham": "West Ham United.png",
    "Wolves": "Wolverhampton Wanderers.png",
    // ENGLAND - Championship
    "Leeds": "Leeds United.png",
    "Sunderland": "Sunderland AFC.png",
    "Burnley": "Burnley FC.png",
    // SPAIN - La Liga
    "Alavés": "Deportivo Alavés.png",
    "Athletic Club": "Athletic Bilbao.png",
    "Atlético Madrid": "Atlético de Madrid.png",
    "Barcelona": "FC Barcelona.png",
    "Celta Vigo": "Celta de Vigo.png",
    "Espanyol": "RCD Espanyol Barcelona.png",
    "Getafe": "Getafe CF.png",
    "Girona": "Girona FC.png",
    "Mallorca": "RCD Mallorca.png",
    "Osasuna": "CA Osasuna.png",
    "Rayo Vallecano": "Rayo Vallecano.png",
    "Real Betis": "Real Betis Balompié.png",
    "Real Madrid": "Real Madrid.png",
    "Real Sociedad": "Real Sociedad.png",
    "Sevilla": "Sevilla FC.png",
    "Valencia": "Valencia CF.png",
    "Villarreal": "Villarreal CF.png",
    // GERMANY - Bundesliga
    "Bayern München": "Bayern Munich.png",
    "Dortmund": "Borussia Dortmund.png",
    "Gladbach": "Borussia Mönchengladbach.png",
    "Frankfurt": "Eintracht Frankfurt.png",
    "Freiburg": "SC Freiburg.png",
    "Heidenheim": "1.FC Heidenheim 1846.png",
    "Hoffenheim": "TSG 1899 Hoffenheim.png",
    "RB Leipzig": "RB Leipzig.png",
    "Leverkusen": "Bayer 04 Leverkusen.png",
    "Mainz": "1.FSV Mainz 05.png",
    "St. Pauli": "FC St. Pauli.png",
    "Stuttgart": "VfB Stuttgart.png",
    "Union Berlin": "1.FC Union Berlin.png",
    "Werder Bremen": "SV Werder Bremen.png",
    "Wolfsburg": "VfL Wolfsburg.png",
    "Augsburg": "FC Augsburg.png",
    // GERMANY - 2. Bundesliga
    "Köln": "1.FC Köln.png",
    "Hamburg": "Hamburger SV.png",
    // ITALY - Serie A
    "AC Milan": "AC Milan.png",
    "Atalanta": "Atalanta BC.png",
    "Bologna": "Bologna FC 1909.png",
    "Cagliari": "Cagliari Calcio.png",
    "Como": "Como 1907.png",
    "Fiorentina": "ACF Fiorentina.png",
    "Genoa": "Genoa CFC.png",
    "Hellas Verona": "Hellas Verona.png",
    "Inter": "Inter Milan.png",
    "Juventus": "Juventus FC.png",
    "Latium": "SS Lazio.png",
    "Lecce": "US Lecce.png",
    "Parthenope": "SSC Napoli.png",
    "Parma": "Parma Calcio 1913.png",
    "Roma FC": "AS Roma.png",
    "Torino": "Torino FC.png",
    "Udinese": "Udinese Calcio.png",
    // FRANCE - Ligue 1
    "Angers": "Angers SCO.png",
    "Auxerre": "AJ Auxerre.png",
    "Monaco": "AS Monaco.png",
    "Brest": "Stade Brestois 29.png",
    "Le Havre": "Le Havre AC.png",
    "Lille": "LOSC Lille.png",
    "Lyon": "Olympique Lyon.png",
    "Marseille": "Olympique Marseille.png",
    "PSG": "Paris Saint-Germain.png",
    "Lens": "RC Lens.png",
    "Rennes": "Stade Rennais FC.png",
    "Strasbourg": "RC Strasbourg Alsace.png",
    "Toulouse": "FC Toulouse.png",
    "Metz": "FC Metz.png",
    "Lorient": "FC Lorient.png",
    "Nice": "OGC Nice.png",
    "Nantes": "FC Nantes.png",
    "Paris FC": "Paris FC.png",
    // PORTUGAL
    "Porto": "FC Porto.png",
    "Benfica": "SL Benfica.png",
    "Braga": "SC Braga.png",
    "Sporting CP": "Sporting CP.png",
    "Arouca": "FC Arouca.png",
    "Casa Pia": "Casa Pia AC.png",
    "Estoril": "GD Estoril Praia.png",
    "Estrela": "CF Estrela Amadora.png",
    "Famalicão": "FC Famalicão.png",
    "Gil Vicente": "Gil Vicente FC.png",
    "Moreirense": "Moreirense FC.png",
    "Nacional": "CD Nacional.png",
    "Rio Ave": "Rio Ave FC.png",
    "Santa Clara": "CD Santa Clara.png",
    "Vitória SC": "Vitória Guimarães SC.png",
    // NETHERLANDS
    "Ajax": "Ajax Amsterdam.png",
    "AZ": "AZ Alkmaar.png",
    "Feyenoord": "Feyenoord Rotterdam.png",
    "Fortuna Sittard": "Fortuna Sittard.png",
    "Go Ahead Eagles": "Go Ahead Eagles.png",
    "Groningen": "FC Groningen.png",
    "Heerenveen": "SC Heerenveen.png",
    "Heracles": "Heracles Almelo.png",
    "NAC Breda": "NAC Breda.png",
    "NEC Nijmegen": "NEC Nijmegen.png",
    "PEC Zwolle": "PEC Zwolle.png",
    "PSV": "PSV Eindhoven.png",
    "Sparta Rotterdam": "Sparta Rotterdam.png",
    "Twente": "Twente Enschede FC.png",
    "Utrecht": "FC Utrecht.png",
    // TURKEY
    "Alanyaspor": "Alanyaspor.png",
    "Antalyaspor": "Antalyaspor.png",
    "Beşiktaş": "Besiktas JK.png",
    "Fenerbahçe": "Fenerbahce.png",
    "Galatasaray": "Galatasaray.png",
    "Gaziantep": "Gaziantep FK.png",
    "Göztepe": "Göztepe.png",
    "Başakşehir": "Basaksehir FK.png",
    "Kasımpaşa": "Kasimpasa.png",
    "Kayserispor": "Kayserispor.png",
    "Konyaspor": "Konyaspor.png",
    "Rizespor": "Caykur Rizespor.png",
    "Samsunspor": "Samsunspor.png",
    "Trabzonspor": "Trabzonspor.png",
    // REST OF WORLD
    "Shakhtar Donetsk": "Shakhtar Donetsk.png",
    "Dynamo Kyiv": "Dynamo Kyiv.png",
    "PAOK": "PAOK Thessaloniki.png",
    "Olympiacos": "Olympiacos Piraeus.png",
    "Panathinaikos": "Panathinaikos FC.png",
    "AEK Athens": "AEK Athens.png",
    "Slavia Praha": "SK Slavia Prague.png",
    "Sparta Praha": "AC Sparta Prague.png",
    "Viktoria Plzeň": "FC Viktoria Plzen.png",
    "HNK Rijeka": "HNK Rijeka.png",
    "Dinamo Zagreb": "GNK Dinamo Zagreb.png",
    "Club Brugge": "Club Brugge KV.png",
    "Anderlecht": "RSC Anderlecht.png",
    "Genk": "KRC Genk.png",
    "Gent": "KAA Gent.png",
    "Celtic": "Celtic FC.png",
    "Rangers": "Rangers FC.png",
    "Hearts": "Heart of Midlothian FC.png",
    "Aberdeen": "Aberdeen FC.png",
    "Young Boys": "BSC Young Boys.png",
    "Basel": "FC Basel 1893.png",
    "Zurich": "FC Zürich.png",
    "Lugano": "FC Lugano.png",
    "RB Salzburg": "Red Bull Salzburg.png",
    "Sturm Graz": "SK Sturm Graz.png",
    "Rapid Wien": "Rapid Vienna.png",
    "FC Copenhagen": "FC Copenhagen.png",
    "Brøndby": "Bröndby IF.png",
    "Midtjylland": "FC Midtjylland.png",
    "Legia": "Legia Warszawa.png",
    "Lech Poznan": "Lech Poznan.png",
    "Rakow": "Raków Częstochowa.png",
    "Bodø/Glimt": "FK BodøGlimt.png",
    "Molde": "Molde FK.png",
    "Rosenborg": "Rosenborg BK.png",
    "Malmö": "Malmö FF.png",
    "AIK": "AIK.png",
    "Djurgården": "Djurgårdens IF.png",
    "FCSB": "FCSB.png",
    "CFR Cluj": "CFR Cluj.png",
    "Rapid Bucuresti": "FC Rapid 1923.png",
    // ФЕРЕНЦ / прочие Rest of World
    "Ferencváros": "Ferencvaros TC.png",
};

const teamsData = {
    "sections": [
        {
            "id": "leagues",
            "name": "Leagues",
            "countries": [
                {
                    "id": "england", "name": "England",
                    "leagues": [
                        { "id": "premier-league", "name": "Premier League", "teams": ["Arsenal","Aston Villa","Bournemouth","Brentford","Brighton","Chelsea","Crystal Palace","Everton","Fulham","Ipswich Town","Leicester City","Liverpool","Man City","Man Utd","Newcastle Utd","Nottingham Forest","Southampton","Tottenham","West Ham","Wolves"] },
                        { "id": "championship", "name": "Championship", "teams": ["Blackburn","Bristol City","Burnley","Cardiff","Coventry","Derby County","Hull","Leeds","Luton","Middlesbrough","Millwall","Norwich","Oxford Utd","Plymouth","Portsmouth","Preston","QPR","Sheffield Utd","Sheffield Wed","Stoke","Sunderland","Swansea","Watford","West Brom"] },
                        { "id": "league-one", "name": "League One", "teams": ["Barnsley","Birmingham City","Blackpool","Bolton","Bristol Rovers","Burton","Cambridge","Charlton","Crawley Town","Exeter","Huddersfield","Leyton Orient","Lincoln City","Mansfield","Northampton","Peterborough","Reading","Rotherham","Shrewsbury","Stevenage","Stockport","Wigan","Wrexham","Wycombe"] },
                        { "id": "league-two", "name": "League Two", "teams": ["Accrington","AFC Wimbledon","Barrow","Bromley","Carlisle","Cheltenham","Chesterfield","Colchester","Crewe Alexandra","Doncaster","Fleetwood","Gillingham","Grimsby","Harrogate","MK Dons","Morecambe","Newport County","Notts County","Port Vale","Salford City","Swindon","Tranmere","Walsall"] }
                    ]
                },
                {
                    "id": "spain", "name": "Spain",
                    "leagues": [
                        { "id": "la-liga", "name": "La Liga", "teams": ["Alavés","Athletic Club","Atlético Madrid","Barcelona","Celta Vigo","Espanyol","Getafe","Girona","Las Palmas","Leganés","Mallorca","Osasuna","Rayo Vallecano","Real Betis","Real Madrid","Real Sociedad","Sevilla","Valencia","Valladolid","Villarreal"] },
                        { "id": "la-liga-2", "name": "La Liga 2", "teams": ["Albacete","Almería","Burgos","Cádiz","Castellón","Córdoba","Deportivo La Coruña","Eibar","Elche","Eldense","Ferrol","Granada","Huesca","Levante","Mirandés","Oviedo","Racing Santander","Sporting Gijón","Tenerife","Zaragoza"] }
                    ]
                },
                {
                    "id": "germany", "name": "Germany",
                    "leagues": [
                        { "id": "bundesliga", "name": "Bundesliga", "teams": ["Augsburg","Bayern München","Bochum","Dortmund","Gladbach","Frankfurt","Freiburg","Heidenheim","Hoffenheim","Holstein Kiel","RB Leipzig","Leverkusen","Mainz","St. Pauli","Stuttgart","Union Berlin","Werder Bremen","Wolfsburg"] },
                        { "id": "2.-bundesliga", "name": "2. Bundesliga", "teams": ["Darmstadt","Elversberg","Düsseldorf","Fürth","Hamburg","Hannover","Hertha BSC","Kaiserslautern","Karlsruhe","Köln","Magdeburg","Münster","Nürnberg","Paderborn","Regensburg","Schalke 04","Ulm"] },
                        { "id": "3.-liga", "name": "3. Liga", "teams": ["Aue","Bielefeld","Cottbus","Dresden","Essen","Hannover II","Ingolstadt","Viktoria Köln","Mannheim","Osnabrück","Rostock","Saarbrücken","Sandhausen","Stuttgart II","Unterhaching","Verl","Wiesbaden"] }
                    ]
                },
                {
                    "id": "italy", "name": "Italy",
                    "leagues": [
                        { "id": "serie-a", "name": "Serie A", "teams": ["AC Milan","Atalanta","Bologna","Cagliari","Como","Empoli","Fiorentina","Genoa","Hellas Verona","Inter","Juventus","Latium","Lecce","Monza","Parthenope","Parma","Roma FC","Torino","Udinese","Venezia"] },
                        { "id": "serie-b", "name": "Serie B", "teams": ["Bari","Brescia","Carrarese","Catanzaro","Cesena","Cittadella","Cosenza","Cremonese","Frosinone","Juve Stabia","Mantova","Modena","Palermo","Pisa","Reggiana","Salernitana","Sampdoria","Sassuolo","Spezia","Südtirol"] }
                    ]
                },
                {
                    "id": "france", "name": "France",
                    "leagues": [
                        { "id": "ligue-1", "name": "Ligue 1", "teams": ["Angers","Auxerre","Monaco","Brest","Le Havre","Lille","Montpellier","Nantes","Nice","Lyon","Marseille","PSG","Lens","Reims","Rennes","Saint-Étienne","Strasbourg","Toulouse"] },
                        { "id": "ligue-2", "name": "Ligue 2", "teams": ["Ajaccio","Amiens","Annecy","Bastia","Caen","Clermont","Dunkerque","Grenoble","Guingamp","Laval","Lorient","Martigues","Metz","Paris FC","Pau","Red Star","Rodez","Troyes"] }
                    ]
                },
                {
                    "id": "usa", "name": "USA / Canada",
                    "leagues": [
                        { "id": "mls", "name": "MLS", "teams": ["Atlanta Utd","Austin","Charlotte","Chicago","Cincinnati","Colorado","Columbus","D.C. Utd","Dallas","Houston","Inter Miami","LA Galaxy","LAFC","Minnesota","Montréal","Nashville","New England","NY Red Bulls","NYCFC","Orlando","Philadelphia","Portland","Salt Lake","San Jose","Seattle","Sporting KC","St. Louis","Toronto","Vancouver"] }
                    ]
                },
                {
                    "id": "saudi-arabia", "name": "Saudi Arabia",
                    "leagues": [
                        { "id": "saudi-pro-league", "name": "Saudi Pro League", "teams": ["Al Ahli","Al Ettifaq","Al Fateh","Al Fayha","Al Hilal","Al Ittihad","Al Khaleej","Al Kholood","Al Nassr","Al Okhdood","Al Qadsiah","Al Raed","Al Riyadh","Al Shabab","Al Taawoun","Al Wehda","Damac","Oruba"] }
                    ]
                },
                {
                    "id": "portugal", "name": "Portugal",
                    "leagues": [
                        { "id": "liga-portugal", "name": "Liga Portugal", "teams": ["Arouca","Benfica","Boavista","Braga","Casa Pia","Estoril","Estrela","Famalicão","Farense","Gil Vicente","Moreirense","Nacional","Porto","Rio Ave","Santa Clara","Sporting CP","Vitória SC","Vilafranquense"] }
                    ]
                },
                {
                    "id": "netherlands", "name": "Netherlands",
                    "leagues": [
                        { "id": "eredivisie", "name": "Eredivisie", "teams": ["Ajax","Almere","AZ","Feyenoord","Fortuna Sittard","Go Ahead Eagles","Groningen","Heerenveen","Heracles","NAC Breda","NEC Nijmegen","PEC Zwolle","PSV","RKC Waalwijk","Sparta Rotterdam","Twente","Utrecht","Willem II"] }
                    ]
                },
                {
                    "id": "turkey", "name": "Turkey",
                    "leagues": [
                        { "id": "super-lig", "name": "Süper Lig", "teams": ["Adana Demirspor","Alanyaspor","Antalyaspor","Beşiktaş","Bodrum","Fenerbahçe","Galatasaray","Gaziantep","Göztepe","Hatayspor","Başakşehir","İstanbulspor","Kasımpaşa","Kayserispor","Konyaspor","Rizespor","Samsunspor","Sivasspor","Trabzonspor"] }
                    ]
                },
                {
                    "id": "argentina", "name": "Argentina",
                    "leagues": [
                        { "id": "liga-profesional", "name": "Liga Profesional", "teams": ["Argentinos Jrs","Atlético Tucumán","Banfield","Barracas","Belgrano","Boca Juniors","Central Córdoba","Defensa","Deportivo Riestra","Estudiantes","Gimnasia","Godoy Cruz","Huracán","Independiente","Independiente Rivadavia","Lanús","Newell's","Platense","Racing","River Plate","Rosario Central","San Lorenzo","Sarmiento","Talleres","Tigre","Unión","Vélez Sarsfield","Instituto"] }
                    ]
                }
            ]
        },
        {
            "id": "national",
            "name": "National Teams",
            "teams": ["Argentina","Austria","Belgium","Brazil","Croatia","Czech Republic","Denmark","England","Finland","France","Germany","Ghana","Greece","Hungary","Iceland","Ireland","Italy","Mexico","Morocco","Netherlands","New Zealand","Northern Ireland","Norway","Poland","Portugal","Qatar","Romania","Scotland","Spain","Sweden","Switzerland","Ukraine","USA","Wales"]
        },
        {
            "id": "row",
            "name": "Rest of World",
            "teams": ["Shakhtar Donetsk","Dynamo Kyiv","PAOK","Olympiacos","Panathinaikos","AEK Athens","Ferencváros","Slavia Praha","Sparta Praha","Viktoria Plzeň","HNK Rijeka","Dinamo Zagreb","Club Brugge","Anderlecht","Genk","Gent","Celtic","Rangers","Hearts","Aberdeen","Young Boys","Basel","Zurich","Lugano","RB Salzburg","Sturm Graz","Rapid Wien","FC Copenhagen","Brøndby","Midtjylland","Legia","Lech Poznan","Rakow","Bodø/Glimt","Molde","Rosenborg","Malmö","AIK","Djurgården","FCSB","CFR Cluj","Rapid Bucuresti","Shamrock Rovers","Derry City"]
        }
    ]
};

// ==========================================
// UI Logic
// ==========================================
const sectionSelect = document.getElementById('section-select');
const countrySelect = document.getElementById('country-select');
const leagueSelect = document.getElementById('league-select');
const countryGroup = document.getElementById('country-group');
const leagueGroup = document.getElementById('league-group');
const randomizeBtn = document.getElementById('randomize-btn');
const teamCard = document.getElementById('team-card');
const displayTeam = document.getElementById('display-team');
const displayLeague = document.getElementById('display-league');

let filteredTeams = [];

function init() {
    setupEventListeners();
    updateFilteredTeams();
}

function setupEventListeners() {
    sectionSelect.addEventListener('change', handleSectionChange);
    countrySelect.addEventListener('change', handleCountryChange);
    leagueSelect.addEventListener('change', updateFilteredTeams);
    randomizeBtn.addEventListener('click', startRandomizer);
}

function handleSectionChange() {
    const section = sectionSelect.value;
    countrySelect.innerHTML = '<option value="any">Any Country</option>';
    leagueSelect.innerHTML = '<option value="any">Any League</option>';

    if (section === 'leagues') {
        countryGroup.style.display = 'block';
        leagueGroup.style.display = 'block';
        const leaguesSection = teamsData.sections.find(s => s.id === 'leagues');
        leaguesSection.countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.id;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });
    } else {
        countryGroup.style.display = 'none';
        leagueGroup.style.display = 'none';
    }
    updateFilteredTeams();
}

function handleCountryChange() {
    const section = sectionSelect.value;
    const countryId = countrySelect.value;
    leagueSelect.innerHTML = '<option value="any">Any League</option>';

    if (section === 'leagues' && countryId !== 'any') {
        const leaguesSection = teamsData.sections.find(s => s.id === 'leagues');
        const country = leaguesSection.countries.find(c => c.id === countryId);
        if (country) {
            country.leagues.forEach(league => {
                const option = document.createElement('option');
                option.value = league.id;
                option.textContent = league.name;
                leagueSelect.appendChild(option);
            });
        }
    }
    updateFilteredTeams();
}

function updateFilteredTeams() {
    const sectionId = sectionSelect.value;
    const countryId = countrySelect.value;
    const leagueId = leagueSelect.value;
    let teams = [];

    if (sectionId === 'all') {
        teamsData.sections.forEach(section => {
            if (section.id === 'leagues') {
                section.countries.forEach(country => {
                    country.leagues.forEach(league => {
                        league.teams.forEach(t => teams.push({ name: t, league: league.name }));
                    });
                });
            } else {
                section.teams.forEach(t => teams.push({ name: t, league: section.name }));
            }
        });
    } else if (sectionId === 'leagues') {
        const leaguesSection = teamsData.sections.find(s => s.id === 'leagues');
        leaguesSection.countries.forEach(country => {
            if (countryId === 'any' || country.id === countryId) {
                country.leagues.forEach(league => {
                    if (leagueId === 'any' || league.id === leagueId) {
                        league.teams.forEach(t => teams.push({ name: t, league: league.name }));
                    }
                });
            }
        });
    } else {
        const section = teamsData.sections.find(s => s.id === sectionId);
        if (section) {
            section.teams.forEach(t => teams.push({ name: t, league: section.name }));
        }
    }
    filteredTeams = teams;
}

function getRandomTeam() {
    if (filteredTeams.length === 0) return null;
    return filteredTeams[Math.floor(Math.random() * filteredTeams.length)];
}

function startRandomizer() {
    if (filteredTeams.length === 0) { alert("No teams match your selection!"); return; }

    randomizeBtn.disabled = true;
    teamCard.classList.remove('hidden', 'result');
    document.body.classList.add('shuffling');

    const shuffleDuration = 2000;
    const interval = 80;
    const steps = shuffleDuration / interval;
    let currentStep = 0;

    const shuffleInterval = setInterval(() => {
        const tempTeam = getRandomTeam();
        if (tempTeam) {
            displayTeam.textContent = tempTeam.name;
            displayLeague.textContent = tempTeam.league;
        }
        currentStep++;
        if (currentStep >= steps) {
            clearInterval(shuffleInterval);
            finishRandomizer();
        }
    }, interval);
}

function getLogoPath(teamName) {
    // Direct map lookup
    if (logoMap[teamName]) {
        return 'assets/logos/' + logoMap[teamName];
    }
    // Fallback: try exact filename match
    return 'assets/logos/' + teamName + '.png';
}

function finishRandomizer() {
    const finalTeam = getRandomTeam();
    if (!finalTeam) return;

    displayTeam.textContent = finalTeam.name;
    displayLeague.textContent = finalTeam.league;

    const logoContainer = document.querySelector('.club-placeholder');
    const logoPath = getLogoPath(finalTeam.name);
    const img = new Image();

    img.onload = () => {
        logoContainer.innerHTML = `<img src="${logoPath}" alt="${finalTeam.name}" style="width:100%;height:100%;object-fit:contain;animation:fadeIn 0.4s ease;">`;
        logoContainer.style.background = 'transparent';
        logoContainer.style.border = 'none';
    };
    img.onerror = () => {
        logoContainer.innerHTML = '⚽';
        logoContainer.style.background = 'rgba(255,255,255,0.05)';
        logoContainer.style.border = '2px solid rgba(255,255,255,0.1)';
    };
    img.src = logoPath;

    document.body.classList.remove('shuffling');
    teamCard.classList.add('result');
    randomizeBtn.disabled = false;

    teamCard.style.transform = 'scale(1.05)';
    setTimeout(() => { teamCard.style.transform = 'scale(1)'; }, 200);
}

init();
