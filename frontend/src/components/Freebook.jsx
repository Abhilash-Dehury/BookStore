import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import list from "../../data/list.json";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter((item) => item.category === "Free");

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl">Free offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            distinctio ipsa possimus reprehenderit et, vero harum sed omnis
            itaque corporis velit, est dolor, cum quod eius aut ea? Id, modi!
          </p>
        </div>
        <div className="slider-container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {filterData.map((item) => (
              <SwiperSlide >
                <Cards item={item} id={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Freebook;
