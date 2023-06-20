'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showFloatingWindow, setShowFloatingWindow] = useState(false);
  const [showFloatingWindowSP, setShowFloatingWindowSP] = useState(false);

  const handleNotanClick = () => {
    setShowFloatingWindow(true);
  };

  const handleNotanSPClick = () => {
    setShowFloatingWindowSP(true);
  };

  const handleCloseClick = () => {
    setShowFloatingWindow(false);
    setShowFloatingWindowSP(false);
  };

  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1 className=''>notan office</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className='text-2xl sm:hidden leading-loose'>
          紙から、空間まで、<br/>
          無縫なI/O体験を。
        </h3>
        <h3 className='text-2xl hidden sm:inline '>
          紙から、空間まで、無縫なI/O体験を。
        </h3>
        <Link href="/whitepaper">
          <h3 className='text-xl mt-10 underline underline-offset-8'>白書</h3>
        </Link>
      </div>

      <div className="w-full flex flex-row gap-7 justify-center sm:gap-0 sm:justify-evenly">
        <div>
          <h1 className='font-yatra text-3xl sm:text-4xl cursor-pointer' onClick={handleNotanClick}>
            notan
          </h1>
        </div>

        <div>
          <h1 className='font-yatra text-3xl sm:text-4xl text-gray-300 cursor-pointer' onClick={handleNotanSPClick}>
            notanSP
          </h1>
        </div>
      </div>

      {showFloatingWindow && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 px-10 py-20 sm:px-10 sm:py-20 bg-white border border-gray-300 rounded-xl shadow-lg text-center leading-loose tracking-widest">
            <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-300" onClick={handleCloseClick}>
              <span className="text-white text-xs">X</span>
            </button>
            <p>個人用<br/>紙とデジタル上の<br/>筆記統合サービス</p>
            <br/>
            <Link href="https://notan.vercel.app">
              <p className='underline underline-offset-4'>サービスへ進む</p>
            </Link>
          </div>
        </>
      )}

      {showFloatingWindowSP && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 px-10 py-20 sm:px-10 sm:py-20 bg-white border border-gray-300 rounded-xl shadow-lg text-center leading-loose tracking-widest">
            <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-300" onClick={handleCloseClick}>
              <span className="text-white text-xs">X</span>
            </button>
            <p>個人用<br/>空間コンピューティング向けの<br/>電子書籍リーダー</p>
            <br/>
            <p className='text-yellow-500'>Apple Vision Pro<br/>と同時リリース</p>
          </div>
        </>
      )}
    </main>
  );
}
