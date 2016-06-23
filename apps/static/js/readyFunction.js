$(document).ready(function  () { 
  // add item total number in each panel's badge  
  var i = 0;
  var tableArray = ['item_view1','item_view2','item_view3'];
    for(var i=0; i<tableArray.length; i++) {
      document.getElementById(tableArray[i] + "_badge").innerHTML = Number(0) ;
    }

  var x = document.getElementsByName('item');
  console.log("x.length__  " + x.length);

  var j=0;
  var i=0;
  for(i=0;i<x.length;i++) {                
   var row_id =  x[i].id;
   console.log(x[i].id);
     
   //window_ready 전송대상 인자 순서 
   //id, prepty, pretype, place, season, premn, prewkd  
   var val0 = document.getElementById(row_id + "_prepty").value;            
   var val1 = document.getElementById(row_id + "_pretype").value;
   var val2 = document.getElementById(row_id + "_place").value;
   var val3 = document.getElementById(row_id + "_season").value;
   var val5 = document.getElementById(row_id + "_prewk").value;
   var val6 = document.getElementById(row_id + "_prewkd").value;

   //사용중인 가전제품 유형 선정             
   var pty_id = row_id + "_pty";                     
   var option = '<option selected="selected" value="0">- 선택 -</option>';
   list = listitems["list" + row_id];
     console.log("list" + row_id);
    for (var s = 0; s < list.length; s++) {
     console.log("list.length__" + list.length);
      
      option += "<option value='" + list[s].ConsumeWatt+ "'>" + list[s].Id + "</option>";
       }
   $("#" + pty_id).html(option);
   document.getElementById(pty_id).selectedIndex = val0;                
     
   //사용주기 및 사용시간의 설정             
   var wk_id = row_id + "_wk";          
   var period = ['매일' , '일주일', '월간'];
   var period_value = [30, 4, 1];
   var option3 = '<option selected="selected" value="0">선택</option>';
    for (var pr = 0; pr < period.length; pr++) {
      option3 += "<option value='" + parseFloat(period_value[pr]) + "'>" + period[pr] + "</option>";
     }
   $("#" + wk_id).html(option3);   
   document.getElementById(wk_id).selectedIndex = val5;


   var wkd_id = row_id + "_wkd";  
   console.log('wkd_id__ ' + wkd_id);
   var option4 = '<option selected="selected" value="0">선택</option>';
    for (var tm = 1; tm < 25; tm++) {
      option4 += "<option value='" + tm + "'>" + tm + "</option>";
     }
   $("#" + wkd_id).html(option4);
   document.getElementById(wkd_id).selectedIndex = val6;  
  
  }

  var pre = ['item1', 'item4', 'item5', 'item10', 'item13', 'item17', 'item14', 'item21', 'item19', "item26", "item25", 'item23', 'item24'];
  for(var p=0; p<pre.length; p++) {
    console.log("pre__" + " " + pre[p])
    var id = pre[p];
    var tableid = document.getElementById(pre[p] + "_table").value;
    var type = document.getElementById(pre[p] + "_pretype").value;
    var place = document.getElementById(pre[p] + "_place").value;
    var season = document.getElementById(pre[p] + "_season").value;
    console.log("pre__" + id + " " + tableid+ " " + type+ " " +place+ " " +season);

    chkitem(id, tableid, type, place, season);
  }
  getTimeStamp();
  // firstpage_swipe();
}); // - window_ready_end_point

function test() {
  console.log("select_test");
}



