import Image from "next/image";
import './style.css';
import Element from '../../public/icon/element.svg';
import Elements from '../../public/icon/elements.svg';
import Shop from '../../public/image/shop.png'
import Shop2 from '../../public/image/shop2.png'
import Shop3 from '../../public/image/shop3.png'
import Shop4 from '../../public/image/shop4.png'
import Shop5 from '../../public/image/shop5.png'
import Shop6 from '../../public/image/shop6.png'
import Card from "@/components/Catd";

export default async function Home() {

  const PRODUCTS_URL = 'http://localhost:5000/products';
  const products = (await (await fetch(PRODUCTS_URL)).json()).data || [];
  console.log(products);
  
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <h3 className="hero__title">More than
            just a game.
            It’s a lifestyle.</h3>
          <p className="hero__text">Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
          <button className="hero__btn">Shopping Now</button>
        </div>
      </section>

      <section className="product">
        <div className="container product__container">
          <div className="product__content">
            <h2 className="product__title">Featured</h2>
            <div className="product__icon">
              <button><Image src={Element}></Image></button>
              <button><Image src={Elements}></Image></button>
              <button><Image src={Elements}></Image></button>
            </div>
          </div>
          <div className="product__card">
          {products.map((product) => (<Card key={product.id} product={product} />))}
          </div>
        </div>
      </section>

      <section className="shop">
        <div className="container shop__container">
          <h2 className="shop__title">Shop by Categories</h2>
          <div className="shop__content">
            <div className="shop__card">
              <Image className="shop__image" src={Shop}></Image>
              <h3 className="shop__sub-title">Golf Clubs</h3>
            </div>
            <div className="shop__card">
              <Image className="shop__image" src={Shop2}></Image>
              <h3 className="shop__sub-title">Golf Balls</h3>
            </div>
            <div className="shop__card">
              <Image className="shop__image" src={Shop3}></Image>
              <h3 className="shop__sub-title">Golf Bags</h3>
            </div>
          </div>
          <div className="shop__content">
            <div className="shop__card">
              <Image className="shop__image" src={Shop4}></Image>
              <h3 className="shop__sub-title">Clothing & Rainwear</h3>
            </div>
            <div className="shop__card">
              <Image className="shop__image" src={Shop5}></Image>
              <h3 className="shop__sub-title">Footwear</h3>
            </div>
            <div className="shop__card">
              <Image className="shop__image" src={Shop6}></Image>
              <h3 className="shop__sub-title">Accessories</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
