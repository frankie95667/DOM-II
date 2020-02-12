const blocks = document.querySelector('.blocks');
const blocksArr = document.querySelectorAll('.block');

let topBlock = document.querySelector('.block');

let intervalHandler = null;
const blueBlock = document.querySelector('.block--blue');
const redBlock = document.querySelector('.block--red');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
let movingBlock;
let tween;

function moveBlock(element){
    TweenMax.killTweensOf(element);
    TweenMax.set(element, {y: 0})

    var moveBlock = new TimelineMax()
    .to(element, 2, {
        y: -(element.offsetTop - topBlock.offsetTop),
        onComplete: function(){
            blocks.prepend(element);
            topBlock = document.querySelector('.block');
            element.style.removeProperty('position');
            element.style.removeProperty('transform');
            element.style.removeProperty('left');
        }
    })
    return moveBlock;
}

document.addEventListener('click', e => {
    if(e.target.classList[0] == 'block'){
        let current = e.target;
        topBlock = document.querySelector('.block');
        var tlMaster = new TimelineMax();
        tlMaster
        .add(moveBlock(e.target));
        // gsap.to(`.${current.classList[1]}`, {
        //     duration: 2,
        //     y: -(current.getBoundingClientRect().top - topBlock.getBoundingClientRect().top),
        //     overwrite: true,
        //     immediateRender: true,
        //     onComplete: function(){
        //         if(tween){
        //             console.log(tween.vars == this.vars);   
        //         }
            
        //         blocks.prepend(current);
        //         topBlock = document.querySelector('.block');
        //         current.style.removeProperty('position');
        //         current.style.removeProperty('transform');
        //         current.style.removeProperty('left');
        //     },
        //     onStart: function(tween){
        //         tween = this;
        //     }
        // })
    }
})

blocksArr.forEach(block => {
    block.addEventListener('mousedown', e => {
        let i = 1
        let boxWidth = e.target.offsetWidth;
        movingBlock = e.target;
        e.target.style.left = '0';
        e.target.style.position = 'relative';
        intervalHandler = setInterval(function(){
            if(e.target.offsetLeft >= window.innerWidth - boxWidth - 30){
                e.target.style.left = `${i}px`;
            } else {
               e.target.style.left = `${i += 1}px`; 
            }
        }, 1);
    })
})

document.addEventListener('mouseup', e => {
    clearInterval(intervalHandler);
    if(movingBlock){
        movingBlock.style.left = '0';
        movingBlock.style.removeProperty('position');
        movingBlock = null;
    }
    
})
