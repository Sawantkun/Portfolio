const loader =document.querySelector('.preloader');
const body=document.querySelector('body');
window.addEventListener('load',()=>{
    body.style.overflow="hidden";
    setTimeout(()=>{
        loader.style.display="none";
        body.style.overflow="visible";
    },1);
})


// HAMBURGER MENU 
const menu=document.querySelector('.menu');
const main=document.querySelector('.main');
const Hline=document.querySelector('.Hline');
const list=document.querySelector('ul');
const link1=document.querySelector('.Mlink1');
const link2=document.querySelector('.Mlink2');
const link3=document.querySelector('.Mlink3');
const link4=document.querySelector('.Mlink4');
const hamburger=document.querySelector('.HamburgerMenu');
menuopen=false;
menu.addEventListener('click',e=>{
    e.preventDefault
    menuopen=!menuopen;
    if(menuopen){
        menu.classList.add('open');
        hamburger.style.background="rgb(12, 12, 12)";
        hamburger.style.width="400%";
        hamburger.style.height="200%";
        gsap.to('ul',{opacity:1},"=1")
    }else{
        menu.classList.remove('open');
        hamburger.style.width="100px";
        hamburger.style.height="100px";
        hamburger.style.background="#050505";
        gsap.to('ul',{opacity:0},"-=1.5")
    }
    
});
link1.addEventListener('click',()=>{
    menu.classList.remove('open');
        hamburger.style.width="100px";
        hamburger.style.height="100px";
        hamburger.style.background="#050505";
        list.style.opacity="0";
})
link2.addEventListener('click',()=>{
    menu.classList.remove('open');
        hamburger.style.width="100px";
        hamburger.style.height="100px";
        hamburger.style.background="#050505";
        list.style.opacity="0";
})
link3.addEventListener('click',()=>{
    menu.classList.remove('open');
        hamburger.style.width="100px";
        hamburger.style.height="100px";
        hamburger.style.background="#050505";
        list.style.opacity="0";
})
link4.addEventListener('click',()=>{
    menu.classList.remove('open');
        hamburger.style.width="100px";
        hamburger.style.height="100px";
        hamburger.style.background="#050505";
        list.style.opacity="0";
})

// TYPEWRITER EFFECT
var type = document.querySelector('#Type');

var typewriter = new Typewriter(type, {
    strings:[' am a Frontend Developer',' Create Interactive Websites'],
    autoStart:true,loop:true
});


//SKEW SCROLLING EFFECT
var skewsetter=gsap.quickSetter(".skew", "skewY", "deg");
var proxy ={skew:0}

ScrollTrigger.create({
    onUpdate: self => {
        var skew=self.getVelocity()/-2000;
    //   console.log(skew);
    if(Math.abs(skew)> Math.abs(proxy.skew)){
        proxy.skew=skew;
        gsap.to(proxy,{skew:0,duration:0.3,ease:"ease-in-out",overwrite:true,onUpdate:()=>skewsetter(proxy.skew)})
    }
    }
  });


// animations 
const timeline=gsap.timeline({defaults:{duration:0.5,opacity:0}});
timeline.to('.reveal',{stagger:0.2,y:0,ease:'SlowMo.easeOut',opacity:1,background:'transparent',delay:1})
        .from('#particles-js',{opacity:0})
        .from('.Hname',{y:-100})
        .from('.mouse-scroll',{y:-50},'-=0.5')
        .from('.logo',{x:-100})
        .from('.menu',{x:100},'-=0.5')
        .from('.social',{opacity:0},'=0.3')
        .from('.theme',{opacity:0},'-=0.5');

gsap.to('.mouse-scroll',{scrollTrigger:{
    trigger:'.mouse-scroll',
    start:'bottom center'},ease:'SlowMo.easeIn',
    opacity:'0',y:-50});
