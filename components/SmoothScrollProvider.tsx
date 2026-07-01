'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar ScrollTrigger uma única vez no módulo client
gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Inicializar Lenis com easing exponencial suave
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Sincronizar ScrollTrigger com cada evento de scroll do Lenis
    lenis.on('scroll', ScrollTrigger.update)

    // Usar o ticker do GSAP como RAF compartilhado — evita duplo RAF
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
