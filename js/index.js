// Your code goes here

let dragged;
let dropped = false;

const destinations = document.querySelectorAll('.content-pick .destination');

const headerImg =  document.querySelector('.intro img');

const nav = document.querySelector('.nav-container');
nav.style.cursor = 'pointer';
nav.setAttribute('draggable', 'true');

const navLinksContainer = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav .nav-link');

const mainHeader = document.querySelector('header');

const dropHere = document.createElement('div');
dropHere.classList.add('dropzone');
dropHere.style.backgroundColor = 'lightgray';
dropHere.style.width = '20%';
dropHere.style.color = 'white';
dropHere.style.display = 'flex';
dropHere.style.flexDirection = 'column';
dropHere.style.justifyContent = 'center';
dropHere.style.textAlign = 'center';

const dropHereText = document.createElement('h2');
dropHereText.textContent = "Drop Here";

const homeContainer = document.querySelector('.container.home');
const newContainer = document.createElement('div');
newContainer.style.display = 'flex';
const body = document.querySelector('body');

document.addEventListener('dragstart', e => {
    dragged = e.target;
    e.target.style.opacity = .5;
    if(homeContainer.parentNode != newContainer){
        body.replaceChild(newContainer, homeContainer);
        newContainer.appendChild(homeContainer);

        newContainer.prepend(dropHere);
        homeContainer.style.width = '80%';
    } else {
        // dropHere.style.width = '100%';
        // dropHere.style.position = 'fixed';
        // dropHere.style.height = '90px';
        // body.prepend(dropHere);
    }
    
}, false);

// 1. Event Listener

document.addEventListener('dragend', e => {
    e.target.style.opacity = "";
    

}, false);

// 2. Event Listener
document.addEventListener('dragenter', e => {
    if( e.target.className == 'dropzone'){
        dropHere.appendChild(dropHereText);
        dropHere.style.backgroundColor = 'darkgray';
    }
    
}, false);

// 3. Event Listener
document.addEventListener('dragleave', e => {
    if( e.target.className == 'dropzone'){
        dropHere.removeChild(dropHereText);
        dropHere.style.backgroundColor = 'lightgray';
    }
    
}, false);

// 4. Event Listener
document.addEventListener('dragover', e => {
    e.preventDefault();
}, false)

// 5. Event Listener
document.addEventListener('drop', e => {
    e.preventDefault();
    if( e.target.className == 'dropzone'){
        newContainer.replaceChild(mainHeader, dropHere);
        mainHeader.style.width = '230px';
        mainHeader.style.borderBottom = 'none';
        mainHeader.style.marginTop = '90px';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.justifyContent = 'flex-start';
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.textAlign = 'center';
        homeContainer.style.width = '80%';
        homeContainer.style.margin = '0';

        homeContainer.style.marginLeft = '230px';

        body.style.display = 'flex';
        body.style.flexDirection = 'column';
        body.style.alignItems = 'center';

        navLinks.forEach(link => {
            link.style.width = '100%';
            link.style.padding = '20px 0';
            link.style.fontSize = '2rem';
        })

        dropped = true;
    } else if(!dropped){
        body.replaceChild(homeContainer, newContainer);
        mainHeader.style.position = 'fixed';
        mainHeader.style.width = '100%';
        nav.style.display = '';
        nav.style.flexDirection = '';
    }
}, false)


navLinks.forEach(link => {

    // 6. Event Listener
    link.addEventListener('click', e => {
        e.preventDefault();
        console.log(`clicked ${e.target.textContent}`)
    })

    // 7. Event Listener
    link.addEventListener('mouseenter', e => {
        gsap.to(e.target, {
            duration: .5,
            scale: 1.25,
            rotation: 20,
            y: -7,
            ease: "bounce.out"
        });
        
    })

    // 8. Event Listener
    link.addEventListener('mouseleave', e => {
        gsap.to(e.target, {
            duration: .5,
            scale: 1,
            rotation: 0,
            y: 0,
            ease: "bounce.out"
        });
    })
}) 

document.querySelector('.logo-heading').addEventListener('mouseover', e => {
        gsap.to(e.target, {
            duration: .5,
            scale: 1.25,
            rotation: 20,
            y: -7,
            ease: "bounce.out"
        });
    })

document.querySelector('.logo-heading').addEventListener('mouseout', e => {
    gsap.to(e.target, {
        duration: .5,
        scale: 1,
        rotation: 0,
        y: 0,
        ease: "bounce.out"
    });
})

// 9. Event Listener
headerImg.addEventListener('dblclick', e => {
    console.log(e.target);
    e.target.src = 'https://picsum.photos/seed/picsum/1000/300';
})

// 10. Event Listener
let contImg = document.querySelector('.img-content img:first-child')
contImg.addEventListener('mouseover', e => {
    if(e.target === contImg){
        e.target.src = 'https://picsum.photos/seed/picsum/400/300';
    }
})

/***************************************************/
/************ stoPropagation() Example **************/
/***************************************************/

destinations.forEach(dest => {
    let btn = dest.lastElementChild;
    
    btn.addEventListener('click', e => {
        e.stopPropagation();
        if(e.target.style.backgroundColor === 'dodgerblue'){
            e.target.style.backgroundColor = '#17A2B8';
        } else {
            e.target.style.backgroundColor = 'dodgerblue';
        }
    })

    dest.addEventListener('click', e => {
        e.stopPropagation();
        if(dest.style.backgroundColor == 'rebeccapurple'){
            dest.style.backgroundColor = 'white';
            dest.style.color = 'black';
        } else {
            dest.style.backgroundColor = 'rebeccapurple';
            dest.style.color = 'white';
        }
        
    })
})