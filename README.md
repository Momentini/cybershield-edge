# 🛡️ CyberShield Edge — Zero-Trust Edge Security Landing Page

> **Landing Page B2B enterprise & datasheets tecnici** per una piattaforma di sicurezza Edge & IoT basata su eBPF e crittografia Post-Quantistica.

[![Astro](https://img.shields.io/badge/Astro-v5%2B-ff5d01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Deploy](https://github.com/tuo-username/cybershield-edge/actions/workflows/deploy.yml/badge.svg)](https://github.com/tuo-username/cybershield-edge/actions)

---

## 🌐 Live Demo & Brochure PDF

* **Sito Live:** [https://tuo-username.github.io/cybershield-edge/](https://tuo-username.github.io/cybershield-edge/)
* **Scheda Tecnica PDF:** Scaricabile direttamente dall'Hero section del sito.

---

## ⚡ Key Features & Architettura

* **Zero-FOUC Dark Mode:** Gestione del tema chiaro/scuro in tempo reale senza flickering all'avvio.
* **Simulatore Terminale eBPF:** Widget interattivo font-mono con simulazione log di blocchi XDP in tempo reale.
* **Bento Grid Soluzioni:** Layout modulare per l'esposizione delle 4 direttrici tecnologiche (Micro-segmentazione, eBPF, Post-Quantum, Compliance NIS 2).
* **Rotte Dinamiche Astro (`[id].astro`):** Pagine dedicate per ciascun modulo generate in modo completamente statico in fase di build (`SSG`).
* **CI/CD Automatizzato:** Deployment continuo su GitHub Pages via GitHub Actions con ambiente Node 22 e gestione dinamica di `BASE_URL`.

---

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/) (Static Site Generation)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite`
* **Linguaggio:** JavaScript (ES6+) / TypeScript
* **Deployment & CI/CD:** GitHub Actions + GitHub Pages
* **Design Pattern:** Component-Driven Architecture, Mobile-First Responsiveness, Glassmorphism UI.

---

## 📁 Struttura del Progetto

```text
cybershield-edge/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow CI/CD per GitHub Pages (Node 22)
├── public/
│   └── cybershield-edge-brochure.pdf  # Scheda tecnica PDF
├── src/
│   ├── components/             # Componenti UI (Hero, Features, Navbar, Footer, ecc.)
│   ├── layouts/                # Layout di pagina
│   └── pages/                  # Rotte del sito
│       ├── index.astro         # Homepage / Landing Page
│       └── moduli/
│           └── [id].astro      # Rotta dinamica per i singoli moduli
├── astro.config.mjs            # Configurazione Astro & Vite plugin
├── package.json
└── README.md


