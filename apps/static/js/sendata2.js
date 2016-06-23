var appliance = ['kitchen','living','season'];
var sendingsheet2 = function() {
	//청구내역 / 기본내역, 상세내역, 가전별 패턴
	//기본내역
	var date = document.getElementById("date").value;
	var user_nm = document.getElementById("user").value;
	var pricelevel = document.getElementById("price_level").value;
	var level = document.getElementById("level").value;
	var total_cost = document.getElementById("demo6_cost").value;
	var total_kw = document.getElementById("demo6").value;
	var number = document.getElementById("use_number").value;

	console.log(date);
	console.log(user_nm);

	//상세내역
	var bs_fee = document.getElementById("base").value;
	var elec_fee = document.getElementById("elec_level").value;
	var bs_total = document.getElementById("base_total").value;
	var tx = document.getElementById("vat").value;
	var fn = document.getElementById("fund").value;
	var totalfee = document.getElementById("demo6_cost2").value;

	//가전별 패턴
	//주방가전
	var kitchen_wt = document.getElementById("kitchen").value;
	var kitchen_sh = document.getElementById(appliance[0] + "_share").value;
	var kitchen_cs = document.getElementById(appliance[0] + "_cost").value;

	//생활가전
	var living_wt = document.getElementById(appliance[1]).value;
	var living_sh = document.getElementById(appliance[1] + "_share").value;
	var living_cs = document.getElementById(appliance[1] + "_cost").value;

	//계절가전
	var season_wt = document.getElementById("season").value;
	var season_sh = document.getElementById(appliance[2] + "_share").value;
	var season_cs = document.getElementById(appliance[2] + "_cost").value;

	console.log("sendingsheet2__ajax1__ " + "sendingsheet2");
	console.log("청구 금액 = " + totalfee);
	console.log("주방가전 전력 소비량 = " + kitchen_wt);
	console.log("계절가전 전력 소비량 = " + season_cs);

	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbySo9xhHDBWrLZXEPWmt_t3XaY7BBPy5F_Xo6Lpiq4oKgMGgd08/exec",
		data: { "날짜": date, 
				"이름": user_nm,
				"적용 전기요금": pricelevel,
				"누진세 단계": level,
				"전기요금": total_cost,
				"사용량": total_kw,
				"가전 제품수": number, 
				"기본요금": bs_fee,
				"전력량 요금": elec_fee,
				"복지할인": 0,
				"전기요금계": bs_total, 
				"부가가치세": tx, 
				"전력산업 발전요금": fn,
				"청구 금액 ": totalfee, 
				"주방가전 전력 소비량 ": kitchen_sh, 
				"주방가전 소비율": kitchen_sh,
				"주방가전 전기세": kitchen_cs,
				"생활가전 전력 소비량": living_wt, 
				"생활가전 소비율": living_sh,
				"생활가전 전기세": living_cs,					
				"계절가전 전력 소비량": season_wt, 
				"계절가전 소비율": season_sh,
				"계절가전 전기세 ": season_cs,	
			  },
		type: "POST"
	})
	var device_width = screen.width;
	if (device_width < Number('994')) {
		sendingsheet3;
	} 
};
