# ARMONIA Design System - Colors & Typography

## Typography
**Font:** `Montserrat` (Google Fonts)  
**Weights:** 100, 300, 400, 500, 600, 700  
**Sizes:** xs(0.75rem), sm(0.875rem), base(1rem), lg(1.125rem), xl(1.25rem), 2xl(1.5rem), 3xl(1.875rem), 4xl(2.25rem), 5xl(3rem), 6xl(3.75rem)  
**Letter-spacing:** tight(-0.025em), normal(0), wide(0.025em), wider(0.05em), widest(0.1em), brand(0.3em)

## Colors

### Primary
**Charcoal** (UI/Text):
- 950: #1a1b1e
- 800: #323338
- 600: #484a52
- 400: #777981
- 200: #c3c4c9
- 50: #f6f6f7

**Gold** (Accents):
- 600: #c79548
- 500: #d9b15c
- 400: #e5cb84
- 100: #fbf8ed

### Supporting
**Sage** (Success/Eco): 600:#4d5f4c, 500:#637862, 100:#e6ebe4  
**Wine** (Error/Special): 600:#bc365a, 500:#d15570, 100:#fae8ea  
**Cream** (Backgrounds): 500:#d5ab82, 300:#eedec7, 50:#fdfcfa

### Neutrals
**White:** #fefefe  
**Black:** #0a0a0b

## Theme Usage

### Light Mode
- Background: cream-50
- Text: charcoal-800 (primary), charcoal-600 (secondary)
- Accent: gold-600

### Dark Mode
- Background: charcoal-950
- Text: cream-100 (primary), charcoal-400 (secondary)
- Accent: gold-400

## Key Rules
1. Use Montserrat with weights 300-400 for body, 100-300 for headers
2. Gold only for accents/CTAs, never large areas
3. Maintain 4.5:1 contrast ratio for accessibility
4. Import font: `<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap">`

## States & Interactions

**Hover:** Darken by 1-2 shades  
**Focus:** Add gold-500 ring (2px, 50% opacity)  
**Disabled:** 50% opacity  
**Active:** Darken by 3 shades

## Opacity Scale
Use with rgba: 5%, 10%, 20%, 30%, 50%, 70%, 80%, 90%, 95%

## Line Heights
1 (tight), 1.25 (snug), 1.375 (normal), 1.5 (relaxed), 1.625 (loose)

## Quick Reference

**Headers:** thin/light weight + wider letter-spacing  
**Body:** normal weight + normal letter-spacing  
**Buttons:** medium/semibold weight  
**Tags/Labels:** uppercase + 0.3em letter-spacing  

**Success:** sage colors  
**Error:** wine colors  
**Premium/CTA:** gold colors  
**Borders:** charcoal-200 (20% opacity)  
**Shadows:** black at 5-10% opacity