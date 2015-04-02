var global = {
	end_points:{
		base_url:"http://localhost:8888/baseballanalysis_backend/",
		teams:{
			performance:"getData.php"
		},
		players:{
			origin : "getPlayerOrigin.php",
			batting_performace : "getPlayerPerfromace.php"
		},
		salaries:{
			players : "getSalary.php"
		}
	},
	charts_loaded:false,
	leagues:[{name:'a'},{name:'b'}],
	teams:[{name:'ta1',league:'a'},{name:'ta2',league:'a'},{name:'tb1',league:'b'},{name:'tb2',league:'b'}]
};