//import React from 'react'
//import videoData from '../../models/videosData.json';
import React, { useState,useEffect } from "react";

function Video() {
  const [videosData,setVideos] = useState([])
  
  useEffect(() => {
    fetch("videosData.json")
    .then(response => response.json())
    .then(data => setVideos(data))
    .catch(error => console.error("problem with fetching data!!",error))
   },[])

  return (
    <div>
      <div className='container'>
      <div className='row'>
     {
        videosData.map((video,key) => (
          <div key={key} className="col-md-4">
                <a href={`https://youtube.com/watch?v=${video.img_id}`}> 
                <div className='card'>
                    <img src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                    className="img-thumbnail"
                    alt={video.title}
                    />
                    <div className='card-body'>
                        <h4 className='card-title'>{video.title}</h4>
                        <p className='card-text'>{video.channelName}</p>
                        <small>{video.viewsCount} views - {video.likesCount} likes -{" "}
                          {video.duration}
                        </small>
                    </div>
                    </div>
                    </a>
                    </div>


                

        )
    )
     }
      </div>
      </div>
    </div>
  );
}
export default Video;