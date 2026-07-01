'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
  {
    id: 1,
    name: 'Costela V8',
    description:
      'Costela bovina assada a lenha por 12 horas com glaze de cachaça, mel e pimenta defumada. Servida com farofa crocante de castanha.',
    price: 'R$ 89,90',
    tag: 'Carro-chefe',
  },
  {
    id: 2,
    name: 'Hambúrguer Turbo',
    description:
      'Blend 200g de acém e peito, queijo cheddar defumado, bacon artesanal, cebola caramelizada e molho especial da garagem.',
    price: 'R$ 54,90',
    tag: null,
  },
  {
    id: 3,
    name: 'Picanha Câmbio Duplo',
    description:
      'Dois cortes de picanha maturada, grelha na brasa à lenha. Acompanha arroz negro, vinagrete de hortelã e manteiga de ervas.',
    price: 'R$ 129,90',
    tag: 'Premium',
  },
  {
    id: 4,
    name: 'Frango Carburador',
    description:
      'Sobrecoxa marinada em iogurte integral, limão siciliano e alho-poró. Assada até a pele dourar e o interior desmanchar.',
    price: 'R$ 58,90',
    tag: null,
  },
  {
    id: 5,
    name: 'Espetinho Pit Lane',
    description:
      'Seis espetinhos artesanais de coração de frango, temperados com chimichurri caseiro e páprica defumada da casa.',
    price: 'R$ 42,90',
    tag: null,
  },
  {
    id: 6,
    name: 'Sobremesa Pit Stop',
    description:
      'Petit gâteau de chocolate 70% com sorvete de baunilha artesanal, farofa de amendoim caramelizado e flor de sal.',
    price: 'R$ 34,90',
    tag: null,
  },
]

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      // Título entra primeiro
      gsap.from('.menu-heading > *', {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu-heading',
          start: 'top 80%',
        },
      })

      // Cards revelados em cascata escalonada
      gsap.from('.menu-card', {
        y: 48,
        opacity: 0,
        stagger: 0.09,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu-grid',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cardapio"
      className="py-28 md:py-40 px-8 md:px-16 lg:px-24 bg-[#0C0C0C]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="menu-heading mb-16 md:mb-20">
          <span className="inline-block font-body text-[11px] tracking-[0.38em] uppercase text-garage-amber mb-6">
            O Cardápio
          </span>
          <h2 className="font-display text-5xl md:text-[3.5rem] text-garage-white leading-[1.1]">
            Clássicos que<br />você vai sentir.
          </h2>
        </div>

        {/* Grade de cards — separados por linhas de 1px */}
        <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-garage-white/8">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="menu-card group bg-[#0C0C0C] p-8 md:p-10 flex flex-col justify-between min-h-[270px] hover:bg-[#171717] transition-colors duration-400"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-[1.45rem] text-garage-white group-hover:text-garage-amber transition-colors duration-300 leading-snug">
                    {dish.name}
                  </h3>
                  {dish.tag && (
                    <span className="shrink-0 mt-0.5 font-body text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 border border-garage-amber/50 text-garage-amber">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <p className="font-body text-garage-white/48 text-sm leading-[1.8] line-clamp-3">
                  {dish.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-garage-white/8 flex items-center justify-between">
                <span className="font-display text-xl text-garage-amber">
                  {dish.price}
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-garage-white/30 group-hover:text-garage-white/60 transition-colors duration-300">
                  Ver mais
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* FUTURO: cardápio completo por QR code entra aqui */}

      </div>
    </section>
  )
}
