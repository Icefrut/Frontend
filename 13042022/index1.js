window.onload = function(){
  func1();
}

function func1() {
  var x = 5
  console.log(x);
}

$(function(){
  var div = $(".div1");
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if(scroll>=700){
      div.removeClass(".div1").addClass("div2")
    }else{
      div.removeClass("div2").addClass("div1")
    }
  })
})
