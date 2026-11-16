# Apex Dental & Hair Studio Website Plan

## Direction

A warm, editorial clinic site using the supplied gold logo palette. The key visual is a custom SVG tooth in a pinned scroll scene: the opening chapter shows the studio name, phone booking, and hours; clinic and service chapters progress beside the same tooth while a toothbrush sweeps across and removes visible stains. The closing chapter presents the clean tooth state and brand.

## Page sections

- Opening story and appointment/contact actions.
- Scroll-linked clinic story and service groupings.
- Full 11-item services directory.
- Profiles for all 10 doctors, with supplied names, qualifications, roles, and registration details.
- Consulting hours, call links, and map placeholder.
- Closing appointment call to action.

## Source information

- The images in info/ were used only to transcribe brand, doctor, hours, phone, and service details. They are not embedded.
- Phone numbers: 92074 35809 and 73063 85966.
- Hours: Monday–Saturday 9:30 am–8:30 pm; Sunday 9:30 am–1:00 pm.

## Implementation

- Vite site using HTML, CSS, JavaScript, React, and GSAP. Service illustrations are locally authored SVG files.
- Native scrolling drives SVG brush position, stain reveal, chapter emphasis, and progress indicator.
- Responsive mobile menu and layout.
- Reduced-motion mode removes moving brush/sparkles and displays the clean tooth state.
- Exact package versions are recorded in `package.json` and `package-lock.json` for repeatable installs.
- GitHub Actions builds the Vite site and publishes `dist` to GitHub Pages at the repository subpath.

## Still needed

- Verified address or Google Maps share URL to enable directions.
- Email address and preferred booking workflow, if the clinic wants those options.
- Review doctor spellings and credentials against official clinic records before launch.

## Current status

Typography enlarged; managing directors now have a dedicated section above the specialist team. Map destination remains pending the verified clinic address.

## Deployment

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow publishes at `https://achuthkrishnanr.github.io/Apex-dental/` after a successful run on `main`.
