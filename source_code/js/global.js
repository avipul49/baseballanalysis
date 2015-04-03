var global = {
	end_points:{
		base_url:"http://localhost:8080/",
		teams:{
			performance:"getTeamPerformance"
		},
		players:{
			origin : "getPlayerOrigin",
			batting_performace : "getPlayerPerfromace.php"
		},
		salaries:{
			players : "getPlayerSalaries"
		}
	},
	charts_loaded:false,
	leagues:[{name:'National League',lgId:'NL',ticked:true},{name:'American League',lgId:'AL',ticked:true}],
	teams:[
		{teamId:'TOR',	lgId:'AL',	name:'Toronto Blue Jays'},
		{teamId:'CHN',	lgId:'NL',	name:'Chicago Cubs'},
		{teamId:'MIL',	lgId:'NL',	name:'Milwaukee Brewers'},
		{teamId:'NYN',	lgId:'NL',	name:'New York Mets'},
		{teamId:'PHI',	lgId:'NL',	name:'Philadelphia Phillies'},
		{teamId:'CHA',	lgId:'AL',	name:'Chicago White Sox'},
		{teamId:'HOU',	lgId:'NL',	name:'Houston Astros'},
		{teamId:'DET',	lgId:'AL',	name:'Detroit Tigers'},
		{teamId:'OAK',	lgId:'AL',	name:'Oakland Athletics'},
		{teamId:'CHA',	lgId:'AL',	name:'Chicago Cubs'},
		{teamId:'TBA',	lgId:'AL',	name:'Tampa Bay Devil Rays'},
		{teamId:'CAL',	lgId:'AL',	name:'California Angels'},
		{teamId:'CIN',	lgId:'NL',	name:'Cincinnati Reds'},
		{teamId:'SLN',	lgId:'NL',	name:'St. Louis Cardinals'},
		{teamId:'SEA',	lgId:'AL',	name:'Seattle Mariners'},
		{teamId:'HOU',	lgId:'AL',	name:'Houston Astros'},
		{teamId:'CHN',	lgId:'NL',	name:'Chicago White Sox'},
		{teamId:'ANA',	lgId:'AL',	name:'Anaheim Angels'},
		{teamId:'SFN',	lgId:'NL',	name:'San Francisco Giants'},
		{teamId:'KCA',	lgId:'AL',	name:'Kansas City Royals'},
		{teamId:'MIN',	lgId:'AL',	name:'Minnesota Twins'},
		{icon:'<img src="images/NYA.svg"/>', teamId:'NYA',	lgId:'AL',	name:'New York Yankees'},
		{teamId:'MIA',	lgId:'NL',	name:'Miami Marlins'},
		{teamId:'LAN',	lgId:'NL',	name:'Los Angeles Dodgers'},
		{teamId:'TBA',	lgId:'AL',	name:'Tampa Bay Rays'},
		{teamId:'TEX',	lgId:'AL',	name:'Texas Rangers'},
		{teamId:'MON',	lgId:'NL',	name:'Montreal Expos'},
		{teamId:'ML4',	lgId:'AL',	name:'Milwaukee Brewers'},
		{teamId:'ARI',	lgId:'NL',	name:'Arizona Diamondbacks'},
		{teamId:'COL',	lgId:'NL',	name:'Colorado Rockies'},
		{teamId:'PIT',	lgId:'NL',	name:'Pittsburgh Pirates'},
		{teamId:'WAS',	lgId:'NL',	name:'Washington Nationals'},
		{teamId:'CLE',	lgId:'AL',	name:'Cleveland Indians'},
		{teamId:'LAA',	lgId:'AL',	name:'Los Angeles Angels of Anaheim'},
		{teamId:'FLO',	lgId:'NL',	name:'Florida Marlins'},
		{teamId:'SDN',	lgId:'NL',	name:'San Diego Padres'},
		{teamId:'ATL',	lgId:'NL',	name:'Atlanta Braves'},
		{teamId:'BAL',	lgId:'AL',	name:'Baltimore Orioles'}]
	};