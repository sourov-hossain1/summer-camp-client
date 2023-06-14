import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Extra.css'
import "swiper/css";
import "swiper/css/pagination";
const Extra = () => {
    return (
        <div className="my-8">
            <h2 className="text-3xl text-center my-4">Learn More</h2>
            <p className="border-0 border-b-4 mb-5 w-1/4 mx-auto"></p>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className="h-[200px] swiper-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYolnhjBcmRpBET0VvG0hjSyaAN3KFt0qgWQ&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[200px] swiper-img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8oxcEvdZ_JeQxkwPbA6JUWjq1M3ndDEZ_Q&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[200px] swiper-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYolnhjBcmRpBET0VvG0hjSyaAN3KFt0qgWQ&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[200px] swiper-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8oxcEvdZ_JeQxkwPbA6JUWjq1M3ndDEZ_Q&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[200px] swiper-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYolnhjBcmRpBET0VvG0hjSyaAN3KFt0qgWQ&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[200px] swiper-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8oxcEvdZ_JeQxkwPbA6JUWjq1M3ndDEZ_Q&usqp=CAU" alt="" /></SwiperSlide>
            </Swiper> F
        </div>
    );
};

export default Extra;