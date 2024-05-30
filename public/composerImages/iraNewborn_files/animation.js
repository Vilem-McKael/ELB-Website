function masterTimeline(){
  var masterTl    = gsap.timeline({});

 // UPDATED MT PROVIDED BY JIVOX
 
 if(typeof dynamicAssetData != "undefined" && dynamicAssetData.length>0) {
  var F1 = dynamicAssetData['Frame-One_320x50'] ? dynamicAssetData['Frame-One_320x50'] : "frameIntro";
  //var F2 = dynamicAssetData['Frame-Two_320x50'] ? dynamicAssetData['Frame-Two_320x50'] : "frameTwo";
  var F4 = dynamicAssetData['End-Frame_320x50'] ? dynamicAssetData['End-Frame_320x50'] : "endFrame";
  console.log(dynamicAssetData);
 
} else {
  var F1 = "frameIntro";
  //var F2 = "frameTwo";
  var F4 = "endFrame";
  console.log("Default");
}


  masterTl
      .add(frameSwitch(F1))
      // .add(frameSwitch(F2))
      // .add(frameSwitch(F3))
      .add(frameSwitch(F4))
}

function frameSwitch(frame){
  gsap.set([crtv.viewport, crtv.banner, crtv.border], {autoAlpha:1});

  var tl = gsap.timeline();
  switch(frame){
    case 'frameIntro': tl.add(frameIntro()); break;
    case 'endFrame': tl.add(endFrame()); break;
    default: null;
  }
  return tl;
}

// function frameOneSwitch(){
//   if(platform.data['Frame-One'] !== ''){
//     frameIntro();
//   }
//   else if(platform.data['Frame-Two'] !== ''){
//     frameTwo();
//   }else if(platform.data['End-Frame'] !== ''){
//     endFrame();
//   }
// }

function frameIntro(){
  var introTl = gsap.timeline();

  gsap.set(['#t-mobile_logo'], {opacity: 0});
  gsap.set(['.F1'], {autoAlpha: 1, force3D: false, rotation: 0.01});
  gsap.set(['#T_Logo'], {x: 55}); // Initial T digit position
  gsap.set(['#logoClip1_2'], {clip:'rect(0px, 300px, 90px, 10px);'});

  introTl
      .from(['#T_Logo'], {duration: .6, y: -20, opacity: 0, ease: 'Back.easeInOut'}) // y axis bounce in
      .to(['#T_Logo'], {duration:.35, x: 0, ease: 'Power2.easeOut'}, 'logoSync+=.3') // Final T digit position
      .from(['#Mobile_Logo'], {duration:.35, x: -85, opacity: 0, ease: 'Power2.easeOut'}, 'logoSync+=.4')
      .to(['#Mobile_Logo'], {duration:.35, x: -5, ease: 'Power2.easeOut'}, 'logoSync+=.4')
      .to('#logoClip1_2',{ durations: .35, clip:"rect(0px,300px,90px,130px)" }, 'logoSync+=.4')
      .to(['#T_Logo', '#Mobile_Logo', '#Bar_Overlay'], {duration:.5, y: 50, opacity: 0, ease: 'Power4.easeIn'}, '+=.6')
  return introTl;
}

// function frameTwoSwitch(){
//   removeClass(elById('F1'), 'animate__fadeIn');
//   removeClass(elById('F1'), 'animate__animated03');
//   addClass(elById('F1'), 'visHid');
//
//   if(platform.data['Frame-Two'] !== ''){
//     frameTwo();
//   }else if(platform.data['End-Frame'] !== ''){
//     endFrame();
//   }
// }
//
// function frameTwo(){
//   removeClass(elById('t_logo'), 'visHid');
//   removeClass(elById('F2'), 'visHid');
//   removeClass(elById('F2-1_copy-input_320x50'), 'visHid');
//   removeClass(elById('F2-2_copy-input_320x50'), 'visHid');
//   removeClass(elById('F2-3_copy-input_320x50'), 'visHid');
//
//   addClass(elById('F2'), 'animate__fadeInUp animate__animated03')
//
//   var timerId = setInterval(1000);
//   setTimeout(function(){ clearInterval(timerId); frameThreeSwitch();}, 3500);
// }
//
// function frameThreeSwitch(){
//   addClass(elById('F2'), 'visHid');
//   if(platform.data['End-Frame'] !== ''){
//     endFrame();
//   }
// }

function endFrame(){
  addClass(elById('t_logo'), 'visHid');
  removeClass(elById('t-mobile_logo'), 'visHid');
  removeClass(elById('EF'), 'visHid');
  removeClass(elById('EF-1_copy-input_320x50'), 'visHid');
  removeClass(elById('EF-2_copy-input_320x50'), 'visHid');
  removeClass(elById('EF-3_copy-input_320x50'), 'visHid');

  addClass(elById('EF'), 'animate__fadeIn')

  var tl = gsap.timeline({onComplete:ctaAnimation});
  tl
      .set([".EF", ".t_logo"], {autoAlpha:1})
      .set(["#EF-1_frameLegal", "#EF-1_largerLegal"], {autoAlpha:0})
      .to(['#t-mobile_logo'], {duration: 0.5, opacity: 1})
      .from(["#EF-1_product"], {duration: 0.5, x:30, opacity:0, ease: 'Power2.easeOut'}, "prod")
      .from(["#EF-1_copy-input_320x50"], {duration: 0.5, x:-30, opacity:0, ease: 'Power2.easeOut'}, "prod")
      .from(["#EF-2_copy-input_320x50"], {duration: 0.5, x:-30, opacity:0, ease: 'Power2.easeOut'}, "-=0.2")
      .from(["#EF-3_copy-input_320x50"], {duration: 0.5, x:-30, opacity:0, ease: 'Power2.easeOut'}, "-=0.2")

  return tl;
  ctaAnimation();
}

function ctaAnimation () {
  removeClass(elById('CTA-bound'), 'visHid');
  addClass(elById('CTA-1_carrot'), 'animate__animated03 animate__fadeInLeft');
}

function removeClass(el, className) {
  if (el.classList) {
      el.classList.remove(className);
  } else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
  }
}

function addClass(elements, myClass) {
  if (!elements) {
      return;
  }
  if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
  } else if (elements.tagName) {
      elements = [elements];
  }
  for (var i = 0; i < elements.length; i++) {
      if ((' ' + elements[i].className + ' ').indexOf(' ' + myClass + ' ') < 0) {
          elements[i].className += ' ' + myClass;
      }
  }
}