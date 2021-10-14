/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.querySelector("#navbar__list");

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport (elem) {

    const BoundingClientRect = elem.getBoundingClientRect();

    return (

        BoundingClientRect.top >= 0 &&

        BoundingClientRect.left >= 0  
    );
};
    
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuilder(){

    for (let i=0; i < sections.length; i++){

        const list = document.createElement('li');

        const sectionId = sections[i].getAttribute('id')
        
        const sectionName = sections[i].getAttribute('data-nav')

        const anchor = `<a href="#${sectionId}" class ="menu__link" >${sectionName}</a>`;

        list.innerHTML = anchor;

         nav.appendChild(list);

    }
}

// Add class 'active' to section when near top of viewport
function activeClass(){

    for (let i=0; i < sections.length; i++){

        if (isInViewport(sections[i])){

            sections[i].classList.add("your-active-class");

        }else{

            sections[i].classList.remove("your-active-class");
            
        }
    }
}

// Scroll to anchor ID using scrollTO event

    window.addEventListener('scroll', function() {
      });
 
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder()
// Scroll to section on link click

// Set sections as active

