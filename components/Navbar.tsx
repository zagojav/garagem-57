'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from(navRef.current, {
          y: -80,
          opacity: 0,
          duration: 1,
          delay: 1.6,
          ease: 'power4.out',
        })
      }

      ScrollTrigger.create({
        start: 'top -60',
        onToggle: ({ isActive }) => setScrolled(isActive),
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? 'bg-garage-black/90 backdrop-blur-md border-b border-garage-white/5'
          : ''
      }`}
    >
      <a
        href="#inicio"
        className="font-display text-base tracking-[0.3em] text-garage-white uppercase select-none"
      >
        Garagem <span className="text-garage-amber">57</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: 'Sobre', href: '#sobre' },
          { label: 'Cardápio', href: '#cardapio' },
          { label: 'Galeria', href: '#galeria' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-[11px] tracking-[0.22em] uppercase text-garage-white/60 hover:text-garage-white transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#reserva"
          className="font-body text-[11px] tracking-[0.22em] uppercase px-6 py-2.5 border border-garage-amber text-garage-amber hover:bg-garage-amber hover:text-garage-black transition-all duration-300"
        >
          Reservar
        </a>
      </div>
    </nav>
  )
}
