
import styled from 'styled-components';
import { useState } from 'react';
import BurgerButton from './BurgerButton';

export default function NavBar() {

  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }


  return (
    <>
      <NavBarContainer>
        <h2>Navbar <span>responsive</span></h2>
        <div className={`links ${active ? 'active' : ''}`}>
          <a href="" className='link'>Sobre mi</a>
          <a href="" className='link'>Contacto</a>
          <a href="" className='link'>Portafolio</a>
          <a href="" className='link'>Conocimientos</a>
        </div>
        <div className="burguer">
          <BurgerButton active={active} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${active ? 'active' : ''}`}></BgDiv>
      </NavBarContainer>
    </>
  );
}

const NavBarContainer = styled.div`
h2{
  font-size: 2rem;
    color: white;
    font-weight: 400;

    span{
      font-weight: bold;
      color: #f1c40f;
      font-size: 1.5rem;
    }
  }

  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    display: block;
    padding: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    @media(min-width: 1024px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.5rem;
        color: white;
        display: inline;
      }
      a:hover{
        color: #f1c40f;
      }
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: #white;
    }
  }

  a:hover{color: #f1c40f;}

  
  .burguer{
    @media(min-width: 1024px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`