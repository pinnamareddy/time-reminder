function createheart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const x = (Math.random() * 100) ;
    heart.style.top = `${x}vw`;
    const y = ((Math.random() * 2) + 15);
    heart.style.animationDuration = `${y}s` 
    heart.innerText = '🐡'
    document.body.appendChild(heart);
}
setInterval(createheart,700);

function createheart1(){
    const heart1 = document.createElement('div');
    
    heart1.classList.add('heart1');
    const x = (Math.random() * 100) ;
    heart1.style.top = `${x}vw`;
    const y = ((Math.random() * 2) + 15);
    heart1.style.animationDuration = `${y}s` 
    heart1.innerText = '🦀'
    document.body.appendChild(heart1);
}
setInterval(createheart1,800);

