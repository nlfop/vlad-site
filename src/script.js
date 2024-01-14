import './pages/index.css';
import Swiper from "swiper"; //А стили импортируются index.css

new Swiper('.swiper-container', {
    loop: true,
    //spaceBetween: 0,
    autoplay: {
        delay: 4000,
      },
    //initialSlide: 1, //Слайд с которго начать
});

const questions = document.querySelectorAll(".question__button")
questions.forEach((qstn) => {
    qstn.addEventListener('click', () =>{
        const text = qstn.nextElementSibling;
        if (text.classList.contains('close')){
            // qstn.textContent = "⌄"
            qstn.style.transform = "rotate(90deg)";
            text.classList.remove('close');
        }
        else{
            qstn.style.transform = "rotate(0)";
            text.classList.add('close');
        }
    })
})