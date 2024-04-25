import React from "react";
// import { useSwipeNavigation } from "../useSwipeNavigation";

const Leaf = () => {
  //   const { swipeHandlers } = useSwipeNavigation("/", "/beautiful");
  return (
    <div
      //   {...swipeHandlers}
      className="flex flex-col items-center justify-center p-6 min-h-screen aspect-w-16 aspect-h-9"
      style={{ position: "relative" }}
    >
      <div
        className="video-player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <video
          //   autoPlay
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          controls
          preload="auto"
        >
          <source src="./leaf.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Leaf;
