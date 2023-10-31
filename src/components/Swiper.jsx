import { Swiper, SwiperSlide } from "swiper/react";
// import {  } from 'swiper/modules';
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "./styles.css";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Swiper
      loop={true}
      autoplay={true}
      modules={[Autoplay, EffectFade]}
      className=" mySwiper"
      effect="fade"
    >
      <SwiperSlide>
        <div className="">
          <Link to="/product">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Sponsor-P7-BHPC-upto60%20(1).jpg"
              alt="SastoBazaar"
              className="object-fill w-full h-[250px] sm:h-[200px] md:h-full "
            />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen">
          <Link to="/product">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Main-P2-LevisArbunore-Flat60.jpg"
              alt="SastoBazaar"
              className="object-fill w-full h-[250px] sm:h-[200px] md:h-full "
            />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen">
          <Link to="/product">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Main-P6-JohnPlayersLeeCooper-Starting499.jpg"
              alt="SastoBazaar"
              className="object-fill w-full h-[250px] sm:h-[200px] md:h-full "
            />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen">
          <Link to="/product">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-D-Main-P4-ONLYJackJones-Min60extra35.jpg"
              alt="SastoBazaar"
              className="object-fill w-full h-[250px] sm:h-[200px] md:h-full "
            />
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
