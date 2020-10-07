import React from 'react';

const HumbergerMenu = ()=>{
    return (
    <div>
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
                <a href="./hoindexme.html"><img src="img/humberger/humberger-logo.png" alt=""/></a>
            </div>
            <nav className="humberger__menu__nav mobile-menu">
                <ul>
                    <li><a href="./index.html">Главная</a></li>
                    <li><a href="#">Рецепты</a></li>
                    <li><a href="#">Обед</a></li>
                    <li><a href="#">Десерты</a></li>
                    <li className="dropdown"><a href="#">Страницы</a>
                        <ul className="dropdown__menu">
                            <li><a href="./categories-grid.html">Categories Grid</a></li>
                            <li><a href="./categories-list.html">Categories List</a></li>
                            <li><a href="./single-post.html">Single Post</a></li>
                            <li><a href="./signin.html">Sign In</a></li>
                            <li><a href="./404.html">404</a></li>
                            <li><a href="./typography.html">Typography</a></li>
                        </ul>
                    </li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="humberger__menu__about">
                <div className="humberger__menu__title sidebar__item__title">
                    <h6>About me</h6>
                </div>
                <img src="img/humberger/humberger-about.jpg" alt=""/>
                    <h6>Hi every one! I,m Lena Mollein.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua.</p>
                    <div className="humberger__menu__about__social sidebar__item__follow__links">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-envelope-o"></i></a>
                    </div>
            </div>
            <div className="humberger__menu__subscribe">
                <div className="humberger__menu__title sidebar__item__title">
                    <h6>Subscribe</h6>
                </div>
                <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                <form action="#">
                    <input type="text" className="email-input" placeholder="Your email"/>
                        <label htmlFor="agree-check">
                            I agree to the terms & conditions
                            <input type="checkbox" id="agree-check"/>
                                <span className="checkmark"></span>
                        </label>
                        <button type="submit" className="site-btn">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default HumbergerMenu;