import React, { useEffect, useRef, Fragment, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  EllipsisVerticalIcon,
  CheckIcon,
  PaperAirplaneIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DropdownButton } from "../../../components/dropdownLink";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function Discussions() {
  const [showMessages, setShowMessage] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const history = useNavigate();
  const [showEmoji, setShowEmoji] = useState();

  function addEmoji(emoji) {
    setMessage(message + emoji.native);
  }

  const showEmojiPicker = async () => {
    if (showEmoji === false) {
      setShowEmoji(true);
    } else {
      setShowEmoji(false);
    }
  };

  //Go To
  const gotoProfile = async () => {
    let path = "/dashboard/profile";
    navigate(path);
  };

  //Chat
  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/message/get");
      setShowMessage(response.data);
    } catch (error) {
      window.alert(`Cannot get messages, An error occurred: ${error}`);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message !== "") {
      await axios.post(`http://localhost:5000/message/add`, {
        text: message,
      });
      getMessage();
    }
    setMessage("");
    history.push("/message");
  };

  const deleteMessage = async (uuid) => {
    try {
      await axios.delete(`http://localhost:5000/message/delete/${uuid}`);
      getMessage();
    } catch (error) {
      if (error.response) {
        window.alert(`An error occurred: ${error.response.data.msg}`);
      }
    }
  };

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const element = scrollContainerRef.current;
    element.scrollTop = element.scrollHeight;
  }, [showMessages]);

  useEffect(() => {
    getMessage();
  }, []);

  //User
  const { user } = useSelector((state) => state.auth);

  //Truncate
  const truncate = (input) =>
    input?.length > 4 ? `${input.substring(0, 30)} ...` : input;

  return (
    <div className="pt-5">
      <span className="flex flex-row items-center gap-2 px-5 text-2xl text-white">
        <ChatBubbleLeftRightIcon className="w-7 h-7" />
        Chat Dicussion
      </span>
      <section className="flex lg:flex-row flex-col gap-5 justify-center py-5 w-full">
        {/* Channel Layout */}
        <div className="flex flex-col h-1/2 bg-sky-800 bg-opacity-20 lg:w-1/3 w-full p-5 rounded-lg">
          {/* Profile */}
          <div className="flex flex-row xl:gap-40 md:gap-5 gap-0 items-center text-white">
            <section className="flex flex-row gap-2 items-center text-white">
              <UserCircleIcon className="lg:w-20 lg:h-20 w-10 h-10" />
              <span className="flex flex-col w-full lg:text-lg text-sm">
                {user?.name} / {user?.username}
                <span className="text-slate-300 lg:text-sm text-xs">
                  {user?.division} - {user?.roles}
                </span>
              </span>
            </section>
            <button
              onClick={gotoProfile}
              data-tip="User Profile"
              className=" tooltip font-bold hover:bg-slate-700 hover:rounded-md">
              <EllipsisVerticalIcon className="w-5 h-5 text-slate-300" />
            </button>
          </div>
          <div className="divider my-3 px-20" />
          {/* Channels */}
          <span className="flex flex-row gap-2 items-center text-white text-xl font-bold">
            <GlobeAltIcon className="w-5 h-5" />
            Channels
          </span>
          <button
            data-tip="Sent"
            className="tooltip lg:tooltip-right tooltip-bottom lg:p-2 p-5 flex flex-row w-full hover:bg-opacity-40 hover:focus:ring my-3 items-center bg-slate-800 bg-opacity-70 rounded-lg">
            <UsersIcon className="lg:h-16 lg:w-16 md:h-10 md:w-10 sm:w-5 sm:h-5 lg:block hidden object-cover rounded-full m-6" />
            {showMessages
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .slice(0, 1)
              .map((val) => {
                const date = new Date(val.createdAt);
                const options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  timeZone: "Asia/Bangkok",
                };
                const formattedDate = date.toLocaleString("en-US", options);
                return (
                  <>
                    <div className="flex flex-col gap-3 w-full text-start lg:pl-0 pl-2">
                      <span className="text-slate-100 text-md font-bold">
                        Global Chat
                      </span>
                      <span className="lg:hidden block text-sm text-slate-400">
                        {formattedDate}
                      </span>
                      <span className="text-slate-300 font-base lg:text-sm text-xs">
                        {val.user.name}: {truncate(val.text)}
                      </span>
                      <CheckIcon className="lg:hidden block text-sky-400 w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-3 w-full items-end pr-5 text-end">
                      <span className="lg:block hidden text-sm text-slate-400">
                        {formattedDate}
                      </span>
                      <CheckIcon className="lg:block hidden text-sky-400 w-5 h-5" />
                    </div>
                  </>
                );
              })}
          </button>
          <div className="divider my-3 px-20" />
        </div>
        {/* Chat Layout */}
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex flex-row items-center place-content-between bg-sky-800 bg-opacity-20 rounded-t-lg lg:p-0 p-5">
            <span className="flex flex-row items-center text-lg font-bold text-white">
              <UsersIcon className="lg:h-16 lg:w-16 md:h-10 md:w-10 sm:w-5 sm:h-5 lg:block hidden object-cover rounded-full m-6" />
              Global Chat
            </span>
            <div className="px-5">
              <label
                htmlFor="my-modal-4"
                data-tip="Channel Info"
                className="btn flex items-center modal-button tooltip tooltip-left font-bold hover:bg-slate-700 hover:rounded-md">
                <EllipsisVerticalIcon className="w-5 h-5 text-slate-300" />
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                  className="modal-box relative bg-gray-800"
                  htmlFor="my-modal-4">
                  <h3 className=" text-white text-lg font-bold text-center bg-gray-700 p-5 rounded-xl py-4">
                    Channel Info
                  </h3>
                  {showMessages
                    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
                    .slice(0, 1)
                    .map((val) => {
                      return (
                        <p
                          key={val.id}
                          className="flex flex-col gap-2 pt-5 text-white py-4">
                          <a>
                            <b>Channel Name :</b> {val.room}
                          </a>
                          <a>
                            <b>Channel Created At :</b> 2023-01-02
                          </a>
                          <a>
                            <b>Channel Member List :</b> All Users
                          </a>
                        </p>
                      );
                    })}
                </label>
              </label>
            </div>
          </div>
          {/* Chat Body */}
          <div
            className="flex flex-col overflow-y-scroll h-chat bg-slate-900 bg-opacity-30 px-5"
            ref={scrollContainerRef}>
            {showMessages
              .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
              .map((val) => {
                const isOwnMessage = val.userId === user.id;
                const messageClasses = `flex bg-opacity-90 xl:w-10/12 w-3/4 px-5 py-3 rounded-2xl $text-justify text-slate-300 break-normal break-all ${
                  isOwnMessage ? "chat chat-end" : "chat chat-start"
                } ${
                  isOwnMessage ? "place-content-end" : "place-content-start"
                } `;
                const iconClasses = `text-${
                  isOwnMessage ? "blue-500" : "green-500"
                } h-12 w-12 lg:block hidden object-cover rounded-full m-6`;
                const nameClasses = `text-${
                  isOwnMessage ? "white" : "red-500"
                } `;
                const senderClasses = `flex flex-row gap-5 ${
                  isOwnMessage ? "place-self-end" : "place-self-start"
                }`;
                const date = new Date(val.createdAt);
                const options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  timeZone: "Asia/Bangkok",
                };
                const formattedDate = date.toLocaleString("en-US", options);
                return (
                  <div
                    key={val.id}
                    className={`flex flex-row py-3 ${
                      isOwnMessage ? "place-self-end" : ""
                    }`}>
                    {!isOwnMessage && (
                      <UserCircleIcon className={iconClasses} />
                    )}
                    <div className="flex flex-col gap-2">
                      <div className={senderClasses}>
                        {isOwnMessage ? (
                          <>
                            <span> {formattedDate}</span>
                            <span className={nameClasses}>
                              <b>{val.user.name}</b>
                            </span>
                          </>
                        ) : (
                          <>
                            <span className={nameClasses}>
                              <b>{val.user.name}</b>
                            </span>
                            <span> {formattedDate}</span>
                          </>
                        )}
                      </div>
                      <div
                        className={`flex flex-row ${
                          isOwnMessage ? "place-content-end" : ""
                        }`}>
                        {isOwnMessage ? (
                          // Sender Message
                          <>
                            <Menu as="div" className="relative ml-3">
                              <div className="p-1 my-auto font-bold hover:bg-slate-700 hover:rounded-md">
                                <Menu.Button
                                  data-tip="Info"
                                  className="tooltip tooltip-left p-1 items-center gap-1 flex rounded-2xl focus:outline-none">
                                  <span className="sr-only">Message Info</span>
                                  <EllipsisVerticalIcon className="w-5 h-5 text-slate-300" />
                                </Menu.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute flex flex-col -right-10 md:w-44 w-auto text-start items-start origin-top-right rounded-md bg-slate-50 bg-opacity-90 py-2 gap-2 px-5">
                                  <>
                                    {/* Delete Message Dropdown */}

                                    <Menu.Item className="flex flex-row py-2 text-sm gap-2 text-gray-700">
                                      <DropdownButton
                                        onClick={() => {
                                          deleteMessage(val.uuid);
                                        }}
                                        className="flex flex-row">
                                        <TrashIcon className="w-5 h-5 text-red-900" />
                                        Delete Message
                                      </DropdownButton>
                                    </Menu.Item>
                                  </>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                            <div className={messageClasses}>
                              <div className="chat chat-bubble">{val.text}</div>
                            </div>
                          </>
                        ) : (
                          // Users Message
                          <>
                            <div className={messageClasses}>
                              <div className="chat chat-bubble">{val.text}</div>
                            </div>
                            <Menu as="div" className="relative ml-3">
                              <div className="p-1 my-auto font-bold hover:bg-slate-700 hover:rounded-md">
                                <Menu.Button
                                  data-tip="Info"
                                  className="tooltip tooltip-right p-1 items-center gap-1 flex rounded-2xl focus:outline-none">
                                  <span className="sr-only">Message Info</span>
                                  <EllipsisVerticalIcon className="w-5 h-5 text-slate-300" />
                                </Menu.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute flex flex-col -left-10 md:w-44 w-auto text-start items-start origin-top-right rounded-md bg-slate-50 bg-opacity-90 py-2 gap-2 px-5">
                                  <>
                                    {/* Delete Message Dropdown */}

                                    <Menu.Item className="flex flex-row py-2 text-sm gap-2 text-gray-700">
                                      <DropdownButton
                                        onClick={() => {
                                          deleteMessage(val.uuid);
                                        }}
                                        className="flex flex-row">
                                        <TrashIcon className="w-5 h-5 text-red-900" />
                                        Delete Message
                                      </DropdownButton>
                                    </Menu.Item>
                                  </>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </>
                        )}
                      </div>
                    </div>
                    {isOwnMessage && <UserCircleIcon className={iconClasses} />}
                  </div>
                );
              })}
          </div>
          {/* Send Message Navigation Bar */}
          <div className="flex flex-row items-center w-full rounded-b-lg bg-sky-800 bg-opacity-20 px-5 py-3 ">
            {!showEmoji ? (
              <button
                onClick={showEmojiPicker}
                data-tip="Emoticon"
                className="tooltip lg:tooltip-left tooltip-top hover:text-white text-slate-300">
                <FaceSmileIcon className="w-14 h-14 pr-5" />
              </button>
            ) : (
              <>
                <div className="fixed top-80 -bottom-10">
                  <Picker data={data} onEmojiSelect={addEmoji} />
                </div>
                <button
                  onClick={showEmojiPicker}
                  data-tip="Emoticon"
                  className="tooltip lg:tooltip-left tooltip-top hover:text-white text-slate-300">
                  <FaceSmileIcon className="w-14 h-14 pr-5" />
                </button>
              </>
            )}

            <form
              id="form"
              className="flex flex-row items-center w-full"
              onSubmit={sendMessage}>
              <input
                id="input"
                className="px-5 py-3 rounded-l-2xl w-full text-white bg-slate-800"
                type="text"
                placeholder="Message ..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                autoFocus
              />
              <button
                className="flex flex-row px-5 py-2.5 bg-sky-800 rounded-r-2xl items-center"
                type="submit"
                disabled={!message.trim()}>
                <PaperAirplaneIcon className="text-white w-7 h-7" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
