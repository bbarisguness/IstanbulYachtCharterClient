"use client";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function VideoComp() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div
        className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
        style={{ backgroundImage: `url("../../../../img/others/5.jpg")` }}
      >
        <button
          className="ltn__video-icon-2 ltn__video-icon-2-border---"
          onClick={() => setOpen(true)}
        >
          <FaPlay />
        </button>
      </div>
    </>
  );
}
