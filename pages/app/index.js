import React from "react";
import Script from "next/script";
// import { model } from "../../public/models/81_processed.glb";

const TestModelPage = () => {
  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <model-viewer
        // src="/models/81_processed.glb"
        src={`https://s3.eu-west-1.amazonaws.com/next.onpar.co.in/Objects/bc/81_processed.glb`}
        alt="fOoD mOdEl"
        poster="https://i.pinimg.com/originals/ee/1d/08/ee1d081c5bdf966b058c1a6588e73e8a.gif"
        shadow-intensity="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        skybox-image="https://images.unsplash.com/photo-1596263576925-d90d63691097?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1922&q=80"
      ></model-viewer>
    </div>
  );
};

export default TestModelPage;
