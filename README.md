# Garagem 57 — Landing Page

Site institucional de página única para o restaurante temático de carros clássicos **Garagem 57**.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — paleta personalizada em `tailwind.config.ts`
- **GSAP + ScrollTrigger** — animações de scroll e reveals
- **Lenis** — smooth scroll sincronizado com o GSAP ticker
- **next/font** — Bodoni Moda (títulos) + Inter (corpo)
- **next/image** — otimização automática de todas as imagens
- **lucide-react** — ícones de redes sociais no rodapé

## Como rodar

```bash
cd garagem57
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Onde substituir conteúdo

| O que trocar | Onde fica |
|---|---|
| **Foto do Hero** | `components/sections/Hero.tsx` — comentário `PLACEHOLDER` |
| **Foto do Sobre** | `components/sections/About.tsx` — comentário `PLACEHOLDER` |
| **Fotos da Galeria** | `components/sections/Gallery.tsx` — array `images` no topo |
| **Pratos e preços** | `components/sections/Menu.tsx` — array `dishes` no topo |
| **Endereço e telefone** | `components/sections/Reservation.tsx` |
| **Links das redes sociais** | `components/sections/Footer.tsx` — atributos `href="#"` |
| **Paleta de cores** | `tailwind.config.ts` — keys `garage-*` |
| **Tipografia** | `app/layout.tsx` — imports de `next/font/google` |
| **Meta tags (SEO)** | `app/layout.tsx` — objeto `metadata` |

## Cardápio completo (futuro)

Um comentário `{/* FUTURO: cardápio completo por QR code entra aqui */}` marca o ponto exato em `components/sections/Menu.tsx` para inserir o bloco de QR code.

## Estrutura de componentes

```
app/
  layout.tsx          — fontes, metadata, SmoothScrollProvider
  page.tsx            — monta as secoes em ordem
  globals.css         — reset + variaveis CSS

components/
  SmoothScrollProvider.tsx  — Lenis + sync com GSAP ticker
  Navbar.tsx                — nav fixa com backdrop blur no scroll

  sections/
    Hero.tsx          — parallax + reveal de linhas + botao magnetico
    About.tsx         — clip-path reveal na imagem
    Menu.tsx          — 6 pratos em grid com stagger reveal
    Gallery.tsx       — 7 imagens, grid editorial, parallax + hover zoom
    Reservation.tsx   — CTA com endereco, horario e telefone
    Footer.tsx        — logo, redes sociais, copyright
```
