# Diario di Sviluppo - CyberShield Edge

## [2026-07-23] Sessione 1: Definizione Concept e Stack
- **Durata:** 40 min
- **Obiettivo:** Scelta del tipo di azienda e dello stack.
- **Decisioni prese:**
  - Concept: CyberShield Edge (Cybersecurity B2B per IoT/Edge).
  - Stack: Astro + Tailwind CSS + TypeScript.
- **Prossimo passo:** Setup locale dell'ambiente e prima struttura cartelle.


## [2026-07-24] Sessione 1 & 2: Setup e Inizializzazione
- **Durata:** ~45 min
- **Obiettivi completati:**
  - Definizione del concept aziendale: *CyberShield Edge* (Cybersecurity B2B per IoT / Edge Computing).
  - Scelta dello stack tecnologico: *Astro + Tailwind CSS + TypeScript*.
  - Setup dell'ambiente locale tramite `npm create astro@latest` e `npx astro add tailwind`.
  - Definizione della struttura di documentazione su repository[cite: 1].
- **Prossimi passaggi:** Esplorazione cartella `src/` e avvio del server di sviluppo.

## [2026-07-24] Sessione 3: Layout Base e Navbar Component
- **Durata:** ~35 min
- **Obiettivi completati:**
  - Configurazione di `Layout.astro` con theme dark (Slate/Cyan).
  - Creazione del componente `Navbar.astro` responsive con styling Tailwind e Glassmorphism.
  - Implementazione della CTA Primaria "Prenota una Demo" nell'header.
- **Prossimi passaggi:** Sviluppo della Hero Section con layout a due colonne e CTA Secondaria.

## [2026-07-24] Sessione 4: Sviluppo della Hero Section
- **Durata:** ~40 min
- **Obiettivi completati:**
  - Creazione del componente `Hero.astro` con layout responsive a 2 colonne.
  - Applicata gerarchia CTA (Primaria: "Prenota una Demo", Secondaria: "Scheda Tecnica PDF").
  - Inseriti badge di conformità B2B (ISO 27001, SOC 2, Zero Trust).
  - Implementato mockup visuale della console di sicurezza in Tailwind con log stream dinamico.
- **Prossimi passaggi:** Creazione della sezione "Bento Grid" per le funzionalità chiave (Feature section).

## [2026-07-24] Sessione 5: Sezione Soluzioni a Bento Grid
- **Durata:** ~35 min
- **Obiettivi completati:**
  - Creazione del componente `Features.astro` con layout Bento Grid a 12 colonne.
  - Inserite 4 macro-funzionalità B2B (Zero-Trust, eBPF AI Threat Detection, Post-Quantum Cryptography, NIS 2 / Compliance).
  - Integrati badge tecnici e stili hover dinamici con Tailwind CSS.
- **Prossimi passaggi:** Sviluppo della sezione "Architettura Visiva / Interactive Diagram" o "Social Proof / Statistiche".

## [2026-07-24] Sessione 6: Sezione Metriche & Trust Signals (Stats)
- **Durata:** ~30 min
- **Obiettivi completati:**
  - Creazione del componente `Stats.astro` orientato alle prestazioni di rete (SLA 99.999%, Latenza <1ms, 10M+ eventi/sec).
  - Mappatura dinamica dei dati via script Astro in TypeScript.
  - Integrato la fascia delle metriche nella landing page subito dopo la Bento Grid.
- **Prossimi passaggi:** Sviluppo della sezione Call-To-Action Finale e Form di Contatto per le conversioni.

## [2026-07-24] Sessione 7: Contact Form con Validazione TypeScript & Footer
- **Durata:** ~40 min
- **Obiettivi completati:**
  - Creazione del componente `Contact.astro` con form interattivo di richiesta Demo/PoC.
  - Implementazione dello script client-side in TypeScript per la validazione dinamica degli input (email regex, nomi, azienda).
  - Simulazione invio con feedback di successo dinamico (UX sensibile alla sicurezza).
  - Creazione del componente `Footer.astro` con link di navigazione, copyright e badge di conformità.
- **Prossimi passaggi:** Review generale dell'accessibilità e test delle performance con Google Lighthouse.

