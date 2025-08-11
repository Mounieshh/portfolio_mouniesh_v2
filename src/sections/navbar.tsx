"use client"

import { ButtonC } from '@/components/button-icon'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowUp, MailIcon, Menu as MenuIcon, X as CloseIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex justify-between items-center border-b-2 border-black p-5 sticky top-0 bg-white z-50">
        {/* Logo (always visible) */}
        <Link href="/">
          <MailIcon className="w-8 h-8" />
        </Link>

        {/* Mobile Hamburger (hidden on md+) */}
        <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </Button>

        {/* Desktop Nav Links (hidden on mobile) */}
        <div className="hidden md:flex md:gap-5 md:text-md font-semibold">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Buttons (hidden on mobile) */}
        <div className="hidden md:flex md:gap-2">
          <ButtonC icon={<ArrowUp />} variant="outline" size="sm" />
          <ButtonC icon={<ArrowUp />} variant="outline" size="sm" />
          <ButtonC icon={<ArrowUp />} variant="outline" size="sm" />
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col p-6 gap-6">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Optional overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
