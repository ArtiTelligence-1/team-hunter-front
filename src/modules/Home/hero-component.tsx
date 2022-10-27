import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

  
const Hero = () => {
  const importAll = async (require: __WebpackModuleApi.RequireContext): Promise<string[]> => 
    Promise.all(require.keys().map((value) => require(value)));

  let [heroes, setHeroes] = useState<string[]>();
  
  useEffect(() => {
    importAll(require.context('../../static/img/hero', false, /\.(png|jpe?g|svg)$/, 'lazy')).then( e => 
      setHeroes(e)
    );
  }, []);

  return heroes === undefined ? <Loader /> : (
    <Swiper
      className="hero__slider"
      modules={[Navigation, Autoplay, Pagination]}
      // navigation
      autoplay
      loop
      pagination={{ clickable: true }}
    >
      { heroes.map(item => (
        <SwiperSlide>
          <div className="hero__items set-bg active" style={{ backgroundImage: `url(${item})` }} data-setbg={item}>
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                    commitment to exceptional quality.</p>
                    <Link to="." className="primary-btn">
                      Shop now
                      <span className="arrow_right" />
                    </Link>
                    <div className="hero__social">
                      <Link to="."><i className="fa fa-facebook" /></Link>
                      <Link to="."><i className="fa fa-twitter" /></Link>
                      <Link to="."><i className="fa fa-pinterest" /></Link>
                      <Link to="."><i className="fa fa-instagram" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;