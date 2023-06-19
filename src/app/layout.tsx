import './globals.css'
import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'notan-office',
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');</style>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      <div className="font-inter">{children}</div>
    </>
  )
}

export default RootLayout