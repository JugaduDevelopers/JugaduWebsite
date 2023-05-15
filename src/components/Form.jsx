"use client";

import Link from "next/link";
import React, { useCallback, useRef, memo } from "react";

function Form({ api }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submit = async (e) => {
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Message = messageRef.current.value;
    const Phone = phoneRef.current.value;
    e.preventDefault();

    const formData = {
      data: {
        Name,
        Email,
        Message,
        Phone,
      },
    };

    try {
      await fetch(`${api}/api/forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      return new Error("Errrrrror");
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={submit}>
      <label htmlFor="name" className="hidden"></label>
      <input
        type="text"
        name="name"
        className="appearance-none bg-transparent border-none w-full text-[#121519] placeholder:text-[#121519] border-b border-[#121519] mr-3 py-1 px-2 leading-tight focus:outline-none"
        ref={nameRef}
        placeholder="Your name"
      />
      <label htmlFor="email"></label>
      <input
        className="appearance-none bg-transparent border-none w-full text-[#121519] placeholder:text-[#121519] border-b border-[#121519] mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="email"
        name="email"
        ref={emailRef}
        placeholder="Your email"
      />
      <label htmlFor="phone"></label>
      <input
        className="appearance-none bg-transparent border-none w-full text-[#121519] placeholder:text-[#121519] border-b border-[#121519] mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="tel"
        name="phone"
        ref={phoneRef}
        placeholder="Your phone"
      />
      <label htmlFor="message"></label>
      <textarea
        placeholder="Have any message for us?"
        rows="2"
        name="message"
        className="appearance-none bg-transparent border-none w-full border-b border-[#121519] placeholder:text-[#121519] text-[#121519] mr-3 py-1 px-2 leading-tight focus:outline-none"
        ref={messageRef}
      ></textarea>
      <div className=" mt-6">
        <button
          type="submit"
          className="self-center bg-black  rounded-md py-3 px-12 text-white text-xl"
        >
          Contact Us
        </button>
        <Link
          href="#"
          className="ml-4 font-semibold text-sm border-dashed border-b border-black"
        >
          Whats Next?
        </Link>
      </div>
    </form>
  );
}

export default memo(Form);
