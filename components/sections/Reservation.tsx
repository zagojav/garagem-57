'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BotaoReserva from '../BotaoReserva'

gsap.registerPlugin(ScrollTrigger)

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      gsap.from('.reserva-item', {
        y: 36,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="reserva"
      className="relative py-28 md:py-44 px-8 md:px-16 lg:px-24 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Detalhe decorativo: linha vertical âmbar */}
      <div className="absolute left-8 md:left-16 lg:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-garage-amber/25 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">

        <span className="reserva-item inline-block font-body text-[11px] tracking-[0.38em] uppercase text-garage-amber mb-8">
          Faça sua reserva
        </span>

        <h2 className="reserva-item font-display text-5xl md:text-[4.5rem] lg:text-[5.5rem] text-garage-white leading-[1.02] mb-6">
          Mesa para<br />quantos?
        </h2>

        <p className="reserva-item font-body text-garage-white/55 text-lg leading-[1.75] mb-14 max-w-md mx-auto">
          Reservas garantem seu lugar em uma das experiências mais disputadas da cidade. Ligue, mande mensagem ou venha pessoalmente.
        </p>

        {/* Informações de contato */}
        <div className="reserva-item flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-6 mb-14">
          <div className="text-center sm:text-left">
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-garage-amber mb-1.5">
              Endereço
            </p>
            <p className="font-body text-garage-white/80 text-sm leading-relaxed">
              Rua dos Motores, 57 — Vila Clássica
            </p>
            <p className="font-body text-garage-white/45 text-xs">
              São Paulo, SP — 01310-100
            </p>
          </div>

          <div className="hidden sm:block w-px h-14 bg-garage-white/12" />

          <div className="text-center sm:text-left">
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-garage-amber mb-1.5">
              Horário
            </p>
            <p className="font-body text-garage-white/80 text-sm leading-relaxed">
              Terça a Domingo
            </p>
            <p className="font-body text-garage-white/45 text-xs">
              Das 12h às 23h
            </p>
          </div>

          <div className="hidden sm:block w-px h-14 bg-garage-white/12" />

          <div className="text-center sm:text-left">
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-garage-amber mb-1.5">
              Reservas
            </p>
            <p className="font-body text-garage-white/80 text-sm leading-relaxed">
              (11) 9 9957-1957
            </p>
            <p className="font-body text-garage-white/45 text-xs">
              WhatsApp disponível
            </p>
          </div>
        </div>

        <BotaoReserva
          label="Reservar uma mesa"
          className="reserva-item inline-block font-body font-semibold text-[11px] tracking-[0.3em] uppercase px-14 py-5 bg-garage-amber text-garage-black hover:bg-garage-amber/85 transition-colors duration-300"
        />

      </div>
    </section>
  )
}
