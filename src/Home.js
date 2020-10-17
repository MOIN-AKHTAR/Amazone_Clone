import React from 'react';
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner Image"
                className="home__image"
                aria-hidden
                />
                
            <div className="home_row">
                <Product
                id={1}
                title="The lean startup"
                price={29.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                alt="Product"
                 />
                <Product 
                id={2}
                title="Kenwood kMixStand Mixer for Baking, Stylish kitchen mixture with  K-beater ,Dough Hook and Whisk, 5 litre Glass Bowl"
                price={239}
                rating={4}
                image="https://m.media-amazon.com/images/I/71k-VhLpK5L._AC_UY218_.jpg"
                alt="Kenwood kMixStand Mixer"
                />
            </div>
            <div className="home_row">
            <Product 
                id={3}
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                alt="LED Gaming Monitor"
                />
                <Product 
                id={4}
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                alt="Amazon Echo (3rd generation)"
                />
                <Product 
                id={5}
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                alt="Apple iPad Pro"
                />
            </div>
            <div className="home_row">
               <Product 
               id={6}
               title="Sceptre 24-Inch Curved 144Hz Gaming LED Monitor Edge-Less AMD FreeSync DisplayPort HDMI, Machine Black (C248B-144RN)"
               price={154}
               rating={5}
               image="https://m.media-amazon.com/images/I/81VG9l7IC0L._AC_UY218_.jpg"
               alt="Gaming LED Monitor"
               />
            </div>
            </div>
        </div>
    )
}
