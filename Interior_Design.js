//function of toggle button
document.addEventListener("DOMContentLoaded",function(){
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const menuOptions = document.querySelectorAll('.dropdown_menu li'); // Add this line
    
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
    
    
        // Toggle the class of the icon to change it from bars to xmark
        toggleBtn.querySelector('i').classList.toggle('fa-bars', !isOpen);
        toggleBtn.querySelector('i').classList.toggle('fa-xmark', isOpen);
        
    };
    
     // Add event listeners to menu options
  menuOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      dropDownMenu.classList.remove('open');
    });
  });
});
//Image Slider
let counter = 1;
setInterval(() => {
  const currentImg = document.querySelector('.img.show');
  if (currentImg) {
    currentImg.classList.remove('show');
  }

  const img = document.querySelector(`.img-${counter}`);
  if (img) {
    img.classList.add('show');
  }

  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3800);



// functionality of navbar    
let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
    }
//word animation
var words = ['Interior Design: Where Dreams Become Reality. ', 'Unlock the Door to Imagination, Step into a World of Inspiration.  ', 'Design with Purpose, Crafted with Passion.', 'Embrace the Art of Design, Where Walls Speak and Rooms Sing.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});        


// Marquee content Scrolling

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
