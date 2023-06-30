import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

function Invite() {
  return (
    <div className="w-screen">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={a}
              alt=""
              className="h-screen w-screen object-cover z-0 brightness-50"
            />
            <div className="absolute p-4 top-0 left-0 w-full h-full text-white text-center items-center flex flex-col justify-center">
              <h1 className="font-dancing text-5xl mb-6">Anisa & Deni</h1>
              <div className="text flex flex-row justify-center items-center gap-3">
                <div className="date flex flex-col ">
                  <h1 className="text-2xl mt-2">09</h1>
                  <h1 className="text-2xl mt-2">07</h1>
                  <h1 className="text-2xl mt-2">2023</h1>
                </div>
                <div className="slice border border-l-2 h-16"></div>
                <div className="qoutes">
                  <q>
                    Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya
                    kamu mengingat kebesaran Allah. (Q.S. Adz-Dzariyat: 49)
                  </q>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={b}
              alt=""
              className="h-screen w-screen object-cover z-0 brightness-50"
            />
            <div className="absolute p-4 top-0 left-0 w-full h-full text-white text-center items-center flex flex-col justify-center">
              <h1 className="font-dancing text-5xl mb-6">Anisa & Deni</h1>
              <div className="text flex flex-row justify-center items-center gap-3">
                <div className="date flex flex-col ">
                  <h1 className="text-2xl mt-2">09</h1>
                  <h1 className="text-2xl mt-2">07</h1>
                  <h1 className="text-2xl mt-2">2023</h1>
                </div>
                <div className="slice border border-l-2 h-16"></div>
                <div className="qoutes">
                  <q>
                    Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya
                    kamu mengingat kebesaran Allah. (Q.S. Adz-Dzariyat: 49)
                  </q>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Invite;
