var ans = function () {
	//sex 
	var a = 0;
	var qst_name = document.getElementsByName('qsex');
	for (var a=0;a < qst_name.length;a++) {
		var qst_id = qst_name[a].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans1= document.getElementById(qst_id).value;
				}
		}
	
	//marriage
	var b = 0;
	var qst_name = document.getElementsByName('qmarriage');
	for (var b=0; b < qst_name.length;b++) {
		var qst_id = qst_name[b].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans2 = document.getElementById(qst_id).value;
				}
		}

	//marriageyear
	var c = 0;
	var qst_name = document.getElementsByName('qmarriageyear');
	for (var c=0;c< qst_name.length;c++) {
		var qst_id = qst_name[c].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans3 = document.getElementById(qst_id).value;
				}
		}

	//family
	var d = 0;
	var qst_name = document.getElementsByName('qfamily');
	for (vard =0; d < qst_name.length;d++) {
		var qst_id = qst_name[d].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans4 = document.getElementById(qst_id).value;
				}
		}

	//path
	var path_arr = document.getElementsByName('path');
	//var e = 0; var e = path_arr.length;
	var path_ans1 = document.getElementById(path_arr[0].id).checked;
	var path_ans2 = document.getElementById(path_arr[1].id).checked;
	var path_ans3 = document.getElementById(path_arr[2].id).checked;
	var path_ans4 = document.getElementById(path_arr[3].id).checked;
	//var ans5 = document.getElementById(qst_id).value;
	
	//standard
	var standard_arr = document.getElementsByName('standard');
	//var f = 0; var f = standard_arr.length;
	var standard_ans1 = document.getElementById(standard_arr[0].id).checked;
	var standard_ans2 = document.getElementById(standard_arr[1].id).checked;
	var standard_ans3 = document.getElementById(standard_arr[2].id).checked;
	var standard_ans4 = document.getElementById(standard_arr[3].id).checked;
	//var ans6 = document.getElementById(qst_id).value;
	
	//applianceCheck
	var appChk_arr = document.getElementsByName('applianceCheck');
	//var g = 0; var g = appChk_arr.length;
	var appChk_ans1 = document.getElementById(appChk_arr[0].id).checked;
	var appChk_ans2 = document.getElementById(appChk_arr[1].id).checked;
	var appChk_ans3 = document.getElementById(appChk_arr[2].id).checked;
	var appChk_ans4 = document.getElementById(appChk_arr[3].id).checked;
	//var ans7 = document.getElementById(qst_id).value;
	
	//textArea
	var txtar_arr = document.getElementsByName('textArea');
	//var h = 0; var h = txtar_arr.length;
	var ans8 = txtar_arr[0].value;
	var ans9 = txtar_arr[1].value;

	//patternscore_1
	var j = 0;
	var qst_name = document.getElementsByName('patternscore_1');
	for (var j=0; j < qst_name.length;j++) {
		var qst_id = qst_name[j].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans10 = document.getElementById(qst_id).value;
				}
		}

	//patternscore_2
	var k = 0;
	var qst_name = document.getElementsByName('patternscore_2');
	for (var k=0; k < qst_name.length;k++) {
		var qst_id = qst_name[k].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans11 = document.getElementById(qst_id).value;
				}
		}

	//patternscore_3
	var l = 0;
	var qst_name = document.getElementsByName("patternscore_3");
	for (var l=0; l < qst_name.length;l++) {
		var qst_id = qst_name[l].id;
		var qst_chk = document.getElementById(qst_id).checked;
			if(qst_chk == true){
				var ans12 = document.getElementById(qst_id).value;
				}
		}

	//patternscore_4
	var m = 0;
	var qst_name = document.getElementsByName('patternscore_4');
		for (var m=0; m < qst_name.length;m++) {
			var qst_id = qst_name[m].id;
			var qst_chk = document.getElementById(qst_id).checked;
				if(qst_chk == true){
				var ans13 = document.getElementById(qst_id).value;
				}
		}

	var user_nm = document.getElementById("user").value;
	var date = document.getElementById("date").value;	

		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbyYD3M25s1aZxs49zEvYbPwheA59XZMtsf-hjRZ2lMNfSOhzLG-/exec",
			data: { 
					"device_width" : screen.width,
					"이름" : user_nm,
					"날짜" : date,
					"기본 질문": " ",
					"성별": ans1,
					"결혼여부":ans2,
					"결혼연차":ans3,
					"가족수":ans4,
					"가전제품 질문":" ",
					"구입경로1":path_ans1,
					"구입경로2":path_ans2,
					"구입경로3":path_ans3,
					"구입경로4":path_ans4,
					"구입기준1":standard_ans1,
					"구입기준2":standard_ans2,
					"구입기준3":standard_ans3,
					"구입기준4":standard_ans4,
					"누락가전1":appChk_ans1,
					"누락가전2":appChk_ans2,
					"누락가전3":appChk_ans3,
					"누락가전4":appChk_ans4,
					"기타의견1": ans8,
					"서비스 질문": " ",
					"가전별패턴": ans10,
					"제품별패턴": ans11,
					"연간패턴": ans12,
					"불편사항":ans13,
					"기타의견2": ans9
				  },
			type: "POST"
		});
}
