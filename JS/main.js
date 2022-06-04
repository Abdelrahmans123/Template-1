$(document).ready(function(){
    $(".links").click(
        function(){
            $(".links__lists").toggle();
        }
    )
})
const scrolToTop = window.document.querySelector('.upLink');

scrolToTop.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: '0',
  });
});

window.addEventListener('scroll', () => {
  // window.console.log(window.scrollY > window.innerHeight);

  if (window.scrollY > window.innerHeight) {
    // window.console.log('yes');
    scrolToTop.classList.remove('hidden');
  } else {
    scrolToTop.classList.add('hidden');
  }
});