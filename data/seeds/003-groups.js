
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('groups').insert([
        { group_name: 'Las Vegas Raiders Fans', privacy_setting: 'public', location: 89103, creator_id: 1},
        { group_name: 'Miami Dolphins Fans', privacy_setting: 'public', location: 89103, creator_id: 1},
        { group_name: 'Tennessee Titans Fans', privacy_setting: 'public', location: 33014, creator_id: 2},
        { group_name: 'Buffalo Bills', privacy_setting: 'public', location: 92704, creator_id: 3},
        { group_name: 'New England Patriots Fans', privacy_setting: 'public', location: 89103, creator_id: 3},
        { group_name: 'New York Jets Fans', privacy_setting: 'public', location: 33014, creator_id: 4},
        { group_name: 'Denver Broncos Fans', privacy_setting: 'public', location: 89103, creator_id: 4},
        { group_name: 'Kansas City Chiefs Fans', privacy_setting: 'public', location: 89103, creator_id: 4},
        { group_name: 'LA Chargers Fans', privacy_setting: 'public', location: 89103, creator_id: 5},
        { group_name: 'Baltimore Ravens Fans', privacy_setting: 'public', location: 89103, creator_id: 5},
        { group_name: 'Cincinatti Bengals Fans', privacy_setting: 'public', location: 89103, creator_id: 5},
        { group_name: 'Cleveland Browns Fans', privacy_setting: 'public', location: 89103, creator_id: 6},
        { group_name: 'Pittsburgh Steelers Fans', privacy_setting: 'public', location: 89103, creator_id: 6},
        { group_name: 'Houston Texans Fans', privacy_setting: 'public', location: 89103, creator_id: 6},
        { group_name: 'Indianapolis Colts Fans', privacy_setting: 'public', location: 89103, creator_id: 6},
        { group_name: 'Jacksonville Jaguars Fans', privacy_setting: 'public', location: 89103, creator_id: 7},
        { group_name: 'Dallas Cowboys Fans', privacy_setting: 'public', location: 89103, creator_id: 7},
        { group_name: 'Washington Redskins Fans', privacy_setting: 'public', location: 89103, creator_id: 7},
        { group_name: 'New York Giants Fans', privacy_setting: 'public', location: 89103, creator_id: 1},
        { group_name: 'Arizona Cardinals Fans', privacy_setting: 'public', location: 89103, creator_id: 1},
        { group_name: 'LA Rams Fans', privacy_setting: 'public', location: 89103, creator_id: 1},
        { group_name: 'San Francisco 49ers Fans', privacy_setting: 'public', location: 89103, creator_id: 2},
        { group_name: 'Seattle Seahawks Fans', privacy_setting: 'public', location: 89103, creator_id: 2},
        { group_name: 'Chicago Bears Fans', privacy_setting: 'public', location: 89103, creator_id: 3},
        { group_name: 'Detroit Lions Fans', privacy_setting: 'public', location: 89103, creator_id: 3},
        { group_name: 'Green Bay Packers Fans', privacy_setting: 'public', location: 89103, creator_id: 4},
        
      ]);
    
};
