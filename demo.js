//////////////BOX////////////////////////////////////
console.log("priyanshu");
TweenMax.set('.square', { autoAlpha: 1, x: -1000 })
   
var t1 = new TimelineMax();
t1.to('#square1', 4, { autoAlpha: 1,  x: 0  } )

///////////TEXT////////////////
TweenMax.set('.text', { autoAlpha: 2, x: -1000 })
var t2 = new TimelineMax();
t2.to('#text1',5, {autoAlpha:0, x:0},)

   
/////////////////////////CIRCLE//////////////////////////////////
TweenMax.set('.circle', { autoAlpha: 1, x: 1000 })
    
var t1 = new TimelineMax();
t1.to('#circle1', 4, { autoAlpha: 1,  x: 0 },)

//////////////////TEXT2///////////////////////////

TweenMax.set('.text22', { autoAlpha: 2, x: 1000 })
var t3 = new TimelineMax();
t3.to('#text2',5, {autoAlpha:0, x:0})

///////////////////////image1///////////////////////////////////////
  
TweenMax.set('.rightimfg', { autoAlpha: 0, y: 0 })
var t4 = new TimelineMax();
t4.to('#rightimfg2',2, {autoAlpha:1, y:0},'+=4')
///////////////////////////////////////bottm/////////////////////

TweenMax.set('.topimg', { autoAlpha: 0, y: 0 })
var t10 = new TimelineMax();
t10.to('#topimg2',2, {autoAlpha:1, y:0},'+=4')

//////////////////image2////////////////////////////////////

TweenMax.set('.leftimg', { autoAlpha: 0, y: 0 })
var t9 = new TimelineMax();
t9.to('#leftimg2',2, {autoAlpha:1, y:0},'+=3')

///////////////////////////box////////////////////////

TweenMax.set('.linetext', { autoAlpha: 0, y: 0 })
var t5 = new TimelineMax();
t5.to('#linetext2',2, {autoAlpha:1, y:0},'+=4')

///////////////////////white box right side/////////////////////////

TweenMax.set('.upperimfg', { autoAlpha: 0, y: 0 })
var t6 = new TimelineMax();
t6.to('#upperimfg2',2, {autoAlpha:1, y:0},'+=3')

//////////////////////////////text///////////////////////////

TweenMax.set('.box2', { autoAlpha: 0, y: 0 })
var t8 = new TimelineMax();
t8.to('#box22',2, {autoAlpha:1, y:0},'+=3')

////////////////////////right imge////////////

TweenMax.set('.swiper-container', { autoAlpha: 0, y: 600 })
var t7 = new TimelineMax();
t7.to('#swiper-container2',2, {autoAlpha:1, y:-5},'+=3')

///////////////////////////////////////////////////////////
TweenMax.set('.slide', { autoAlpha: 0, y: 0 })
var t11 = new TimelineMax();
t11.to('#slide2',2, {autoAlpha:1, y:-5},'+=3')





















/////////////swiper code/////////////////////
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });