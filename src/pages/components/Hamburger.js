import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';

const StyledHamb = styled.div`
width: 30px;
height: 22.5px;
padding: 1rem;

transform: rotate(0deg);
transition: 0.5s ease-in-out;
cursor: pointer;
pointer-events: auto;



 z-index: 59 !important;
 position: fixed;
  
 
  
 right: 20px;
 
 text-align: center;
 top: 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0px 10px;
 background: transparent;
 

& span {
 display: block;
 position: absolute;
 height: 3px;
 width: 100%;
 background:  rgb(3, 202, 202); 
 border-radius: 5px;
 opacity: 1;
 left: 0;
 transform: rotate(0deg);
 transition: 0.25s ease-in-out;

 &:nth-child(1) {
   top: ${props => (props.opened ? '9px' : '0px')};
   width: ${props => (props.opened ? '0%' : '100%')};
   left: ${props => (props.opened ? '50%' : null)};
 }

 &:nth-child(2) {
   transform: ${props => (props.opened ? 'rotate(45deg)' : null)};
 }

 &:nth-child(3) {
   transform: ${props => (props.opened ? 'rotate(-45deg)' : null)};
 }

 &:nth-child(2),
 &:nth-child(3) {
   top: 9px;
 }

 &:nth-child(4) {
   top: ${props => (props.opened ? '9px' : '18px')};
   width: ${props => (props.opened ? '0%' : '100%')};
   left: ${props => (props.opened ? '50%' : null)};
 }
}


@media only screen and (min-width: 890px) {
  display: none;
}
`;

const MeniLow = styled.div`
width: 70%;
height: 100vh;
background: #312c2b;
position: fixed;
right:0;
z-index: 58!important;

pointer-events: auto;
align-items: center;




@media only screen and (min-width: 500px) {
width: 300px;
}
@media only screen and (min-width: 890px) {
display: none;
}

visibility: ${props => (props.opened ? 'visible' : 'hidden')}
`;

const MeniQuit = styled.div`
width: 100%;
height: 100vh;
position: fixed;
right:0;
pointer-events:auto; 
background:transparent;
z-index: 57!important;
visibility: ${props => (props.opened ? 'visible' : 'hidden')}
`;

const Parent = styled.div`
 
 
  width: 100%;
  height: 50px;
  cursor: pointer;
  text-align: center;
  a{
    color: white;
    opacity: 0.7;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
    display: block;
    position: relative;
  }
  
 &:hover {
    background: rgb(3, 202, 202);
     
     a{
       opacity: 1;
      
     }
 }
`;

const Active = styled.div`
 
  width: 100%;
  height: 50px;
  cursor: pointer;
  text-align: center;
  background: ${props => (props.true2 ? 'rgb(3, 202, 202)' : 'transparent')};
  a{
   color: white;
   opacity: ${props => (props.true2 ? '1' : '0.7')};
   height: 50px;
   font-size: 20px;
   line-height: 50px;
   text-decoration: none;
   display: block;
   position: relative;  
}

&:hover {
  
    background: rgb(3, 202, 202);
      
      a{
        opacity: 1;
      }
    }
`;

const Active2 = styled.div`
 
  width: 100%;
  height: 50px;
  cursor: pointer;
  text-align: center;
  background: ${props => (props.true3 ? 'rgb(3, 202, 202)' : 'transparent')};
  a{
   color: white;
   opacity: ${props => (props.true3 ? '1' : '0.7')};
   height: 50px;
   font-size: 20px;
   line-height: 50px;
   text-decoration: none;
   display: block;
   position: relative;
}

&:hover {
  
  background: rgb(3, 202, 202);
    
    a{
      opacity: 1;
    }
  }
`;

export const Hamburger = ({ true3, true2 }) => {

  const [state, setState] = useState({
    isNavBarOpen: false,
  });
  
  const OpenCloseNavbar = () => {
    setState({ isNavBarOpen: !state.isNavBarOpen });
    
  };

  return (
    <div>
      <MeniQuit
        onClick={OpenCloseNavbar}
        opened={state.isNavBarOpen}
      />
      <MeniLow opened={state.isNavBarOpen}>
        <div className={styles.smParent}>
          <Active true2={true2}>
            <a
              href="/"
              alt="LaPizza"
            >Почетна
            </a>
          </Active>
          <Active2 true3={true3}>
            <a
              href="/menu"
              alt="LaPizza"
            >Мени
            </a>
          </Active2>
          <Parent
            onClick={OpenCloseNavbar}
            opened={state.isNavBarOpen}
          >
            <a
              href="#kontakt"
              alt="LaPizza"
            >Контакт
            </a>
          </Parent>
        </div>
      </MeniLow>
      <StyledHamb
        onClick={OpenCloseNavbar}
        opened={state.isNavBarOpen}
      >
        <span />
        <span />
        <span />
        <span />
      </StyledHamb>
    </div>
  );
};

