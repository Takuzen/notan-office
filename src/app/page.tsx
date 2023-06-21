'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1 className=''>notan office</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className='text-2xl sm:hidden leading-loose'>
          Note Taking,<br/>
          Now While Chatting.
        </h3>
        <h3 className='text-2xl hidden sm:inline '>
          Note Taking, Now While Chatting.
        </h3>
        <Link href="/whitepaper">
          <h3 className='text-xl mt-10 underline underline-offset-8'>whitepaper</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row gap-7 justify-center sm:gap-0 sm:justify-evenly">
        <Link href="https://notan.vercel.app">
          <div>
            <h1 className='text-3xl sm:text-4xl'>
              notan
            </h1>
            <p className=''>
              proceed to service{' '}&rarr;
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

