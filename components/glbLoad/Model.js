import "@google/model-viewer";

const Model = ({ glbName }) => (
  // <div
  //   style={{
  //     margin: "3em auto",
  //     display: "flex",
  //     flexDirection: "column",
  //     maxWidth: "600px",
  //     borderRadius: "6px",
  //     boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
  //     overflow: "hidden",
  //   }}
  // >
  <model-viewer
    style={{
      width: "100%",
      height: "200px",
      // backgroundColor: "#70bcd1",
      "-posterColor": "#ffffff00",
    }}
    src={`https://d3fkon.github.io/onpar-ar/objects/bc/${glbName}.glb`}
    poster="poster.webp"
    camera-orbit="0deg 75deg auto"
    auto-rotate
    alt="Model of a Food Item"
    camera-controls
    // auto-rotate-delay="5"
    rotation-per-second="0.69rad"
    ar-modes="webxr scene-viewer quick-look"
    min-camera-orbit="-141deg 22deg auto"
    max-camera-orbit="-32deg 76deg auto"
  >
    {/* <div class="progress-bar hide" slot="progress-bar">
      <div class="update-bar"></div>
    </div> */}
    {/* <button slot="ar-button" id="ar-button">
      View in your space
    </button> */}
    {/* <div id="ar-prompt">
      <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
    </div> */}
  </model-viewer>
  // </div>
);

export default Model;
