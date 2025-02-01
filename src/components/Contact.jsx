import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
        redirect: 'follow',
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });
  
      console.log('Form submitted successfully');
      setLoading(false);
      alert('Thank you! Your message has been submitted successfully!');
      
      setForm({
        name: '',
        email: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error!', error);
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };
  
    

  return (
    <div className="xl:mt-12 flex lg:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name pal!" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email pal!" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7" 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say!" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
              required
            />
          </label>
          <button 
            type="submit" 
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white rounded-[10px] font-bold shadow-md shadow-primary 
            hover:bg-tertiary-dark transition-colors duration-300 green-pink-gradient"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className="lg:flex-1 lg:h-[550px] md:h-[450px] h-[350px] w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")


//  DeploymentID- AKfycbzw5CIXJmkMmkgqTzN_5S294CxaP6cS_AQaqdZFfpe1fC29PySSHsIvX3FaOGFZ49w6
// URL_Script- https://script.google.com/macros/s/AKfycbzw5CIXJmkMmkgqTzN_5S294CxaP6cS_AQaqdZFfpe1fC29PySSHsIvX3FaOGFZ49w6/exec