import { ButtonC } from '@/components/button-icon';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="bg-[#E3E3FF] p-6 md:p-20 flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center gap-10 md:gap-0">
      <div className='flex flex-col space-y-5'>
        <span className='text-2xl font-semibold'>
            Mouniesh
        </span>
        <div>
            © All rights reserved. Mouniesh!
        </div>
      </div>
      <div className='flex flex-col space-y-5 items-start md:items-end'>
        <div className='flex gap-4 font-semibold'>
            <Link href="#">About</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Contact</Link>
        </div>
        <div className='flex gap-4'>
            <ButtonC icon={<FaLinkedin />} variant="outline" size='sm' />
            <ButtonC icon={<FaGithub />} variant="outline" size='sm'/>
            <ButtonC icon={<FaTwitter />} variant="outline" size='sm'/>
        </div>
      </div>
    </div>
  );
}
