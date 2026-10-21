# Make 7 – Who Feeds the Model: A Network of the AI Supply Chain

In Make 6 I put AI's infrastructure on a map and asked where the water bill goes. This week I took the same world and asked a different question: who is connected to whom, and through what? The answer is a graph of 30 nodes and 40 connections, every one of them backed by a named source.

## The Network

<iframe src="ai-supply-chain-network.html" title="Who Feeds the Model: interactive network of the AI supply chain" width="100%" height="720" loading="lazy" style="border:1px solid #d0d7de;border-radius:6px;background:#f6f3ee;"></iframe>

**[Open the network full screen](ai-supply-chain-network.html)** (works best on a laptop; on a phone the graph scrolls sideways). The data behind it: [nodes CSV](../assets/data/ai-supply-chain-nodes.csv), [edges CSV](../assets/data/ai-supply-chain-edges.csv), [JSON](../assets/data/ai-supply-chain.json), and the [script that builds the data and computes the metrics](../assets/data/build_network.py).

How to read it: nodes sit in six columns, left to right: mines and salt flats, refiners and traders, chips and machines, data centres and fabs, labour firms, AI companies. Five kinds of line, each with its own colour and dash pattern: supplies material (solid rust), manufactures or supplies hardware (dashed teal), hosts compute (solid blue), supplies labour (dotted plum), and owns or invests in (dash-dot black). Node size is the number of connections. Click or Tab to any node to see each of its connections, the fact behind it, and the source. The **Hub view** button redraws the same 40 rows with the companies in the middle, the way an industry diagram would. Under the graph there is a plain-text list of all 40 connections for anyone who cannot see it.

![Chain view of the network. Six labelled columns run left to right: mines and salt flats, refiners and traders, chips and machines, data centres and fabs, labour firms, AI companies. A large teal Nvidia node in the third column sends dashed teal lines to Microsoft, OpenAI, Oracle, xAI and Meta on the right. TSMC, also large, connects up to Nvidia and across to Phoenix, Google and Amazon. Blue data-centre nodes (West Des Moines, Abilene, Memphis, The Dalles, New Carlisle) send solid blue lines to the companies that use them, and receive dash-dot ownership lines back. Four plum labour nodes (Sama, Scale AI, Teleperformance, Genpact) send dotted lines mostly to Meta and OpenAI. On the far left, Bayan Obo and Kachin connect only to Chinese refiners, and Salar de Atacama only to SQM; Kolwezi connects to Glencore and Huayou Cobalt, and a single rust line arcs from Huayou all the way to Microsoft.](../assets/images/make7-network-chain.png)

![Hub view of the same network. Eight large black circles labelled OpenAI, Anthropic, Google / Alphabet, Meta, Microsoft, Amazon (AWS), xAI and Oracle sit in a ring at the centre. Twenty-two small dots for mines, refiners, chipmakers, data centres and labour firms sit on a wide outer ring, each sending a thin line inward. A caption reads: companies large and central, everything that feeds them small, in a ring, same 40 rows.](../assets/images/make7-network-hub.png)

![The chain view with Nvidia selected. Nvidia and its eight neighbours stay in full colour while the rest of the graph fades. The right-hand panel reads: Nvidia, Santa Clara, California, Chips and machines, 8 connections, 2 in and 6 out, betweenness 0.47, followed by a list of each connection with a sentence of evidence and a linked source, starting with TSMC and SK hynix.](../assets/images/make7-network-nvidia.png)

## Network Analysis

The most central node is Nvidia, by both measures: eight connections, the most on the graph, and a betweenness of 0.47, meaning almost half of the shortest paths between any two nodes run through it. TSMC is second on betweenness (0.32). Between them they are the only route from the chip tier to the companies; ASML and SK hynix, with one connection each, reach the graph only through them. OpenAI has seven connections, but all seven point in and none point out. It is the biggest sink on the graph, not a hub.

Three clusters emerged. The Nvidia–TSMC hardware cluster touches every company. A Meta labour cluster: Sama, Teleperformance, Genpact and Scale AI all feed Meta, and Meta owns 49% of Scale. And a set of owner–site–tenant triangles: Oracle owns Abilene, which hosts OpenAI; Amazon owns New Carlisle, which hosts Anthropic; Microsoft owns the Iowa cluster that trained GPT-4. The company holding the water permit is rarely the company whose model runs on it.

