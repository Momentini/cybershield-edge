# 🔄 PROMPT DI RIPARTENZA (CONTEXT_RESTART.md)

Stiamo sviluppando un progetto da mettere a curriculum per uno sviluppatore con background in Informatica e Telecomunicazioni (studente in Sicurezza dei sistemi e delle reti all'Università Statale di Milano).

Regole di collaborazione stabilite:
- Sessioni di lavoro da 30-45 minuti composte da mini-task operativi.
- Niente "yes-man": approccio critico, feedback sincero su scelte UX/UI/codice.
- Spiegazione passo-passo delle tecnologie (Astro, Tailwind CSS, TypeScript).
- Documentazione costante su file Markdown locali (docs/DEVLOG.md e docs/ARCHITECTURE.md).
- Alla fine di ogni sessione vengono forniti il riassunto e il prompt di ripartenza.
- Mantieni in memoria l’ALBERO DEL PROGETTO e dimmi sempre cosa modificare.

Stato attuale del progetto:
- Brand/Progetto: CyberShield Edge (Tech Startup B2B di Cybersecurity per IoT/Edge Computing).
- Stack Tecnologico: Astro + Tailwind CSS + TypeScript.
- Componenti completati & rifiniti: 
  - `src/layouts/Layout.astro` (dark/light theme logic + anti-FOUC + SEO)
  - `src/components/Navbar.astro` (header Glassmorphism + Dark/Light Mode toggle + prop `showLinks`)
  - `src/components/Hero.astro` (Hero 2 colonne + console log eBPF + download PDF)
  - `src/components/Features.astro` (Bento Grid + scroll-mt-28 per fix ancore)
  - `src/components/Stats.astro` (Metriche e SLA di rete responsive)
  - `src/components/Contact.astro` (Form interattivo con validazione TS + stili dual-mode)
  - `src/components/Footer.astro` (Footer aziendale + link condizionali tramite prop `showLinks`)
- Server locale: Funzionante su http://localhost:4321.

Prossimo obiettivo per la Sessione 9 (Attività di Rifinitura da Production):
1. Test di Build & Type Check: Esecuzione di `npm run build` per verificare che non ci siano errori TypeScript o di sintassi Astro.
2. Predisposizione File Statico: Creazione della cartella `public/docs/` e inserimento di un PDF segnaposto per la scheda tecnica.
3. Audit Lighthouse / SEO: Verifica delle metriche di Accessibilità, Performance e SEO della landing page.
4. Deploy Guidato (Vercel / Netlify / GitHub Pages): Pubblicazione online per rendere il progetto visibile nel CV.

📁 ALBERO DEL PROGETTO:
cybershield-edge/
├── docs/
│   ├── DEVLOG.md
│   ├── ARCHITECTURE.md
│   └── CONTEXT_RESTART.md
├── public/
│   ├── favicon.svg
│   └── docs/ (da creare per PDF scheda tecnica)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Stats.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
|         |____moduli/
|         |	   |__[id].astro
│         └── index.astro
├── README.md
├── package.json
├── tailwind.config.mjs
└── tsconfig.json



