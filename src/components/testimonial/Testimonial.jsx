import React ,{useEffect,useState}from "react";
import "./testimonial.css";
import AVTRI from '../../assets/img.jpg'
import Tesify from "../testify/testify"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonial = () => {
var [testimony ,setTestimony]=useState([{
  testimonyMessage:"",
  clientEmail:"",
  clientName:""
}]);

useEffect(()=>{

  fetch("https://ojongomema.cyclic.app/users/get/testimonies",{method:"GET"})
  .then(function(res){
    return res.json();
  }).then(function(data){
    setTestimony(data);
  })

},[]);



  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {/*modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}*/}

{testimony.map(function(testi){
return(
<SwiperSlide className="testimonial" key={testi._id}>
<div className="client__avatar">
  <img src={AVTRI} alt="avatar" />
</div>
<h5 className="client__name">{testi.clientName}</h5>
<h5 className="client__name">{testi.clientEmail}</h5>
<small className="client__review">
{testi.testimonyMessage}
</small>
</SwiperSlide>
);

})}
      </Swiper>
      <Tesify  />
    </section>
  );
};
export default Testimonial;
