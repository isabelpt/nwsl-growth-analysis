# NWSL Infrastructure & Media Coverage Project

This project studies the growth of the National Women's Soccer League (NWSL) along two dimensions: **physical infrastructure** (stadiums, attendance, team lifespans, relative to MLS) and **media attention** (volume, outlets, and topic mix of news coverage over time).

## Repo structure

```
code/
  plot_theme.py                        # shared color palette + chart styling, imported by every notebook below
  01_stadiums_pull.ipynb               # pull raw ASA API + Wikipedia stadium data
  02_stadiums_clean.ipynb              # merge, remove duplicates, geocode -> stadiums.csv
  03_stadiums_analyze.ipynb            # maps + attendance charts
  04_media_pull.ipynb                  # pull raw articles from MediaCloud
  05_media_clean.ipynb                 # keyword-filter + dedupe -> filtered articles
  06_media_trends_analysis.ipynb       # outlet/trend charts + peak detection
  07_media_topic_modeling.ipynb        # LDA topic tagging + peak-topic analysis
data/
  raw/                                 # untouched pulls 
  processed/                           # cleaned/merged CSVs used across notebooks
output/                                # figures (.png) generated 
```

The first two chains (`01`-`03` stadiums, `04`-`07` media) are independent and can be run in either order. Within each chain, run the notebooks in numeric order — each one reads the previous one's output from `data/`.

All plotting notebooks (`03`, `06`, `07`, `08`, `09`) import a shared color theme from `plot_theme.py` (`set_mpl_theme()` for matplotlib, `style_plotly_fig()` for Plotly). 

| Notebook | Reads | Writes |
|---|---|---|
| `01_stadiums_pull` | ASA API, Wikipedia (live) | `data/raw/games_raw.csv`, `players_raw.csv`, `teams_raw.csv`, `stadia_raw.csv`, `stadiums_wiki_nwsl_raw.csv`, `stadiums_wiki_mls_raw.csv` |
| `02_stadiums_clean` | files above | `data/processed/stadiums.csv`, `teams_clean.csv`, `games_clean.csv` |
| `03_stadiums_analyze` | `data/processed/stadiums.csv`, `teams_clean.csv`, `games_clean.csv` | `output/stadiums_map_by_capacity.png`, `nwsl_avg_attendance_by_team.png`, `nwsl_avg_attendance_by_season.png` |
| `04_media_pull` | MediaCloud API (live) | `data/raw/nwsl_articles_raw.csv` |
| `05_media_clean` | `data/raw/nwsl_articles_raw.csv` | `data/processed/nwsl_articles_filtered.csv` |
| `06_media_trends_analysis` | `data/processed/nwsl_articles_filtered.csv` | `output/nwsl_articles_by_media_outlet.png`, `nwsl_articles_trend_over_time.png`; `data/processed/monthly_peaks.csv`, `daily_peaks.csv` |
| `07_media_topic_modeling` | `data/processed/nwsl_articles_filtered.csv`, `monthly_peaks.csv`, `daily_peaks.csv` | `data/processed/nwsl_articles_tagged.csv`;`output/nwsl_topic_counts_by_year.png`, `nwsl_topic_counts_by_month.png`, `nwsl_peak_topic_proportions.png` |

## Data

- **Stadium/game data**: pulled live from the [American Soccer Analysis API](https://www.americansocceranalysis.com/) (`itscalledsoccer` package, no auth needed) plus scraped Wikipedia stadium tables. No API key required.
- **Media coverage data**: pulled from the [MediaCloud API](https://www.mediacloud.org/). Requires an API key
- **Youtube data**: pulled from [Youtube Data API v3](https://developers.google.com/youtube/v3). Requires an API key

## Running

Each notebook is self-contained given its listed inputs, uses only relative paths (`../data/...`, `../output/...`), and defines its helper functions near the top of the notebook. Install dependencies with:

```bash
pip install pandas numpy scipy matplotlib plotly geopy itscalledsoccer mediacloud nltk gensim kaleido
```
