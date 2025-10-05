import React, { useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { SendHorizontal } from 'lucide-react';
import emailjs from "@emailjs/browser"

function Contact() {
  const {isLight, setIsLight} = useOutletContext();
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isName || !isEmail || !isMessage) {
      alert("⚠️ Please fill in all fields.")
      return; 
    }

    emailjs
      .sendForm('service_umz8tsi', 'template_4m8wqvb', 
        form.current, {
          publicKey: 'IDmBG9hHlkJVnVMXg',
      })
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );

    setIsName("");
    setIsEmail("");
    setIsMessage("");
  }

  return (
    <div className={`mt-[100px]`}>    
      <form ref = {form} onSubmit={handleSubmit} >

        <div className="flex flex-row justify-between items-center mb-[30px]">
          <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Contact me 💬</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-between items-center gap-[20px]">
          <input name="name" required value={isName} onChange={(e) => setIsName(e.target.value)} placeholder='Your Name' type="text" className={`rounded-md w-full md:w-[340px] px-[18px] py-[5px] text-[14px] shadow-md border outline-none ${isLight ? " border-gray-200 placeholder-gray-400": " border-gray-600 placeholder-gray-500"}`} />
          <input name="email" required value={isEmail} onChange = {(e) => setIsEmail(e.target.value)} placeholder='Your Email' type="email" className={`rounded-md w-full md:w-[340px] px-[18px] py-[5px] text-[14px] shadow-md border outline-none ${isLight ? " border-gray-200 placeholder-gray-400": " border-gray-600 placeholder-gray-500"}`} />
        </div>
        <div className="mt-[30px]">
          <textarea name="message" required value={isMessage} onChange={(e) => setIsMessage(e.target.value)} placeholder="Please email me here." className={`outline-none shadow-md rounded-md w-full h-[150px] resize-none px-[18px] py-[12px] text-[14px] border ${isLight ? " border-gray-200 placeholder-gray-400": " border-gray-600 placeholder-gray-500"} `} ></textarea>
        </div>
        <button type='submit' className={`cursor-pointer flex flex-row justify-center items-center gap-[10px] mt-[30px] outline-none shadow-md rounded-md w-full h-[40px] resize-none px-[18px] py-[12px] text-[14px] border ${isLight ? " border-gray-200 bg-black text-white hover:bg-gray-700 ": " border-gray-800 bg-white text-black hover:bg-gray-200"} `} >
          Send the message
          <SendHorizontal size = "20"/>
        </button>
        <div className={`mt-[10px] font-light text-[14px] ${isLight ? 'text-gray-500': 'text-gray-100'}`}>
          By sending this message, there is no take back
        </div>

    </form>
  </div> 
  )
}

export default Contact