import Navbar      from '@/components/Navbar'
import Hero        from '@/components/sections/Hero'
import About       from '@/components/sections/About'
import Menu        from '@/components/sections/Menu'
import Gallery     from '@/components/sections/Gallery'
import Reservation from '@/components/sections/Reservation'
import Footer      from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-garage-black">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  )
}
