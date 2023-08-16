import "aframe";
import React from "react";
import { Entity, Scene } from "aframe-react";

export const PanoramaViewer: React.FC = () => {
  return (
    <Scene>
      <Entity primitive="a-camera">
        <Entity
          primitive="a-cursor"
          animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
          animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
          animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"
        />
      </Entity>
      <Entity
        primitive="a-sky"
        radius="10"
        src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"
      />
    </Scene>
  );
};

export default PanoramaViewer;
