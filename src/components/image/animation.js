"use client"
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const ImagePage = () => {
    return (
      <div className='flex justify-center items-center w-full h-[219px]'>
        <Player
          autoplay
          loop
          src="animation.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    );
};

export default ImagePage;