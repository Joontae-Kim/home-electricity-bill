// item add function in basket and badge
var chkitem = function(id, tableid, type, place, season) {
    // calculate_part

    console.log("chkitem__ " + " " + place); 
    addValue(id, type, place, season); 
    consumeCost("demo6");
    consumeCost("fall");
    consumeCost("spring");

    addtoviewtable(id, tableid, type, place, season);    
}; 

// 각 가전제품에 대한 id + '_watt'에 value 덧셈 함수
function addValue(id, type, place, season) {
      var sel0 =  document.getElementById(id + "_pty").value; // 가전제품 유형
      var sel2 =  document.getElementById(id + "_wk").value; // 사용주기
      var sel3 =  document.getElementById(id + "_wkd").value; // 사용시간
      
      //id의 name type '=item'과 '=item2'에 따른 id_watt의 계산식 분류 및 적용
      var unit = 1000;
      var y = 0;
        if(type == "item") {
          var select_value = (Number(sel2) * Number(sel3)) * Number(sel0);
          var item_value = document.getElementById(id + "_watt").value;
          document.getElementById(id + "_watt").value = Number(select_value) + Number(item_value);

        } else {
          var select_value = ((Number(sel2) * Number(sel3)) * Number(sel0)/Number(unit));
          var item_value = document.getElementById(id + "_watt").value;
          document.getElementById(id + "_watt").value = Number(select_value) + Number(item_value);
        }

        selectChkBox(id, place, season);
        placeCalculate(place); 
        season_calculate(season); 
};

