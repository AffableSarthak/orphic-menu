import "@google/model-viewer";
import { FiBox } from "react-icons/fi";

const Model = ({ glbName, item }) => (
  <div
    className="text-right text-black mt-2"
    style={{
      // margin: "3em auto",
      display: "flex",
      flexDirection: "column",
      maxWidth: "600px",
      borderRadius: "6px",
      // boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
      overflow: "hidden",
    }}
  >
    <model-viewer
      style={{
        width: "100%",
        height: "200px",
        // backgroundColor: "#FFFFFF",
        // "-posterColor": "#ffffff00",
        marginBottom: "1rem",
      }}
      // src={`https://d3fkon.github.io/onpar-ar/objects/bc/${glbName}.glb`}
      src={`https://s3.eu-west-1.amazonaws.com/next.onpar.co.in/Objects/bc/${glbName}.glb`}
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
      {/* <div id="ar-prompt" className="m-2 p-2"> */}
      <button>
        <a
          target="_blank"
          href={`https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${
            item.itemId.split("-")[1].toString() * 1
          }_processed.glb`}
          rel="noopener noreferrer"
        >
          {/* VIEW IN AR */}
          <FiBox className="text-4xl" />
        </a>
      </button>
      {/* <a
        target="_blank"
        href={`https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${
          item.itemId.split("-")[1].toString() * 1
        }_processed.glb`}
        rel="noopener noreferrer"
      ></a> */}
      {/* </div> */}
    </model-viewer>
    {/* <div className="text-center">
      <h3 className="text-white text-sm">
        To view the model in 3D space <br /> CLICK on the Icon Below
        <span>
          <a
            className="text-white text-lg text-center active:text-primary"
            target="_blank"
            href={`https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${
              item.itemId.split("-")[1].toString() * 1
            }_processed.glb`}
            rel="noopener noreferrer"
          >
            <img
              src="https://modelviewer.dev/shared-assets/icons/hand.png"
              className="h-full ml-36"
            />
          </a>
        </span>
      </h3>
    </div> */}

    {/* <button className="bg-white rounded-full p-1 text-black text-lg font-mono font-black active:bg-primary"> */}

    {/* </button> */}
  </div>
);

export default Model;