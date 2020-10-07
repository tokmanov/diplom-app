import React from 'react';

const Menu = ()=>{
    return(

    <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                    <div className="header__humberger">
                        <i className="fa fa-bars humberger__open"></i>
                    </div>
                </div>
                <div className="col-lg-8 col-md-10 order-md-2 order-3">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="./index.html">Главная</a></li>
                            <li><a href="#">Рецепты</a>
                                <div className="header__megamenu__wrapper">
                                    <div className="header__megamenu">
                                        <div className="header__megamenu__item">
                                            <div className="header__megamenu__item--pic set-bg"
                                                 data-setbg="img/megamenu/p-1.jpg">
                                                <div className="label">Vegan</div>
                                            </div>
                                            <div className="header__megamenu__item--text">
                                                <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="header__megamenu__item">
                                            <div className="header__megamenu__item--pic set-bg"
                                                 data-setbg="img/megamenu/p-2.jpg">
                                                <div className="label">Vegan</div>
                                            </div>
                                            <div className="header__megamenu__item--text">
                                                <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="header__megamenu__item">
                                            <div className="header__megamenu__item--pic set-bg"
                                                 data-setbg="img/megamenu/p-3.jpg">
                                                <div className="label">Vegan</div>
                                            </div>
                                            <div className="header__megamenu__item--text">
                                                <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="header__megamenu__item">
                                            <div className="header__megamenu__item--pic set-bg"
                                                 data-setbg="img/megamenu/p-4.jpg">
                                                <div className="label">Vegan</div>
                                            </div>
                                            <div className="header__megamenu__item--text">
                                                <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="header__megamenu__item">
                                            <div className="header__megamenu__item--pic set-bg"
                                                 data-setbg="img/megamenu/p-5.jpg">
                                                <div className="label">Vegan</div>
                                            </div>
                                            <div className="header__megamenu__item--text">
                                                <h5><a href="#">How to Make a Milkshake With Any Ice Cream ...</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Dinner</a></li>
                            <li><a href="#">Desserts</a></li>
                            <li className="dropdown"><a href="#">Pages</a>
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
                </div>
                <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                    <div className="header__search">
                        <i className="fa fa-search search-switch"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Menu;