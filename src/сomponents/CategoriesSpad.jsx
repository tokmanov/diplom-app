import React from 'react';

const CategoriesSpad = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" style={{backgroundImage: "url(img/categories/cat-1.jpg)"}}>
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" style={{backgroundImage: "url(img/categories/cat-2.jpg)"}}>
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" style={{backgroundImage: "url(img/categories/cat-3.jpg)"}}>
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="categories__item set-bg" style={{backgroundImage: "url(img/categories/cat-4.jpg)"}}>
                        <div className="categories__hover__text">
                            <h5>Dinner</h5>
                            <p>28 articles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CategoriesSpad;