let hamburger = document.querySelector('.sidelines')
let sidebar = document.querySelector('.side-bar')
let bigcontainer = document.querySelector('.video-components')

hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle('small-container')
    bigcontainer.classList.toggle('big-container')
})
