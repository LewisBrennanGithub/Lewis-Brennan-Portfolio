import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import '../styles/GlobalStyles.css';
import styled from 'styled-components';
import NavBar from '../components/navbar/NavBar';
import HomePage from '../components/body/HomePage';
import PaintPage from '../components/body/PaintPage';
import LilypadPage from '../components/body/LilypadPage';
import BooterPage from '../components/body/BooterPage';

const PortfolioContainer = () => {
  const navigate = useNavigate();
  const routes = ['/', '/paint', '/lilypad', '/booter',];

  const pages = [
    {
      path: '/',
      component: <HomePage />,
      name: 'Home',
      color: '#eba502',
      offsetColor: '#eba502',
      background: '#f5f3f2',
    },
    {
      path: '/paint',
      component: <PaintPage />,
      name: 'Paint',
      color: '#d92f00',
      background: '#f5f3f2',
    },
    {
      path: '/lilypad',
      component: <LilypadPage />,
      name: 'Lilypad',
      color: '#84db2c',
      offsetColor: '#84db2c',
      background: '#f5f3f2',
    },
    {
      path: '/booter',
      component: <BooterPage />,
      name: 'Booter',
      color: '#068DA9',
      offsetColor: '#d44908',
      background: '#f5f3f2',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activePageColor = pages[currentIndex].color;
  const activePageOffsetColor = pages[currentIndex].offsetColor
  const activePageFont = pages[currentIndex]['font-family']
  const activePageBackgroundColor = pages[currentIndex].background

  const leftPageName = pages[(currentIndex - 1 + pages.length) % pages.length].name;
  const rightPageName = pages[(currentIndex + 1) % pages.length].name;

  const leftPageColor = pages[(currentIndex - 1 + pages.length) % pages.length].color;
  const rightPageColor = pages[(currentIndex + 1) % pages.length].color;

  const leftPageBackground = pages[(currentIndex - 1 + pages.length) % pages.length].background;
  const rightPageBackground = pages[(currentIndex + 1) % pages.length].background;

  const leftPageFontFamily = pages[(currentIndex - 1 + pages.length) % pages.length]['font-family'];
  const rightPageFontFamily = pages[(currentIndex + 1) % pages.length]['font-family'];


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

  return ( 
<>
  <NavBar/>
  <PageTopBorder color={activePageColor} />
  <Aligner>
    <div className="left">  
      <VerticalButtonLeft color={activePageOffsetColor} background={leftPageBackground} font-family={activePageFont} onClick={() => changePage(-1)}>{leftPageName}</VerticalButtonLeft>
    </div>
    <div className="middle">
      <Routes>
        {pages.map(page => (
          <Route key={page.path} path={page.path} element={page.component} />
        ))}
      </Routes>
    </div>
    <div className="right">
      <VerticalButtonRight color={activePageOffsetColor} background={rightPageBackground} font-family={activePageFont} onClick={() => changePage(1)}>{rightPageName}</VerticalButtonRight>
    </div>
  </Aligner>
</>
   );
}

const Aligner = styled.div`
  display: flex;
  min-height: 100vh;

  .left, .middle, .right {
    display: flex;
    flex-direction: column;
    background: #f5f3f2;
  }

  .middle {
    flex: 5; 
  }

  .left{
    align-items: flex-end;
    flex: 1;
  }

  .right{
    align-items: flex-start;
    flex: 1;
  }

  @media (max-width: 768px) {
    .left, .right {
      display: none;
    }
  }
`

const VerticalButtonLeft = styled.button`
  writing-mode: vertical-rl; 
  text-orientation: upright; 
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  margin-right: 1vw;
  color: ${props => props.color}; 
  // color: #eba502;
  background: ${props => props.background};
  font-family: ${props => props['font-family'] || 'inherit'};
  flex: 1;
  position: sticky;
  max-height: 90vh;
  top: 20px;
  bottom: 20px;
`;

const VerticalButtonRight = styled.button`
  writing-mode: vertical-rl; 
  text-orientation: upright; 
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  margin-left: 1vw;
  color: ${props => props.color};
  // color: #eba502;
  background: ${props => props.background};
  font-family: ${props => props['font-family'] || 'inherit'};
  flex: 1;
  position: sticky;
  max-height: 90vh;
  top: 20px;
  bottom: 20px;
`;

const PageTopBorder = styled.div`
border-top: 1vh solid ${props => props.color} ;
`

export default PortfolioContainer;