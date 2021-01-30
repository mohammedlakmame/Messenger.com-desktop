
//---- dark theme
    var main=document.querySelector('.main'); 
    
const pxicon = document.querySelectorAll(".px-icon");
window.addEventListener('scroll', () => {
    var header=document.querySelector('header'); 
    header.classList.toggle('fixed',window.scrollY>20); 
    header.classList.toggle('opacity',window.scrollY>100); 
    if(window.scrollY>100) {
        main.setAttribute('data-mode','dark');
    }
    else{
    main.setAttribute('data-mode','light');
    }
    //----parallex icons
    let scroll = window.pageYOffset;
    pxicon.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
});