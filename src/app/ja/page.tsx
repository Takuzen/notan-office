'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1>notan</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className="text-2xl sm:hidden leading-loose">
          {showText && (
            <>
              {Array.from('対話型ノートアプリ、').map((letter, index) => (
                <span
                  key={index}
                  className="letter-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
              <br />
              {Array.from('あなたの壁打ちパートナー。').map((letter, index) => (
                <span
                  key={index}
                  className="letter-animation"
                  style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </>
          )}
        </h3>
        <h3 className="text-2xl hidden sm:inline">
          {showText &&
            '対話型ノートアプリ、あなたの壁打ちパートナー。'.split('').map((letter, index) => (
              <span
                key={index}
                className="letter-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
        </h3>
        <Link href="/ja/whitepaper">
          <h3 className="text-xl mt-10 underline underline-offset-8">白書</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row gap-7 justify-center sm:gap-0 sm:justify-evenly">
        <Link href="https://www.notan.me/p">
          <div>
            <p className="font-serif text-1xl font-semibold text-white bg-red-500 rounded-full px-8 py-2 mt-10">
              無料でノートをはじめる
            </p>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .letter-animation {
          display: inline-block;
          opacity: 0;
          animation: fade-in 0.5s forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}