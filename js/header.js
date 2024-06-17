$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  //(2)Mobile Menu

  mobBtn.on("click",function () {
    BODY.toggleClass("mOpen");
  })
});