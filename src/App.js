import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./сomponents/ Menu";
import HumbergerMenu from './сomponents/HumbergerMenu';
import HeaderBtn from "./сomponents/HeaderBtn";
import Carousel from "./сomponents/Carousel";
import CategoriesSpad from "./сomponents/CategoriesSpad";
import CategoriesPost from "./сomponents/CategoriesPost";
import Footer from "./сomponents/Footer";

function App() {
  return (
<>
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <div className="humberger__menu__overlay"></div>
  <HumbergerMenu/>

  <header class="header">
    <Menu/>
    <HeaderBtn/>
  </header>


  <section class="hero">
      <Carousel/>
  </section>


  <section class="categories spad">
    <CategoriesSpad/>
    <CategoriesPost/>
  </section>


    <Footer/>
</>
 );

}

export default App;
