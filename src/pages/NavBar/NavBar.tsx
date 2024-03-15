
import styled from 'styled-components';
import HamburerButton from '../../components/BurgerButton';
import BurgerButton from '../../components/BurgerButton';

export default function NavBar() {

    return (
        <>
            <NavBarContainer>
                <h2>Navbar <span>responsive</span></h2>
                <div className='links active'>
                    <a href="" >Sobre mi</a>
                    <a href="">Contacto</a>
                    <a href="">Portafolio</a>
                    <a href="">Conocimientos</a>
                </div>
                <div className="burguer">
                    <BurgerButton />
                </div>
            </NavBarContainer>
        </>
    );
}

const NavBarContainer = styled.div`
h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 1s;
    a{
        color: #000000;
        font-size: 1.5rem;
        display: block;   
    }
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
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
    transition: all 1s;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: #000000;
    }
    
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
    `;