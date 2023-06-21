'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1>notan office</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className='text-2xl sm:hidden leading-loose'>
          あなたの壁打ちパートナー、<br/>
          対話型メモアプリ。
        </h3>
        <h3 className='text-2xl hidden sm:inline '>
          あなたの壁打ちパートナー、対話型メモアプリ。
        </h3>
        <Link href="/ja/whitepaper">
          <h3 className='text-xl mt-10 underline underline-offset-8'>白書</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row gap-7 justify-center sm:gap-0 sm:justify-evenly">
        <Link href="https://notan.vercel.app">
          <div>
            <h1 className='text-3xl sm:text-4xl'>
              notan
            </h1>
            <p>
              サービスへ進む{' '}&rarr;
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

