"""
Shared visual theme for every notebook in this project.

Import this from any notebook in code/ (they live in the same folder, so a
plain `import plot_theme` or `from plot_theme import ...` works with no path
setup) and call `set_mpl_theme()` once near the top, then wrap Plotly figures
with `style_plotly_fig(fig)` before showing/saving them.

Palette: a small purple/teal/red qualitative palette (NWSL-adjacent colors,
not any team's official branding) used consistently across every bar, line,
area, and map in the repo, plus a matching purple sequential scale for
continuous color encodings (e.g. attendance heat/size gradients).
"""

import matplotlib.pyplot as plt
import matplotlib as mpl

NWSL_PALETTE = [
    "#4B2E83",  # deep purple (primary)
    "#00A398",  # teal
    "#E34948",  # red/coral
    "#F2A93B",  # gold
    "#2E5EAA",  # blue
    "#8C6BB1",  # light purple
    "#59A14F",  # green
]

# Sequential scale (light -> primary purple) for continuous color encodings
NWSL_SEQUENTIAL = ["#F3EFF9", "#C9B8E0", "#9C7FC4", "#6E4AA3", "#4B2E83"]

PLOTLY_TEMPLATE = "plotly_white"


def set_mpl_theme():
    """Apply the shared matplotlib theme. Call once near the top of a notebook."""
    plt.style.use("seaborn-v0_8-whitegrid")
    mpl.rcParams.update({
        "axes.prop_cycle": mpl.cycler(color=NWSL_PALETTE),
        "font.family": "sans-serif",
        "axes.titleweight": "bold",
        "axes.titlesize": 13,
        "axes.labelsize": 11,
        "figure.facecolor": "white",
        "axes.facecolor": "white",
        "legend.frameon": False,
    })


def style_plotly_fig(fig, title=None):
    """Apply the shared Plotly theme/colorway to a figure in place (also returns it)."""
    fig.update_layout(
        template=PLOTLY_TEMPLATE,
        colorway=NWSL_PALETTE,
        font=dict(family="Arial, sans-serif", color="#2a2a2a"),
    )
    if title is not None:
        fig.update_layout(title=title)
    return fig
