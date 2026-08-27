# Agentic Analysis

**Project:** What Drives NWSL Attendance: Evidence of a Durable, Women's-Specific Sports Culture
**Tool:** Claude Code
**Span:** August 19 to August 27, 2026, across 14 sessions

Below are the exchanges that significantly moved this project, pulled from all stages. I've included cases where the model was right, cases where it was wrong, and cases where I cut work it had already finished.

---

## Stage 1: Scope discipline (Aug 19)

The project started from a news article I wanted to work in. I asked what analysis could test its "two-tier league" framing, and the model built a full `08_stratification_analysis.ipynb` — Gini coefficients, trajectory clustering, a hand-collected team-financials CSV, a composite risk index — end to end, unprompted beyond my "yes." It ran clean and the finding was genuinely interesting (attendance inequality had *fallen*, not risen).

Days later, once the paper's actual thesis had settled on infrastructure/culture rather than financial stratification, I cut all of it:

> **Me:** do not do the mls model, and remove all of the financial analysis while youre at it

The model didn't argue, and it deleted it. This was a reoccuring pattern where the model got overambitious, and I had to remove elements that had little relation or that were outside of the scope that I could explain.

---

## Stage 2: Outlining against a rubric, not just a topic (Aug 21)

I asked for a paper outline based on the rubric and my lit review. Midway through, I pasted my actual in-progress draft, which took a different angle (durable culture vs. infrastructure) than the outline the model had just built.  It also caught something I'd missed by pattern-matching against my own lit review:

> **Claude:** **Citation mismatch to fix before submission**: the NFL "economic incentive to separate itself... spend their money at the stadium" quote is cited `[4]` (Stephenson, *NWSL attendance*) in both this draft and the original lit review — but that's an NFL claim, and your source list has no NFL-specific citation.

That mis-citation resurfaced six days later in the final paper, in a different sentence I had written, and I had to re-read all of my cited articles to fix the citation. 

I also asked it to just answer the keyword line for the PNAS template, and it initially answered a completely different question:

> **Me:** what should the keywords be in the paper
> **Claude:** *[explains the MediaCloud search-query keywords used for the article pull]*
> **Me:** the keywords for the paper
> **Claude:** Ah — the PNAS keyword line at the top of the paper... not the MediaCloud search terms.

This was a reminder that the model does best will clear instructions.

---

## Stage 3: Rebuilding the color palette instead of eyeballing it (Aug 22)

I said the site's figures "looked dull" and asked the model to vet a new scheme *before* implementing it. 
Rather than picking colors by eye, it ran the project's dataviz skill's validator against the existing palette and showed me it objectively failed two of six checks. It then proposed two full alternative palettes, validated both, and I picked my favorite. 

---

## Stage 4: Two reproducibility gaps, both caught by the same question (Aug 23–24)

Twice in this project, I built or had the model build a number/figure through some ad hoc path, and later asked "is this actually reproducible from the pipeline?" Both times the answer was no.

**First**, after the model computed a fuller team-summary table in a scratch script and wired it directly into the site:

> **Me:** is the code in notebook 03?
> **Claude:** No — I computed the new numbers in a one-off script in my scratchpad (`compute_table.py`), not inside `03_stadiums_analyze.ipynb`. [...] That means the full-table computation isn't reproducible from the repo's own pipeline right now.

I had it move the computation into the actual notebook. Doing so surfaced another discrepancy, though. The notebook's own convention excluded both 2020 *and* 2021 from career-average attendance, while the hand-built numbers only excluded 2020. Despite repeated clarification, the model fails to understand that COVID spanned two seasons. 

**Second**, a day later, with two annotated site figures that looked hand-edited:

> **Me:** is the code updated to reproduce these figures?
> **Claude:** No — the annotated versions currently on the site aren't reproducible from the notebooks. [...] it looks like the annotations (labels, callouts, whatever was added) were done by hand outside the notebook — in an image editor, or a throwaway script that wasn't saved.

> **Me:** the code needs to reflect the figures. if i change the code, the website should update with the new figure

I made it write the annotation logic as real matplotlib cells in `06` and `07`, again verifying that all figures would be reproducible. 

---

## Stage 5: Annotations that were just wrong (Aug 23)

While reviewing the YouTube-growth chart's callout tags, I didn't accept them on sight:

> **Me:** its says the womens game launches after its color appears on the chart

