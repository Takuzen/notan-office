import Link from 'next/link'

export default function Home() {
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
          <Link href="https://notan.vercel.app">
            <h1 className='font-yatra text-3xl sm:text-4xl'>
              notan
            </h1>
          </Link>
          <p>

          </p>
        </div>

        <div>
          <h1 className='font-yatra text-3xl sm:text-4xl text-gray-300'>
            notanSP
          </h1>
          <p>
          </p>
        </div>
      </div>
    </main>
  )
}
