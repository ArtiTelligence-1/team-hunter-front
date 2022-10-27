import { List, Row, Space } from 'antd';
// import Row from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import { BannerSrcIcon, CompareSrcIcon, HeartSrcIcon, SearchSrcIcon } from '../../components/ImgLoader';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList';

import test from "../../static/img/product/product-1.jpg";
import Hero from './hero-component';

const Home = () => {
  return (
    <div className="layout-body">
      <section className="hero">
          <Hero />
      </section>
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <BannerSrcIcon />
                </div>
                <div className="banner__item__text">
                  <h2>Clothing Collections 2030</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <li className="active" data-filter="*">Best Sellers</li>
                <li data-filter=".new-arrivals">New Arrivals</li>
              </ul>
            </div>
          </div>
          <ProductList />
        </div>
      </section>
    </div>
  );
}

export default Home;