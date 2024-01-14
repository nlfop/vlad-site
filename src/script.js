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