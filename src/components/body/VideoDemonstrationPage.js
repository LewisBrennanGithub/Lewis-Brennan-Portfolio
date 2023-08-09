import PaintVideo from '../../assets/videos/PaintVideo.mp4';
import LilypadVideo from '../../assets/videos/LilypadVideo.mp4';
import BooterVideo from '../../assets/videos/BooterVideo.mp4';

const VideoDemonstrationPage = () => {
    return ( 
        <>
            <p>Hello!</p>
            <video src={PaintVideo} width="400"/>
            <video src={LilypadVideo} width="400"/>
            <video src={BooterVideo} width="400"/>
        </>
     );
}
 
export default VideoDemonstrationPage;