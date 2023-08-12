import '../../styles/GlobalStyles.css';
import PaintHomePage from '../../assets/images/Paint/PaintHomePage.png';
import PaintIndividual from '../../assets/images/Paint/PaintIndividual.png';
import PaintTopPaints from '../../assets/images/Paint/PaintTopPaints.png';
import PaintInvertFunction from '../../assets/images/Paint/PaintInvertFunction.png';
import PaintMondrianGrid from '../../assets/images/Paint/PaintMondrianGrid.png';
import PaintOldVersion from '../../assets/images/Paint/PaintOldVersion.png';

const PaintPage = () => {
    return ( 
      <>
      <h3 className='page-header-paint-viewer'>Paint Viewer - Python Project</h3>
      <div className='grid-container'>
      <div className='column-content'>
        <p>Paint Viewer was the first project I made at CodeClan. The purpose here was to build a full stack up with full CRUD capability.</p>
        <img src={PaintHomePage} alt="Paint Project Home Page"/>
        <p>The stack we had learned up until this point was Python and Jinja for the client, Psycopg2 for the server and PostgreSQL for the database, managed by Postico. HTML and CSS were also utilised.</p>
        <p>One purpose of the app is to allow for the user to view paints that are in the database and vote on their popularity or edit/delete them.</p>
        <p>The unique aspect of the app is that users can create their own paints. When the user selects a primary colour and gives the paint a name and a description it is saved to the database.</p>
        <img src={PaintIndividual} alt="Paint Project Individual Paint Page"/>
        <p>However in this process an offset colour is generated which will display on that paint's page and also feature as a text colour when viewing the overall list of paints in Top Paints and All Paints.</p>
        <img src={PaintInvertFunction} alt="Paint Project Invert Helper Function"/>
        <p>This process is carried out by a helper function which is called on the new paint object when it is generated. The process works by first stripping out any hash that the hexadecimal begins with. It then breaks it into three components, red blue and green, which are converted into integers. These values are then inverted by the NOT operation with 0xff also applied. The RGB is then converted back into a hexadecimal with the hash prefixed once more.</p>
        <img src={PaintTopPaints} alt="Paint Project Top Paints Page"/>
        <p>The paint is then in a list of all paints sorted by popularity. If a paint is popular enough relative to other paints it can feature in the Top Paints section, an interpretation of a Piet Mondrian painting.</p>
        <div className='image-by-text-div'>
        <div className='image-by-text-div-img'>
        <img src={PaintMondrianGrid} width="100%" alt="Paint Project Mondrian Grid"/>
        </div>
        <div className='image-by-text-div-text'>
        <p>This effect was achieved using CSS Grid, the composition of which can be seen below. Black and White colours are represented by 'W' with 1-f number appended, whilst the paints are donated similarly with 'P'.</p>
        <p>As paints become more or less popular their positioning within the list changes and thus their assigned P does too, with P1 being the largest on the board.</p>
        </div>
        </div>
        <p>You may note that this is Paint Viewer 2.0. There was a 1.0 version, however my objective was to make a modern looking website. Whilst 1.0 was fun it also had a very exagerated CSS and as such had a gimmicky feel.</p>
        <img src={PaintOldVersion} width="100%" alt="Paint Project Old Design Individual Paint"/>
        <p>Overall I feel that the redesign was worthwhile. The Mondrian grid was implemented during this time and I feel like I refined my CSS sensibilities, whilst it also gave me a chance to experience working with Python again in a limited fashion.</p>
      </div>
      </div>
      </>
     );
}
 
export default PaintPage;