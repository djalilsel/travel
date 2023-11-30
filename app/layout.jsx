import { Poppins } from 'next/font/google'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import './globals.css'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Travel',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
      <Header />
      <body >{children}</body>
      <Footer />
    </html>
  )
}
