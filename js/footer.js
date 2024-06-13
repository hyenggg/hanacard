const ftrBtn = $('.family_wrap>a');
const ftrWrap = $('.family_wrap');

ftrBtn.on('click',function(e){
  e.preventDefault();
  ftrWrap.toggleClass('active');
});