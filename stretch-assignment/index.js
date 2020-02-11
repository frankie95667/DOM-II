const blocks = document.querySelector('.blocks');
let intervalHandler = null;
const blueBlock = document.querySelector('.block--blue');
const redBlock = document.querySelector('.block--red');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
let movingBlock;

document.addEventListener('click', e => {
    if(e.target.classList[0] == 'block'){
        blocks.prepend(e.target);
    }
})

document.addEventListener('mousedown', e => {
    let i = 1
    movingBlock = e.target;
    e.target.style.left = '0';
    e.target.style.position = 'relative';
    intervalHandler = setInterval(function(){
        e.target.style.left = `${i += 10}px`;
    }, 100)
})

document.addEventListener('mouseup', e => {
    clearInterval(intervalHandler);
    if(movingBlock){
        movingBlock.style.left = '0';
        movingBlock.style.position = 'initial';
        blocks.prepend(movingBlock);
        movingBlock = null;
    }
    
})