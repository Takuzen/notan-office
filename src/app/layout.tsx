import './globals.css'
import { FC, ReactNode } from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'notan',
  description: 'seamless i/o from paper to spatial',
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>@import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');</style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Head>
      <div className="font-inter">{children}</div>
    </>
  )
}

export default RootLayout