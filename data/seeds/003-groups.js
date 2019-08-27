exports.seed = function(knex) {
	// Deletes ALL existing entries

	// Inserts seed entries
	return knex("groups").insert([
		{
			group_name: "Las Vegas Raiders Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 1,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/oakland_raiders.png"
		},
		{
			group_name: "Miami Dolphins Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 1,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/miami_dolphins.png"
		},
		{
			group_name: "Tennessee Titans Fans",
			privacy_setting: "public",
			location: "33014",
			creator_id: 2,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/tennessee_titans.png"
		},
		{
			group_name: "Buffalo Bills",
			privacy_setting: "public",
			location: "92704",
			creator_id: 3,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/buffalo_bills.png"
		},
		{
			group_name: "New England Patriots Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 3,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_england_patriots.png"
		},
		{
			group_name: "New York Jets Fans",
			privacy_setting: "public",
			location: "33014",
			creator_id: 4,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_jets.png"
		},
		{
			group_name: "Denver Broncos Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/denver_broncos.png"
		},
		{
			group_name: "Kansas City Chiefs Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/kansas_city_chiefs.png"
		},
		{
			group_name: "LA Chargers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 5,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_chargers.png"
		},
		{
			group_name: "Baltimore Ravens Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 5,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/baltimore_ravens.png"
		},
		{
			group_name: "Cincinatti Bengals Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 5,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/cincinnati_bengals.png"
		},
		{
			group_name: "Cleveland Browns Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 6,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_browns.png"
		},
		{
			group_name: "Pittsburgh Steelers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 6,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/pittsburgh_steelers.png"
		},
		{
			group_name: "Houston Texans Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 6,
			image:
				"https://cdn.bleacherreport.net/images/team_logos/328x328/houston_texans.png"
		},
		{
			group_name: "Indianapolis Colts Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 6,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/indianapolis_colts.png
		},
		{
			group_name: "Jacksonville Jaguars Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 7,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/jacksonville_jaguars.png"
		},
		{
			group_name: "Dallas Cowboys Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 7,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/dallas_cowboys.png"
		},
		{
			group_name: "Washington Redskins Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 7,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/washington_redskins.png"
		},
		{
			group_name: "New York Giants Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 1,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_giants.png"
		},
		{
			group_name: "Arizona Cardinals Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 1,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/arizona_cardinals.png"
		},
		{
			group_name: "LA Rams Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 1,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_rams.png"
		},
		{
			group_name: "San Francisco 49ers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 2,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/san_francisco_49ers.png"
		},
		{
			group_name: "Seattle Seahawks Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 2,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/seattle_seahawks.png"
		},
		{
			group_name: "Chicago Bears Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 3,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/chicago_bears.png"
		},
		{
			group_name: "Detroit Lions Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 3,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png"
		},
		{
			group_name: "Green Bay Packers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/green_bay_packers.png"
    },
    {
			group_name: "Minnesota Vikings Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/minnesota_vikings.png"
    },
    {
			group_name: "Atlanta Falcons Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/atlanta_falcons.png"
    },
    {
			group_name: "Carolina Panthers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/carolina_panthers.png"
    },
    {
			group_name: "New Orleans Saints Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/new_orleans_saints.png"
    },
    {
			group_name: "Tampa Bay Buccaneers Fans",
			privacy_setting: "public",
			location: "89103",
			creator_id: 4,
			image: "https://cdn.bleacherreport.net/images/team_logos/328x328/tampa_bay_buccaneers.png"
		},
	]);
};
