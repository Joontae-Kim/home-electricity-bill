var sendingsheet3 = function() {
	var date = document.getElementById("date").value;
	var user_nm = document.getElementById("user").value;

	var top1_nm = document.getElementById("Array1_name").value;
	var top1_wt = document.getElementById("Array1_watt").value;
	var top1_cs = document.getElementById("Array1_cost").value;
	var top1_sh = document.getElementById("Array1_share").value;

	var top2_nm = document.getElementById("Array2_name").value;
	var top2_wt = document.getElementById("Array2_watt").value;
	var top2_cs = document.getElementById("Array2_cost").value;
	var top2_sh = document.getElementById("Array2_share").value;

	var top3_nm = document.getElementById("Array3_name").value;
	var top3_wt = document.getElementById("Array3_watt").value;
	var top3_cs = document.getElementById("Array3_cost").value;
	var top3_sh = document.getElementById("Array3_share").value;

	var top4_nm = document.getElementById("Array4_name").value;
	var top4_wt = document.getElementById("Array4_watt").value;
	var top4_cs = document.getElementById("Array4_cost").value;
	var top4_sh = document.getElementById("Array4_share").value;

	var top5_nm = document.getElementById("Array5_name").value;
	var top5_wt = document.getElementById("Array5_watt").value;
	var top5_cs = document.getElementById("Array5_cost").value;
	var top5_sh = document.getElementById("Array5_share").value;			

		$.ajax({
		url: "https://script.google.com/macros/s/AKfycbz5wTp9X8-eOqmOYdC5wp9xGRUbv5Ovu2l9_KWYx3BSMhwcqiB0/exec",
		data: { "이름": user_nm,
				"Date": date,
				"1위 제품명": top1_nm,
				"1위 소비량": top1_wt,
				"1위 전기세": top1_cs,
				"1위 소비율": top1_sh,
				"2위 제품명": top2_nm, 
				"2위 소비량": top2_cs,
				"2위 전기세": top2_cs,
				"2위 소비율": top2_sh,
				"3위 제품명": top3_nm, 
				"3위 소비량": top3_wt, 
				"3위 전기세": top3_wt,
				"3위 소비율": top3_sh, 
				"4위 제품명": top4_nm, 
				"4위 소비량": top4_wt,
				"4위 전기세": top4_cs,
				"4위 소비율": top4_sh, 
				"5위 제품명": top5_nm,
				"5위 소비량": top5_wt,					
				"5위 전기세": top5_wt, 
				"5위 소비율": top5_sh,
			  },
		type: "POST"
	});
	sendingsheet4();	
}

