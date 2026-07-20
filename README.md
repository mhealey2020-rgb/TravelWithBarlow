# Travel with Barlow ✈️🌈

A modern, mobile-friendly website for **Travel with Barlow** — LGBTQ+ and
Bravo/Real Housewives-inspired travel planning. Built with plain HTML, CSS, and
a tiny bit of JavaScript so it's easy to edit and host anywhere.

---

## What's in here

| File | What it is |
|------|------------|
| `index.html` | Homepage — hero, tagline, "why Barlow" cards, featured trips, email signup |
| `about.html` | Your story / About page |
| `itineraries.html` | Curated itineraries + "coming soon" cards |
| `contact.html` | "Book a trip with me" — Instagram + email + signup |
| `css/styles.css` | All the styling (colors, fonts, layout) |
| `js/main.js` | Mobile menu + email signup confirmation |
| `favicon.svg` | The little browser-tab icon |

No frameworks, no build step. Just open the files and edit the text.

---

## How to preview it

**Easiest:** double-click `index.html` and it opens in your browser.

**Slightly better (recommended):** run a tiny local server so links behave
exactly like they will online. In this folder, run one of:

```bash
# If you have Python installed:
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.

---

## Editing the common stuff

### ✏️ Change the words
Open any `.html` file in a plain text editor (or VS Code). The text is right
there between the tags — type over it. Each section is labeled with a comment
like `<!-- ============ HERO ============ -->` so you can find things fast.

### 🎨 Change the colors
Open `css/styles.css` and look at the top — the `:root` block:

```css
--pink:   #ff2e88;
--purple: #7b2ff7;
--orange: #ff7a3d;
--teal:   #12c2c9;
--gold:   #f5c518;
```

Change any hex code and it updates across the whole site. (Grab new colors from
a picker like [coolors.co](https://coolors.co).)

### 📧 Update your email address
The site currently uses `matthew.healey@fora.travel`. To change it, search each
`.html` file for that text and replace it with your new address. It appears in
the footer of every page and on the contact page.

### 📸 Instagram link
Already set to **@travel_with_barlow** everywhere. If your handle changes,
search for `travel_with_barlow` and update it.

### 🧳 Add or edit an itinerary
In `itineraries.html`, copy one of the `<article class="trip-card">` blocks and
change the emoji, title, description, and the `trip-meta` line. To make it a
"Coming Soon" card, use `<article class="trip-card soon">` instead — there are
examples at the bottom of the grid.

---

## Making the email signup actually collect emails

Right now the signup form shows a friendly confirmation but **doesn't store
emails anywhere yet** (there's no server). To collect real sign-ups, connect it
to a free service — no coding degree required:

- **[Mailchimp](https://mailchimp.com)** — paste your list's form `action` URL
- **[Formspree](https://formspree.io)** — point the form at your Formspree endpoint
- **[Beehiiv](https://www.beehiiv.com)** / **[Substack](https://substack.com)** — great for a travel newsletter

**How to connect one (general steps):**
1. Sign up and create an audience/list.
2. Copy the form `action` URL they give you.
3. In each `.html` file, find `<form class="signup-form" novalidate>` and add the
   action, e.g. `<form class="signup-form" action="PASTE_URL_HERE" method="post">`.
4. In `js/main.js`, delete the line `event.preventDefault();` so the form
   submits to the service.

---

## Putting it online (free options)

Any of these will host this site for free:

- **[Netlify](https://www.netlify.com)** — drag this folder onto their dashboard, done.
- **[GitHub Pages](https://pages.github.com)** — free hosting straight from this repo.
- **[Cloudflare Pages](https://pages.cloudflare.com)** — connect the repo and deploy.

Once live, you can point a custom domain (like `travelwithbarlow.com`) at it.

---

Made with love & a lot of glitter. Safe travels! 🌈
