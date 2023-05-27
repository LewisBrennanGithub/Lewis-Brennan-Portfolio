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
<StyledCardLeftColumnText>Hello and thanks for visiting my Portfolio website! As you'll see it's currently fairly basic - in the interests of focusing on coursework - but in due course I hope to upload all my Portfolio and have each represented in a card similar to this, possibly even with gifs, videos and fancy navbars! That said I feel I can use this temporary page to expand slightly on my CV.</StyledCardLeftColumnText>
<StyledCardLeftColumnText>I've worked in media monitoring for over 9 years, having studied politics beforehand. Like many in my generation I've used computers all my life, but for me playing games that others have created can get dull over time. Therefore I started making visual mods for videogames, mostly textures and meshes using software like GIMP and Blender. For the latter I noticed it was powered by Python and decided to learn more about computer programming in general.</StyledCardLeftColumnText>
<StyledCardLeftColumnText>I then started to learn computer programming languages in my free time from sources like Code Academy and FreeCodeCamp, where I learned HTML, CSS and pre ES6 vanilla JavaScript. It was during this period I heard of Code Clan and I was intrigued by the idea of going back into full-time education, particularly with the idea that I'd be learning a range of languages and making projects to show for it.</StyledCardLeftColumnText>
</StyledLeftColumn>
<StyledRightColumn>
<StyledCardRightColumnPictureBox>
<StyledCardRightColumnPicture src={Image} alt="Lewis Brennan" />
<StyledCardRightColumnCaption>Me!</StyledCardRightColumnCaption>
</StyledCardRightColumnPictureBox>
<StyledCardRightColumnText>Eventually in early 2023 I started the course and have since learned three languages, made two projects with one still to come and have really enjoyed challening myself in the pursuit of develping new skills.</StyledCardRightColumnText>
<StyledCardRightColumnText>I'm now looking to continue my career beyond Code Clan. I've particularly enjoyed working on the front-end in my time here but since learning Java I've become more intrigued by typed languages and would be more than happy to continue working in the back-end or indeed full-stack.</StyledCardRightColumnText>
</StyledRightColumn>
</StyledCardBody>
</StyledCard>
    </CentreGridBody>
    </>
   );
}

const CentreGridBody = styled.div`
background: #f7f5f0;
padding-inline: 5vw;
padding-block: 5vh;
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #ede9df;
border: 1vh double #ffd129;
border-radius: 2.5px;
`

const StyledCardHeader = styled.h3`
border-bottom: 0.5vh solid #ffd129;
`

const StyledCardBody = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 2.5vh 2.5vw; 
justify-content: space-between;
`

const StyledLeftColumn = styled.div`
display: flex;
flex-direction: column;
max-width: 25vw;
padding-inline: 0vw 1vw;
`

const StyledCardLeftColumnText = styled.p`
`

const StyledRightColumn = styled.div`
display: flex;
flex-direction: column;
max-width: 25vw;
padding-inline: 1vw 0vw;
`

const StyledCardRightColumnText = styled.p`
`

const StyledCardRightColumnPictureBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #f7f5f0;
border: 0.5vh double #ffd129;
border-radius: 2.5px;
`

const StyledCardRightColumnPicture = styled.img`
height: 85%;
width: 85%;
margin-top: 2.5vh;
border-radius: 2.5px;
`

const StyledCardRightColumnCaption = styled.p`

`


export default Body;