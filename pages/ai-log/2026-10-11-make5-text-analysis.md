# AI Use Log – Make 5 (How Machines Read)

**Date:** October 11, 2026

**Tool Used:** Voyant Tools (web, build 2026-10-08; not an AI tool, but logged because the make is about it). GPT 6.1 Sol (OpenAI), run through Perplexity Computer in four separate fresh sessions. Perplexity Computer (Claude) as the assistant that ran the tools and drafted the page.

**Task / Prompt:** Compare how Voyant and GPT "read" one short text and reflect on how each shapes interpretation. I chose "The Raven" (Project Gutenberg #1065, about 1,090 words) from Fran's list. I asked Perplexity Computer to help me complete the make: load the text into Voyant and screenshot word frequency, trends, collocates and contexts; run the GPT prompts from the practice sheet; and draft the page from what came back.

The four GPT prompts, each sent with the full poem pasted underneath and each in a new session:

1. "Here is the full text of a poem. Please give me a literary analysis of it." (the prompt did not name the poem or suggest themes; the pasted file begins with the title and author line)
2. The same prompt again, word for word, to check consistency.
3. "Here is the full text of 'The Raven' by Edgar Allan Poe. What is the historical context of this poem, and how does that context shape how we should read it?"
4. "Here is the full text of 'The Raven' by Edgar Allan Poe. What does the raven symbolize in this poem? Should the bird be read literally or figuratively?"

Each GPT run was wrapped in one line telling the model to answer as a plain chat assistant and not to use tools or search the web, so the responses came from the model alone.

**What the AI Suggested:** GPT (runs 1 and 2) produced two long analyses with the same thesis, that grief turns the search for comfort into self-torment, with the same examples (dreary/weary, napping/tapping, trochaic rhythm, nepenthe, balm in Gilead, Aidenn, the bust of Pallas as reason overshadowed, the present-tense ending). Run 1 added that the final "nevermore" is the narrator's; run 2 dropped that. Run 3 placed the poem in American Romanticism and the Gothic, dated it 1845, mentioned Virginia Poe's illness and death in 1847 and the 1846 essay "The Philosophy of Composition," and hedged most claims. Run 4 said the raven should be read "both" literally and figuratively. The full responses are saved unedited at [makes/text-analysis-gpt-transcripts.md](../../makes/text-analysis-gpt-transcripts.md).

Perplexity Computer, separately from GPT: ran Voyant in a browser and took the screenshots; noticed that the word "nothing" did not appear in the Trends chart even when requested, traced it to the default English stopword list, and re-ran the chart with the list off; pulled the exact counts and ten-segment distributions from Voyant's data export (door 14, raven 11, nevermore 11, chamber 11, bird 10, lenore 8; nothing 7, all before segment 5 except one; nevermore 11, all from segment 5 on; 542 of 1,096 words kept by the stoplist); checked GPT's three dates against the Edgar Allan Poe Society of Baltimore and the National Park Service; proposed the page structure, the comparison table and a first draft of all the text, including the reflection, built from those results.

**What I Accepted, Changed, or Rejected:** I chose the text, kept Voyant's default settings for the first pass and then overrode the stoplist for the second, and kept the GPT prompts plain so they matched what a student would actually type. I accepted the drafted text after reading it against the screenshots and the saved transcripts. The claims I checked myself: the ranked word counts, the segment where "nevermore" first appears, the eleven "nevermore" contexts and who speaks the last one, the near-identical opening sentences of GPT runs 1 and 2, and the dates in run 3.

**Why:** This make is about method, not about which tool wins, so the honest version has to show what each tool did on its own and what I had to do to make either of them useful. The two things that most shaped the page, the stoplist deleting "nothing" and GPT giving the same thesis twice, were both found by running the tools and looking at what came back, which is the part of the work I want on the record.
