import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return ( 
<NavigationBar>
  <NavigationBarText>Lewis Brennan</NavigationBarText>
  <NavigationBarText>Portfolio Page</NavigationBarText>
  <NavigationLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/paint">Paint</StyledLink>
        <StyledLink to="/lilypad">Lilypad</StyledLink>
        <StyledLink to="/booter">Booter</StyledLink>
        <StyledLink to="/videos">Videos</StyledLink>
      </NavigationLinks>
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

const NavigationLinks = styled.div`
display: flex;
gap: 15px;  
`

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
transition: color 0.3s;

&:hover {
  color: #eba502;
}
`
 
export default NavBar;