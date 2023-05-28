import './App.css';
import PortfolioContainer from './containers/PortfolioContainer';
import styled from 'styled-components';

function App() {
  return (
    <Structure >
        <PortfolioContainer />
    </Structure>
  );
}

const Structure = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  font-family: 'Josefin Sans', sans-serif;
  color: #1B1A17;
`

export default App;
