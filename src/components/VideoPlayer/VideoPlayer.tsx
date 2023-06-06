import { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './videoplayer.module.css';

const VideoPlayer = () => {
  const videos: Video[] = [
    { id: 1, url: 'https://www.youtube.com/watch?v=AtdNuj8ZJrE', thumbnail: 'https://i.ytimg.com/vi/AtdNuj8ZJrE/maxresdefault.jpg' },
    { id: 2, url: 'https://www.youtube.com/watch?v=3wlO4lpCHl8', thumbnail: 'https://i.ytimg.com/vi/3wlO4lpCHl8/maxresdefault.jpg' },
    { id: 3, url: 'https://www.youtube.com/watch?v=hox3Im5AFHk', thumbnail: 'https://i.ytimg.com/vi/hox3Im5AFHk/maxresdefault.jpg' },
    { id: 4, url: 'https://www.youtube.com/watch?v=YPeM4qda6dc', thumbnail: 'https://i.ytimg.com/vi/YPeM4qda6dc/maxresdefault.jpg' },
    { id: 5, url: 'https://www.youtube.com/watch?v=buA6QAdissQ', thumbnail: 'https://i.ytimg.com/vi/buA6QAdissQ/maxresdefault.jpg' },
    { id: 6, url: 'https://www.youtube.com/watch?v=3fVLnPdccF0', thumbnail: 'https://i.ytimg.com/vi/3fVLnPdccF0/maxresdefault.jpg' },
    { id: 7, url: 'https://www.youtube.com/watch?v=8XF7v3Vh8y8', thumbnail: 'https://i.ytimg.com/vi/8XF7v3Vh8y8/maxresdefault.jpg' },
    { id: 8, url: 'https://www.youtube.com/watch?v=fo52C3EkMJM', thumbnail: 'https://i.ytimg.com/vi/fo52C3EkMJM/maxresdefault.jpg' },
    { id: 9, url: 'https://www.youtube.com/watch?v=Hp4Oqy7rhcg', thumbnail: 'https://i.ytimg.com/vi/Hp4Oqy7rhcg/maxresdefault.jpg' },
    { id: 10, url: 'https://www.youtube.com/watch?v=h7rpAUGwQ0g', thumbnail: 'https://i.ytimg.com/vi/h7rpAUGwQ0g/maxresdefault.jpg' },
    { id: 11, url: 'https://www.youtube.com/watch?v=WYinQc1gczY', thumbnail: 'https://i.ytimg.com/vi/WYinQc1gczY/maxresdefault.jpg' },
    { id: 12, url: 'https://www.youtube.com/watch?v=iw7kv_5Mshw', thumbnail: 'https://i.ytimg.com/vi/iw7kv_5Mshw/maxresdefault.jpg' },
    { id: 13, url: 'https://www.youtube.com/watch?v=f6vEc5xsDb4', thumbnail: 'https://i.ytimg.com/vi/f6vEc5xsDb4/maxresdefault.jpg' },
    { id: 14, url: 'https://www.youtube.com/watch?v=5oo616emX3E', thumbnail: 'https://i.ytimg.com/vi/5oo616emX3E/maxresdefault.jpg' },
    { id: 15, url: 'https://www.youtube.com/watch?v=-1CwZ-U7UEs', thumbnail: 'https://i.ytimg.com/vi/-1CwZ-U7UEs/maxresdefault.jpg' },
    { id: 16, url: 'https://www.youtube.com/watch?v=e5VxW7ZjMXY', thumbnail: 'https://i.ytimg.com/vi/e5VxW7ZjMXY/maxresdefault.jpg' },
    { id: 17, url: 'https://www.youtube.com/watch?v=sywxIYZWmn4', thumbnail: 'https://i.ytimg.com/vi/sywxIYZWmn4/maxresdefault.jpg' },
    { id: 18, url: 'https://www.youtube.com/watch?v=5wbyrwi8n8M', thumbnail: 'https://i.ytimg.com/vi/5wbyrwi8n8M/maxresdefault.jpg' },
  ];

  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);

  const handleVideoClick = (video: Video) => {
    setCurrentVideo(video);
  };

  return (
    <div className={styles.videoPlayerContainer}>
      <div className={styles.videoContainer}>
        <ReactPlayer className={styles.videoPlayer} url={currentVideo.url} controls />
      </div>
      <div className={styles.thumbnailContainer}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={`${styles.thumbnail} ${currentVideo.id === video.id ? styles.active : ''}`}
            onClick={(_) => handleVideoClick(video)}
          >
            <img src={video.thumbnail} alt="Video Thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;