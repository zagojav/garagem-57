'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      // Revelação da imagem com clip-path descendo (teto para baixo)
      gsap.fromTo(
        '.about-img-wrapper',
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: '.about-img-wrapper',
            start: 'top 78%',
          },
        }
      )

      // Texto entra em cascata
      gsap.from('.about-line', {
        y: 32,
        opacity: 0,
        stagger: 0.09,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-text-col',
          start: 'top 72%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-28 md:py-40 px-8 md:px-16 lg:px-24 bg-garage-black"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        {/* Coluna de texto */}
        <div className="about-text-col order-2 lg:order-1">
          <span className="about-line inline-block font-body text-[11px] tracking-[0.38em] uppercase text-garage-amber mb-8">
            Nossa História
          </span>

          <h2 className="about-line font-display text-5xl md:text-[3.5rem] text-garage-white leading-[1.08] mb-8">
            Uma garagem<br />que virou paixão
          </h2>

          <p className="about-line font-body text-garage-white/58 text-base md:text-[1.05rem] leading-[1.85] mb-5">
            Em 1957, Seu Benedito abriu uma oficina na esquina da Avenida dos
            Motores. Décadas depois, seus netos transformaram aquele galpão de
            ferramentas e graxa em um restaurante que preserva cada detalhe
            original — do piso de cimento queimado às luminárias industriais.
          </p>

          <p className="about-line font-body text-garage-white/58 text-base md:text-[1.05rem] leading-[1.85] mb-12">
            As paredes de tijolo ainda guardam as marcas do tempo. Os balcões de
            oficina viraram mesas para dois. O cheiro de carne na brasa substituiu
            o de combustível — para o bem de todos.
          </p>

          <span className="about-line block w-10 h-px bg-garage-amber" />
        </div>

        {/* Imagem com revelação clip-path */}
        <div className="order-1 lg:order-2">
          <div className="about-img-wrapper relative aspect-[3/4] overflow-hidden">
            {/* PLACEHOLDER: Substituir pela foto real do interior do restaurante */}
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85"
              alt="Interior do Garagem 57 — salão com atmosfera de oficina vintage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Véu âmbar sutil */}
            <div className="absolute inset-0 bg-garage-amber/5 mix-blend-multiply" />
          </div>
        </div>

      </div>
    </section>
  )
}
