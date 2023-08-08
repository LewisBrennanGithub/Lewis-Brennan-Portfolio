import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import '../styles/GlobalStyles.css';
import styled from 'styled-components';
import NavBar from '../components/navbar/NavBar';
import Body from '../components/body/Body';
import PaintPage from '../components/body/PaintPage';
import LilypadPage from '../components/body/LilypadPage';

const PortfolioContainer = () => {
  const navigate = useNavigate();
  const routes = ['/', '/lilypad', '/paint'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    navigate(routes[currentIndex]);
}, []); 

  const changePage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = routes.length - 1;
    if (newIndex >= routes.length) newIndex = 0;
    setCurrentIndex(newIndex);
    navigate(routes[newIndex]);
}

const pages = [
  {
    path: '/',
    component: <Body />,
    name: 'Home',
    color: '#eba502',
    background: '#f5f3f2',
  },
  {
    path: '/lilypad',
    component: <LilypadPage />,
    name: 'Lilypad',
    color: 'red',
    background: '#f5f3f2',
    'font-family': 'Bungee',
  },
  {
    path: '/paint',
    component: <PaintPage />,
    name: 'Paint',
    color: '#7a015a',
    background: '#f5f3f2',
    'font-family': 'Calistoga',
  }
];

const leftPageName = pages[(currentIndex - 1 + pages.length) % pages.length].name;
const rightPageName = pages[(currentIndex + 1) % pages.length].name;

const leftPageColor = pages[(currentIndex - 1 + pages.length) % pages.length].color;
const rightPageColor = pages[(currentIndex + 1) % pages.length].color;

const leftPageBackground = pages[(currentIndex - 1 + pages.length) % pages.length].background;
const rightPageBackground = pages[(currentIndex + 1) % pages.length].background;

const leftPageFontFamily = pages[(currentIndex - 1 + pages.length) % pages.length]['font-family'];
const rightPageFontFamily = pages[(currentIndex + 1) % pages.length]['font-family'];

  return ( 
<>
  <NavBar/>
  <Aligner>
    <div className="left">  
      <VerticalButtonLeft color={leftPageColor} background={leftPageBackground} font-family={leftPageFontFamily} onClick={() => changePage(-1)}>{leftPageName}</VerticalButtonLeft>
    </div>
    <div className="middle">
      <Routes>
        {pages.map(page => (
          <Route key={page.path} path={page.path} element={page.component} />
        ))}
      </Routes>
    </div>
    <div className="right">
      <VerticalButtonRight color={rightPageColor} background={rightPageBackground} font-family={rightPageFontFamily} onClick={() => changePage(1)}>{rightPageName}</VerticalButtonRight>
    </div>
  </Aligner>
</>
   );
}

// const Aligner = styled.div`
//   display: grid;
//   grid-template-columns: 25% 50% 25%;

//   @media only screen and (max-width: 900px){
//     display: flex;
//     flex-direction: column;
//   }

// .left  {
//     background: #f5f3f2;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
// }
// .middle {
//   display: flex;
// }
// .right {
//   background: #f5f3f2;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// }
// `

const Aligner = styled.div`
  display: flex;

  .left, .middle, .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #f5f3f2;
  }

  .middle {
    flex: 2; 
  }

  .left{
    align-items: flex-end;
  }

  .right{
    align-items: flex-start;
  }
`

const VerticalButtonLeft = styled.button`
  writing-mode: vertical-rl; 
  text-orientation: upright; 
  border: none;
  margin-right: 1vw;
  color: ${props => props.color}; 
  background: ${props => props.background};
  font-family: ${props => props['font-family'] || 'inherit'};
  flex: 1;
  font-size: 4rem;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const VerticalButtonRight = styled.button`
  writing-mode: vertical-rl; 
  text-orientation: upright; 
  border: none;
  margin-left: 1vw;
  color: ${props => props.color};
  background: ${props => props.background};
  font-family: ${props => props['font-family'] || 'inherit'};
  flex: 1;
  font-size: 4rem;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default PortfolioContainer;