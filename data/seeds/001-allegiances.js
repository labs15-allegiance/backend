
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('allegiances').insert([
        // NFL TEAMS
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
        //MLB Teams
        { allegiance_name: 'Atlanta Braves', sport: "MLB"},
        { allegiance_name: 'Miami Marlins', sport: "MLB"},
        { allegiance_name: 'New York Mets', sport: "MLB"},
        { allegiance_name: 'Philadelphia Phillies', sport: "MLB"},
        { allegiance_name: 'Washington Nationals', sport: "MLB"},
        { allegiance_name: 'Chicago Cubs', sport: "MLB"},
        { allegiance_name: 'Cincinnati Reds', sport: "MLB"},
        { allegiance_name: 'Milwaukee Brewers', sport: "MLB"},
        { allegiance_name: 'Pittsburgh Pirates', sport: "MLB"},
        { allegiance_name: 'St. Louis Cardinals', sport: "MLB"},
        { allegiance_name: 'Arizona Diamondbacks', sport: "MLB"},
        { allegiance_name: 'Colorado Rockies', sport: "MLB"},
        { allegiance_name: 'Los Angeles Dodgers', sport: "MLB"},
        { allegiance_name: 'San Diego Padres', sport: "MLB"},
        { allegiance_name: 'San Francisco Giants', sport: "MLB"},
        { allegiance_name: 'Baltimore Orioles', sport: "MLB"},
        { allegiance_name: 'Boston Red Sox', sport: "MLB"},
        { allegiance_name: 'New York Yankees', sport: "MLB"},
        { allegiance_name: 'Tampa Bay Rays', sport: "MLB"},
        { allegiance_name: 'Toronto Blue Jays', sport: "MLB"},
        { allegiance_name: 'Chicago White Sox', sport: "MLB"},
        { allegiance_name: 'Cleveland Indians', sport: "MLB"},
        { allegiance_name: 'Detroit Tigers', sport: "MLB"},
        { allegiance_name: 'Kansas City Royals', sport: "MLB"},
        { allegiance_name: 'Minnesota Twins', sport: "MLB"},
        { allegiance_name: 'Houston Astros', sport: "MLB"},
        { allegiance_name: 'Los Angeles Angels', sport: "MLB"},
        { allegiance_name: 'Oakland Athletics', sport: "MLB"},
        { allegiance_name: 'Seattle Mariners', sport: "MLB"},
        { allegiance_name: 'Texas Rangers', sport: "MLB"}


      ]);
    
};
