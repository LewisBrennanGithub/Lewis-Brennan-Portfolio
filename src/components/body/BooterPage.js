import '../../styles/GlobalStyles.css';
import BooterPlayerFunctionsOne from '../../assets/images/Booter/BooterPlayerFunctionsOne.png';
import BooterJavaUnitTesting from '../../assets/images/Booter/BooterJavaUnitTesting.png';
import BooterInsomniaRouteTesting from '../../assets/images/Booter/BooterInsomniaRouteTesting.png';
import BooterGamePage from '../../assets/images/Booter/BooterGamePage.png';
import BooterPlayerPage from '../../assets/images/Booter/BooterPlayerPage.png';
import BooterAddGamePage from '../../assets/images/Booter/BooterAddGamePage.png';
import github from '../../assets/icons/square-github.svg';
import youtube from '../../assets/icons/square-youtube.svg';
import futbol from '../../assets/icons/futbol-regular.svg';

const BooterPage = () => {
    return ( 
    <>
    <h3 className='page-header-booter'>Booter - Third CodeClan Project</h3>
    <div className='icon-group-page'>
      <a href='https://github.com/LewisBrennanGithub/Booter' target="_blank"><img src={github} alt="Github" style={{ width: "24px", height: "24px" }}/></a>
        <h4>Project Links</h4>
      <a href='https://youtu.be/xwFjPnXu1Rs' target="_blank"><img src={youtube} alt="Youtube" style={{ width: "24px", height: "24px" }}/></a>
      </div>
        <div className='grid-container'>
        <div className='column-content'>
        <p>Booter was my third and final project at CodeClan and was a chance to realise an idea I’d initially conceived in early 2018. At a glance this app is for helping to find games of casual football and players to participate. The niche is that players rate themselves and others on their ability and the seriousness with which they take the game, and this is also factored into how games are presented.</p>
        <h3 className='booter-logo-text'>Booter</h3>
        <p>The reason behind this is fairly simple. My regular football playing group stopped and I wasn’t a particularly good player nor one who got overly serious about it. I noticed in many matches that there would sometimes be a mismatch in skill or a conflict between players about how seriously they should be taking the game. If it were possible to matchmake on these criteria I feel more people could get what they want from casual football.</p> 
        <p>I decided to pursue this as a solo project for two main reasons. Firstly I wanted to consolidate all aspects of my learning from CodeClan so taking responsibility for the full stack appealed to me. Secondly as it’s a long held idea of mine and a product I’d love to release and use I was fairly intent on taking my time with it and realising my design. </p>
        <div className='image-by-text-div'>
        <div className='image-by-text-div-img'>
        <img src={BooterGamePage} alt="Booter - Landing / Game page"/>
        </div>
        <div className='image-by-text-div-text'>
        <p>The tech stack I decided to use for the app was Java/Spring for the server side, PostgreSQL for the database and inspected with Postico and React Native for the client side. Auth0 was also integrated via the front-end with references feeding through to the database for player profiles.</p>
        <p>The app in its current form allows players to register and create a player profile which they'll use. They can then join games which have both 'recomended' and 'actual' ratings, the former being the designation of the game's creator and the latter being an average of the relevant ratings of the players whom have joined the game.</p></div>
        </div> 
        <p>Players can also rate other players and indeed be rated themselves. The metrics of these ratings 'ability' and 'seriousness'.</p>
        <img src={BooterPlayerFunctionsOne} alt="Booter - Player functions: 1) displayed ability level variable method 2) update composite ability level"/>
        <p>The functions shown in the Player class in Java and display two key methods in how ratings are formulated and also demonstrate how each rating rendered on the screen is actually the interaction of five variables.</p>
        <p>Firstly in displayedAbilityLevelVariableMethod we can see displayedAbilityLevel, this is what is ultimately rendered on the screen. We can see three other variables in this function, communityAssessedAbilitytLevelCount, selfAssessedAbilityLevel and compositeAbilityLevel.</p>
        <p>As the name suggests, selfAssessedAbilityLevel is the level the player sets for themselves, and as can be seen if communityAssessedAbilitytLevelCount is below two then it will be the displayedAbilityLevel. However if the count is two or higher it will switch to compositeAbilityLevel.</p>
        <p>The next function we can see, updateCompositeAbilityLevel, details this variable slightly more. As can be seen the compositeAbilityLevel is a product of 0.3 of the selfAssessedAbilityLevel and 0.7 of the communityAssessedAbilitytLevel.</p>
        <p>I've chosen this ratio to give the player some agency in how they're rated but also to reflect that the community has a bigger say. For example it would be unfair for someone with tonnes of ability to suggest they had little ability, and whilst they can still make this claim the community can correct this if they see fit.</p>
        <img src={BooterJavaUnitTesting} alt="Booter - Junit testing"/>
        <p>One of the first practices of programming that I learned in CodeClan was unit testing and for my final project I was very keen to apply test driven development.</p>
        <p>As such each variable and method my classes used was set up in conjunction with new tests, applied through Junit, to effectively monitor that each was working as anticipated.</p>
        <div className='image-by-text-div'>
        <div className='image-by-text-div-img'>
        <img src={BooterInsomniaRouteTesting} alt="Booter - Insomnia RESTful route testing"/>
        </div>
        <div className='image-by-text-div-text'>
        <p>Unit testing wasn't the only form of testing however. Once I had created the controller and repository files I then fed them through Insomnia, ensuring that each route was working as expected and making appropriate changes to any many-to-many/one-to-many/many-to-one relationships as required.</p>
        <p>This was a particularly helpful process as it helped to isolate any issues that could have appeared in the client before reaching that stage, and some bugs that did appear whilst creating the front-end were more easily diagnosible for having these tests completed.</p>
        </div>
        </div>
        <p>This project was my first experience of using React-Native. For this purpose I initially used Expo-Go which was very helpful for having familiar debugging features due to having a web component. However whilst integrating Auth0 I found that there were some compatability issues and at this point I decided to remake the app without it and focus on IOS for the sake of simplicity.</p>
        <p>My app up until this point had a psuedo-login feature and appropriate state to match. Some of this state came in handy whilst integrating Auth0 as with only minor changes to the backend I could link the two and allows for a seperation of concerns between the player object and the Auth0 account whilst still keeping them in synch.</p>
        <h3 className='booter-subheader'>Future Plans</h3>
        <p>The app as it is I feel is a reasonable prototype for what I'm trying to create. However there are several key features I hope to implement, with those listed here likely to be the main ones I'll be looking to implement first - noting that this was written in mid August 2023.</p>
        <div className='image-by-text-div'>
        <div className='image-by-text-div-img'>
        <img src={BooterPlayerPage} alt="Booter - Add game page"/>
        </div>
        <div className='image-by-text-div-text'>
        <p>Firstly I'd like the option for users creating games to toggle a request/response option for players joining, so that some games can have people freely join but others will have players apply to join and the creator can accept/decline their applications.</p>
        <p>Secondly I'm looking to refactor the way that players rating other players is achieved and this will be linked to the games being registered as completed. Essentially one game completed with another player will grant the user one chance to rate each of their ability/seriousness ratings, and for example if they play one more game with this player they will also gain one more token for each and every other player who was in that game.</p>
        </div>
        </div>
        <p>The third thing I'm looking to achieve is to have better location based filtering. At present I have an Address class which could still serve a purpose, but what I feel I need is better sanitation of what addresses can be provided by users. From here on in I can create a better recomendation system for games and players based on location as well as ability and seriousness factors. I would consider using distance calculators and geolocation libraries but whilst the app isn't live and doesn't have a userbase of any kind I feel this is perhaps something that can wait.</p>
        <p>These are not all the changes I'm looking to make as I say, there are a variety of small features I'd like to add, players being able to leave games for example! That said once I implement these things I may consider launching the app in some capacity, likely on TestFlight at first.</p>
        <img src={futbol} alt="football icon" style={{ width: "100px", height: "100px", color: "#d44908" }}/>
    </div>
    </div>
    </>
     );
}

{/* <div className='image-by-text-div'>
<div className='image-by-text-div-img'>
<img src={} alt="Booter - Landing / Game page"/>
</div>
<div className='image-by-text-div-text'>
</div>
</div> */}


export default BooterPage;