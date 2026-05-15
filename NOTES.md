# AI Detector Game — Project Notes

## What We Built
A static browser game (`index.html` + `style.css` + `data.js` + `app.js`) where users read writing samples and vote whether each was written by AI or a human. No server needed — open `index.html` directly in a browser.

- Min 10 votes to unlock score, max 100
- Three content types: tweets, LinkedIn posts, blog excerpts
- Cards styled to visually mimic each platform
- Results screen shows overall accuracy % and breakdown by type, with a tier label (AI Whisperer → Easily Fooled)

---

## Dataset Status (50 samples total)

### Blog excerpts — DONE (real verified pre-2022 sources)
| IDs | Source |
|-----|--------|
| 42, 49 | Venkatesh Rao, Ribbonfarm (2007) — magic essay |
| 43, 47 | Paul Graham, paulgraham.com — startup ideas essay |
| 44, 48 | Gizmodo (2019) — worst tech of 2019 |
| 45, 46 | Visakan Veerasamy, visakanv.com — startup marketer directives |
| 50 | Neal Stephenson, WIRED (1996) — Mother Earth Mother Board |

### Blog excerpts — AI samples (ids 35–41)
These were written by Claude to exhibit stereotypical AI patterns (em-dash bullets, "dive deep", "game-changing", rhetorical questions, etc.). Genuinely AI-generated, so labels are accurate.

### Tweets — NEEDS REAL CONTENT
- IDs 1–10: AI-generated (accurate labels, Claude wrote these to sound like AI)
- IDs 11–20: ⚠️ Still Claude-written "human-sounding" tweets — NOT verified human

### LinkedIn posts — NEEDS REAL CONTENT
- IDs 21–27: AI-generated (accurate labels)
- IDs 28–34: ⚠️ Still Claude-written "human-sounding" LinkedIn posts — NOT verified human

---

## Most Recently Done
Replaced all 9 fake human blog samples with real verbatim excerpts from verified pre-2022 sources. Fetched content from visakanv.com, ribbonfarm.com, paulgraham.com, and gizmodo.com. Neal Stephenson (WIRED 1996) text was pasted directly by the user.

Sources that were blocked/unavailable: NYT (paywalled), Reddit, Hacker News (rate-limited), Lifehacker, WIRED, NPR.

---

## Next Steps
1. **Replace human tweet samples (ids 11–20)** — user will paste raw text of pre-2022 tweets directly into the chat. Update `data.js` with real author handles, dates, and verbatim text.
2. **Replace human LinkedIn samples (ids 28–34)** — same approach, user will paste text.
3. **Grow the dataset** — currently 50 samples. Could expand to 80–100 for more variety before the 100-vote cap becomes reachable.
4. **UI polish** — test on mobile, check card rendering edge cases (very long text, unusual characters).
5. **Consider adding a `source` URL field** to each human sample entry so the game can optionally show a "read the original" link on the results screen.
