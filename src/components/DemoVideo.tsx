import React from "react";

const DemoVideo = () => {
  return (
    <div
      className="dashboard"
      style={{
        background:
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      }}
    >
      <div className="video">
        <video controls className="video">
          <source src="/assets/video/demo.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  );
};

export default DemoVideo;
