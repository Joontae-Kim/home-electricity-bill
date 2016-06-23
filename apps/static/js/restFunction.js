function displayNum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function getTimeStamp() {
    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 4) + '.' +
        leadingZeros(d.getMonth() + 1, 2) + '.' +
        leadingZeros(d.getDate(), 2);
 
    //return s;
  document.getElementById("date").value = s;
  document.getElementById("date_display").innerHTML = s;

};

function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
 
    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
};

var namedirection = function() {
  var name = document.getElementById("user_nm").value;
  document.getElementById("user_display").innerHTML = name;
  document.getElementById("user").value = name;
};


function radiochk() {
  var x = document.getElementsByName("housetype");
  var i = 0;
  console.log("length " + x.length);
   for(var i=0;i<x.length;i++) {
     var x_id = x[i].id
     var chk = x[i].checked;
       if (chk == true) {
          if(x[i].value == "lower") {
            document.getElementById("price_level_display").innerHTML = "저압";
          } else {
            document.getElementById("price_level_display").innerHTML = "고압";
          }
       }
   }
};

function marrigeYear() {
  var marrigeTf_chk = document.getElementById("marriage1").checked;
  if(marrigeTf_chk == true) {
    var qst = document.getElementsByName("qmarriageyear");
    var q=0;
      for(q=0;q<qst.length;q++) {
        qst[q].disabled = false;
      }

    var fml = document.getElementsByName("qfamily");
    var f=0;
      for(f=0;fml.length;f++) {
        fml[f].disabled = false;
      }

  } else {
    var qst = document.getElementsByName("qmarriageyear");
    var q=0;
      for(q=0;q<qst.length;q++) {
        qst[q].disabled = true;
      }
    var fml = document.getElementsByName("qfamily");
    var f=0;
      for(f=0;fml.length;f++) {
        fml[f].disabled = true;
      }      
  }
};

// service move button in jumbotron 
function scrollsmooth() {
  console.log("this asjfapfwwa-------------------");
  $('html,body').animate({
        scrollTop: $('#service').offset()["top"] + 5
    }, 800);
};