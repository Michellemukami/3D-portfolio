import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading, setLoading]= useState(false);
  const handleChange = (e) => {
    const { name,value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     // Validate form
  if (!form.name || !form.email || !form.message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'warning',
      title: 'Please fill in all fields.',
      showConfirmButton: false,
      timer: 3000,
      background: '#151030',
      color: '#fff',
    });
    return;
  }

  // Optional: Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'warning',
      title: 'Please enter a valid email address.',
      showConfirmButton: false,
      timer: 3000,
      background: '#151030',
      color: '#fff',
    });
    return;
  }

    setLoading(true);

 
    emailjs.send(
      'service_46ta8eo',
      'template_q1hpkl9',
    {
      from_name: form.name,
      to_name:'Michelle Mukami',
      from_email:form.email,
      to_email:'mitchellemukami.g@gmail.com',
      message:form.message,
    },
    'PhgTGpxWling_hSjP'
    )
    .then(()=> {
      setLoading(false);
   
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Message sent!',
    showConfirmButton: false,
    timer: 3000,
    background: '#151030',
    color: '#fff',
    iconColor: '#4ade80', // green icon
  });
    setForm({
      name:'',
      email:'',
      message:'',
    })
    }, (error) => {
      setLoading(false)
      console.log(error),
        Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'error',
    title: 'Something went wrong. Please try again.',
    showConfirmButton: false,
    timer: 3000,
    background: '#151030',
    color: '#ffffff'
  });

    })
  }
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8">
          <lable className="flex flex-col">
            <span className="text-white mb-4">Your Name</span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What is your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"/>
          </lable>
          <lable className="flex flex-col">
            <span className="text-white mb-4">Your Email</span>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What is your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"/>
          </lable>
          <lable className="flex flex-col">
            <span className="text-white mb-4">Your Message</span>
            <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"/>
          </lable>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")