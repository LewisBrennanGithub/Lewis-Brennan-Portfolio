import styled from 'styled-components';

const NavBar = () => {
  return ( 
<NavigationBar>
  <NavigationBarText>Lewis Brennan</NavigationBarText>
  <NavigationBarText>Portfolio Page</NavigationBarText>
</NavigationBar>

   );
}

const NavigationBar = styled.div`
height: 15vh;
background: #f5f3f2;
border-bottom: 1vh solid #eba502;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const NavigationBarText = styled.h1`
text-transform: uppercase;
font-size: 4vh;
margin-block: 0.5vh;
`
 
export default NavBar;