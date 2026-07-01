// Ícones de redes sociais como SVG inline — independente de versão da lib
function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="py-10 px-8 md:px-16 lg:px-24 bg-garage-black border-t border-garage-white/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo textual */}
        <p className="font-display text-base tracking-[0.3em] uppercase text-garage-white select-none">
          Garagem <span className="text-garage-amber">57</span>
        </p>

        {/* Ícones de redes sociais */}
        <div className="flex items-center gap-7">
          <a
            href="#"
            aria-label="Instagram do Garagem 57"
            className="text-garage-white/40 hover:text-garage-amber transition-colors duration-300"
          >
            <IconInstagram />
          </a>
          <a
            href="#"
            aria-label="Facebook do Garagem 57"
            className="text-garage-white/40 hover:text-garage-amber transition-colors duration-300"
          >
            <IconFacebook />
          </a>
          <a
            href="#"
            aria-label="Twitter / X do Garagem 57"
            className="text-garage-white/40 hover:text-garage-amber transition-colors duration-300"
          >
            <IconX />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-[10px] tracking-[0.18em] text-garage-white/28">
          © 2024 Garagem 57. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}
