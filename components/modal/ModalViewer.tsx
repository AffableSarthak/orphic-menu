import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { HiEyeOff, HiEye } from "react-icons/hi";

const Model = dynamic(() => import("../glbLoad/Model"), {
  ssr: false,
});

const ModalViewer = ({ glbName, item }: { glbName: string; item: Iitem }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    //@ts-ignore
    window
      .open(
        `https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${glbName}.glb`,
        "_blank"
      )
      .focus();

    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalWithOutAr() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center"> */}
      <button
        type="button"
        onClick={openModal}
        className="bg-button  text-white text-sm font-medium tracking-widest py-1 px-2 border-b-4 border-yellow-700 rounded"
      >
        <div className="flex">
          <div>
            <HiEye className="text-lg mr-1" />
          </div>
          <div>VIEW</div>
        </div>
      </button>
      {/* </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-op"
          onClose={closeModalWithOutAr}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl border-4 border-dark border-opacity-50">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <Model
                    glbName={`${
                      //@ts-ignore
                      item.itemId.split("-")[1].toString() * 1
                    }_processed`}
                    item={item}
                  />
                </Dialog.Title>
                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div> */}

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="text-right px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 "
                    onClick={closeModal}
                  >
                    VIEW IN AR
                  </button>
                </div> */}
                <div className="text-right">
                  <button
                    onClick={closeModalWithOutAr}
                    className="bg-dark opacity-90  text-white text-sm font-medium tracking-widest pt-2 pb-1 px-4 border-b-8 border-black rounded"
                  >
                    <div className="flex">
                      <div>
                        <HiEyeOff className="text-lg mr-1" />
                      </div>
                      <div>CLOSE</div>
                    </div>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalViewer;
