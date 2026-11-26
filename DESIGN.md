# Design notes: cka.purutuladhar.com

Landing page for the *Certified Kubernetes Administrator (CKA) Exam Guide*. This file records the design decisions so future edits stay consistent.

## Subject and audience

- **Product:** a $15 ebook for the CKA exam, sold on Gumroad (https://ptuladhar.gumroad.com/l/cka-handbook).
- **Audience:** sysadmins and DevOps engineers preparing for a hands-on cluster administration exam.
- **Job of the page:** get the visitor to buy the book or download the free sample.

## Direction

The page started from the CKS site (cks.purutuladhar.com) for structure. The look is deliberately different:

- **CKS** is a security book, so a dark "hacker" theme suits it.
- **CKA** is cluster administration, so the page reads like a clean operations manual: light paper background, navy ink, Kubernetes blue.

Typography and the fixed cover are borrowed from the Kamal Handbook page (kamalmanual.com/handbook).

## Color tokens

Defined in `tailwind.config.ts`.

| Token   | Hex       | Use                                         |
|---------|-----------|---------------------------------------------|
| `paper` | `#F6F8FB` | Page background, badge ring                 |
| `ink`   | `#0E1A2E` | Body text, top banner background            |
| `k8s`   | `#326CE5` | Kubernetes brand blue: buttons, icons, badge |
| `deep`  | `#1B3F99` | Subtitles, links, button hover              |
| `rule`  | `#D8DEE9` | Section dividers and borders                |
| `slate` | `#56627A` | Secondary text                              |

The tailwind config also defines a single-value `blue` color left over from CKS. **Don't use `text-blue-600` or other numbered blues:** they don't exist in this config and silently fall back to nothing. Use the tokens above or an explicit hex like `text-[#2563eb]`.

## Typography

- **Headings and buttons:** League Spartan, bold (700). It's loaded with `next/font/google` in `app/layout.tsx` and exposed as `--font-spartan` / `font-display`. `app/globals.css` applies it to `h1`–`h3`.
- **Body:** the system UI font (`font-sans`: San Francisco on macOS, Segoe UI on Windows).
- **Sizes:** hero checkmark points are 20px (`text-xl`), matching Kamal. Section intros are `text-lg`.

## Layout

- **Desktop (md+):** two columns. The left `<aside>` holds the cover, the copies-sold badge and the buy button. It's `position: sticky`, so it stays in view while the right column scrolls.
- **Mobile:** a single column, with the cover and buy button at the top.
- Content is left-aligned. Sections are separated by a 1px `rule` line rather than cards.

## Page sections (top to bottom)

1. **Top banner:** a CKS cross-promo ("Passed the CKA? Get the CKS under your belt next…"). It's written for the reader, not "also by the author".
2. **Sticky aside:** the cover, a "460+ copies sold" circle badge overlapping the cover corner, and "Buy the book for $15". This is the page's main buy button.
3. **Hero:** the title, "The missing book by a Kubestronaut", and three checkmark points.
4. **Bonus video walkthroughs:** a 90-second teaser in a native `<video>` player.
5. **Try it before you buy:** a sample page image and "Download the sample (PDF)".
6. **Exam articles:** a ruled list of the author's CKA articles, each with a 16:9 thumbnail, title and date, linking out to the article. Data lives in `data/articles.ts`. An entry without a `thumbnail` shows a blue "CKA" tile; an entry without a `url` isn't clickable.
7. **Questions:** an FAQ as native `<details>` accordions.
8. **About the author:** photo, bio, and LinkedIn / X / GitHub links.
9. **Going for the CKS next?:** the CKS cover with a link to cks.purutuladhar.com.

There is no footer and no closing buy section, by choice. The sticky buy button covers that on desktop.

## Copy rules

- Plain, specific and in sentence case. No hype words, no "→" on buttons, no all-caps labels.
- One buy action, worded the same way everywhere: "Buy the book for $15".
- Don't repeat a link the page already has. For example, the sample link lives only in the sample section.
- Only make claims we can back up. The book is complete and includes lifetime updates; don't call it "early access".

## Removed on purpose

Don't bring these back without a reason:

- The exam-weights bar and domain list (too much detail for a sales page).
- The hero intro paragraph and extra hero links ("Read the free sample").
- The multipass command block in the sample section.
- The closing "Walk into the exam…" section and the footer.
- The AWS certification line in the author bio.
- The CKS articles carousel, the rotated "$15" price badge, and the purple glow styling.

## Assets

All assets are in `public/`.

| File | Source | How it was made |
|------|--------|-----------------|
| `images/book-cover.png` | Sample PDF, page 1 | The embedded cover image, which has no "SAMPLE" watermark: `pdfimages -png -f 1 -l 1 <pdf>`, then resized to 1200px |
| `images/cka-exam-guide-sample.png` | Sample PDF, page 7 (section 2.1) | `pdftoppm -png -r 110 -f 7 -l 7 <pdf>` |
| `images/author-profile.png` | Author photo | Square crop around the face, 440×440 |
| `images/cks-cover.png` | CKS site repo | Copied as-is |
| `videos/cka-walkthrough-teaser.mp4` | Bonus walkthrough recording, 7:00–8:30 | `ffmpeg -ss 420 -t 90 -i <src> -vf scale=1692:-2 -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart` (about 2.6 MB) |
| `videos/cka-walkthrough-poster.jpg` | Same recording at 7:05 | `ffmpeg -ss 425 -i <src> -frames:v 1 -q:v 4` |

The sample PDF lives in the book repo: `tuladhar/certified-kubernetes-administrator-exam-guide`.

**Video hosting:** the full walkthrough (36 min, 134 MB) is paid bonus material, so it's not public. It's also over Cloudflare Pages' 25 MiB per-file limit. Only short teasers (a few MB) go in `public/videos/`.

## Things to update by hand

- **Articles:** add or edit entries in `data/articles.ts`. Put thumbnails in `public/images/articles/`.
- **Copies sold:** "460+" is hardcoded in `app/page.tsx`. Update it from the Gumroad sales count from time to time.
- **Price:** "$15" appears on the buy button. Keep it in sync with Gumroad.
- **Curriculum date:** the FAQ says the book covers the February 2025 program changes. Update it when the exam changes.

## Still open

- The favicons and app icons in `app/` are still the CKS ones.
- Testimonials: the Kamal page leans heavily on named reader quotes. Add real ones when available.
- Chapter list: a plain numbered list of chapters with one line each, once the final chapter titles are settled.

## Build and deploy

- Next.js with `output: "export"`, so the site is fully static.
- Cloudflare Pages settings: build command `pnpm build`, output directory `out`.
- Production deploys from `main`. Other branches get preview URLs.
