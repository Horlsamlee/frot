// import localFont from "next/font/local"
import { Lora, Open_Sans, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import About from '@/components/About'
import Features from '@/components/Features'
import Reports from '@/components/Reports'
import Radiologists from '@/components/Radiologists'
const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open_sans',
})
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "600",
  variable: '--font-poppins',
})

// const clash = localFont({
//   src: 'ClashDisplay-Bold.otf',
//   display: 'swap',
// })
export default function Home() {
  return (
    <main
      className={`${poppins.variable} ${open_sans.variable} ${lora.variable}`}
    >
      <Navbar />
      <Hero />     
      <About />
      <Reports />
      <Features />
      {/* <Radiologists /> */}
    </main>
  )
}
