'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BotaoReserva from '../BotaoReserva'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const imageRef    = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const magnetWrap  = useRef<HTMLDivElement>(null)
  const magnetBtn   = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // Reveal das linhas de título (overflow:hidden + translateY)
        const lines    = contentRef.current
          ? Array.from(contentRef.current.querySelectorAll('.hero-line'))
          : []
        const subtitle = contentRef.current?.querySelector('.hero-sub') ?? null
        const btn      = magnetBtn.current

        const tl = gsap.timeline({ delay: 0.2 })
        if (lines.length) {
          tl.from(lines, {
            yPercent: 105,
            duration: 1.1,
            stagger: 0.1,
            ease: 'power4.out',
          })
        }
        tl.from(
            subtitle,
            { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out' },
            '-=0.5'
          )
          .from(
            btn,
            { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.55'
          )

        // Parallax suave na imagem de fundo
        gsap.to(imageRef.current, {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Efeito magnético no botão de CTA
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetBtn.current || !magnetWrap.current) return
    const rect = magnetWrap.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width  / 2)) * 0.38
    const y = (e.clientY - (rect.top  + rect.height / 2)) * 0.38
    gsap.to(magnetBtn.current, { x, y, duration: 0.35, ease: 'power2.out' })
  }

  const handleMouseLeave = () => {
    gsap.to(magnetBtn.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.45)',
    })
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-screen overflow-hidden flex flex-col justify-end"
    >
      {/* Fundo cinematográfico com wrapper oversized para parallax */}
      <div ref={imageRef} className="absolute inset-0 scale-[1.18]">
        {/* PLACEHOLDER: Trocar pela foto real do salão ou carro clássico principal */}
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80"
          alt="Carro clássico — cena de abertura do Garagem 57"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradiente cinematográfico em camadas */}
      <div className="absolute inset-0 bg-gradient-to-t from-garage-black via-garage-black/45 to-garage-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-garage-black/70 via-garage-black/10 to-transparent" />

      {/* Conteúdo */}
      <div ref={contentRef} className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
        {/* Linha 1 — máscara de overflow para reveal */}
        <div className="overflow-hidden leading-none mb-1">
          <span className="hero-line block font-display font-bold text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.88] text-garage-white tracking-tight">
            Garagem
          </span>
        </div>

        {/* Linha 2 */}
        <div className="overflow-hidden leading-none mb-10">
          <span className="hero-line block font-display font-bold text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.88] text-garage-amber tracking-tight">
            57.
          </span>
        </div>

        <p className="hero-sub font-body text-garage-white/70 text-lg md:text-xl max-w-[22rem] leading-[1.65] mb-10 tracking-wide">
          Onde o motor parou,<br />o sabor começou.
        </p>

        {/* Botão com campo magnético — padding aumenta área sensível */}
        <div
          ref={magnetWrap}
          className="inline-block p-8 -m-8"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <BotaoReserva
            ref={magnetBtn}
            label="Reserve sua mesa"
            className="inline-block font-body font-medium text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-garage-amber text-garage-amber hover:bg-garage-amber hover:text-garage-black transition-colors duration-300 will-change-transform"
          />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-garage-white rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-garage-white/60 origin-top animate-pulse" />
      </div>
    </section>
  )
}
