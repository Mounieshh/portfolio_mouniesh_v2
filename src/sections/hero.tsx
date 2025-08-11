"use client"

import { ButtonC } from '@/components/button-icon'
import { CircleButton } from '@/components/circle-button'
import TextPressure from '@/components/text-pressure'
import TextType from '@/components/text-type'
import TextTrail from '@/components/trail-text'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the section is visible
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col min-h-screen bg-[#E3E3FF] border-b-2 border-black">

      {/* Content Part */}
      <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 justify-center order-2 md:order-1">
                <div>
                    <CircleButton
                    label='Hello!'
                    />
                </div>

            <div className="font-bold leading-snug">
                <div className="relative h-[80px] md:h-[100px] cursor-pointer text-black text-3xl sm:text-4xl md:text-5xl">
                <TextPressure
                    text="I'm MOUNIESH, "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#000000"
                    strokeColor="#ff0000"
                    minFontSize={24}
                />
                </div>
                <div className="relative h-[80px] md:h-[100px] cursor-pointer text-black text-3xl sm:text-4xl md:text-5xl">
                <TextPressure
                    text="a Software Engineer"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#000000"
                    strokeColor="#ff0000"
                    minFontSize={24}
                />
                </div>
                {/* <div className='relative h-[80px] md:h-[100px] cursor-pointertext-3xl sm:text-4xl md:text-5xl bg-none'>

                <TextType 
                    text={["I'm Mouniesh,","a Software Developer"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    cursorCharacter="|"
                />
                <br />
                
                </div> */}
            </div>

            <div className="max-w-xl text-gray-700 text-base sm:text-lg">
                <p>
                I’m a passionate software developer who loves building clean and efficient web applications using modern technologies.
                </p>
            </div>

            <div className='flex gap-4'>
                <ButtonC label="Resume" variant="outline" href="https://drive.google.com/file/d/1J3Q2tEfCg6r-Tg4gy218UPX8KPeIV2am/view?usp=drive_link" />
                <ButtonC label="See my Works" variant="outline" href="https://github.com/Mounieshh" />
            </div>
            </div>

            {/* Right Column */}
            <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-[280px] h-[350px] relative bg-white border border-black rounded-t-full rounded-b-3xl overflow-hidden">
                <Image
                src="/assets/mouniesh-ghibli.jpg" 
                alt="profile-image"
                fill
                className="object-cover"
                />
            </div>
            </div>
      </div>
    </motion.div>
  )
}
