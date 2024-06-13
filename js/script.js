let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#in .introduce > *", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#in .img_wrap", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to("#card1 .at1", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#card1 .at2", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#card1 .at3", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#service .point", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to(".pp", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to("#design .design_txt", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#design .d1", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#design .d2", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#design .d3", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();
    tl.to("#onecard .card_one", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#onecard .onecard", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
};

let section = document.querySelectorAll('section');

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;

  for(let i =0; i<section.length;i++){
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };

});