'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
// 1. Import ฟอนต์จาก next/font/google
import { Kanit, Monomakh } from 'next/font/google';

// 2. ตั้งค่าฟอนต์ Kanit (สำหรับเนื้อหาทั่วไป)
const kanit = Kanit({
  weight: ['400', '500', '600'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

// 3. ตั้งค่าฟอนต์ Monomakh (สำหรับหัวข้อ MDCU CONNECT)
const monomakh = Monomakh({
  weight: '400', // Monomakh มีแค่น้ำหนัก 400 (Regular)
  subsets: ['latin'],
  display: 'swap',
});

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const RegisterPage: NextPage = () => {
  const [studentId, setStudentId] = useState('');
  const [emailPrefix, setEmailPrefix] = useState('');

  return (
    // 4. ครอบคลาสของ Kanit ไว้ที่ div นอกสุด เพื่อให้ข้อความทั้งหมดในหน้านี้ใช้ฟอนต์ Kanit เป็นค่าเริ่มต้น
    <div className={`min-h-screen bg-zinc-950 flex items-center justify-center p-4 ${kanit.className}`}>
      
      <div className="bg-zinc-50 rounded-2xl shadow-2xl w-full max-w-[400px] overflow-hidden">
        
        <div className="bg-white p-3.5 flex justify-end border-b border-zinc-100">
          <button className="text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer">
            <XIcon />
          </button>
        </div>

        <div className="p-8 flex flex-col">
          
          <h1 className={`text-5xl text-black tracking-tight leading-tight mb-8 ${monomakh.className}`}>
            MDCU
            <br />
            <span className="tracking-tighter">CONNECT</span>
          </h1>

          <form className="w-full flex flex-col items-center">
            
            <div className="w-full mb-5">
              <label htmlFor="studentId" className="block text-left text-sm font-semibold text-black mb-1.5">
                รหัสนิสิต 10 หลัก
              </label>
              <input
                id="studentId"
                type="text"
                maxLength={10}
                placeholder="xxxxxxxxxx"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value.replace(/\D/g, ''))}
                className="w-full border rounded-lg p-2.5 text-black text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
              />
            </div>

            <div className="w-full mb-8">
              <label htmlFor="email" className="block text-left text-sm font-semibold text-black mb-1.5">
                ที่อยู่อีเมล (@docchula.com)
              </label>
              <div className="relative w-full">
                <input
                  id="email"
                  type="text"
                  value={emailPrefix}
                  onChange={(e) => setEmailPrefix(e.target.value)}
                  className="w-full border rounded-lg p-2.5 pr-[110px] text-black text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-3 text-black font-medium text-sm">
                  @docchula.com
                </span>
              </div>
            </div>

            <button 
              type="submit" 
              className="min-w-[140px] border-1 border-black rounded-lg py-1 px-4 text-black text-md hover:bg-black hover:text-white cursor-pointer transition-all mb-6"
            >
              REGISTER
            </button>
          </form>

          <div className="text-center text-zinc-500 space-y-0.5 text-xs">
            <p>เพื่อยืนยันตัวตนก่อนเริ่มต้นใช้งาน</p>
            <p>ระบบจะส่งข้อความไปยังอีเมลที่ท่านลงทะเบียน</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;