import React from 'react'; 
import logo2 from '../../images/logo2.png'; 
import pizza2 from '../../images/pizza2.png';
import margarita from '../../images/margarita.png';
import prshuto from '../../images/prshuto1.png';
import kapri from '../../images/kapri.png';
import kalcone from '../../images/kalcone.png';
import napolitana from '../../images/napolitana.png';
import kaprivrat from '../../images/kaprivrat.png';
import kulen from '../../images/kulen.png';
import vafli from '../../images/vafli.png';
import palacinki from '../../images/palacinki.png';
import oliva from '../../images/oliva.png';
import psendvic from '../../images/psendvic.png';
import kvatroS from '../../images/kvatro-s.png';
import skopje from '../../images/skopje.png';
import peperoni from '../../images/peperoni.png';
import lapizzameni from '../../images/lapizzameni.png';
import vege from '../../images/vege.png';
import vezuvio from '../../images/vezuvio.png';
import kratovska from '../../images/kratovska.png';
import veleska from '../../images/veleska.png';
import skopska from '../../images/skopska.png';
import stipska from '../../images/stipska.png';
import pileska from '../../images/pileska.png';
import menipdf from '../../images/menipdf.pdf';
import { Hamburger } from '../components/Hamburger';
import styles from './styles.module.scss';
import Menuprintpizza from './components/menuprintpizza';
import Menuprintpastr from './components/menuprintpastr';
import Menups from './components/menups';

