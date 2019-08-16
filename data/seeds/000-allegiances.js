
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('allegiances').del()
    .then(function () {
      // Inserts seed entries
      return knex('allegiances').insert([
        { allegiance_name: 'Las Vegas Raiders',sport: "NFL"},
        { allegiance_name: 'Miami Dolphins',sport: "NFL"},
        { allegiance_name: 'Tennessee Titans Fans', sport: "NFL"},
        { allegiance_name: 'Buffalo Bills', sport: "NFL"},
        { allegiance_name: 'New England Patriots Fans', sport: "NFL"},
        { allegiance_name: 'New York Jets Fans', sport: "NFL"},
        { allegiance_name: 'Denver Broncos Fans', sport: "NFL"},
        { allegiance_name: 'Kansas City Chiefs Fans', sport: "NFL"},
        { allegiance_name: 'LA Chargers Fans', sport: "NFL"},
        { allegiance_name: 'Las Vegas Raiders Fans', sport: "NFL"},
        { allegiance_name: 'Baltimore Ravens Fans', sport: "NFL"},
        { allegiance_name: 'Cincinatti Bengals Fans',  sport: "NFL"},
        { allegiance_name: 'Cleveland Browns Fans',  sport: "NFL"},
        { allegiance_name: 'Pittsburgh Steelers Fans',  sport: "NFL"},
        { allegiance_name: 'Houston Texans Fans',  sport: "NFL"},
        { allegiance_name: 'Indianapolis Colts Fans', sport: "NFL"},
        { allegiance_name: 'Jacksonville Jaguars Fans', sport: "NFL"},
        { allegiance_name: 'Dallas Cowboys Fans', sport: "NFL"},
        { allegiance_name: 'Washington Redskins Fans', sport: "NFL"},
        { allegiance_name: 'New York Giants Fans', sport: "NFL"},
        { allegiance_name: 'Arizona Cardinals Fans', sport: "NFL"},
        { allegiance_name: 'LA Rams Fans', sport: "NFL"},
        { allegiance_name: 'San Francisco 49ers Fans', sport: "NFL"},
        { allegiance_name: 'Seattle Seahawks Fans', sport: "NFL"},
        { allegiance_name: 'Chicago Bears Fans', sport: "NFL"},
        { allegiance_name: 'Detroit Lions Fans', sport: "NFL"},
        { allegiance_name: 'Green Bay Packers Fans', sport: "NFL"},
      ]);
    });
};
