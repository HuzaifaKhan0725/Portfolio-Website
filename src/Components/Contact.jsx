import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Contact() {
  const Forms=[
    {
      name:"github",
      href:"https://github.com/HuzaifaKhan0725",
      icon:"/github-logo.png"
    },
    {
      name:"instagram",
      icon:"Instagram-Logo.wine.svg"
    },
    {
      name:"facebook",
      icon:"facebook1.png"
    },
    {
      name:"Linkedin",
            icon:"Linkedin1.png",
    }
  ]
  return (
   <section className="section" id="contact">
    <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
      <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
     <h1 className="heading-2 lg:max-w-[12ch]">Contact me for collaboration</h1>
     <p className="text-zinc-400 mt-3 mb-8  max-w-[50ch] lg:max-w-[30ch]">Reach me out today to discuss regarding your project and Doing something Amazing!</p>
     <div className="flex items-center mt-0 gap-2">
       {Forms.map((form, index) => (
         <a href={form.href} target='_blank' key={index} className="flex items-center gap-5 w-18 h-18 ring-inset ring-2 ring-zinc-50/5 rounded-lg transition [background-color,color] hover:bg-zinc-50 cursor-pointer hover:text-zinc-950">
<img src={form.icon} alt="icon" className="w-9 h-9 rounded-icon" />
   
         </a>
       ))}
       </div>
     </div>
     <form action="https://getform.io/f/bwnnnova" method="POST" className="xl:pl-10 2xl:pl-20">
 
     <div >
      <div className="mb-3">
        <label htmlFor="name">Your Name :</label>
        <input type="text" id="name" name="name" autoComplete='name' required placeholder='Huzaifa' className="input-field" />

      </div>
     </div>

     <div>
      <div>
        <label htmlFor="name">Your Email :</label>
        <input type="text" id="name" name="name" autoComplete='name' required placeholder='xyz@123'  className="input-field" />

      </div>
     </div>

     <div>
      <div>
        <label htmlFor="name">Message :</label>
      <textarea name="message" id=""  className="input-field resize-y min-h-32 max-h-80"></textarea>
      </div>
     </div>
    <button type="submit" className="btn btn-primary" >
    Submit
    </button>


     </form>
     </div>
   </section>
  )
}
