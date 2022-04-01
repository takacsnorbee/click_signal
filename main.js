document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.button-with-signal');

    btn.addEventListener('click', function(event) {
        const posX = event.clientX - event.target.offsetLeft;
        const posY = event.clientY - event.target.offsetTop;
        const span = document.createElement('span');
        
        span.style.left = posX + 'px';
        span.style.top = posY + 'px';

        this.appendChild(span);

        setTimeout(()=>{
            btn.removeChild(span)
        },1000)
    });
});