var sendingsheet = function() {
	var bye = "설문이 완료 되었습니다. 진심으로 감사드립니다."
	var byetext = document.getElementById("thankyou");
	byetext.setAttribute("style","thankyou");
	byetext.innerHTML = bye;
		 
	// sheet 전송대상 인자 순서  - 날짜, 이름, 가전이름, 가전유형, 가전개수, 사용주기, 사용시간, 전력소비량
	// 'id' / 'id' + "_name" / + "_pty" / + "_wk" / + "_wkd" / +"_watt"
	console.log("sendingsheet   " + "aaaa");

	var item = document.getElementsByName("item");
	var i=0;
	var lth = item.length;
	console.log("item.length " + lth);

	for(var i=0;i<lth;i++) {
		var itemvalue = document.getElementById(item[i].id + "_watt").value;
		console.log(item[i].id + " " + itemvalue)

		if(itemvalue > 0) {
			var item_id = item[i].id; 
			var user_name = document.getElementById("user_nm").value;
		 	 if (user_name == " ") {
				var user_nm = "No Name";
				console.log("No Name" + " 11");
		     } else {
				var user_nm = user_name;
				console.log(user_name + " 22");
			 }

			var date = document.getElementById("date").value;
			var item_name = document.getElementById(item_id + "_name").value;
			var pty = document.getElementById(item_id + "_pty");
			var item_pty = pty.options[pty.selectedIndex].text;
			var item_ppr = document.getElementById(item_id + "_wk").value;
			var item_ptm = document.getElementById(item_id + "_wkd").value;
			var item_watt = document.getElementById(item_id + "_watt").value || 0;

			$.ajax({
				url: "https://script.google.com/macros/s/AKfycbztaoUwRkXuc-eo5SBjS3m9z3WXULKNBfeJjL7IVrDFhlT4V4Ha/exec",
				data: { "날짜": date,
						"이름": user_nm,
						"아이디": item_id, 
						"제품명": item_name,
						"제품유형": item_pty,
						"사용주기": item_ppr,
						"사용시간": item_ptm, 
						"전력소비량" : item_watt
					  },
				type: "POST"
			})
		}
	}
	sendingsheet2();	
};
