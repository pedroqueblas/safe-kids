// animação suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", evt => {
    evt.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
