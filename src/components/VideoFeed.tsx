import React from 'react';

interface FacebookVideoProps {
  embedCode: string;
  description: string;
}

const VideoFeed: React.FC<FacebookVideoProps> = ({ embedCode,description }) => {
  return (
<div className="w-45 md:w-1/2 lg:w-1/4 mx-auto p-4 rounded-lg group hover:bg-red-600 border-red-800 border-2  mr-4 transition duration-300 ease-in-out mb-5 md:mb-0">
  <p className="text-sm">{description}</p>
  <br/>
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={`https://www.facebook.com/plugins/video.php?href=${embedCode}&show_text=false`}
      width="182"
      height="324"
      style={{ border: 'none', overflow: 'hidden' }}
      className="border border-4"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
</div>


  );
};

export default VideoFeed;