The surprise was the mines. In Make 6 I drew them as the start of the chain. On the network they are islands: lithium (Atacama to SQM) and rare earths (Bayan Obo and Kachin to Chinese refiners) connect to nothing else, because no source names a company at the other end. Cobalt reaches the main graph by exactly one edge, Huayou Cobalt to Microsoft, from a 2016 Amnesty report that Microsoft disputes. Huayou has two connections and a betweenness higher than Google's. The whole mining tier hangs from one contested line.

What is missing is what made that line thin: supplier lists, the battery makers between a mine and a server rack, the names of labelers (Remotasks workers appear as a platform, not people), undersea cables, power utilities, and every relationship under an NDA. The graph is densest where companies issue press releases and emptiest where people dig.

## Artist Statement

The industry's picture of AI is a hub: a company in the middle, everything else feeding it. I drew that picture too, as the hub view, and nothing on it is false. But it only reads one way. Put the same forty rows in a chain and a different shape appears. The companies are at the end, more arrows point into them than into any other tier, and the only arrows pointing out are money. Power on this graph is not where the connections are. It is where they stop. OpenAI has seven connections and zero leaving; Nvidia sits on half the shortest paths. One is the brand, the other is the chokepoint.

Who is visible: anything with a press office, where deals come with numbers, dates and quotes. Who is invisible: the eleven thousand people digging at Kamilombe, the hundred and forty moderators diagnosed with PTSD, the Igbo-language labeler who earned less than a dollar. They appear as a mine, a firm, a platform. The network format forced that: a node has to be something you can name and source, and the people in this story mostly cannot be named, by contract or for their safety.

A hub tells the companies' story: we are the centre. A chain tells the supply story: you are the end. A third structure, which I could not draw, would start from one worker and ask who profits from her click. It would use the same forty rows and have none of these shapes, because it would be drawn from the bottom, and every source I have is written from the top.

## Process Notes

I chose Option B, the supply-chain network, because Make 6 had already given me 35 places and 70 sources, and the money lines on that map (drawn only where a source named one of the five companies) were edges waiting to be counted. About half of the 40 connections come straight from Make 6's sources. The other half, the middle of the chain, is new research: ASML to TSMC, TSMC to Nvidia and to the hyperscalers' own chips, SK hynix's memory, Nvidia's buyers, and the investment stakes that tie Microsoft to OpenAI, Amazon and Google to Anthropic, Meta to Scale AI and Nvidia to OpenAI.

The rule from Make 6 carried over: one source per edge, and no edge where a source does not name both ends. That rule is why the lithium and rare-earth chains are islands and why the cobalt chain hangs by one thread. I kept the Huayou-to-Microsoft edge because Amnesty named both ends, and marked it "contested" because Microsoft said it could not confirm the cobalt's origin. Everyone knows the minerals end up in the hardware. The graph says only what can be shown.

Nodes are grouped in six tiers, and within each tier they are ordered to reduce line crossings. Node size is degree (number of connections); the side panel also shows in-degree, out-degree and betweenness centrality, computed in the Python script linked above. Direction matters: material, hardware, compute and labour flow toward the companies; ownership and investment flow away from them. I built the graph with D3 on my own GitHub Pages site instead of Kumu so I could control what is big and what is small, which is the whole argument, and so the hub view and chain view could be two drawings of one dataset rather than two separate files.

## Web Accessibility Improvements

This week's second part was an accessibility pass on the whole site, documented on the new [Accessibility page](../pages/accessibility.md).

