window.onscroll = function showHeader(){
    let cont = document.querySelector('.cont');

    if(window.scrollY > 1000){
        cont.style.display = "flex";
    } else {
        cont.style.display = "none";
    }
}