document.addEventListener('DOMContentLoaded', function(){
    const returntop = document.getElementById('back-to-top-btn');
    
    window.addEventListener('scroll', function(){
        if(this.window.scrollY >= 300){
            returntop.style.display = 'flex';
        } else {
            returntop.style.display = 'none';
        }
    });

    returntop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});


