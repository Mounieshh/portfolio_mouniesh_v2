"use client"

import React from 'react';

import { motion } from 'framer-motion'

export default function DummySection() {
  return (
    <motion.div 
    id='contact' 
    className="min-h-[80px] md:min-h-[100px] lg:min-h-[120px] bg-[#E3E3FF]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the section is visible
    transition={{ duration: 0.6, ease: "easeOut" }}
    > 
    </motion.div>
  );
}