import React from 'react'

export default function ContactPage() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='text-center text-4xl mt-16 font-bold'>
        Contact
      </div>
      <div className='mx-16 mt-4'>
        Get in touch with Edie regarding vocal contracting, recording sessions, conducting, (more depending on what she'd like listed here)
      </div>

      <form className='flex flex-col items-center justify-center pt-12 w-[600px]' name='contact' method='POST' data-netlify='true'>
        <div className='flex justify-between items-center w-[600px] pb-4'>
          <div className='flex flex-col items-leading'>
            <label >
              Name
            </label>
            <input type='text' name='name' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex flex-col items-leading'>
            <label>
              E-Mail
            </label>
            <input type='text' name='email' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex flex-col items-leading'>
            <label>
              Company / Org (optional)
            </label>
            <input type='text' name='company' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <label className='pb-1 items'>
            Please leave your message below :
          </label>
        </div>
        <textarea name='message' className='h-[400px] w-[600px] p-2 text-sm border-black  border-[1px]'>

        </textarea>
        <div className='flex w-full justify-end items-center'>
          <button className='h-[40px] bg-black text-white mt-2 p-2 rounded-lg transform hover:scale-110 duration-75'>
            <i className='flaticon-email h-[20px] w-[20px] pr-2'></i>Send
          </button>
        </div>
      </form>
    </div>
  )
}
