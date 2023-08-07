import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/navbar/NavBar';
import Body from '../components/body/Body';
import PaintPage from '../components/body/PaintPage';

const PortfolioContainer = () => {
  return ( 
<>
<NavBar/>
  <Routes className="middle">
    <Route path="/" element={<Body />} />
    <Route path="/paint" element={<PaintPage />} />
  </Routes>
</>
   );
}

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

export default PortfolioContainer;