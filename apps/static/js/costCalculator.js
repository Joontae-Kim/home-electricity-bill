// demo6의 6단계 전기요금 계산 단계를 제외한 가전군, 계절별 전기요금 출력 && demo6의 요금 출력 
var consumeCost = function(someplace) {
     var sum =  document.getElementById(someplace).value;
  console.log("consumeCost__deom6_value__  " + sum);
     var place_cost =  document.getElementById(someplace + "_cost");
     var place_display = document.getElementById(someplace + "_cost_display");    

     var obj1 = document.getElementById("housetype1"); // 6층 미만 아파트
     var obj2 = document.getElementById("housetype2"); // 6층 이상 아파트
     var obj3 = document.getElementById("housetype3"); // 단독 및 연립주택

     var pricelevel_value = document.getElementById("price_level").value;

      if(obj1.checked == true || obj3.checked == true) {
            var obj_value = obj1.value;
            console.log("if절__start__  " + obj_value);
            listup = usetypes["usetype_" + obj_value + "_electric_fee"];
            listup2 = usetypes["usetype_" + obj_value + "_base"];

             var elec_level1 = Number(listup[0].ConsumeFee);    
             var elec_level2 = Number(listup[1].ConsumeFee);
             var elec_level3 = Number(listup[2].ConsumeFee);
             var elec_level4 = Number(listup[3].ConsumeFee);
             var elec_level5 = Number(listup[4].ConsumeFee);
             var elec_level6 = Number(listup[5].ConsumeFee);

             var base_level1 = Number(listup2[0].ConsumeFee);
             var base_level2 = Number(listup2[1].ConsumeFee);
             var base_level3 = Number(listup2[2].ConsumeFee);
             var base_level4 = Number(listup2[3].ConsumeFee);
             var base_level5 = Number(listup2[4].ConsumeFee);
             var base_level6 = Number(listup2[5].ConsumeFee);    
          } 
            else if(obj2.checked == true) {
              var obj_value = obj2.value;              
              console.log("if절__start__  " + obj_value);              
              listup = usetypes["usetype_" + obj_value + "_electric_fee"];
              listup2 = usetypes["usetype_" + obj_value + "_base"];

               var elec_level1 = Number(listup[0].ConsumeFee);    
               var elec_level2 = Number(listup[1].ConsumeFee);
               var elec_level3 = Number(listup[2].ConsumeFee);
               var elec_level4 = Number(listup[3].ConsumeFee);
               var elec_level5 = Number(listup[4].ConsumeFee);
               var elec_level6 = Number(listup[5].ConsumeFee);

               var base_level1 = Number(listup2[0].ConsumeFee);
               var base_level2 = Number(listup2[1].ConsumeFee);
               var base_level3 = Number(listup2[2].ConsumeFee);
               var base_level4 = Number(listup2[3].ConsumeFee);
               var base_level5 = Number(listup2[4].ConsumeFee);
               var base_level6 = Number(listup2[5].ConsumeFee);        
             }   
  
         var tax = Number(0.1);
         var fund_tax = Number(0.037);
  
          console.log("if절__start__sum__  " + obj_value + sum);
  
          if (sum < 10 ) {
            fist_level = Number(0);
            first_cost = Number(0);
            secon_cost = Number(0);
            third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
            fourth_cost = Math.ceil(Number(0));
            fifth_cost = Math.floor(Number(0))*10;
            placecost_value = Math.floor(1000);
            place_cost.value = (placecost_value);

            } else if (sum < 101) {
                fist_level = Number(1);
                first_cost = base_level1;
                secon_cost = Number(0);
                third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                fourth_cost = Math.ceil(third_cost * tax);
                fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                placecost_value = Math.floor(1000);
                place_cost.value = (placecost_value);
              
                } else if (sum < 201) {
                    fist_level = Number(2);
                    first_cost = base_level2;
                    secon_cost1 = Number(Number(100) * elec_level1);
                    secon_cost2 = Number((sum - Number(100))* elec_level2);
                    secon_cost = Math.ceil(Number(secon_cost1) + Number(secon_cost2));
                    third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                    fourth_cost = Math.ceil(third_cost * tax);
                    fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                    placecost_value = Math.floor((Number(third_cost) + Number(fourth_cost) + Number(fifth_cost))/10)*10;
                    place_cost.value = (placecost_value);

                  } else if (sum < 301) {
                      fist_level = Number(3);
                      first_cost = base_level3;
                      secon_cost1 = Number(Number(100) * elec_level1);
                      secon_cost2 = Number(Number(100) * elec_level2);
                      secon_cost3 = Number((sum - Number(200))* elec_level3);;  
                      secon_cost = Math.ceil(Number(secon_cost1) + Number(secon_cost2) + Number(secon_cost3));
                      third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                      fourth_cost = Math.ceil(third_cost * tax);
                      fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                      placecost_value = Math.floor((Number(third_cost) + Number(fourth_cost) + Number(fifth_cost))/10)*10;
                      place_cost.value = parseFloat(placecost_value);

                      } else if (sum < 401) {
                          fist_level = Number(4);
                          first_cost = base_level4;
                          secon_cost1 = Number(Number(100) * elec_level1);
                          secon_cost2 = Number(Number(100) * elec_level2);
                          secon_cost3 = Number(Number(100) * elec_level3);                    
                          secon_cost4 = Number((sum - Number(300))* elec_level4);;  
                          secon_cost = Math.ceil(Number(secon_cost1) + Number(secon_cost2) + Number(secon_cost3) + Number(secon_cost4));
                          third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                          fourth_cost = Math.ceil(third_cost * tax);
                          fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                          placecost_value = Math.floor((Number(third_cost) + Number(fourth_cost) + Number(fifth_cost))/10)*10;
                          place_cost.value = (placecost_value);                        

                      } else if (sum < 501) {
                          fist_level = Number(5);
                          first_cost = base_level5;
                          secon_cost1 = Number(Number(100) * elec_level1);
                          secon_cost2 = Number(Number(100) * elec_level2);
                          secon_cost3 = Number(Number(100) * elec_level3);   
                          secon_cost4 = Number(Number(100) * elec_level4);                    
                          secon_cost5 = Number((sum - Number(400))* elec_level5);;  
                          secon_cost = Math.ceil(Number(secon_cost1) + Number(secon_cost2) + Number(secon_cost3) + Number(secon_cost4) + Number(secon_cost5));
                          third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                          fourth_cost = Math.ceil(third_cost * tax);
                          fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                          placecost_value = Math.floor((Number(third_cost) + Number(fourth_cost) + Number(fifth_cost))/10)*10;
                          place_cost.value = (placecost_value);

                      } else if (sum < 601) {
                          fist_level = Number(6);
                          first_cost = base_level6;
                          secon_cost1 = Number(Number(100) * elec_level1);
                          secon_cost2 = Number(Number(100) * elec_level2);
                          secon_cost3 = Number(Number(100) * elec_level3);   
                          secon_cost4 = Number(Number(100) * elec_level4);
                          secon_cost5 = Number(Number(100) * elec_level5);            
                          secon_cost6 = Number((sum - Number(500))* elec_level6);;  
                          secon_cost = Math.ceil(Number(secon_cost1) + Number(secon_cost2) + Number(secon_cost3) + Number(secon_cost4) + Number(secon_cost5) + Number(secon_cost6));
                          third_cost = Math.ceil(Number(first_cost) + Number(secon_cost));
                          fourth_cost = Math.ceil(third_cost * tax);
                          fifth_cost = Math.floor((third_cost * fund_tax)/10)*10;
                          placecost_value = Math.floor((Number(third_cost) + Number(fourth_cost) + Number(fifth_cost))/10)*10;
                          place_cost.value = (placecost_value);
                    }
  
  // 청구 기본정보 id
    // 기본 정보
      // 적용주택 요금 - price_level || 누진세 단계 - level || 전기요금 - demo6_cost || 가전 제품수  - use_number

    // 상세 내역
      // 기본 요금 - base || 전력량 요금 - elec_level || 복지 할인 - (none) || 전기요금계 - base_total || 부가가치세 - vat
      // 전력산업 발전기금 - fund || 청구 금액 - demo6_cost2  

      if(someplace == "demo6") {
        document.getElementById("level").value = displayNum(fist_level) + " 단계"; // 누진세 단계
        document.getElementById("base").value = displayNum(first_cost) + " 원"; // 기본 요금
        document.getElementById("elec_level").value = displayNum(secon_cost) + " 원"; // 전력량 요금
        document.getElementById("base_total").value = displayNum(third_cost) + " 원"; // 전기요금계
        document.getElementById("vat").value = displayNum(fourth_cost) + " 원"; // 부가가치세
        document.getElementById("fund").value = displayNum(fifth_cost) + " 원"; // 전력산업 발전기금
        document.getElementById("demo6_cost2").value = displayNum(placecost_value) + " 원"; // 청구 금액
        document.getElementById("demo6_cost_display").innerHTML = displayNum(placecost_value) + " 원"; // 청구 금액
        
      } 
        else if(someplace == "spring" || someplace == "summer" || someplace == "fall" || someplace == "winter") {
          document.getElementById( someplace + "_lv").value = fist_level;
          document.getElementById( someplace + "_cs").value = placecost_value; 

          var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if(device_width > 940) {
              document.getElementById( someplace + "_level").innerHTML = displayNum(fist_level) + " 단계";
              document.getElementById( someplace + "_cost").innerHTML = displayNum(placecost_value) + " 원";
            } else {
              document.getElementById( someplace + "_level").innerHTML = displayNum(fist_level);
              document.getElementById( someplace + "_cost").innerHTML = displayNum(placecost_value); 
            }
      }
  }; 