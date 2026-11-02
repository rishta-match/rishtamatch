# RishtaMatch

A simple, modern matrimony web app (demo). Free to host on GitHub Pages.

## Features

- Modern mobile-first design with bottom navigation and dark mode
- English / Hindi toggle
- 1000 sample profiles across 100 Indian cities (7 brides + 3 grooms per city); filter by gender, state, city, religion and age; "Load more" paging
- Match % score (after you create your own profile)
- Profile detail sheet, shortlist, send interest
- Real accounts: email sign-up/login (Supabase), profile + photo saved in the database, other members see real profiles
- Interests, shortlist, block and report stored in the database; 2 free interests then a (demo) paywall
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
- Backend: Supabase (Postgres + Auth + Storage) with Row Level Security. The publishable key in `index.html` is meant to be public; never put a service_role key in this repo.
- The paywall uses a demo unlock (`demo_unlock()` function controlled by `app_settings.demo_mode`). Turn it off and add Razorpay + a verified webhook before charging real money.

## Next steps

1. Google / phone OTP login
2. Profile verification and photo moderation
3. Real payments (Razorpay) with server-side verification
4. Chat after both sides accept interest
