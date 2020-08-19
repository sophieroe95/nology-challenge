//clock//
const clock = document.querySelector('.clock');

const tick = () => {
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();
const html = `
<span>${leadingZero(h)}</span> :
<span>${leadingZero(m)}</span> :
<span>${leadingZero(s)}</span>
`;

clock.innerHTML = html;
};
setInterval(tick, 1000);

const leadingZero = s => {
if (s < 10) {
return "0" + String(s);
} else {
return s;
}
};

//add user's name to website//
document.querySelector("#show-name").addEventListener("click", function showName() {
const userName = document.querySelector("#enter-name").value; 
    
    document.querySelector( 
      "#username").innerHTML = userName; 

    document.querySelector( 
      "#usernameform").innerHTML = userName; 
});

//show and hide text//
const balloons = document.querySelector("#balloons");

balloons.addEventListener("click",function showBalloonText() { 
    element = document.querySelector('.balloons-image-text'); 
    element.style.display = 'block'; 
});

balloons.addEventListener("dblclick",function hideBalloonText() { 
    element = document.querySelector('.balloons-image-text'); 
    element.style.display = 'none'; 
});

const sophie = document.querySelector(".sophie-roe-pic");
sophie.addEventListener("click",function showSophie() { 
    element = document.querySelector('.sophie-roe-img-text'); 
    element.style.display = 'block'; 
});

sophie.addEventListener("dblclick",function hideSophie() { 
    element = document.querySelector('.sophie-roe-img-text'); 
    element.style.display = 'none'; 
});

//scroll//
document.querySelector(".ayellow-text").addEventListener("scroll",function scrollMakesTextYellow() { 
    document.querySelector('.ayellow-text').style.color = "yellow";
});


document.querySelector(".byellow-text").addEventListener("scroll",function scrollMakesTextYellow() { 
    document.querySelector('.byellow-text').style.color = "yellow";
});

//balloon move//
const balloon = document.querySelector("#balloonmovebutton");
balloon.addEventListener("click",function move() { 
    element = document.querySelector('.balloon'); 
    element.style.display = 'block'; 
});

balloon.addEventListener("dblclick",function stop() { 
    element = document.querySelector('.balloon'); 
    element.style.display = 'none'; 
});

//copyright//

const copy = document.querySelector('.copy-right');
copy.addEventListener('copy', () => {
 alert('my content is copyright!');
})

//background slider//

var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  
