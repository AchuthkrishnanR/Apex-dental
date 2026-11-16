# Apex Dental & Hair Studio — Website Review Brief

Use this brief to request an independent review of the current website. For a reliable visual and technical assessment, upload this file together with the project source (or a ZIP of the project) and desktop/mobile screenshots. A description alone cannot show the final rendering, responsiveness, or interaction quality.

## Project overview

- **Business:** Apex Dental & Hair Studio, a dental clinic website.
- **Format:** Single-page responsive marketing/brochure website.
- **Primary goals:** Explain the clinic, present services and doctors, make it easy to call, and help visitors plan a visit.
- **Audience:** Prospective and existing dental patients, including families.
- **Brand assets:** The clinic logo and portraits of the two managing directors are supplied by the clinic.
- **Visual direction:** The current palette uses porcelain white, ivory and warm gold to match the clinic logo. A header control switches between this light theme and a charcoal-and-gold dark theme.

## Current page and content

The page includes:

1. A sticky header with clinic logo, navigation and light/dark theme toggle.
2. A pinned scroll story with a custom SVG tooth. As visitors scroll, a brush moves across the tooth, stains fade, and the chapter label and progress indicator update.
3. Clinic introduction, appointment call-to-action, two tap-to-call phone links and consulting hours.
4. Services section with a GSAP animated accordion gallery of five service categories. Artwork is locally authored SVG rather than stock or AI imagery. All 11 named services and descriptions are listed below the gallery:
   - Smile designing; dental bleaching; clear aligners; orthodontic braces; dental implants; pediatric dentistry; root canal treatment; crowns and bridges; gum care; oral lesion management; oral cancer screening.
5. Doctors section with two managing directors in their own cards and photos, followed by eight specialist profiles with qualifications and specialties.
6. Appointment call-to-action, consulting hours, phone links, map placeholder and footer.

## Interactions and behavior

- Scroll-driven tooth cleaning and chapter progress.
- GSAP services accordion, with hover, click and keyboard focus interaction.
- Responsive navigation menu for small screens.
- Light/dark theme toggle; the selection is saved in browser local storage.
- `tel:` links for the clinic phone numbers.
- Reduced-motion handling is included for the tooth animation and gallery transitions.

## Implementation

- Vite project using HTML, CSS and JavaScript, with React components mounted for the services gallery.
- Dependencies include React, React DOM and GSAP.
- No CMS, server API, database, user accounts or online appointment booking backend.
- The “Book an appointment” actions currently call the clinic; they do not submit an appointment request.
- The map is still a placeholder because the verified street address or Google Maps share link has not been provided.
- No email/contact form is currently present.
- The production build has completed successfully. This is not the same as a full cross-device browser QA or clinical/content verification.

## What I want you to assess

Please give a candid review, including shortcomings and assumptions. Do not assume the site is good simply because this brief describes it positively.

1. **Design quality:** Does it look coherent, trustworthy and appropriate for a dental clinic? Assess the logo integration, gold/ivory palette, typography, visual hierarchy, use of motion, and services gallery.
2. **Usability and accessibility:** Review navigation, mobile layout, contrast, keyboard operation, reduced motion, image alternatives, call-to-action clarity and ease of finding practical information.
3. **Technical quality:** Review responsiveness, performance risks, maintainability, dependencies, SEO basics, semantic HTML and production readiness. Identify anything that needs a real-browser check.
4. **Conversion and trust:** Are the doctor credentials, phone links, hours, location, and appointment path sufficient to help a new patient contact the clinic? What is most likely to reduce trust or bookings?
5. **Prioritized improvements:** List the five most useful next changes, ordered by impact, and separate launch blockers from optional polish.
6. **Cost estimate:** Estimate what it would cost to recreate the current scope professionally. Give separate ranges for an experienced freelancer and a small design/development studio in India, in INR. State your assumptions about design, revisions, content entry, responsive work, animation, QA, launch, and taxes. Separate the current call-only site from a launch-ready version with a working map and an actual online booking/contact workflow. Do not include recurring hosting/domain costs in the one-time build price; list them separately if you can support the estimate.

If you cannot inspect the supplied source or screenshots, say so clearly and give a lower-confidence estimate based only on this brief.

## Prompt to paste into Claude

> Please review the attached Apex Dental & Hair Studio website source and screenshots using the brief above. Give me an independent, candid assessment of its design, accessibility, usability, technical readiness and likely conversion quality. Then estimate a reasonable one-time professional rebuild cost in India in INR, with separate freelancer and small-studio ranges. Explain what is included, what is excluded, what information is still missing, and which improvements matter most before launch. Be specific to the actual source and screenshots; distinguish things you verified from assumptions. Do not rewrite the project unless I ask.

## How to share it with Claude

1. Open `C:\project\ApexClinic\CLAUDE_ASSESSMENT_BRIEF.md` and upload it to Claude.
2. Also upload a ZIP of the project source, excluding `node_modules` and `dist`, or provide Claude a repository link.
3. Include screenshots of the home/scroll scene, services gallery, doctor section, and at least one mobile viewport. If the site is deployed, include its public URL as well.
4. Paste the prompt above, then ask follow-up questions about any estimate or critique you want clarified.
