let hamburger = document.querySelector('.hamburger');
let sidebar = document.querySelector('.side-bar');
let bigcontainer = document.querySelector('.video-components');


hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle('small-container');
    bigcontainer.classList.toggle('big-container');
    console.log("hi");
});

// console.log(hamburger);
// console.log(showmore);




