"use client";

import Link from "next/link";
import React, { useRef, memo } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Message = messageRef.current.value;
    const Phone = phoneRef.current.value;

    if (Name === "" || !Name || Name === undefined) {
      return;
    }
    if (
      Email === "" ||
      !Email ||
      Email === undefined ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)
    ) {
      return;
    }

    const templateParams = {
      to_email: Email,
      to_name: Name,
      from_name: "Jugadu Developers",
      phone: Phone,
      message: Message,
    };

    emailjs
      .send(
        "service_y5to5dh",
        "template_lmey9oi",
        templateParams,
        "zUlo75iG3lCe0Vt-V"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          phoneRef.current.value = "";
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={submit}>
      <div className="border-b border-[#121519] gro">
        <label className="sr-only" htmlFor="name" />
        <input
          type="text"
          name="name"
          className="appearance-none bg-transparent border-none w-full placeholder:text-[#121519]  mr-3 py-1 px-2 leading-tight focus:outline-none"
          ref={nameRef}
          placeholder="Your name"
        />
      </div>
      <div className="border-b border-[#121519] active:border-[#090b0e]">
        <label className="sr-only" htmlFor="email" />
        <input
          className="appearance-none bg-transparent border-none w-full  placeholder:text-[#121519]  mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Your email"
        />
      </div>
      <div className="border-b border-[#121519]">
        <label className="sr-only" htmlFor="phone"></label>
        <input
          className="appearance-none bg-transparent border-none w-full  placeholder:text-[#121519]  mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="tel"
          name="phone"
          ref={phoneRef}
          placeholder="Your phone"
        />
      </div>
      <div className="border-b border-[#121519]">
        <label className="sr-only" htmlFor="message"></label>
        <textarea
          placeholder="Have any message for us?"
          rows="2"
          name="message"
          className="appearance-none bg-transparent border-none w-full  placeholder:text-[#121519]  mr-3 py-1 px-2 leading-tight focus:outline-none"
          ref={messageRef}
        ></textarea>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-6 gap-2">
        <button
          type="submit"
          className="self-center bg-black  rounded-md py-3 px-12 text-white text-xl"
        >
          Contact Us
        </button>
        <Link
          href="#"
          className="ml-4  font-semibold text-sm border-dashed border-b hover:border-solid border-black"
        >
          Whats Next?
        </Link>
      </div>
    </form>
  );
}

export default memo(Form);
