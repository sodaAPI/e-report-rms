import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQs() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="flex-1 py-5 px-5 text-white">
      <div className="flex flex-col gap-5 mb-5 text-justify">
        <a className="text-4xl font-bold ">FAQ</a>
        <a className="text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
          velit vitae vulputate elementum. Donec aliquet est ut nisi tristique
          rutrum. Quisque eleifend sagittis aliquet. Mauris malesuada aliquam
          tincidunt. Mauris vel dapibus lorem. Integer porttitor non massa eget
          aliquam. Suspendisse non venenatis diam. Aliquam in sapien eros. Fusce
          eleifend in ex vel mattis. Nam a iaculis est.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Proin finibus velit vitae vulputate
          elementum. Donec aliquet est ut nisi tristique rutrum. Quisque
          eleifend sagittis aliquet. Mauris malesuada aliquam tincidunt. Mauris
          vel dapibus lorem. Integer porttitor non massa eget aliquam.
          Suspendisse non venenatis diam. Aliquam in sapien eros. Fusce eleifend
          in ex vel mattis. Nam a iaculis est. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin finibus velit vitae vulputate
          elementum. Donec aliquet est ut nisi tristique rutrum. Quisque
          eleifend sagittis aliquet. Mauris malesuada aliquam tincidunt. Mauris
          vel dapibus lorem. Integer porttitor non massa eget aliquam.
          Suspendisse non venenatis diam. Aliquam in sapien eros. Fusce eleifend
          in ex vel mattis. Nam a iaculis est.
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <Fragment>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 1}
            icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <InformationCircleIcon className="h-5 w-5" /> What is e-Report?
            </AccordionHeader>
            <AccordionBody className=" text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 2}
            icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <InformationCircleIcon className="h-5 w-5" /> What is Reminder?
            </AccordionHeader>
            <AccordionBody className="text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 3}
            icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <InformationCircleIcon className="h-5 w-5" /> How to use e-Report?
            </AccordionHeader>
            <AccordionBody className="text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 4}
            icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              <InformationCircleIcon className="h-5 w-5" /> How to use Reminder?
            </AccordionHeader>
            <AccordionBody className="text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 5}
            icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              <InformationCircleIcon className="h-5 w-5" /> What can I do with
              e-Report?
            </AccordionHeader>
            <AccordionBody className="text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="py-1 px-2 bg-slate-800 rounded-2xl"
            open={open === 6}
            icon={<Icon id={6} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(6)}>
              <InformationCircleIcon className="h-5 w-5" /> What can I do with
              Reminder?
            </AccordionHeader>
            <AccordionBody className="text-slate-200">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </section>
  );
}
