# RishtaMatch

A simple, modern matrimony web app (demo). Free to host on GitHub Pages.

## Features

- Modern mobile-first design with bottom navigation and dark mode
- English / Hindi toggle
- 1000 sample profiles across 100 Indian cities (7 brides + 3 grooms per city); filter by gender, state, city, religion and age; "Load more" paging
- Match % score (after you create your own profile)
- Profile detail sheet, shortlist, send interest
- Create your profile with photo upload (saved only in your browser)
- WhatsApp share, Report and Block
- Installable as an app (PWA) and works offline
- Privacy Policy and Terms pages (starter templates)

## Files

| File | Purpose |
|------|---------|
| `index.html` | The app (UI and logic) |
| `profiles.js` | Generates the 1000 fictional sample profiles and illustrated avatars |
| `manifest.json`, `sw.js`, `icon.svg` | Install-as-app and offline support |
| `privacy.html`, `terms.html` | Legal pages (get them reviewed by a lawyer before real launch) |

## Notes

- Sample profiles are fictional.
- Data is stored only in the browser (localStorage). Real login and a shared database are the next step.

## Next steps

1. Real login (phone OTP / Google) and a database (Firebase or Supabase)
2. Profile verification and photo moderation
3. Chat after both sides accept interest
4. Premium plan
