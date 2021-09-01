import React from 'react'; 
import Slider from 'infinite-react-carousel';
import './style.css'; 
import logo2 from '../../images/logo2.png';
import sostojki from '../../images/sostojki.png'; 
import dostava from '../../images/dostava.png';
import family from '../../images/family.png';
import zanas from '../../images/zanas.png';
import divider from '../../images/divider.png';
import mushroom from '../../images/mushroom.png';
import tomato from '../../images/tomato.png';
import garlic from '../../images/garlic.png';
import lettuce from '../../images/lettuce.png'; 
import fb from '../../images/fb.png';
import stars1 from '../../images/stars1.png'; 
import { Hamburger } from '../components/Hamburger';
import styles from './styles.module.scss';

export const HomePage = () => {
  
  const settings = {
    
    dots: false,
    duration: 40,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 12000,
    pauseOnHover: false,
    
  };
   
  const settingz = {
    dots: true,
    arrows: true,
    autoplay: false,
    duration: 100,
    pauseOnHover: false,
  };


  window.onload = function () {
   
     if (navigator.userAgent.search("Firefox") >= 0) { 
      document.getElementById('textsize').style.fontSize = "65px";
      document.getElementById('textsize1').style.fontSize = "65px";
      document.getElementById('textsize2').style.fontSize = "65px";
     console.log(`Firefox`)
   }
  
  }


  return (
    <>
  
      <div className={styles.divKlas}>
       
        <div className={styles.parentNav}>
          <Hamburger true2 />
        </div>
        <header className={styles.parent}>
          <a
            href="/"
            alt="lapizza"
          >
            <img
              src={logo2}
              alt="lapizza"
            />
          </a>
          <nav>
            <ul className={styles.UL}>
              <li><a
                href="/"
                alt="la pizza skopje"
              >Почетна
                  </a>
              </li>
              <li><a href="/menu"
                alt="la pizza skopje"
              >Мени
                  </a>
              </li>
              <li><a href="#zanas" alt="la pizza skopje">За Нас
                  </a>
              </li>
               
            </ul>
          </nav><a className={styles.cta}
            href="#kontakt"
            alt="la pizza skopje"
          ><p>Контакт</p>
          </a>
        </header>
        <Slider {...settings}>
  
          <div className={styles.eachSlide}>
  
            <div className={styles.tekst10}>
   
              <span className={styles.text1} id="textsize">Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <span className={styles.text3}>Добредојдовте во <span>LaPizza</span></span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
    
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
                alt="la pizza skopje"
              > <p>Мени  </p>
              </a>
            </div>
          </div>
   
          <div className={styles.test}>
           
            <div className={styles.tekst10}>
              <span className={styles.text1} id="textsize1">Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <span className={styles.text3}>Добредојдовте во <span>LaPizza</span></span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
                alt="la pizza skopje"
              > <p>Мени  </p>
              </a>
            </div>

            <div className={styles.eachSlide1} />
          </div>

          <div className={styles.test}>
       
            <div className={styles.tekst10}>
              <span className={styles.text1} id="textsize2">Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <span className={styles.text3}>Добредојдовте во <span>LaPizza</span></span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
                alt="la pizza skopje"
              > <p>Мени  </p>
              </a>
            </div>

            <div className={styles.eachSlide2} />
          </div>

        </Slider>
 
      </div>
  
      <div className={styles.ChapterTwo}>
        <img
          src={mushroom}
          className={styles.mushroom}
          alt="la pizza skopje"
        />
        <img
          src={tomato}
          className={styles.tomato}
          alt="la pizza skopje"
        />
        <img
          src={garlic}
          className={styles.garlic}
          alt="la pizza skopje"
        />
        <img
          src={lettuce}
          className={styles.lettuce}
          alt="la pizza mk"
        />
        <div className={styles.ZostoLa}>
          <div
            className={styles.ZsLa}
            id="zanas"
          >
            <img
              className={styles.ZsLaImg}
              src={zanas}
              alt="la pizza mk"
            />
            <div className={styles.ZostoContainer}>
              <div className={styles.Conta}> <span className={styles.ZostoLaTekst}>За Нас</span></div>
              <div className={styles.Contas}> <img
                src={divider}
                alt="la pizza mk"
              />
              </div>
  
              <span className={styles.SostojkiSpan}>Ла Пица постои од 2018 година и работи исклучиво со достава на храна. Нудиме брза и квалитетна услуга со љубезен персонал.
                <br />
                <br />
                Репроматеријалите со кои работиме се со декларација од прва класа, што значи дека квалитетот на производите е на највисоко ниво.
                <br />
                <br />
                Нашата цел е да се прошириме на цела територија на град Скопје и секој граѓанин да го дели еден повик од највкусната пица во градот, а притоа да го задржиме квалитетот!
              </span>
            </div>
          </div>
        </div>
        <div className={styles.ZostoLa}>
          
          <span className={styles.ZostoLaTekst}>Зошто LaPizza?</span>
        </div>
        <div className={styles.Contas}> <img
          src={divider}
          alt="divider"
        />
        </div>
        <div className={styles.Sostojki}>
     
          <div className={styles.SostojkiDiv}>
            <img
              className={styles.sstj}
              src={sostojki}
              alt="la pizza mk"
            />
            <div className={styles.sstDef}>
              <span className={styles.SostojkiNaslov}>Квалитет</span>
              <div className={styles.SostojkiDef}>
                <span className={styles.SostojkiSpan}>LaPizza како реномиран бренд од почетокот па до сега ги користи најквалитетните состојки и оригиналните италијански рецепти за правење пици.</span>
              </div>
            </div>
          </div>

          <div className={styles.DostavaDiv}>
            <img
              className={styles.sstj}
              src={dostava}
              alt="la pizza"
            />
            <div className={styles.sstDef}>
              <span className={styles.SostojkiNaslov}>Брза достава</span>
              <div className={styles.SostojkiDef}>
     
                <span className={styles.SostojkiSpan}>Зимајќи во предвид дека пицата е најубава кога е топла, Ние како тим секокаш се стремиме кон тоа за пицата да стигне кај вас во најбрз можен рок.</span>
              </div>
            </div>
          </div>

          <div className={styles.FamilyDiv}>
            <img
              className={styles.sstj}
              src={family}
              alt="la pizza"
            />
            <div className={styles.sstDef}>
              <span className={styles.SostojkiNaslov}>Посветеност</span>
              <div className={styles.SostojkiDef}>
     
                <span className={styles.SostojkiSpan}>Нашиот тим од искусни пица мајстори и доставувачи даваат се од себе за вашата нарачка да биде највкусна и доставена кај вас на време!</span>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.Back}>
          <span className={styles.Vpecatoci}>Ваши Впечатоци</span>
          <Slider {...settingz}>
  
            <div className={styles.eachSlideReviews}>
              <div className={styles.Klienti}>
  
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="la pizza"

                  />
                  <a
                    href="https://www.facebook.com/permalink.php?story_fbid=146958336732266&id=100042543022352"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Lapizza"
                    className={styles.Anch}
                  ><span>LaPizza</span>
                  </a> 
                </div>
                <span className={styles.Opis}>"Одличен вкус со уште по прифатливи цени за обемот и исполнетоста на пиците и пастрмајлиите. Брза достава и љубезност од истата. Браво."</span>
                <img
                  src={stars1}
                  alt="la pizza"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Госпожа Ѓорѓиќ</span>
              </div>
  
            </div>

            <div className={styles.eachSlideReviews}>
  
              <div className={styles.Klienti}>
   
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="la pizza"
                  />
                  <a
                    href="https://www.facebook.com/DuleAeroporto/posts/10216959615606614"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Lapizza"
                    className={styles.Anch}
                  ><span>LaPizza</span>
                  </a> 
                </div>
                <span className={styles.Opis}>"Одлична услуга, љубезен персонал и пристојни цени. Keep it going!"</span>
                <img
                  src={stars1}
                  alt="la pizza"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Trajkovski Dule</span>
              </div>
            </div>
 
            <div className={styles.eachSlideReviews}>

              <div className={styles.Klienti}>
  
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="lapizza"
                  />
                  <a
                    href="https://www.facebook.com/druid.mali/posts/10205978209730928"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Lapizza"
                    className={styles.Anch}
                  ><span>LaPizza</span>
                  </a> 
                </div>
                <span className={styles.Opis}>"Предобра пица, луѓето фини, брза достава, секоја чест."</span>
                <img
                  src={stars1}
                  alt="lapizza"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Andrej Arsovski</span>
              </div>

            </div>

          </Slider>
        </div>
        <div
          className={styles.Footer}
          id="kontakt"
        >
          <div className={styles.inline}>
            <div className={styles.GoogleMap}>
              <iframe
                title="lapizza"
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
                  alt="lapizza"
                >Почетна
                   </a>
                </p>
                <p><a
                  href="#zanas"
                  alt="lapizza"
                >За Нас
                   </a>
                </p>
                <p><a
                  href="/menu"
                  alt="lapizza"
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
                  alt="lapizza"
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
                  alt="lapizza"
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
 
