import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Google, Instagram, LinkedIn, Twitter } from '../icons'

const Footer = () => {
  return (
    <footer class="text-center text-white" style={{backgroundColor: `#f1f1f1`}}>
  <div class="container pt-9">
    <div class="flex justify-center mb-9">
      <Link to={"/"} href="#!" class="mr-9 text-gray-800">
        <Facebook />
      </Link>
      <Link to={"/"} href="#!" class="mr-9 text-gray-800">
        <Twitter />
      </Link>
      <Link to={"/"} href="#!" class="mr-9 text-gray-800">
        <Google />
      </Link>
      <Link to={"/"} href="#!" class="mr-9 text-gray-800">
        <Instagram />
      </Link>
      <Link to={"/"} href="#!" class="mr-9 text-gray-800">
        <LinkedIn />
      </Link>
      <Link to={"/"} href="#!" class="text-gray-800">
        <Github />
      </Link>
    </div>
  </div>

  <div class="text-center text-gray-700 p-4" style={{backgroundColor: `rgba(0, 0, 0, 0.2)`}}>
    © 2022 Copyright:
              <Link to={"/#"} class="text-gray-800">{ " " }Hevons Synergy</Link>
  </div>
</footer>
  )
}

export default Footer