- **Alt text.** Every image on the site from Weeks 1 to 8 (22 images across the selfie, comic, GIF, text-analysis, map and network makes) has descriptive alt text that says what the image shows and why it is there. The three screenshots above are examples.
- **Colour contrast.** I checked every text and background pair on the network page in both light and dark mode against the WCAG AA threshold of 4.5:1 for text and 3:1 for graphics. The lowest ratio is 5.7:1 (the teal hardware lines on the cream background); body text is 15.6:1. The site's Primer theme text (#24292e on white) is 14.7:1 and its links are 5.4:1. The homepage's grey-on-off-white body text is 12:1.
- **Descriptive link text.** No link on the site says "click here" or shows a bare URL; links say where they go ("Open the network full screen", "edges CSV", the source's name).
- **The network itself.** Every node is keyboard-focusable (Tab to it, Enter or Space to open its details) and has an ARIA label with its name, tier and number of connections. The SVG has a title and a long description. Edge types differ by dash pattern as well as colour, so they remain distinguishable for colour-blind readers. The side panel announces changes to screen readers, focus moves to the selected node's heading, and a full text list of all 40 connections with sources sits under the graph. The page respects the system's light or dark preference and scrolls sideways on narrow screens instead of shrinking the graph until it is unreadable.

## Sources

### Framing

- Kate Crawford, *Atlas of AI* (Yale University Press, 2021), on extraction as the material base of AI.
- Catherine D'Ignazio and Lauren F. Klein, *Data Feminism* (MIT Press, 2020), chapter 1, "The Power Chapter."
- Johanna Drucker, "Humanities Approaches to Graphical Display," *Digital Humanities Quarterly* 5.1 (2011).
- Mimi Onuoha, "On Missing Data Sets" (2016).

### Connections (one or more per edge; also linked from each node card)

- [Kamoto Copper Company, 'About'](https://www.kamotocoppercompany.com/en)
- [Glencore, 2024 KCC Responsible Mineral Supply Chain Report](https://www.glencore.com/.rest/api/v1/documents/b6865610f23c9bb307697aa655435163/2024+KCC+Responsible+Supply+Chain+Due+Diligence+Report.pdf)
- [Amnesty International, 'This is what we die for' (2016)](https://www.amnesty.org/en/documents/afr62/3183/2016/en/)
- [TechCrunch on the Amnesty report (2016)](https://techcrunch.com/2016/01/19/apple-microsoft-samsung-and-other-tech-firms-implicated-in-child-labor-report/)
- [AP News, 'Native groups sit on a treasure trove of lithium' (2024)](https://apnews.com/article/lithium-water-mining-indigenous-cb2f5b1580c12f8ba1b19223648069b7)
- [China Tungsten Industry Association news on Northern Rare Earth (2026)](https://www.ctia.com.cn/en/news/52603.html)
- [Mongabay, 'Satellite data show burst of deforestation in Myanmar rare earth mining hotspots' (2025)](https://news.mongabay.com/2025/09/satellite-data-show-burst-of-deforestation-in-myanmar-rare-earth-mining-hotspots/)
- [DatacenterDynamics, 'TSMC to receive first High NA EUV machine from ASML' (2026)](https://www.datacenterdynamics.com/en/news/tsmc-to-receive-first-high-na-euv-lithography-machine-from-asml-in-q4/)
- [The Chosun Daily, 'NVIDIA Blackwell chip starts U.S. production' (2025)](https://www.chosun.com/english/industry-en/2025/10/19/TFMACE4OHVCENBVOFCX7T5CG7I/)
- [Reuters, 'Nvidia supplier SK Hynix to boost spending on AI chips' (2025)](https://www.reuters.com/world/asia-pacific/nvidia-supplier-sk-hynix-boost-spending-ai-chips-after-record-q2-2025-07-23/)
- [Tom's Hardware, 'The custom AI ASIC state of play' (2026)](https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia)
- [Fortune, 'Microsoft is the biggest of the mystery whales buying up Nvidia Hopper chips' (2024)](https://fortune.com/2024/12/19/microsoft-biggest-mystery-whales-buying-up-nvidia-hopper-ai-chips/)
- [CNBC, 'Zuckerberg indicates Meta is spending billions on Nvidia AI chips' (2024)](https://www.cnbc.com/2024/01/18/mark-zuckerberg-indicates-meta-is-spending-billions-on-nvidia-ai-chips.html)
- [Nvidia, 'NVIDIA Ethernet networking accelerates world's largest AI supercomputer, built by xAI' (2024)](https://nvidianews.nvidia.com/news/spectrum-x-ethernet-networking-xai-colossus)
- [DatacenterDynamics, 'Oracle to spend $40bn on Nvidia GPUs for OpenAI Texas data center' (2025)](https://www.datacenterdynamics.com/en/news/oracle-to-spend-40bn-on-nvidia-chips-for-openai-texas-data-center/)
- [Nvidia, 'OpenAI and NVIDIA announce strategic partnership to deploy 10 gigawatts' (2025)](https://investor.nvidia.com/news/press-release-details/2025/OpenAI-and-NVIDIA-Announce-Strategic-Partnership-to-Deploy-10-Gigawatts-of-NVIDIA-Systems/default.aspx)
- [Reuters, 'Nvidia to invest up to $100 billion in OpenAI' (2025)](https://www.reuters.com/business/nvidia-invest-100-billion-openai-2025-09-22/)
- [Epoch AI, 'OpenAI Stargate Abilene' (2026)](https://epoch.ai/data/ai-data-centers/directory/openai-stargate-abilene)
- [AP News, 'Microsoft takes over a Texas AI data center expansion' (2026)](https://apnews.com/article/ai-stargate-microsoft-openai-crusoe-oracle-f4f74c3a4617d8cfab5b933fc31ccc6e)
- [Southern Environmental Law Center, 'Inside Memphis' fight against xAI' (2025)](https://www.selc.org/news/inside-memphis-fight-against-xai/)
- [Business Insider, 'xAI is spending at least $400 million building its supercomputer in Memphis' (2025)](https://www.businessinsider.com/elon-musk-xai-data-center-colossus-power-memphis-2025-4)
- [CNBC, 'Amazon opens $11 billion AI data center in rural Indiana' (2025)](https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html)
- [AP News, 'AI technology behind ChatGPT was built in Iowa, with a lot of water' (2023)](https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4)
- [OPB, 'As Google's water demands grow, The Dalles aims to pull more from Mount Hood forest' (2026)](https://www.opb.org/article/2026/01/15/as-googles-water-demands-grow-the-dalles-aims-to-pull-more-from-mount-hood-forest/)
- [The Oregonian, 'Google's water use is soaring in The Dalles' (2022)](https://www.oregonlive.com/silicon-forest/2022/12/googles-water-use-is-soaring-in-the-dalles-records-show-with-two-more-data-centers-to-come.html)
- [Arizona's Family, 'TSMC Arizona expansion could make it Phoenix's largest water customer' (2026)](https://www.azfamily.com/2026/07/23/tsmc-arizona-expansion-could-make-it-phoenixs-largest-water-customer/)
- [The Verge, 'Arizona's lifeline for chip manufacturing is drying up' (2026)](https://www.theverge.com/science/993522/water-chip-semiconductor-manufacturing-colorado-river)
- [TIME, 'OpenAI used Kenyan workers on less than $2 per hour to make ChatGPT less toxic' (2023)](https://time.com/6247678/openai-chatgpt-kenya-workers/)
- [Al Jazeera, Mercy Mutemi, 'African workers are taking on Meta' (2025)](https://www.aljazeera.com/opinions/2025/4/1/african-workers-are-taking-on-meta-and-the-world-should-pay-attention)
- [The Bureau of Investigative Journalism, 'Meta's content moderators face worst conditions yet' (2025)](https://www.thebureauinvestigates.com/stories/2025-04-27/suicide-attempts-sackings-and-a-vow-of-silence-metas-new-moderators-face-worst-conditions-yet)
- [Reuters, 'Facebook contractor hikes pay for Indian content reviewers' (2019)](https://www.reuters.com/article/business/facebook-contractor-hikes-pay-for-indian-content-reviewers-idUSKCN1V91FL/)
- [OpenAI, 'OpenAI partners with Scale to provide support for enterprises fine-tuning models' (2023)](https://openai.com/index/openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models/)
- [AP News, 'Meta invests $14.3B in AI firm Scale' (2025)](https://apnews.com/article/meta-ai-superintelligence-agi-scale-alexandr-wang-4b55aabf7ea018e38ffdccb66e37cf26)
- [CNBC, 'Microsoft's $13 billion bet on OpenAI' (2023)](https://www.cnbc.com/2023/04/08/microsofts-complex-bet-on-openai-brings-potential-and-uncertainty.html)
- [Anthropic, 'Anthropic and Amazon expand collaboration for up to 5 gigawatts of new compute' (2026)](https://www.anthropic.com/news/anthropic-amazon-compute)
- [CNBC, 'Google to invest up to $40 billion in Anthropic' (2026)](https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html)

### Tools

- [D3.js](https://d3js.org/) for the graph; Python for the data file and the centrality calculations; GitHub Pages for hosting.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) and the WCAG 2.1 contrast formula for the colour audit.

## AI Use

Full log: [AI Use Log – Make 7](../pages/ai-log/2026-10-21-make7-network.md).
