'use client'

import { forwardRef } from 'react'

// PLACEHOLDER: trocar pelo número real do restaurante (DDI + DDD + número, sem espaços ou símbolos)
const WHATSAPP_NUMBER = '5511999999999'

interface BotaoReservaProps {
  label?: string
  className?: string
}

const BotaoReserva = forwardRef<HTMLAnchorElement, BotaoReservaProps>(
  ({ label = 'Reservar uma mesa', className }, ref) => {
    const mensagem = encodeURIComponent(
      'Olá! Gostaria de fazer uma reserva no Garagem 57.'
    )
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    )
  }
)

BotaoReserva.displayName = 'BotaoReserva'

export default BotaoReserva
