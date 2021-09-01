import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "./Video.scss"
import Text from "../../Atoms/Text/Text";

const Video = ({ videoId, popUp, thumbnail, ...props }) => {
  const videoUrl = "http://www.youtube.com/embed/" + videoId + "?";

  // Get Youtube video image from youtube, standard format
  const youtubeThumbnail = `https://i1.ytimg.com/vi/${videoId}/mqdefault.jpg`;

  const [playVideo, setPlayVideo] = useState(false);
  const [isVideoPopUpOpen, setVideoPopUp] = useState("hide");

  const closePopUp = () => {
    setVideoPopUp("hide")
    setPlayVideo(false);
  }

  const handleVideoPlay = (e) => {
    e.preventDefault();
    setPlayVideo(true);
    if (popUp) {
      setVideoPopUp("show")
    }
  }

  return (
    <div className="c-video">
      {!playVideo &&
        <div>
          <a className="c-video__watch-link" href="#" onClick={handleVideoPlay}>Watch the Video</a>
        </div>
      }
      
      {playVideo && popUp &&
        <div className={[isVideoPopUpOpen, "c-video__content_wrapper"].join(' ')}>

          <div className="c-video__content">
            <button className="c-video__modal-close" onClick={closePopUp}></button>
            
            <iframe
              width="760"
              height="320"
              src={playVideo ? videoUrl : ""}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </div>
        </div>
      }
    </div>
  )
}

export default Video;
