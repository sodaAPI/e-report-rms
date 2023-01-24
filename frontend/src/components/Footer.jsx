import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PhoneIcon } from "@heroicons/react/20/solid";

const containerStyle = {
  borderRadius: "10px",
  width: "400px",
  height: "250px",
};

const center = {
  lat: -6.1670022606168144,
  lng: 106.81978945106401,
};

const position = {
  lat: -6.1670022606168144,
  lng: 106.81978945106401,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

export default function Footer(props) {
  return (
    <footer className="p-4 shadow md:px-36 md:py-8 bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            className="mr-3 h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"
            alt="Bank BTN"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <label
              htmlFor="my-modal-4"
              className="btn modal-button capitalize ">
              Contact
            </label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label
                className="modal-box relative bg-gray-800"
                htmlFor="my-modal-4">
                <h3 className=" text-white text-lg font-bold text-center bg-gray-700 p-5 rounded-xl py-4">
                  Contact
                </h3>
                <p className="text-white py-4">
                  <a
                    href="https://goo.gl/maps/VdKZ3ctUfkkxnUDU7"
                    className=" hover:bg-slate-900 py-0.5 rounded-md">
                    Menara Bank BTN Jl. Gajah Mada No. 1 Jakarta 10130
                  </a>
                  <br />
                  Telp: (021) 633 6789
                  <br />
                  Fax: (021) 633 6719
                  <br />
                  <br />
                  <b>Contact Center:</b>
                  <br />
                  <a
                    href="tel:1500286"
                    className="flex flex-row hover:bg-slate-900 mt-1 p-1 rounded-md items-center">
                    <PhoneIcon className="w-3 h-3" />
                    1500 286
                  </a>
                  <br />
                  <b>Email Contact Center:</b>
                  <br />
                  <a
                    href="mailto:btncontactcenter@btn.co.id"
                    className=" hover:bg-slate-900 mt-1 p-1 rounded-md">
                    btncontactcenter@btn.co.id
                  </a>
                  <div className="flex justify-center items-center pt-5">
                    <LoadScript googleMapsApiKey="">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}>
                        <Marker onLoad={onLoad} position={position} />

                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </p>
              </label>
            </label>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Bank Tabungan Negara
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