## [2026-07-24] Sessione 7: Contact Form, Footer & QA Review
- **Durata:** ~40 min
- **Obiettivi completati:**
  - Componente `Contact.astro` con form e validazione TypeScript client-side.
  - Componente `Footer.astro` con link di navigazione e badge di conformità.
  - QA Review condotta: identificati fix su ancore Navbar/Footer, download scheda tecnica e richiesta Light Mode.
- **Prossimi passaggi per la Sessione 8:**
  - Punti di QA: Fix ancore (`#architettura`, `#compliance`), mockup PDF per download scheda tecnica e sincronizzazione Footer.
  - Implementazione Theme Toggle (Dark/Light Mode) nella Navbar.

## Sessione 2: Supporto Tema Chiaro (Light Mode) & Fix UX Navigazione

### Obiettivi Completati
- **Dark/Light Mode:** Implementato lo script anti-FOUC (Flash of Unstyled Content) in `Layout.astro`, toggle interattivo in `Navbar.astro` e salvataggio preferenza in `localStorage`.
- **Refactoring Componenti per Tema Chiaro:** Sostituite le regole globali `!important` con le classi native `dark:` di Tailwind CSS v4 in `Hero.astro`, `Features.astro`, `Stats.astro`, `Contact.astro` e `Footer.astro`.
- **Fix Offset Navbar:** Risolto il problema del taglio superiore dei box nelle ancore (`#architettura`, `#compliance`) applicando le classi `scroll-mt-28` in `Features.astro`.
- **Form Contatti & Download PDF:** Validazione form responsive in TypeScript e link della scheda tecnica collegato al path statico `/docs/cybershield-datasheet.pdf`.

### Decisioni Architetturali & UX
- **Approccio Tailwind Nativo:** Scelta di evitare sovrascritture CSS globali forzate a favore delle varianti `dark:` su ogni singolo componente, garantendo manutenibilità e comportamento prevedibile del motore JIT di Tailwind.
- **Accessibilità Contrasto:** Garantito il rispetto dei contrasti WCAG sia su sfondo chiaro (`slate-50` / `slate-100` con testo `slate-900`) sia su sfondo scuro.

## Sessione 9 — Brochure Tecnica PDF, Troubleshooting CI/CD & Deploy Finale

### 🎯 Obiettivi Completati
1. **Generazione e integrazione Brochure PDF:** Creata e posizionata la scheda tecnica commerciale/tecnica (`cybershield-edge-brochure.pdf`) in `/public` collegata con il pulsante di download.
2. **Configurazione Tailwind v4 + Vite in Astro:** Risolte le dipendenze tra Astro e PostCSS attraverso l'integrazione del plugin `@tailwindcss/vite` in `astro.config.mjs`.
3. **Pipeline CI/CD con GitHub Actions:**
   * Aggiornato il runner all'ambiente Node.js v22 per compatibilità nativa con le build Astro.
   * Creato lo script esplicito di installazione e build (`npm ci` -> `npm run build`).
4. **Fix del Routing Statico e BASE_URL:**
   * Risolti gli errori 404 su GitHub Pages sostituendo i percorsi assoluti con `${import.meta.env.BASE_URL}`.
   * Riposizionato il file delle rotte dinamiche dei moduli in `src/pages/moduli/[id].astro`.

### 🛠️ Problem Solving & Scelte Tecniche
* **Errore Tailwind/PostCSS in CI:** La versione più recente di Astro/Vite richiedeva la dichiarazione esplicita del plugin `@tailwindcss/vite` nell'array `plugins` del file di configurazione `astro.config.mjs`.
* **Subpath Deployment:** Poiché GitHub Pages ospita il sito sotto una sottocartella (`/cybershield-edge/`), tutti i link interni e gli asset statici utilizzano `import.meta.env.BASE_URL` per garantire la compatibilità sia in ambiente locale (`localhost`) che in produzione.

### 🟢 Stato Finale
* **Build Status:** Passing 🟢
* **Sito Live:** Pubblicato ed eseguito su GitHub Pages.
* **Progetto Completato e Pronto per Portfolio.**
