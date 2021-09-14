import "@google/model-viewer";
import { FiBox } from "react-icons/fi";

const Model = ({ glbName, item }) => (
  <>
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
          height: "170px",
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
    <div className="text-right">
      <button className="bg-dark opacity-90  text-white text-sm font-medium tracking-widest pt-2 pb-1 px-4 border-b-8 border-black rounded">
        <div className="flex">
          <div>
            <FiBox className="text-lg mr-1" />
          </div>
          <div>
            <a
              target="_blank"
              href={`https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${
                item.itemId.split("-")[1].toString() * 1
              }_processed.glb`}
              rel="noopener noreferrer"
            >
              <span>VIEW IN AR</span>
            </a>
          </div>
        </div>
      </button>
    </div>
  </>
);

export default Model;

{
  /* <FiBox className="text-4xl" /> */
}
{
  /* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */
}
