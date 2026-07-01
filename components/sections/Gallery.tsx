'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// PLACEHOLDER: Substituir pelas fotos reais do restaurante, pratos e carros clássicos
const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80',
    alt: 'Carro clássico escuro em garagem com iluminação âmbar',
    col: 'col-span-1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    alt: 'Salão do restaurante com luz suave e mesas postas',
    col: 'col-span-2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
    alt: 'Costela V8 assada com glaze caramelizado',
    col: 'col-span-2',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=80',
    alt: 'Detalhe de cromo e detalhe clássico de automóvel vintage',
    col: 'col-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80',
    alt: 'Bar do Garagem 57 com iluminação quente',
    col: 'col-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=80',
    alt: 'Hambúrguer Turbo com queijo derretido',
    col: 'col-span-1',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    alt: 'Carro clássico branco sob holofotes da garagem',
    col: 'col-span-1',
  },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      // Fade + scale ao entrar na viewport
      gsap.from('.gallery-item', {
        opacity: 0,
        scale: 0.97,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 78%',
        },
      })

      if (!prefersReduced) {
        // Parallax leve em cada imagem — inner move dentro do container com overflow hidden
        itemRefs.current.forEach((wrapper) => {
          if (!wrapper) return
          const inner = wrapper.querySelector('.gallery-inner')
          gsap.fromTo(
            inner,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: wrapper,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="py-28 md:py-40 px-8 md:px-16 lg:px-24 bg-garage-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 md:mb-20">
          <span className="block font-body text-[11px] tracking-[0.38em] uppercase text-garage-amber mb-6">
            Galeria
          </span>
          <h2 className="font-display text-5xl md:text-[3.5rem] text-garage-white leading-[1.1]">
            Veja por você<br />mesmo.
          </h2>
        </div>

        {/*
          Grid editorial — 3 colunas, 3 linhas:
          Linha 1: 1/3 + 2/3
          Linha 2: 2/3 + 1/3
          Linha 3: 1/3 + 1/3 + 1/3
        */}
        <div className="gallery-grid grid grid-cols-3 gap-3 auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={img.id}
              ref={(el) => { itemRefs.current[i] = el }}
              className={`gallery-item relative overflow-hidden group ${img.col}`}
            >
              {/* Inner com scale para absorver o yPercent do parallax sem borda branca */}
              <div className="gallery-inner absolute inset-0 scale-[1.15] will-change-transform">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Véu escuro que some no hover */}
              <div className="absolute inset-0 bg-garage-black/30 group-hover:bg-garage-black/0 transition-all duration-500 z-10" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
