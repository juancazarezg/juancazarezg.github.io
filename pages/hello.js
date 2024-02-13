import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const toggleMute = () => {
    setIsMuted(prevState => !prevState);
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img src="/img/logo/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
      <video
        ref={videoRef}
        style={{ boxShadow: '0 0 25px rgba(57,181,74,0.5)', maxWidth: '90%', maxHeight: 'calc(100% - 100px)' }}
        src={'/videin.mp4'}
        autoPlay
        muted={isMuted}
        loop
        controls={false}
        onClick={toggleMute}
      />
      <div style={{ marginTop: '10px' }}>
        <Link href="/" style={{ textDecoration: 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px', color: 'white', fontSize: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                width={15}
                height={15}
                className="svg"
                style={{ filter: 'invert(1)' }}
                src={"/img/svg/home-run.svg"}
                alt="homerun"
            />
            <span style={{ marginLeft: '5px' }}>HOME</span>
        </div>
            
        </Link>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={toggleMute}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </div>
    </div>
  );
};

export default VideoPlayer;


