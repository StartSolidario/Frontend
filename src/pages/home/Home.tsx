import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper bg bg-[#2B4042] "
      >

        <SwiperSlide className='border-radius: 0.25rem border-color: rgb(77 124 15)'>
          <div className='item-center text-center bg-white border-radius: 0.25rem border-color: rgb(77 124 15)'><Link to='/Viagens' ><img src="https://ik.imagekit.io/n36igvlzz/Para2.jpg?updatedAt=1725547680944" /> </Link> Pará - Este estado tem uma das maiores taxas de insegurança alimentar severa, com 20,3% dos lares enfrentando fome</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border rounded item-center text-center bg-white border-radius: 0.25rem border-color: rgb(77 124 15);'><Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Ceara.webp?updatedAt=1725547680763" /></Link> Ceará - Sofre com secas prolongadas, o que agrava a situação da agricultura e a segurança alimentar.</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item-center text-center bg-white border-radius: 0.25rem border-color: rgb(77 124 15);'><Link to='/Viagens' ><img src="https://ik.imagekit.io/n36igvlzz/Pernambuco.jpg?updatedAt=1725547680414" /></Link>Pernambuco - Enfrenta problemas econômicos e climáticos, com muitas áreas atingidas por insegurança alimentar.</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item-center text-center bg-white border-radius: 0.25rem border-color: rgb(77 124 15);'><Link to='/Viagens' ><img src="https://ik.imagekit.io/n36igvlzz/Piaui.webp?updatedAt=1725547678873" /></Link>Piauí - Apresenta alta vulnerabilidade socioeconômica, com muitas famílias enfrentando insegurança alimentar severa.</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item-center text-center bg-white border-radius: 0.25rem border-color: rgb(77 124 15);'><Link to='/Viagens'><img src="https://ik.imagekit.io/n36igvlzz/Bahia.webp?updatedAt=1725547558838" /></Link>Bahia - A seca severa tem impactado diversas regiões, resultando em problemas econômicos e de abastecimento de água.</div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Link to='/Viagens'><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens'><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens'><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens'><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></Link>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Home