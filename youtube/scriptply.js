// let videocontainer = document.querySelector('.video-container .video-div video')
let showmore = document.querySelector('.showmore');
let discrip = document.querySelector('.discrip');

showmore.addEventListener('click',()=>{
    discrip.classList.toggle('block')
    if(showmore.innerHTML == 'showless'){
        showmore.innerHTML = 'showmore'
    }else{
        showmore.innerHTML = 'showless'
    }
});