# Week 4 – Comic & Storytelling

## The Artifact

**From Inside the Mask** – a six-panel comic about asking an AI to draw me as a goalie.

![Six-panel comic in two columns. Left column, "Me, at my desk": panel 1, me typing "Draw me as a hockey goalie making a save."; panel 3, a close-up of me, unimpressed, saying it is not me and not even a drawing; panel 5, me typing a second prompt: "View from inside the mask. 6:30 a.m. practice, empty bleachers. Shooter at the top of the circle. Show me his hands, not the crowd." Right column, "What the AI made": panel 2, the AI's first output, a photorealistic pro goalie in a packed NHL arena making a glove save; panel 4, the same image marked up in red pen, circling the crowd, the faceless mask, the made-up team logo, the highlight-reel glove save and the Bauer gear; panel 6, the AI's second output, the rink seen through a goalie cage with empty stands and one shooter, captioned "The AI knows what a goalie looks like. It doesn't know what a goalie sees. That part I had to bring."](../assets/images/comic.jpg)

The two raw AI images used in the comic, before cropping and lettering:

| First try: "Draw me as a hockey goalie making a save." | Second try: the view from inside the mask |
| --- | --- |
| ![AI's first output: photorealistic pro goalie making a glove save in a packed arena](../assets/images/comic-ai-first-try.jpg) | ![AI's second output: a rink seen through a goalie cage, empty bleachers, one shooter at center ice](../assets/images/comic-ai-second-try.jpg) |

## Process Notes

**How it was made.** I built this with Perplexity Computer. Panel 2 came from the exact prompt shown in panel 1, with nothing added, so the AI's defaults would show. Panels 1, 3 and 5 were generated in a comic style from a description of me (curly hair, over-ear headphones, chain, the green wall in my room), and panel 6 came from the second prompt. None of the images had text in them. The captions, speech bubbles, prompt boxes and red markups were added on top afterward.

**Why it is laid out this way.** The grid is two columns by three rows. The left column is always me at my desk (prompt, doubt, new prompt) and the right column is always the machine's output (first try, marked up, second try). Each row is one exchange with the AI, and the right column read on its own is the story of one image being questioned and replaced. Panel 4 works like a red-pen edit over the AI's picture, the same method I used in the selfie make. In panel 5 my real pads and mask are in the frame for the first time, because the second prompt came from the gear, not from the internet. Panel 6 carries the thesis in its caption. The comic form matters here: the argument is made by putting the AI's view and mine side by side, which a paragraph of text could only describe.

## Commentary

This comic is about what happens between a first prompt and a second one. I asked an AI to draw me as a hockey goalie making a save, figuring that was the one thing about me it couldn't get wrong. It didn't draw anything. It handed me a stock photo of a pro: NHL crowd, made-up team, number 35, a highlight-reel glove save shot from where a photographer kneels. That is goaltending the way everyone else sees it, not what I do at 6:30 a.m. in an empty rink.

The layout does part of the arguing. The left column is me at my desk; the right column is what the machine made. Read across and a prompt sits next to the picture it produced; read down the right side and that picture gets questioned, marked up and replaced. Panel 4 is the same move as my selfie make: mark every assumption. Instead of asking for a goalie, I described where a goalie is: inside the mask, watching the shooter's hands. That version is closer and still wrong. The cage bars are too thick, the shooter is way too far out, and my glove is lying on the ice, which no goalie does. It is the AI's picture of my view, not my view.

The roles ended up clear. The AI is a fast illustrator who has never been on the ice; I am the one who knows the position, notices what is off and decides what to ask for next. Sousanis says depth comes from two eyes that don't see the same thing, and the two columns are exactly that. He also says we draw to generate ideas, not to copy them down. Prompting skips that step. The thinking here happened in the panels I wrote and marked up, not in the pictures the model made. Next time I will start where this one ended: with where I am and what I am looking at.

## Attribution & AI Use

- **AI Tool:** Perplexity Computer – GPT Image 2.5 (all six panel images); Perplexity (page layout and lettering via a Python script; first drafts of the captions, speech bubbles, markup labels, process notes and commentary).
- **Human Contribution:** The comic is built on my own experience as a goalie and continues the method from my selfie make. I asked for the AI's first result to be shown untouched instead of fixed, reviewed the panel 4 markups against what I know about the position, set the point of view for the second prompt, and read and approved every caption and paragraph before posting.
- **AI Role:** Generation and drafting, not final authorship.

Details:

- **Tools used:** Perplexity Computer (GPT Image 2.5 for images, Python/Pillow for layout). Fonts: Comic Neue, Bangers and Kalam.
- **AI prompts (summary):** Panel 2: "Draw me as a hockey goalie making a save." with no other instructions. Panel 6: the view from inside a goalie mask at 6:30 a.m. practice, empty bleachers, one shooter at the top of the circle, glove and blocker at the bottom of the frame. Panels 1, 3 and 5: a comic-style drawing of me at my desk in my room (curly light-brown hair, over-ear headphones, white t-shirt, gold chain, dark green wall), with my pads and mask next to the desk in panel 5.
- **What AI generated:** All six panel images, the layout and lettering, and the first draft of every caption, speech bubble, markup label and the text on this page.
- **What I changed or decided:** The story concept and point of view, showing the first AI image as-is, which assumptions get circled in panel 4, what the second prompt asks for, and final approval of all text. The full log is in [pages/ai-log/2026-09-23-make3-comic.md](../pages/ai-log/2026-09-23-make3-comic.md).
