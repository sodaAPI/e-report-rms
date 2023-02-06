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

  const faqList = [
    {
      id: 1,
      name: "Apa itu E-Report?",
      desc: "E-report adalah sistem yang memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus laporan data. Fitur CRUD (create, read, update, delete) memungkinkan pengguna untuk mengelola data secara efisien. Data dapat ditampilkan secara visual melalui grafik atau tabel, dan dapat diexport ke file excel dengan format yang teratur. E-report ini didukung oleh basis data MySQL.",
    },
    {
      id: 2,
      name: "Apa itu Discussion?",
      desc: "Discussion adalah sistem yang memungkinkan pengguna untuk berinteraksi dengan user lainnya satu sama lain dengan menggunakan fitur chat messages.",
    },
    {
      id: 3,
      name: "Apa itu Meeting?",
      desc: "Meeting adalah sistem yang memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus sebuah online meeting. Fitur ini dapat menjadi sarana reminder atau pengingat user yang memiliki meeting dalam beberapa hari kedepan.",
    },
    {
      id: 4,
      name: "Apa itu Profile?",
      desc: "Profile adalah sistem yang memungkinkan pengguna untuk membuat, membaca, dan memperbarui data user.",
    },
    {
      id: 5,
      name: "Apa itu My Task?",
      desc: "My Task adalah sistem yang memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data task. Fitur ini dapat menjadi sarana untuk pengingat user bahwa terdapat tugas atau task yang belum terselesaikan melalui email notification",
    },
    {
      id: 6,
      name: "Apa itu Document?",
      desc: "Document adalah sistem yang memungkinkan pengguna untuk membuat suatu dokumen yang memiliki beberapa tipe dari sebuah template yang sudah di integrasikan. Fitur ini dapat menjadi sarana untuk memudahkan user membuat dokumen secara instan",
    },
  ];

  return (
    <section className="flex-1 py-5 px-5 text-white">
      <div className="flex flex-col gap-5 mb-5 text-justify">
        <a className="text-4xl font-bold ">FAQ</a>
        <a className="text-slate-200">
          Sistem Manajemen E-Report adalah aplikasi perangkat lunak yang
          memungkinkan pengguna untuk membuat, membaca, memperbarui, dan
          menghapus laporan, serta mengelola pengguna, rapat, tugas, dan
          memiliki pemberitahuan berbasis e-mail. Sistem mencakup fitur
          autentikasi untuk memastikan akses yang aman, dan mendukung banyak
          peran pengguna. Sistem ini juga menggunakan database MySQL untuk
          menyimpan data dan memiliki fitur obrolan bawaan untuk perpesanan
          dengan sesama user.
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <Fragment>
          {faqList.map((val) => {
            return (
              <Accordion
                key={val.id}
                className="py-1 px-2 bg-slate-800 rounded-2xl"
                open={open === val.id}
                icon={<Icon id={val.id} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(val.id)}>
                  <InformationCircleIcon className="h-5 w-5" /> {val.name}
                </AccordionHeader>
                <AccordionBody className=" text-slate-200">
                  {val.desc}
                </AccordionBody>
              </Accordion>
            );
          })}
        </Fragment>
      </div>
    </section>
  );
}
