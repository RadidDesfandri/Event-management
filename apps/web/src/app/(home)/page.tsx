import NavTop from '@/components/berandatamu/navTopTamu'
import Hero from '@/components/berandatamu/hero'
import Recomend from '@/components/berandatamu/recomend'
import SideBarTamu from '@/components/berandatamu/sideBarTamu'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className='w-full h-full bg-gray-950/95 '>
      <NavTop />
      <div className='flex max-w-7xl mx-auto justify-center md:px-10'>
        <SideBarTamu />
        <Hero />
        <Recomend />
      </div>
      <Footer />
    </div>
  )
}
