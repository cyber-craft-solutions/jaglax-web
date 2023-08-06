import { Copyright, Facebook, Instagram, Whatsapp } from "@/assets/Icons";
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-7 pb-[30px] flex flex-col items-center">
        <span className="flex gap-5 pb-3">
          <Whatsapp />
          <Instagram />
          <Facebook />
        </span>
        <span className="flex items-center">
          <p className="pr-2">2023</p>
          <Copyright />
          <p className="pl-2">by Jaglax Homes T&C</p>
        </span>
      </footer>
  )
}

export default Footer