// import "@google/model-viewer";
import { FiBox } from "react-icons/fi";
import { logo } from "../../public/orphic_logo.svg";
import Button from "../common/Button";

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
          "-posterColor": "transparent",
          marginBottom: "1rem",
        }}
        src={`https://s3.eu-west-1.amazonaws.com/next.onpar.co.in/Objects/bc/${glbName}.glb`}
        // poster={logo}
        loading="eager"
        camera-orbit="0deg 75deg auto"
        auto-rotate
        alt="Model of a Food Item"
        camera-controls
        rotation-per-second="0.69rad"
        ar-modes="webxr scene-viewer quick-look"
        min-camera-orbit="-141deg 22deg auto"
        max-camera-orbit="-32deg 76deg auto"
        poster="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif"
        // ar
        // ar-modes="webxr scene-viewer quick-look"
        // ar-scale="fixed"
        // camera-controls
        // // skybox-image="../../public/orphic_logo.svg"
      ></model-viewer>
    </div>
    {/* <div className="text-right">
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
    </div> */}
  </>
);

export default Model;