export const MenuPage = () => {

  return (

    <>
    <div className={styles.Container}>
      <div className={styles.Meni}>
      
        <div className={styles.parentNav}>
          <Hamburger true3 />
        </div>
        <header className={styles.parent}>
          <a
            href="/"
            alt="LaPizza"
          >
            <img
              src={logo2}
              alt="LaPizza"
            />
          </a>
          <nav>
            <ul className={styles.UL}>
              <li><a href="/">Почетна</a></li>
              <li><a href="/menu">Мени</a></li>
              <li><a href="/#zanas">За Нас</a></li>
              
            </ul>
          </nav>
          <a
            className={styles.cta}
            href="#kontakt"
            alt="LaPizza"
          ><p>Контакт</p>
          </a>
        </header>

        <div className={styles.tekst10}>
          
          <span className={styles.text4}>Мени</span>

        </div>
      </div>
      <div className={styles.Napomena}>
        <div className={styles.triangleleft}> <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="white"
          className={styles.svgcircle}
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                              </svg>
        </div>
  
        <h1>Напомена!</h1><br />
        <h4>Доставата до било која населба е бесплатна, меѓутоа постои одредена минимална сума. 
        </h4><br />
        <h4>За повеќе информации ве молиме исконтактирајте не.</h4>
      </div>
      <div className={styles.Cmenipdf}>
        <a
          className={styles.menipdf}
          href={menipdf}
          download="Menu"
          target="_blank"
          rel="noopener noreferrer"
          alt="LaPizza"
        >Превземи мени во PDF формат.
        </a>
      </div>
      <div className={styles.pici}>
        <span className={styles.ZostoLaTekst}>Пици</span> 
        <Menuprintpizza
          img={peperoni}
          names="Ла Хот Пица"
          sostav="Доматен сос (чили), кашкавал, кулен, феферони, лук"
          priceSmall="300 ден."
          priceBig="440 ден."
        />

        <Menuprintpizza
          img={vezuvio}
          names="Везувио"
          sostav="Доматен сос, кашкавал, шунка"
          priceSmall="230 ден."
          priceBig="350 ден."
        />
      
        <Menuprintpizza
          img={pizza2}
          names="Туна"
          sostav="Доматен сос, кашкавал, туна, маслинки, печурки, рукола, пченка"
          priceSmall="260 ден."
          priceBig="450 ден."
        />

        <Menuprintpizza
          img={skopje}
          names="Скопје"
          sostav="Доматен сос, кашкавал, сланина, јајце, кромид"
          priceSmall="270 ден."
          priceBig="400 ден."
        />

        <Menuprintpizza
          img={kvatroS}
          names="Кватро-Стаџоне"
          sostav="Доматен сос, кашкавал, сланина, кулен, пршут, суво домашно димено месо"
          priceSmall="370 ден."
          priceBig="500 ден."
        />

        <Menuprintpizza
          img={margarita}
          names="Маргарита"
          sostav="Доматен сос, кашкавал"
          priceSmall="210 ден."
          priceBig="320 ден."
        />

        <Menuprintpizza
          img={oliva}
          names="Олива"
          sostav="Доматен сос, кашкавал, моцарела, маслинки"
          priceSmall="250 ден."
          priceBig="450 ден."
        />

        <Menuprintpizza
          img={prshuto}
          names="Пршуто"
          sostav="Доматен сос, кашкавал, пршута, рукола, пармезан"
          priceSmall="330 ден."
          priceBig="450 ден."
        />
       
        <Menuprintpizza
          img={kaprivrat}
          names="Капри Врат"
          sostav="Доматен сос, кашкавал, врат, печурки"
          priceSmall="270 ден."
          priceBig="420 ден."
        />

        <Menuprintpizza
          img={kulen}
          names="Пеперони"
          sostav="Доматен сос, кашкавал, кулен"
          priceSmall="270 ден."
          priceBig="400 ден."
        />

        <Menuprintpizza
          img={lapizzameni}
          names="Ла Пица"
          sostav="Доматен сос, кашкавал, врат, сланина, печурки, кајмак"
          priceSmall="370 ден."
          priceBig="500 ден."
        />

        <Menuprintpizza
          img={vege}
          names="Вегетаријана"
          sostav="Доматен сос, кашкавал, пиперка, кромид, маслинки, печурки, домат"
          priceSmall="270 ден."
          priceBig="400 ден."
        />

        <Menuprintpizza
          img={kapri}
          names="Капричиоза"
          sostav="Доматен сос, кашкавал, шунка, печурки"
          priceSmall="250 ден."
          priceBig="370 ден."
        />

        <Menuprintpizza
          img={napolitana}
          names="Наполитана"
          sostav="Доматен сос, кашкавал, печурки"
          priceSmall="230 ден."
          priceBig="350 ден."
        />

      </div>
      <div className={styles.pastr}> 
        <span className={styles.ZostoLaTekst}>Пастрмајлии</span> 

        <Menuprintpastr
          img={kratovska}
          names="Кратовска"
          sostav="Суво домашно димено месо, зачин"
          price="280 ден."
        />

        <Menuprintpastr
          img={veleska}
          names="Велешка"
          sostav="Свинско месо, јајце, зачин"
          price="270 ден."
        />
       
        <Menuprintpastr
          img={skopska}
          names="Скопска"
          sostav="Свинско месо, јајце, кашкавал, зачин"
          price="300 ден."
        />

        <Menuprintpastr
          img={stipska}
          names="Штипска"
          sostav="Свинско месо, зачин"
          price="250 ден."
        />

        <Menuprintpastr
          img={pileska}
          names="Пилешка"
          sostav="Пилешко месо, зачин"
          price="230 ден."
        />

      </div>
      <div className={styles.pastr}> 
        <span className={styles.ZostoLaTekst}>Калцоне</span> 
        
        <Menups
          img={kalcone}
          names="Калцоне"
          sostav="Шунка, кашкавал, печурки, доматен сос"
          price="150 ден."
        />

      </div>

      <div className={styles.pastr}> 
        <span className={styles.ZostoLaTekst}>Пица Сендвич</span> 
        
        <Menups
          img={psendvic}
          names="Пица Сендвич"
          sostav="Шунка, кашкавал, марула, домат, павлака, мајонез"
          price="150 ден."
        />

      </div>

      <div className={styles.pastr}> 
        <span className={styles.ZostoLaTekst}>Десерти</span> 
        
        <Menups
          img={vafli}
          names="Вафли"
          sostav="Нутела, чоколаден прелив"
          price="120 ден."
        />

        <Menups
          img={palacinki}
          names="Палачинки"
          sostav="Нутела, чоколаден прелив"
          price="120 ден."
        />
  
      </div>
      <div
        className={styles.Footer}
        id="kontakt"
      >
        <div className={styles.inline}>
          <div className={styles.GoogleMap}>
            <iframe
              title="LaPizza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.5117076021638!2d21.46668074614379!3d41.98178661259898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a17af45a5f%3A0x36d4d68a7ac211f!2sLa%20Pizza%20Aerodrom%20-%20Pizza%20Delivery!5e0!3m2!1sen!2smk!4v1611716583601!5m2!1sen!2smk"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
          <div className={styles.Kontakt}>

            <div className={styles.Navigacija}>
              <h2>Навигација</h2>
         
              <p><a
                href="/"
                alt="La pizza"
              >Почетна
              </a>
              </p>
              <p><a
                href="/#zanas"
                alt="La pizza"
              >За Нас
              </a>
              </p>
              <p><a
                href="/menu"
                alt="La pizza"
              >Мени
              </a>
              </p>
       
            </div>

            <div className={styles.Konts}>
              <h2>Контакт</h2>
      
              <span className={styles.Adresa}><p id={styles.fill}>Адреса:</p> <p id={styles.notfill}>Бул. Јане Сандански 98</p></span>
              <span className={styles.Adresa}><p id={styles.fill}>Телефонски број: </p><p id={styles.notfill}> +389 72 57 57 56</p></span>
              <span className={styles.Adresa}><p id={styles.fill}>Е-маил: </p><p id={styles.notfill}>lapizza@hotmail.com</p></span>
              <a
                className={styles.FBSVG}
                href="https://www.facebook.com/lapizzaskopje/"
                target="_blank"
                rel="noopener noreferrer"
              ><svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook"
                className="svg-inline--fa fa-facebook fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              ><path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
               </svg>
              </a>

              <a
                className={styles.FBSVG}
                href="https://www.instagram.com/lapizzamk/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  height="50px"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="svg-inline--fa fa-instagram fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                ><path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
 
            </div>
          </div>
        </div>
      </div>
 
      <div className={styles.Rights}>
        © 2021 All Rights Reserved | LaPizza.com
      </div>
      
    </div>

  </>

  );
};
