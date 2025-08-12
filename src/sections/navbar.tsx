"use client"

import { ButtonC } from '@/components/button-icon'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { MailIcon, Menu as MenuIcon, X as CloseIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Animation variants for sidebar links with stagger
  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  // Variants for toggle button icon container
  // We'll animate rotation and horizontal position (x) to move it left on open
  // const buttonWrapperVariants = {
  //   closed: { rotate: 0, x: 0, y: 0, transition: { duration: 0.5 } },
  //   open: { rotate: 360, x: -window.innerWidth * 0.8, y: 0, transition: { duration: 0.5 } },
  // }

  // Since window.innerWidth can't be used safely during SSR,
  // we'll use a state to track window width and update on resize
  const [windowWidth, setWindowWidth] = React.useState(0)
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className="flex justify-between items-center border-b-2 border-black p-5 sticky top-0 bg-white z-50">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo Image"
            height={34}
            width={34}
            className="object-cover"
          />
        </Link>

        {/* Toggle button wrapper - fixed position */}
        <motion.div
          className="md:hidden fixed top-5 right-5 z-60"
          variants={{
            closed: { rotate: 0, x: 0, y: 0, transition: { duration: 0.5 } },
            open: { rotate: 360, x: -windowWidth * 0.8, y: 0, transition: { duration: 0.5 } },
          }}
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <Button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="flex"
                >
                  <CloseIcon className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.4 }}
                >
                  <MenuIcon className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:gap-5 md:text-md font-semibold">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex md:gap-2">
          <ButtonC icon={<SiLeetcode />} variant="outline" size="sm" href="https://leetcode.com/u/Mounieshh/" />
          <ButtonC icon={<SiHackerrank />} variant="outline" size="sm" href="https://www.hackerrank.com/profile/iammounieshv" />
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
            >
              <nav className="flex flex-col p-6 gap-6">
                {['About', 'Projects', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                    onClick={() => setMenuOpen(false)}
                    className="text-md font-semibold"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