var addtoviewtable = function (id, tableid, type, place, season) {
    var device_width = Number(screen.width);
    if (device_width > Number('768') ) {
        var table = document.getElementById(tableid + "_pc");
        console.log("table " + device_width);
        var row = table.insertRow(table.rows.length);
        row.setAttribute("id", id + "_rows");
        var len = table.rows.length;
        console.log("tableid  " + tableid);

        console.log("row_id " + Number(len - 1) + " " + typeof(len));
        document.getElementById(tableid + "_pc_badge").innerHTML = Number(len-1 || 0) ;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);   

        var pname = document.getElementById(id + "_name").value;
        var ptype_index = document.getElementById(id + "_pty").selectedIndex;
        var ptype = document.getElementById(id + "_pty")[ptype_index].text;
        
        var pwk_index = document.getElementById(id + "_wk").selectedIndex;
        var ppr = document.getElementById(id + "_wk")[pwk_index].text;

        var pwkd_index = document.getElementById(id + "_wkd").selectedIndex;
        var ptm = document.getElementById(id + "_wkd")[pwkd_index].text;

        var pseason = document.getElementById(id + "_season").value;
        var pplace = document.getElementById(id + "_place").value;

        // 제품명 - 텍스트박스 출력                       
        var pnm1 = document.createElement("INPUT");
        pnm1.setAttribute("type","textbox");
        pnm1.setAttribute("class","pnm");
        cell1.appendChild(pnm1);
        pnm1.setAttribute("value", ptype + " " + pname);  
      
        var pnm3 = document.createElement("INPUT");  
        pnm3.setAttribute("type","textbox");   
        pnm3.setAttribute("class","pnm3");    
        cell2.appendChild(pnm3);    
        pnm3.setAttribute("value", ppr + " " + ptm + " 시간"); 
      
        // 추가 가전에 대한 value 계산 및 추가 cell에 value input
        var sel0 =  document.getElementById(id + "_pty").value; // 가전제품 유형
        var sel2 =  document.getElementById(id + "_wk").value; // 사용주기
        var sel3 =  document.getElementById(id + "_wkd").value; // 사용시간

        var unit = 1000;
        var select_value = ((Number(sel2) * Number(sel3)) * Number(sel0)/Number(unit));
        var item_value = select_value;

        var pnm5 = document.createElement("IMG");
        pnm5.setAttribute("src", "../static/img/minus2.png");
        pnm5.setAttribute("class","minus");

        var additemid = "add" + id ;    
        pnm5.setAttribute("onclick","unchkitem(" + "'" +id+"'" +","+"'"+tableid +"_pc"+"'"+","+"'"+pseason+"'"+","+"'"+pplace+"'" + ")");

        var pnm6 = document.createElement("input");
        pnm6.setAttribute("type","hidden");
        pnm6.setAttribute("id",additemid);
        pnm6.setAttribute("value",item_value);
        cell3.appendChild(pnm5);
        cell3.appendChild(pnm6);
        addnumber();
        console.log("screen.width  " + screen.width)

    } else {
        var table = document.getElementById(tableid);
        var row = table.insertRow(table.rows.length);
        row.setAttribute("id", id + "_rows");
        var len = table.rows.length;
        console.log("tableid  " + tableid);

        console.log("row_id " + Number(len - 1) + " " + typeof(len));
        document.getElementById(tableid + "_badge").innerHTML = Number(len-1 || 0) ;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);   

        var pname = document.getElementById(id + "_name").value;
        var ptype_index = document.getElementById(id + "_pty").selectedIndex;
        var ptype = document.getElementById(id + "_pty")[ptype_index].text;
        
        var pwk_index = document.getElementById(id + "_wk").selectedIndex;
        var ppr = document.getElementById(id + "_wk")[pwk_index].text;

        var pwkd_index = document.getElementById(id + "_wkd").selectedIndex;
        var ptm = document.getElementById(id + "_wkd")[pwkd_index].text;

        var pseason = document.getElementById(id + "_season").value;
        var pplace = document.getElementById(id + "_place").value;

        // 제품명 - 텍스트박스 출력                       
        var pnm1 = document.createElement("INPUT");
        pnm1.setAttribute("type","textbox");
        pnm1.setAttribute("class","pnm");
        cell1.appendChild(pnm1);
        pnm1.setAttribute("value", ptype + " " + pname);  
      
        var pnm3 = document.createElement("INPUT");  
        pnm3.setAttribute("type","textbox");   
        pnm3.setAttribute("class","pnm3");    
        cell2.appendChild(pnm3);    
        pnm3.setAttribute("value", ppr + " " + ptm + " 시간"); 
      
        // 추가 가전에 대한 value 계산 및 추가 cell에 value input
        var sel0 =  document.getElementById(id + "_pty").value; // 가전제품 유형
        var sel2 =  document.getElementById(id + "_wk").value; // 사용주기
        var sel3 =  document.getElementById(id + "_wkd").value; // 사용시간

        var unit = 1000;
        var select_value = ((Number(sel2) * Number(sel3)) * Number(sel0)/Number(unit));
        var item_value = select_value;

        var pnm5 = document.createElement("IMG");
        pnm5.setAttribute("src", "../static/img/minus2.png");
        pnm5.setAttribute("class","minus");

        var additemid = "add" + id ;    
        pnm5.setAttribute("onclick","unchkitem(" + "'" +id+"'" +","+"'"+tableid+"'"+","+"'"+pseason+"'"+","+"'"+pplace+"'" + ")");

        var pnm6 = document.createElement("input");
        pnm6.setAttribute("type","hidden");
        pnm6.setAttribute("id",additemid);
        pnm6.setAttribute("value",item_value);
        cell3.appendChild(pnm5);
        cell3.appendChild(pnm6);
        addnumber();
        console.log("screen.width  " + screen.width)
    }

    // var table = document.getElementById(tableid);
    // var row = table.insertRow(table.rows.length);
    // row.setAttribute("id", id + "_rows");
    // var len = table.rows.length;
    // console.log("tableid  " + tableid);

    // console.log("row_id " + Number(len - 1) + " " + typeof(len));
    // document.getElementById(tableid + "_badge").innerHTML = Number(len-1 || 0) ;

    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);   

    // var pname = document.getElementById(id + "_name").value;
    // var ptype_index = document.getElementById(id + "_pty").selectedIndex;
    // var ptype = document.getElementById(id + "_pty")[ptype_index].text;
    
    // var pwk_index = document.getElementById(id + "_wk").selectedIndex;
    // var ppr = document.getElementById(id + "_wk")[pwk_index].text;

    // var pwkd_index = document.getElementById(id + "_wkd").selectedIndex;
    // var ptm = document.getElementById(id + "_wkd")[pwkd_index].text;

    // var pseason = document.getElementById(id + "_season").value;
    // var pplace = document.getElementById(id + "_place").value;

    // // 제품명 - 텍스트박스 출력                       
    // var pnm1 = document.createElement("INPUT");
    // pnm1.setAttribute("type","textbox");
    // pnm1.setAttribute("class","pnm");
    // cell1.appendChild(pnm1);
    // pnm1.setAttribute("value", ptype + " " + pname);  
  
    // var pnm3 = document.createElement("INPUT");  
    // pnm3.setAttribute("type","textbox");   
    // pnm3.setAttribute("class","pnm3");    
    // cell2.appendChild(pnm3);    
    // pnm3.setAttribute("value", ppr + " " + ptm + " 시간"); 
  
    // // 추가 가전에 대한 value 계산 및 추가 cell에 value input
    // var sel0 =  document.getElementById(id + "_pty").value; // 가전제품 유형
    // var sel2 =  document.getElementById(id + "_wk").value; // 사용주기
    // var sel3 =  document.getElementById(id + "_wkd").value; // 사용시간

    // var unit = 1000;
    // var select_value = ((Number(sel2) * Number(sel3)) * Number(sel0)/Number(unit));
    // var item_value = select_value;

    // var pnm5 = document.createElement("IMG");
    // pnm5.setAttribute("src", "../static/img/minus2.png");
    // pnm5.setAttribute("class","minus");

    // var additemid = "add" + id ;    
    // pnm5.setAttribute("onclick","unchkitem(" + "'" +id+"'" +","+"'"+tableid+"'"+","+"'"+pseason+"'"+","+"'"+pplace+"'" + ")");

    // var pnm6 = document.createElement("input");
    // pnm6.setAttribute("type","hidden");
    // pnm6.setAttribute("id",additemid);
    // pnm6.setAttribute("value",item_value);
    // cell3.appendChild(pnm5);
    // cell3.appendChild(pnm6);
    // addnumber();
    // console.log("screen.width  " + screen.width)
};


