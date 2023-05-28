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

  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
  }


.left  {
  background: #f5f3f2;
}
.middle {
}

.right {
  background: #f5f3f2;
}
`

export default PortfolioContainer;