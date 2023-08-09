import styled from 'styled-components';
import LilypadInitialComponentHierarchy from '../../assets/images/Lilypad/LilypadInitialComponentHierarchy.png';
import LilypadFinalComponentHierarchy from '../../assets/images/Lilypad/LilypadFinalComponentHierarchy.png';
import LilypadHome from '../../assets/images/Lilypad/LilypadHome.png';
import LilypadFrogsPage from '../../assets/images/Lilypad/LilypadFrogsPage.png';
import LilypadTrelloBoard from '../../assets/images/Lilypad/LilypadTrelloBoard.png';

const LilypadPage = () => {
    return ( 
    <GridContainer>
        <ColumnContent>
        <p>Lilypad was the second project I participated in at CodeClan and is notable as it was a group project which took place after our JavaScript module which had a heavy focus on React.</p>
        <p>Our tech stack for this was React for the client, Express for the server and MongoDB for the database to practice with non relational databases.</p>
        <p>After a thorough discussion we settled on making a social media app with the angle that it could be a Facebook clone, but designed with Frogs as theoretical users.</p>
        <img src={LilypadHome} alt="Lilypad Home Page"/>
        <p>I took a lead in the design process and ultimately ended up using Styled Components instead of a CSS style sheet. The idea was to have something bright and playful but with enough consistency to avoid being too tacky, albeit that's subjective.</p>
        <p>The app has many features that you'd expect on something like Facebook. You can create an account, login, make posts and leave comments on the posts of others.</p>
        <img src={LilypadFrogsPage} alt="Lilypad Frogs Page"/>
        <p>Being a group project I'd like to place the emphasis on the planning aspects and the Agile software development approach we took. As mentioned we debated thoroughly on what project we undertook and this extended into the planning phase.</p>
        <p>One of the first component hierarchy diagrams that we whiteboarded was drawn up digitally and can be seen below.</p>
        <img src={LilypadInitialComponentHierarchy} alt="Lilypad Initial Component Hierarchy"/>
        <p>One key outcome of a minimum of twice daily standups was that we were able to focus our efforts in the appropriate areas, being careful to document them with applications like Trello.</p>
        <img src={LilypadTrelloBoard} alt="Lilypad Trello Board"/>
        <p>Perhaps the most important aspect of working in a group was learning how to use Git and Github effectively and with consideration for others. We began by having regular code reviews before we committed and pushed, at times employing mob and pair programming.</p>
        <p>After making pull requests from our branches and pulling from Github to the local there would occasionaly be merge conflicts but we worked through these with communication and as such no bugs were introduced into the codebase.</p>
        <img src={LilypadFinalComponentHierarchy} alt="Lilypad Final Component Hierarchy"/>
        <p>As mentioned the component hierarchy diagram was continually updated and above is the final outcome. I felt that this process was useful for keeping on top of the increasing numbers of files we were creating, whilst also making it easier to figure out areas where we could combine and simplify components to limit duplication and make the codebase more steamlined.</p>
        </ColumnContent>
    </GridContainer>
     );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem; 
`;

const ColumnContent = styled.div`
  column-width: 200px; 
  column-gap: 1.5rem; 
  overflow: hidden;
  // height: 100vh;

  img {
    max-width: 100%;
    break-inside: avoid; /* This prevents the image from splitting between columns */
    display: block;
    margin: 0 auto 1rem; /* Centers the image and gives margin below */
  }
`;
 
export default LilypadPage;