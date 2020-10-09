import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="45656465"
            title="The lean startup"
            price={29.99}
            image="https://miro.medium.com/max/672/0*s3P60uHNCgIndxtR.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with alexa, Charcoal Fabric"
            price={98.99}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Siver (4th Generation)"
            price={328.99}
            image="https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="This smart TV connects you to some of the most popular video and movie streaming apps to date."
            price={1200}
            image="https://images-na.ssl-images-amazon.com/images/I/71tN5cFBvFL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="3254354345"
            title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card"
            price={449.99}
            image="https://m.media-amazon.com/images/I/61445UADu9L._AC_UL320_.jpg"
            rating={4}
          />

          <Product
            id="3254354345"
            title="PlayStation 4 Slim 1TB Limited Edition Console - Days of Play Bundle
            4.8 out of 5 stars"
            price={388.99}
            image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="GoSports 6’ x 3’ Mid-Size Table Tennis Game Set | Indoor / Outdoor Portable Table Tennis Game with Net, 2 Table Tennis Paddles and 4 Balls, Red"
            price={46.35}
            image="https://m.media-amazon.com/images/I/81weGdVl1KL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with alexa, Charcoal Fabric"
            price={98.99}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with alexa, Charcoal Fabric"
            price={98.99}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="GoSports 6’ x 3’ Mid-Size Table Tennis Game Set | Indoor / Outdoor Portable Table Tennis Game with Net, 2 Table Tennis Paddles and 4 Balls, Red"
            price={46.35}
            image="https://m.media-amazon.com/images/I/81weGdVl1KL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="GoSports 6’ x 3’ Mid-Size Table Tennis Game Set | Indoor / Outdoor Portable Table Tennis Game with Net, 2 Table Tennis Paddles and 4 Balls, Red"
            price={46.35}
            image="https://m.media-amazon.com/images/I/81weGdVl1KL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="PlayStation 4 Slim 1TB Limited Edition Console - Days of Play Bundle
            4.8 out of 5 stars"
            price={388.99}
            image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="PlayStation 4 Slim 1TB Limited Edition Console - Days of Play Bundle
            4.8 out of 5 stars"
            price={388.99}
            image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
