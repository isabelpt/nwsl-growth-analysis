# NWSL Attendance — site scaffold

React + TypeScript + Vite + Tailwind v4. Ready to deploy on Vercel.

## Structure

```
src/
  App.tsx                 # assembles the page
  sections/
    Hero.tsx               # landing view — headline + key stat highlight
    QuestionSection.tsx     # 01 — the research question
    DataSection.tsx         # 02 — data sources
    MethodSection.tsx       # 03 — analytical pipeline
    ResultsSection.tsx      # 04 — key figures (table + 5 charts)
    TakeawaySection.tsx     # 05 — conclusions
  components/               # Nav, Footer, SectionHeading, FigureCard,
                             # StatTile, Tag, SummaryTable, PitchMotif
  data/teamSummary.ts       # data backing the results table — edit freely
  assets/figures/           # exported chart PNGs, copied from ../../output
```

## Filling in content

Every section file has lorem ipsum placeholder copy — search each `.tsx`
file in `src/sections/` and swap the placeholder paragraphs for real text.
Figures are already wired up to the real exported charts in
`src/assets/figures/`; only the surrounding captions are placeholders.

To swap a figure for an updated export, drop the new PNG in
`src/assets/figures/` and update the corresponding `import` in
`ResultsSection.tsx` (or `Hero.tsx`/`DataSection.tsx`).

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to a Git repo and import into Vercel — framework preset "Vite" is
auto-detected. Build command `npm run build`, output directory `dist`.
