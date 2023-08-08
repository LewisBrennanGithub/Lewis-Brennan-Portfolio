import styled from 'styled-components';
import Image from '../../images/LBMugShot.JPG';

const Body = () => {
  return ( 
    <>
    <CentreGridBody>
    <StyledCard>
    <StyledCardHeader>Lewis Brennan - Qualified Junior Software Developer </StyledCardHeader>  
    <StyledCardBody>
    <StyledLeftColumn>  
    <StyledCardLeftColumnText>Thank you for taking the time to visit my Portfolio website. I'm currently studying the Professional Software Development course at Code Clan and whilst my learning is on-going this website will not be fully developed. My plan is to display projects I've made in cards similar to this with Github/website links, screenshots, gifs and videos.</StyledCardLeftColumnText>
    <StyledCardLeftColumnText>My professional background is in media monitoring after studying Politics and International Relations at the University of Aberdeen. Whilst working I always enjoyed problem solving and automation, attempting to provide technical solutions and workarounds to areas which previously required significant manual labour.</StyledCardLeftColumnText>
    <StyledCardLeftColumnText>Around this time I also started making my own modifications for computer games and this led to me using tools such as Blender and GIMP. My ability to learn these tools a general demystification of computer programming eventually led to me undertaking basic courses on Code Academy and FreeCodeCamp where I learned HTML, CSS and pre-ES6 vanilla JavaScript. </StyledCardLeftColumnText>
    </StyledLeftColumn>
    <StyledRightColumn>
    <StyledCardRightColumnPictureBox>
    <StyledCardRightColumnPicture src={Image} alt="Lewis Brennan" />
    <StyledCardRightColumnCaption>Me!</StyledCardRightColumnCaption>
    </StyledCardRightColumnPictureBox>
    <StyledCardRightColumnText>I had heard of Code Clan for many years and in early 2023 I had put myself in a position where I could once again go back into full-time learning. Broadly I've learned and made projects in Python, JavaScript/React, with my learning of Java still on-going.</StyledCardRightColumnText>
    <StyledCardRightColumnText>I'm now looking to embark on a career in software development where I will continue my learning. Front-end development was initially the appeal but the more I've worked in the backend and as my learning of Java has increased I feel I would be capable of working effectively and enjoying my craft at either end of the tech stack.</StyledCardRightColumnText>
    </StyledRightColumn>
    </StyledCardBody>
    </StyledCard>
    </CentreGridBody>
    </>
   );
}

const CentreGridBody = styled.div`
background: #f5f3f2;
padding-block: 5vh;
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
background: #f5f3f2;
`

const StyledCardHeader = styled.h3`
border-bottom: 0.5vh solid #eba502;
text-align: center;
margin: 0 auto;
`

const StyledCardBody = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: center;

@media only screen and (max-width: 900px){
    display: flex;
    flex-direction: column;
  }
`

const StyledLeftColumn = styled.div`
display: flex;
flex-direction: column;
margin-right: 0.5vw;

@media only screen and (max-width: 900px){
  max-width: 100%;
  padding-inline: 0vw 0vw;
  }
`

const StyledCardLeftColumnText = styled.p`
`

const StyledRightColumn = styled.div`
display: flex;
flex-direction: column;
margin-left: 0.5vw;


@media only screen and (max-width: 900px){
  max-width: 100%;
  padding-inline: 0vw 0vw;
  }
`

const StyledCardRightColumnText = styled.p`
`

const StyledCardRightColumnPictureBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const StyledCardRightColumnPicture = styled.img`
height: 50%;
width: 50%;
margin-top: 2.5vh;
border-radius: 50%;
height: 50%;
width: 50%;
min-width: 150px;
min-height: 150px;
max-width: 150px;
max-height: 150px;

@media only screen and (max-width: 900px){
max-width: 100%;
max-height: 100%;
  }
`

const StyledCardRightColumnCaption = styled.p`

`


export default Body;