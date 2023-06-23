'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1 className=''>notan</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className='text-2xl sm:hidden leading-loose'>
          Conversational Notes,<br/>
          Your Chat Wall Buddy.
        </h3>
        <h3 className='text-2xl hidden sm:inline leading-loose'>
          Conversational Notes, Your Chat Wall Buddy.
        </h3>
        <Link href="/whitepaper">
          <h3 className='text-xl mt-10 underline underline-offset-8'>whitepaper</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row justify-center">
        <Link href="https://notan.vercel.app">
          <div>
            <p className='font-serif text-1xl font-semibold text-white bg-red-500 rounded-full px-8 py-2 mt-10'>
              Start Your Free Notebook
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

