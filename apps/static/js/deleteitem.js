// item delet function in basket and badge
var unchkitem = function(id, tableid, season, place) {
  console.log("minus_season_place__ " + " " + season + " " + place); 

  // item_watt에 minus
  var add_itemvalue = document.getElementById("add" + id).value;
  var original_value = document.getElementById(id + "_watt").value;
  document.getElementById(id + "_watt").value = Number(original_value) - Number(add_itemvalue);

  var y = document.getElementById(id + "_rows").rowIndex;
  document.getElementById(tableid).deleteRow(y);
  var table = document.getElementById(tableid);
  var len = table.rows.length;

  var device_width = Number(screen.width);
  if (device_width > Number('768') ) {
    console.log("row_id " + Number(len - 1) + " " + typeof(len));
    console.log("tableid  " + tableid + "_badge" + " " + y + " " + Number(len-1 || 0));
    //item_view1_badge_pc

    document.getElementById(tableid + "_badge").innerHTML = Number(len-1 || 0) ;

  } else {
    console.log("row_id " + Number(len - 1) + " " + typeof(len));
    document.getElementById(tableid + "_badge").innerHTML = Number(len-1 || 0) ;
  }
  // calculate_part 
  selectChkBox(id, place, season);
  season_calculate(season); 
  placeCalculate(place);
  consumeCost("demo6");
  consumeCost("fall");
  consumeCost("spring");
  addnumber();
};