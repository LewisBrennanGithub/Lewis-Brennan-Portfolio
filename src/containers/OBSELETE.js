// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import styled from 'styled-components';
// import NavBar from '../components/navbar/NavBar';
// import Body from '../components/body/Body';
// import PaintPage from '../components/body/PaintPage';
// import LilypadPage from '../components/body/LilypadPage';

// const PortfolioContainer = () => {
//   const routes = ['/', '/lilypad', '/paint'];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const navigate = (direction) => {
//       let newIndex = currentIndex + direction;
//       if (newIndex < 0) newIndex = routes.length - 1;
//       if (newIndex >= routes.length) newIndex = 0;
//       setCurrentIndex(newIndex);
//   }


// FIRST ITERATION - OBSELETE
// <NavBar>
// </NavBar>
// <Aligner>
//   <div className="left"></div>
//   <Body className="middle"></Body>
//   <div className="right"></div>
// </Aligner> 

// SECOND ITERATION - OBSELETE
{/* <>
<NavBar/>
<Aligner>
  <div className="left"></div>
  <Routes className="middle">
    <Route path="/" element={<Body />} />
    <Route path="/paint" element={<PaintPage />} />
  </Routes>
  <div className="right"></div>
</Aligner>
</> */}

// THIRD ITERATION - OBSELETE
{/* <NavBar/>
  <Routes className="middle">
    <Route path="/" element={<Body />} />
    <Route path="/paint" element={<PaintPage />} />
  </Routes> */}

// FOURTH ITERATION - OBSELETE
{/* <NavBar/>
<button onClick={() => navigate(-1)}>Left</button>
<Routes>
    <Route path="/" element={<Body />} />
    <Route path="/lilypad" element={<LilypadPage />} />
    <Route path="/paint" element={<PaintPage />} />
</Routes>
<button onClick={() => navigate(1)}>Right</button>  */}

// const Aligner = styled.div`
//   display: grid;
//   grid-template-columns: 15% 70% 15%;
//   height: 85vh;

//   @media only screen and (max-width: 900px){
//     display: flex;
//     flex-direction: column;
//   }


// .left  {
//   background: #f5f3f2;
// }
// .middle {
// }

// .right {
//   background: #f5f3f2;
// }
// `

// export default PortfolioContainer;