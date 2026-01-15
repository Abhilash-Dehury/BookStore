import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import { useState,useEffect } from "react";
import Cards from "./Cards";

const Freebook = () => {
  const [book,setBook]=useState([]);
    useEffect(()=>{
      const getBook=async()=>{
        try{
          const res=await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data.filter((item) => item.category === "Free"));
        }catch(err){
          console.log("Error:",err);
        }
      }
     getBook();
    },[])
 

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
            {book.map((item) => (
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
