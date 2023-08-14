import { Link } from 'react-router-dom';
import styled from 'styled-components';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/square-github.svg';

const NavBar = () => {
  return ( 
<NavigationBar>
  <NavigationBarTitleTextDiv >
  <NavigationBarTitleText>Lewis Brennan</NavigationBarTitleText>
  <NavigationBarTitleText>Portfolio Page</NavigationBarTitleText>
  </NavigationBarTitleTextDiv >
  <div>
  <a href='https://www.linkedin.com/in/lewis-brennan-a59b1a78/' target="_blank"><img src={linkedin} alt="LinkedIn" style={{ width: "24px", height: "24px" }}/></a>
  <a href='https://github.com/LewisBrennanGithub' target="_blank"><img src={github} alt="Github" style={{ width: "24px", height: "24px" }}/></a>
  </div>
  <NavigationLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/paint">Paint</StyledLink>
        <StyledLink to="/lilypad">Lilypad</StyledLink>
        <StyledLink to="/booter">Booter</StyledLink>
      </NavigationLinks>
</NavigationBar>

   );
}

const NavigationBar = styled.div`
height: 20vh;
background: #f5f3f2;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const NavigationBarTitleTextDiv = styled.div`
margin-block: 1.5vh;
`

const NavigationBarTitleText = styled.h1`
text-transform: uppercase;
font-size: 4vh;
margin-block: 0vh;
`

const NavigationLinks = styled.div`
display: flex;
gap: 15px;  
padding-top: 1.5vh;
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