var season2 = ['spring','summer','fall','winter'];
var season1 = ['봄','여름','가을','겨울'];

var sendingsheet4 = function() {
	var i = 0;
		for(i=0;i<season2.length;i++){
			var user_nm = document.getElementById("user").value;
			var date = document.getElementById("date").value;			
			var season_nm = season1[i]; 
			var season_lv = document.getElementById(season2[i] + "_lv").value;
			var season_cs = document.getElementById(season2[i] + "_cs").value;
			var season_wt = document.getElementById(season2[i]).value;		

			console.log(season_nm);
			console.log(season_lv);
			console.log(season_cs);
			console.log(season_wt);

			$.ajax({
				url: "https://script.google.com/macros/s/AKfycbzSD1Q_n68PqdHIa41987ZP2RkbgN46_41o2vr0xN1-zTwnwzQ/exec",
				data: { 						
						"이름" : user_nm,
						"날짜1" : date,
						"계절1": season_nm,
						"누진세1": season_lv,
						"요금1": season_cs,
						"사용량1": season_wt 
					  },
				type: "POST"
			});			
		}
	ans();
}

