import styled from 'styled-components';
import Image from '../../images/LBMugShot.JPG';

const PaintPage = () => {
    return ( 
        <GridContainer>
        <ColumnContent>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <img src={Image} alt="Descriptive alt text" />
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </ColumnContent>
      </GridContainer>
     );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust the 300px to your preferred minimum column width */
  gap: 2rem; /* Space between columns */
`;

const ColumnContent = styled.div`
  column-width: 300px; /* Adjust based on preferred column width */
  column-gap: 1.5rem; /* Space between columns */
  overflow: hidden;

  img {
    max-width: 100%;
    break-inside: avoid; /* This prevents the image from splitting between columns */
    display: block;
    margin: 0 auto 1rem; /* Centers the image and gives margin below */
  }
`;

 
export default PaintPage;