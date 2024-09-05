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
      >Viagens
        
        <SwiperSlide>
          <Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Para2.jpg?updatedAt=1725547680944" />Pará - Este estado tem uma das maiores taxas de insegurança alimentar severa, com 20,3% dos lares enfrentando fome </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Ceara.webp?updatedAt=1725547680763" />Ceará - Sofre com secas prolongadas, o que agrava a situação da agricultura e a segurança alimentar.
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Pernambuco.jpg?updatedAt=1725547680414" />Pernambuco - Enfrenta problemas econômicos e climáticos, com muitas áreas atingidas por insegurança alimentar.
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Piaui.webp?updatedAt=1725547678873" />Piauí - Apresenta alta vulnerabilidade socioeconômica, com muitas famílias enfrentando insegurança alimentar severa.
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Viagens' className='text-center bg-white'><img src="https://ik.imagekit.io/n36igvlzz/Bahia.webp?updatedAt=1725547558838" />Bahia - A seca severa tem impactado diversas regiões, resultando em problemas econômicos e de abastecimento de água.
          </Link>
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