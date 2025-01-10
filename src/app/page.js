import Image from "next/image";
import Link from "next/link";
import './style.css';
import Element from '../../public/icon/element.svg';
import Elements from '../../public/icon/elements.svg';
import Shop from '../../public/image/shop.png';
import Shop2 from '../../public/image/shop2.png';
import Shop3 from '../../public/image/shop3.png';
import Shop4 from '../../public/image/shop4.png';
import Shop5 from '../../public/image/shop5.png';
import Shop6 from '../../public/image/shop6.png';
import Card from "@/components/Catd";
import Arrow from '../../public/icon/arrow.svg';
import Latest from '../../public/image/latest.png'
import Latest2 from '../../public/image/latest2.png';
import Latest3 from '../../public/image/latest3.png';
import Mesaage from '../../public/icon/message.svg';
import Newsfeed from '../../public/image/newsfeed.png';
import Newsfeed2 from '../../public/image/newsfeed2.png';
import Newsfeed3 from '../../public/image/newsfeed3.png';
import Newsfeed4 from '../../public/image/newsfeed4.png';
import Newsfeed5 from '../../public/image/newsfeed5.png';
import Newsfeed6 from '../../public/image/newsfeed6.png';

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

      <section className="collection">
        <div className="container collection__container">
          <h2 className="collection__title">Shop Collection</h2>
          <div className="collection__content">
            <div className="collection__card">
              <h3 className="collection__sub-title">Juniors Set</h3>
              <Link className="collection__link" href=''>Collections <Image className="collection__icon" src={Arrow}></Image></Link>
              <span className="collection__span"></span>
            </div>
            <div className="collection__block">
              <div className="collection__card2">
                <h3 className="collection__sub2-title">Men’s Set</h3>
                <Link className="collection__link2" href=''>Collections <Image className="collection__icon" src={Arrow}></Image></Link>
                <span className="collection__span2"></span>
              </div>
              <div className="collection__card3">
                <h3 className="collection__sub3-title">Women’s Set</h3>
                <Link className="collection__link3" href=''>Collections <Image className="collection__icon" src={Arrow}></Image></Link>
                <span className="collection__span3"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest">
        <div className="container latest__container">
          <div className="latest__content">
            <h2 className="latest__title">Latest Articles</h2>
            <div className="latest__block">
              <Link className="latest__link" href=''>View More <Image className="latest__icon" src={Arrow}></Image></Link>
              <span className="latest__span"></span>
            </div>
          </div>
          <div className="latest__content2">
            <div className="latest__card">
              <Image className="latest__image" src={Latest}></Image>
              <h3 className="latest__sub-title">Air Jordan x Travis Scott Event</h3>
              <Link className="latest__link" href=''>Read More <Image className="latest__icon" src={Arrow}></Image></Link>
              <span className="latest__span"></span>
            </div>
            <div className="latest__card">
              <Image className="latest__image" src={Latest2}></Image>
              <h3 className="latest__sub-title">Air The timeless classics on the green</h3>
              <Link className="latest__link" href=''>Read More <Image className="latest__icon" src={Arrow}></Image></Link>
              <span className="latest__span"></span>
            </div>
            <div className="latest__card">
              <Image className="latest__image" src={Latest3}></Image>
              <h3 className="latest__sub-title">The 2023 Ryder Cup</h3>
              <Link className="latest__link" href=''>Read More <Image className="latest__icon" src={Arrow}></Image></Link>
              <span className="latest__span"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="our">
        <div className="container our__container">
          <h2 className="our__title">Join Our Newsletter</h2>
          <h3 className="our__sub-title">Sign up for deals, new products and promotions</h3>
          <div className="our__form">
            <Image className="our__image" src={Mesaage}></Image>
            <input className="our__input" type="text" placeholder="Email address"></input>
            <p className="our__signup">Signup</p>
          </div>
          <span className="our__span"></span>
        </div>
      </section>

      <section className="newsfeed">
        <div className="container newsfeed__container">
          <h3 className="newsfeed__sub-title">newsfeed</h3>
          <h2 className="newsfeed__title">Instagram</h2>
          <p className="newsfeed__text">Follow us on social media for more discount & promotions</p>
          <Link className="newsfeed__link" href=''>@3legant_official</Link>
        </div>
        <div className="newsfeed__block">
          <Image className="newsfeed__image" src={Newsfeed}></Image>
          <Image className="newsfeed__image" src={Newsfeed2}></Image>
          <Image className="newsfeed__image" src={Newsfeed3}></Image>
          <Image className="newsfeed__image" src={Newsfeed4}></Image>
          <Image className="newsfeed__image" src={Newsfeed5}></Image>
          <Image className="newsfeed__image" src={Newsfeed6}></Image>
        </div>
      </section>
    </>
  );
}
