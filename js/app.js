//intro
var tl = new TweenMax.staggerFrom(".navbar__pc > div" , 2 , {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 2.8
}, 0.1);

var tl = new TweenMax.staggerFrom(".mid__hero", 2, {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 2.8
}, 0.1);
var tl = new TweenMax.staggerFrom(".portfolio__image", 2, {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 2.8
}, 0.1);

TweenMax.to(".wrapper", 2, {
top: "-120%",
ease: Expo.easeInOut,
delay: 2.6
});
TweenMax.to(".loader", 2, {
top: "-120%",
ease: Expo.easeInOut,
delay: 2.6
});


//Mobile Menu
//Navigation Mobile Full Screen
const menuBtn=document.querySelector(".toggle__button")
const exitBtn=document.querySelector(".exit__button")
let t1 = gsap.timeline({paused:true});
t1.to(".mobile__menu" , { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
  ".mobile__link",{
  opacity:1,
  duration:1,
  stagger:0.3,
  marginTop:0,
  ease:Power2.easeInOut,
},
">-0.5"
);

menuBtn.addEventListener("click",()=>{
  t1.play()
})
exitBtn.addEventListener("click",()=>{
  t1.reverse();
});
//Dark Mode
const switchThemes = document.querySelectorAll(".menu__toggle");
let body = document.querySelector("body")
const logo = document.querySelector("brand-logo")
const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme");


switchThemes.forEach(switchTheme=>switchTheme.addEventListener("click", () => {
    if (theme === "dark" && body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        theme = "light";
        document.body.dataset.theme = "light";
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        theme = "dark";
        document.body.dataset.theme = "dark";
    }
    

    localStorage.setItem("theme", theme);
}));

if (theme === "dark") {
    body.classList.add("dark");
    document.body.dataset.theme = "dark";
}

if (theme === "light") {
    body.classList.add("light");
    document.body.dataset.theme = "light";
}




//Navbar item animation hover
let elements = document.querySelectorAll(".rolling__txt");

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });

//Smooth Scroll
const documentBody = document.body,
scrollWrap = document.querySelector("#my-scrollbar"),
height = scrollWrap.getBoundingClientRect().height-0.2,
speed = 0.04;

  var offset = 0;

  documentBody.style.height = Math.floor(height) + "px";

  function smoothScroll() {
      offset += (window.pageYOffset - offset) * speed;

      var scroll = "translateY(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;

      callScroll = requestAnimationFrame(smoothScroll);
  }


if ( $(window).width() > 950) {
  smoothScroll();
}
//Text reval
let listItems = [...document.querySelectorAll('li')];

    let options = {
        rootMargin:'-10%',
        threshold:0.0
    }
    let observer = new IntersectionObserver(showItem,options);
    function showItem(entries){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.children[0].classList.add('active');

            }
        })

    }
    listItems.forEach(item=>{
        let newString=""
        let itemText = item.children[0].innerText.split('');
        itemText.map(letter=>(newString +=letter===' ' ? `<span class="gap"></span>`: `<span>${letter}</span>`))
        observer.observe(item);
    });


//Reveal Nav on Scroll

let lastScroll = 0;


window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		documentBody.classList.remove("scroll__up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll__down")) {
		documentBody.classList.remove("scroll__up");
		documentBody.classList.add("scroll__down");
	} else if (
		currentScroll < lastScroll &&
		documentBody.classList.contains("scroll__down")
	) {
		documentBody.classList.remove("scroll__down");
		documentBody.classList.add("scroll__up");
	}
	lastScroll = currentScroll;
});

//change background on scroll

gsap.utils.toArray(".color").forEach(function(elem) {

    var color = elem.getAttribute('data-color');
    
    ScrollTrigger.create({
      trigger: elem,
      start:'top',
      onEnter: () => gsap.to('body', {backgroundColor:color}),  
      onLeaveBack: () => gsap.to('body', {backgroundColor:''}), 
      onEnterBack: () => gsap.to('body', {backgroundColor:color}), 
    });
    
  
  });
//Cursor
const cursor = document.querySelector(".cursor");
const portfolioItem=document.querySelectorAll(".project__card__top")

document.addEventListener("mousemove" , (e)=>{
    cursor.style.left = e.pageX+ 'px';
    cursor.style.top = e.pageY+ 'px';
})
document.body.style.cursor = 'none';

portfolioItem.forEach(el=>{
    el.addEventListener("mouseenter", function() {
        cursor.classList.add("active");
        });
    el.addEventListener("mouseleave", function() {
            cursor.classList.remove("active");
            });


})
//Back to the top

$(window).scroll(function () {
    if ($(this).scrollTop() > 3500) {
        $('.back__to__top').fadeIn('slow');
    } else {
        $('.back__to__top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
    });

    
//Paralax text effect
    gsap.to('.parallax__title', {
        xPercent: -220,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax__title",
          start: "top +=150%",
          end: "bottom top",
          scrub: true,
        }
      })


      $(".scroll__down").click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
             dest=$(document).height()-$(window).height();
        }else{
             dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

//FOOTER
gsap.registerPlugin('scrollTrigger');

gsap.to('.footer__smile', {
  scrollTrigger: {
    trigger: '.footer__smile',
    start: '-=450px',
  },
  xPercent: -200,
  rotation:360,
  duration: 3,
})