The model diagnosed this as a real rendering artifact (`stackplot`'s linear interpolation ramping a color in a year early) and proposed a step-function fix. But when it re-showed me the "fixed" chart:

> **Me:** most of these tags are incorrect
> **Claude:** Good catch — I mis-verified those. Let me check the actual channel-creation dates against the video data before re-tagging anything. [...] Confirmed the errors: **No White Shorts was created in 2020**, not 2024 (it just started posting NWSL content in 2024) — and **independents overtook NWSL's own channel in 2021**, not 2022.

Two factual errors in annotations I'd already flagged once as visually wrong, that only got caught because I refused to accept the second version either. The eventual fix was a smooth chart with dashed guide lines pinning each label to its real year. Claude certainly lacks an eye for aesthetics.

---

## Stage 6: A confound the model found on its own (Aug 27)

Rebuilding the regression for the final paper, the model recoded the rivalry variable and reported the result, but flagged its own next finding as needing my sign-off before it wrote anything:

> **Claude:** The re-code makes the story *stronger* — the true derby flag jumps to +56% at p=0.004. But new-stadium loses precision under clustering, and all five relocations happened during the league's growth years, so let me test that confound.

It then tested a season-fixed-effects specification, found the "new stadium" coefficient collapsed from +22% to +3% (not significant) once the league-wide growth trend was absorbed, and explicitly connected this to a finding from a separate project of mine (my QSS 45 synthetic-control analysis, which found the same relocation lift shrinks once you control for underlying growth). This is the version of "catching a confound" I want from the model. It found the problem, tested it, and cross-checked it against independent evidence before bringing it to me, rather than me having to ask "is this actually causal?" first.

---

## Stage 7: The bug I caught by asking one question (Aug 27)

After the paper was fully drafted and I'd started reviewing a compiled PDF, I asked a single pointed question:

> **Me:** is 2021 not also excluded from the analysis?
> **Claude:** Good catch — let me check this properly rather than assume. [...] 2021 attendance (4,106) is 45% below 2019 and 43% below 2022 — clearly still COVID-suppressed, not normal variation. [...] My QSS 20 draft only excluded 2020, inheriting that from the original notebook without questioning it. That's a real gap, not a stylistic difference.

Worse than a simple oversight — the notebook itself was internally inconsistent: one cell already excluded 2021 (with a markdown comment that only mentioned 2020, so even its own documentation was stale), while the regression, honeymoon-effect, and growth-chart cells didn't. Fixing it moved real numbers — the Cascadia derby premium dropped from +70.8% to +57.5%, the market-size coefficient direction stayed but its magnitude changed, and the two teams whose relocations were dated exactly to 2021 (Washington Spirit, Gotham) had their honeymoon-effect numbers shift the most. Every one of those corrected numbers had to be re-propagated through the abstract, two tables, and four results paragraphs by hand — which is exactly what went wrong next.

---

## Stage 8: The model caught its own propagation failure — in a file I'd edited (Aug 27)

After fixing the 2021 bug, I uploaded my own edited copy of the compiled PDF for a final check. The model didn't just proofread it — it re-verified every number against the notebook and found the fix hadn't fully propagated:

> **Claude:** This compiled PDF is a **mix of two different states of the analysis** — it has old, pre-correction numbers running alongside newly-fixed ones, so it actively contradicts itself in several places. [...] a reader hits the abstract's `+70.8%` and then Table 2's `+57.5%` for the same claim two pages later.

It listed six specific stale locations (abstract, Table 1, two methods/results sentences) where the 2021 exclusion hadn't been carried through, plus the exact same NFL mis-citation from Stage 2, back again in the version I'd edited independently, attributed to the wrong source a second time. It caught these by literally re-deriving the numbers from the data and diffing them against the text, not by re-reading for tone.

---

## What actually worked

| Technique | Why it worked |
|---|---|
| **"Is this reproducible from the pipeline?"** | Caught two cases (team table, chart annotations) where a real-looking output had actually been built off to the side and could silently drift from the code. |
| **Rejecting a "fixed" version and asking again** | The YouTube chart's tags were wrong twice; only checking the second version caught the second error. |
| **Asking it to justify a number before accepting it** | "is 2021 not also excluded" took one sentence and moved five headline statistics. |
| **Having it verify text against data mechanically** | The final-paper review re-derived every claim from the notebook rather than reading for plausibility — that's what caught the propagation gap and the repeat citation error. |
| **Making it justify deleted work first** | The stratification notebook's finding is still summarized in my notes even though the code is gone. |

## Where the model failed

1. **COVID 2021 exclusion.** I had to remind the model 10+ times that 2021 had to be excluded from the model, not just 2020. It couldn't seem to understand that the pandemic's effects spanned more than one season.
2. **Computed real numbers outside the reproducible pipeline, twice**, and presented them as finished without flagging that they weren't sourced from the notebooks until I asked directly.
3. **Fabricated-by-omission annotation dates.** Two chart callouts stated launch years that were simply wrong, and it struggled to fix it at first.

## What I'd do differently

The model was able to verify its own work when I artificially upped the stakes (publication quality, strict deadline, etc.), but oftentimes I had to ask the model time after time again: "is this reproducible?" "where is this number pulled from?" "why x, not y?".

This was my first time using Claude Code. It was frustrating having to undo its work or finding a flaw in the design after it made a script. Using agentic AI makes it so much easier to spin up scripts quickly to test different methods, but my main takeaway is to slow down, and engage in rigerous planning with and without the AI's help before executing.
