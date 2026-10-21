# Accessibility

This site was built by Ryan Hartle for DH 101 at Denison University.

I have tried to make it accessible by:

- **Writing alt text for every image.** All 22 images on the site from Weeks 1 to 8 (the selfie make, the comic, the GIF contact sheet, the eight Voyant screenshots, the three map screenshots and the three network screenshots) have alt text that describes what is in the image and why it is on the page, not just a filename or "screenshot." Long or data-heavy images (the comic, the GIF, the Voyant tables) get longer descriptions so a screen-reader user gets the same evidence a sighted reader does.
- **Checking colour contrast.** I measured every text and background pair on the pages I control against the WCAG 2.1 AA thresholds (4.5:1 for text, 3:1 for graphics) using the WebAIM Contrast Checker's formula. Results: network page body text 15.6:1 in light mode and 15.6:1 in dark mode; secondary text 6.9:1 and 9.1:1; links 6.6:1 and 8.1:1; the five edge colours between 5.7:1 and 8.3:1 in light mode and 6.6:1 and 8.6:1 in dark mode. The site theme's body text is 14.7:1 and its link colour 5.4:1; the homepage text is 12:1. Nothing on the site falls below AA.
- **Not relying on colour alone.** On the network graph the five kinds of connection differ by dash pattern (solid, dashed, dotted, dash-dot) as well as colour, and the legend shows both. On the map from Make 6, layers differ by symbol shape (diamond, circle, square) as well as colour.
- **Making the interactive makes work without a mouse.** On the network graph every node is in the Tab order, has an ARIA label with its name, tier and number of connections, and opens with Enter or Space. The layout buttons and legend toggles are real buttons with pressed states. Focus is visible as a thick outline. The side panel is a live region, so a screen reader announces the selected node, and focus moves to its heading. The Make 6 map has a keyboard-friendly "Browse all places" list.
- **Providing text alternatives for the visualizations.** Under the network graph is a plain-text list of all 40 connections with their evidence and sources; the same data is downloadable as CSV and JSON. The SVG carries a title and a long description. Each make page includes still screenshots with full alt text so the page still makes sense if the embedded iframe does not load.
- **Using descriptive link text.** Links say where they go ("Open the network full screen," "edges CSV," the name of the source) rather than "click here" or a bare URL.
- **Respecting system preferences and small screens.** The network page and map follow the reader's light or dark mode preference. On a phone the network scrolls sideways at full size rather than shrinking to an unreadable thumbnail.
- **Keeping the structure plain.** Pages use one H1 and ordered H2s, lists for lists, and tables only for tabular data, so headings navigation works in a screen reader.

Things I know are not solved yet: the site's base styling comes from GitHub Pages' default Primer theme, which I have not customised, so I cannot change its link colour or focus styles; the interactive graph and map depend on JavaScript, and the text list is the fallback rather than a full equivalent; and the comic from Make 3 is an image, so its panel-by-panel reading order lives only in the alt text.

If you encounter barriers, please contact me through my GitHub profile, [hartleh1-design](https://github.com/hartleh1-design), and I will fix what I can.
