exports.seed = function(knex) {
	// Deletes ALL existing entries

	// Inserts seed entries
	return knex("allegiances").insert([
		// NFL TEAMS
		{
			allegiance_name: "Las Vegas Raiders",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/oakland_raiders.png"
		},
		{
			allegiance_name: "Miami Dolphins",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/miami_dolphins.png"
		},
		{
			allegiance_name: "Tennessee Titans",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/tennessee_titans.png"
		},
		{
			allegiance_name: "Buffalo Bills",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/buffalo_bills.png"
		},
		{
			allegiance_name: "New England Patriots",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_england_patriots.png"
		},
		{
			allegiance_name: "New York Jets",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_jets.png"
		},
		{
			allegiance_name: "Denver Broncos",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/denver_broncos.png"
		},
		{
			allegiance_name: "Kansas City Chiefs",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/kansas_city_chiefs.png"
		},
		{
			allegiance_name: "LA Chargers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_chargers.png"
		},
		{
			allegiance_name: "Baltimore Ravens",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/baltimore_ravens.png"
		},
		{
			allegiance_name: "Cincinatti Bengals",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/cincinnati_bengals.png"
		},
		{
			allegiance_name: "Cleveland Browns",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_browns.png"
		},
		{
			allegiance_name: "Pittsburgh Steelers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/pittsburgh_steelers.png"
		},
		{
			allegiance_name: "Houston Texans",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/houston_texans.png"
		},
		{
			allegiance_name: "Indianapolis Colts",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/indianapolis_colts.png"
		},
		{
			allegiance_name: "Jacksonville Jaguars",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/jacksonville_jaguars.png"
		},
		{
			allegiance_name: "Dallas Cowboys",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/dallas_cowboys.png"
		},
		{
			allegiance_name: "Washington Redskins",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/washington_redskins.png"
		},
		{
			allegiance_name: "New York Giants",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_giants.png"
		},
		{
			allegiance_name: "Arizona Cardinals",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/arizona_cardinals.png"
		},
		{
			allegiance_name: "LA Rams",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_rams.png"
		},
		{
			allegiance_name: "San Francisco 49ers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/san_francisco_49ers.png"
		},
		{
			allegiance_name: "Seattle Seahawks",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/seattle_seahawks.png"
		},
		{
			allegiance_name: "Chicago Bears",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/chicago_bears.png"
		},
		{
			allegiance_name: "Detroit Lions",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png"
		},
		{
			allegiance_name: "Green Bay Packers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/green_bay_packers.png"
		},
		{
			allegiance_name: "Minnesota Vikings",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/minnesota_vikings.png"
		},
		{
			allegiance_name: "Atlanta Falcons",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/atlanta_falcons.png"
		},
		{
			allegiance_name: "Carolina Panthers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/carolina_panthers.png"
		},
		{
			allegiance_name: "New Orleans Saints",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_orleans_saints.png"
		},
		{
			allegiance_name: "Tampa Bay Buccaneers",
			sport: "NFL",
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/tampa_bay_buccaneers.png"
		},
		//MLB Teams
		{ allegiance_name: "Atlanta Braves", sport: "MLB", image: "" },
		{ allegiance_name: "Miami Marlins", sport: "MLB", image: "" },
		{ allegiance_name: "New York Mets", sport: "MLB", image: "" },
		{ allegiance_name: "Philadelphia Phillies", sport: "MLB", image: "" },
		{ allegiance_name: "Washington Nationals", sport: "MLB", image: "" },
		{ allegiance_name: "Chicago Cubs", sport: "MLB", image: "" },
		{ allegiance_name: "Cincinnati Reds", sport: "MLB", image: "" },
		{ allegiance_name: "Milwaukee Brewers", sport: "MLB", image: "" },
		{ allegiance_name: "Pittsburgh Pirates", sport: "MLB", image: "" },
		{ allegiance_name: "St. Louis Cardinals", sport: "MLB", image: "" },
		{ allegiance_name: "Arizona Diamondbacks", sport: "MLB", image: "" },
		{ allegiance_name: "Colorado Rockies", sport: "MLB", image: "" },
		{ allegiance_name: "Los Angeles Dodgers", sport: "MLB", image: "" },
		{ allegiance_name: "San Diego Padres", sport: "MLB", image: "" },
		{ allegiance_name: "San Francisco Giants", sport: "MLB", image: "" },
		{ allegiance_name: "Baltimore Orioles", sport: "MLB", image: "" },
		{ allegiance_name: "Boston Red Sox", sport: "MLB", image: "" },
		{ allegiance_name: "New York Yankees", sport: "MLB", image: "" },
		{ allegiance_name: "Tampa Bay Rays", sport: "MLB", image: "" },
		{ allegiance_name: "Toronto Blue Jays", sport: "MLB", image: "" },
		{ allegiance_name: "Chicago White Sox", sport: "MLB", image: "" },
		{ allegiance_name: "Cleveland Indians", sport: "MLB", image: "" },
		{ allegiance_name: "Detroit Tigers", sport: "MLB", image: "" },
		{ allegiance_name: "Kansas City Royals", sport: "MLB", image: "" },
		{ allegiance_name: "Minnesota Twins", sport: "MLB", image: "" },
		{ allegiance_name: "Houston Astros", sport: "MLB", image: "" },
		{ allegiance_name: "Los Angeles Angels", sport: "MLB", image: "" },
		{ allegiance_name: "Oakland Athletics", sport: "MLB", image: "" },
		{ allegiance_name: "Seattle Mariners", sport: "MLB", image: "" },
		{ allegiance_name: "Texas Rangers", sport: "MLB", image: "" }
	]);
};
