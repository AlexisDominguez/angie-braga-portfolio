import React from 'react'
import { BsBehance, BsDribbble } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const SideMenuButtons = () => {
  return (
    <div className="absolute py-4 left-9 top-80">
      <FaLinkedinIn className="my-5 text-xl" />
      <BsBehance className="my-5 text-xl" />
      <BsDribbble className="my-5 text-xl" />
    </div>
  )
}

export default SideMenuButtons
