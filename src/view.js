const marker = document.querySelector(".wp-block-hjude-mouse-marker");

console.log(marker)

window.addEventListener("mousemove", (e)=>{
    marker.style.setProperty('--yPos', `${Math.round(e.y)}px`);
    marker.style.setProperty('--xPos', `${Math.round(e.x)}px`);
})