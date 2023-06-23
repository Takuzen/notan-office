'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1 className="">notan</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className="text-2xl sm:hidden leading-loose">
          {showText && (
            <>
              {Array.from('Conversational').map((letter, index) => (
                <span
                  key={index}
                  className="letter-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
              &nbsp;
              {Array.from('Notes,').map((letter, index) => (
                <span
                  key={index + 14}
                  className="letter-animation"
                  style={{ animationDelay: `${(index + 14) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
              <br />
              {Array.from('Your Chat Wall Buddy.').map((letter, index) => (
                <span
                  key={index + 24}
                  className="letter-animation"
                  style={{ animationDelay: `${(index + 24) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </>
          )}
        </h3>
        <h3 className="text-2xl sm:hidden leading-loose">
          {showText && (
            <>
              {Array.from('Conversational').map((letter, index) => (
                <span
                  key={index}
                  className="letter-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
              &nbsp;
              {Array.from('Notes,').map((letter, index) => (
                <span
                  key={index + 14}
                  className="letter-animation"
                  style={{ animationDelay: `${(index + 14) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
              <br />
              {Array.from('Your Chat Wall Buddy.').map((letter, index) => (
                <span
                  key={index + 24}
                  className="letter-animation"
                  style={{ animationDelay: `${(index + 24) * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </>
          )}
        </h3>
        <Link href="/whitepaper">
          <h3 className="text-xl mt-10 underline underline-offset-8">whitepaper</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row justify-center">
        <Link href="https://notan.vercel.app">
          <div>
            <p className="font-serif text-1xl font-semibold text-white bg-red-500 rounded-full px-8 py-2 mt-10">
              Start Your Free Notebook
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
};

export default Home;