function call(){
  var q=parseInt(document.getElementById("txt1").value);
  var w=parseInt(document.getElementById("txt2").value);
  var result=q+w;
    if(isNaN(q)||isNaN(w)){
      alert("please enter a number");
    }
    else {
      var result =q+w;
      alert("The sum is: "+result);
    }
}
