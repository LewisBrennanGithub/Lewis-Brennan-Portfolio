import '../../styles/GlobalStyles.css';
import LBMugShot from '../../assets/images/LBMugShot.JPG';
import styled from 'styled-components';

const HomePage = () => {
    return ( 
      <>
      <h3 className='page-header-home'>Lewis Brennan - Qualified Junior Software Developer</h3>
      <div className='grid-container'>
      <div className='column-content'>
      <StyledImage src={LBMugShot} alt='Lewis Brennan'/>
        <p>Thanks for taking the time to visit my Portfolio website! I graduated from CodeClan in June 2023 having studied for a Professional Software Development certificate and also the SQA Level 8 Professional Development Award in Software Development.</p>
        <p>My professional background is in media monitoring after studying Politics and International Relations at the University of Aberdeen. Whilst working I always enjoyed problem solving and automation, attempting to provide technical solutions and workarounds to areas which previously required significant manual labour.</p>
        <p>Around this time I also started making my own modifications for computer games and this led to me using tools such as Blender and GIMP. My ability to learn these tools a general demystification of computer programming eventually led to me undertaking basic courses on Code Academy and FreeCodeCamp where I learned HTML, CSS and pre-ES6 vanilla JavaScript.</p>
        <p>I had heard of Code Clan for many years and in early 2023 I had put myself in a position where I could once again go back into full-time learning. The course was divided into three sections broadly, Python, JavaScript and Java, of which I’ve made projects in each.</p>
        <p>I’m enjoying being at the start of my career in software development. Whilst I’ve already learned a vast amount I’m aware that there’s far more to come and I’m eager to add more strings to my bow. Hopefully this website will give some indication of my intrigue for front-end and design, but in my capstone project in particular I took great pride in designing the server-side logic with Java / Spring so I’m fairly open minded about what the future holds.</p>
        <p>This portfolio will demonstrate each of my projects in turn with some outline of the intent, discussion of how the project was created and how it developed over time, analysis of some aspects of the code and screenshots of each app. There are also links to Youtube videos of me using each app with narration.</p>
        <p>If you’re interested in anything about my portfolio or my services please do feel to contact me on LinkedIn!</p>
      </div>
      </div>
      </>
     );
}

const StyledImage = styled.img`
border-radius: 50%;
`
 
export default HomePage;