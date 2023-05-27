import styled from 'styled-components';
import NavBar from '../components/navbar/NavBar';
import Body from '../components/body/Body';

const PortfolioContainer = () => {
  return ( 
    <>
    <NavBar>
    </NavBar>
    <Aligner>
      <div className="left"></div>
      <Body className="middle"></Body>
      <div className="right"></div>
    </Aligner>
    </>
   );
}

const Aligner = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  height: 85vh;


.left  {
  background: #f7f5f0;
}
.middle {
  background: #F6F1E9;
}

.right {
  background: #f7f5f0;
}
`

export default PortfolioContainer;