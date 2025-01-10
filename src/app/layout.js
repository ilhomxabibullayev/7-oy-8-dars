import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import './layout.css';
import Link from "next/link";
import Logo from '../../public/image/logo.svg';
import Search from '../../public/icon/search.svg';
import User from '../../public/icon/user.svg';
import Cart from '../../public/icon/cart.svg';
import Logo2 from '../../public/icon/logo2.svg';
import Instagram from '../../public/icon/instagram.svg';
import Facebook from '../../public/icon/facebook.svg';
import Youtube from '../../public/icon/youtube.svg';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="nav">
          <div className="container nav__container">
            <Image src={Logo}></Image>
            <ul className="nav__list">
              <li className="nav__item">
                <Link className="nav__link" href='/'>Home</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href='/shop'>Shop</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href='/product'>Product</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" href='/contact-us'>Contact us</Link>
              </li>
            </ul>
            <div className="nav__icon">
              <Image src={Search}></Image>
              <Link href='/user'><Image src={User}></Image></Link>
              <Link href='/cart'><Image src={Cart}></Image></Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container footer__container">
            <div className="footer__block">
              <div className="footer__content">
                <Image src={Logo2}></Image>
                <p className="footer__text">More than just a game. It’s a lifestyle.</p>
                <div className="footer__image">
                  <Link href=''><Image src={Instagram}></Image></Link>
                  <Link href=''><Image src={Facebook}></Image></Link>
                  <Link href=''><Image src={Youtube}></Image></Link>
                </div>
              </div>
              <div className="footer__content2">
                <ul className="footer__list">
                  <h3 className="footer__sub-title">Page</h3>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Home</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Shop</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Product</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Articles</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Contact Us</Link>
                  </li>
                </ul>
                <ul className="footer__list">
                  <h3 className="footer__sub-title">Info</h3>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Shipping Policy</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Return & Refund</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>Support</Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" href=''>FAQs</Link>
                  </li>
                </ul>
                <ul className="footer__list">
                  <h3 className="footer__sub-title">Office</h3>
                  <li className="footer__item2">
                    <Link className="footer__link2" href=''>43111 Hai Trieu street,</Link>
                  </li>
                  <li className="footer__item2">
                    <Link className="footer__link2" href=''>District 1, HCMC</Link>
                  </li>
                  <li className="footer__item2">
                    <Link className="footer__link2" href=''>Vietnam</Link>
                  </li>
                  <Link className="footer__number" href=''>84-756-3237</Link>
                </ul>
              </div>
            </div>
            <span className="footer__span"></span>
            <div className="footer__block2">
              <h2 className="footer__title">Copyright © 2023 3legant. All rights reserved</h2>
              <div className="footer__block3">
                <h3 className="footer__sub2-title">Privacy Policy</h3>
                <h3 className="footer__sub2-title">Terms & Conditions</h3>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
