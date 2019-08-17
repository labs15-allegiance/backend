
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('allegiances').insert([
        { allegiance_name: 'Las Vegas Raiders',sport: "NFL"},
        { allegiance_name: 'Miami Dolphins', sport: "NFL"},
        { allegiance_name: 'Tennessee Titans', sport: "NFL"},
        { allegiance_name: 'Buffalo Bills', sport: "NFL"},
        { allegiance_name: 'New England Patriots', sport: "NFL"},
        { allegiance_name: 'New York Jets', sport: "NFL"},
        { allegiance_name: 'Denver Broncos', sport: "NFL"},
        { allegiance_name: 'Kansas City Chiefs', sport: "NFL"},
        { allegiance_name: 'LA Chargers', sport: "NFL"},
        { allegiance_name: 'Baltimore Ravens', sport: "NFL"},
        { allegiance_name: 'Cincinatti Bengals', sport: "NFL"},
        { allegiance_name: 'Cleveland Browns', sport: "NFL"},
        { allegiance_name: 'Pittsburgh Steelers', sport: "NFL"},
        { allegiance_name: 'Houston Texans', sport: "NFL"},
        { allegiance_name: 'Indianapolis Colts', sport: "NFL"},
        { allegiance_name: 'Jacksonville Jaguars', sport: "NFL"},
        { allegiance_name: 'Dallas Cowboys', sport: "NFL"},
        { allegiance_name: 'Washington Redskins', sport: "NFL"},
        { allegiance_name: 'New York Giants', sport: "NFL"},
        { allegiance_name: 'Arizona Cardinals', sport: "NFL"},
        { allegiance_name: 'LA Rams', sport: "NFL"},
        { allegiance_name: 'San Francisco 49ers', sport: "NFL"},
        { allegiance_name: 'Seattle Seahawks', sport: "NFL"},
        { allegiance_name: 'Chicago Bears', sport: "NFL"},
        { allegiance_name: 'Detroit Lions', sport: "NFL"},
        { allegiance_name: 'Green Bay Packers', sport: "NFL"},
        { allegiance_name: 'Minnesota Vikings', sport: "NFL"},
        { allegiance_name: 'Atlanta Falcons', sport: "NFL"},
        { allegiance_name: 'Carolina Panthers', sport: "NFL"},
        { allegiance_name: 'New Orleans Saints', sport: "NFL"},
        { allegiance_name: 'Tampa Bay Buccaneers', sport: "NFL"},

      ]);
    
};
