# Builds the Make 7 network data (nodes + edges) and computes simple network metrics.
# Run: python3 assets/data/build_network.py
import json, csv, collections, itertools

TIERS = [
    ("extraction", "Mines and salt flats"),
    ("processing", "Refiners and traders"),
    ("hardware", "Chips and machines"),
    ("compute", "Data centres and fabs"),
    ("labour", "Labelling and moderation firms"),
    ("company", "AI companies"),
]

N = []  # id, label, tier, place, note
def node(id, label, tier, place, note):
    N.append(dict(id=id, label=label, tier=tier, place=place, note=note))

# --- Extraction
node("kolwezi", "Kolwezi cobalt mines", "extraction", "Lualaba, DR Congo",
     "DR Congo supplied about 73% of the world's mined cobalt in 2025; at Kamilombe about 11,000 people dig it by hand.")
node("atacama", "Salar de Atacama", "extraction", "Antofagasta, Chile",
     "Lithium brine pumped at 1,280 litres per second by SQM's own figures; Lickanantay communities report dried wells.")
node("bayanobo", "Bayan Obo", "extraction", "Inner Mongolia, China",
     "The world's largest rare-earth mine; about 2,000 tonnes of toxic waste per tonne of rare earths.")
node("kachin", "Kachin rare-earth mines", "extraction", "Kachin State, Myanmar",
     "2,700+ leaching pools counted by satellite in 2022; mined under militia control.")
# --- Processing
node("glencore", "Glencore (KCC)", "processing", "Baar, Switzerland / Kolwezi",
     "Owns 70% of Kamoto Copper Company, a large copper and cobalt producer in Kolwezi.")
node("huayou", "Huayou Cobalt / CDM", "processing", "Zhejiang, China / Lubumbashi",
     "Chinese refiner whose Congolese subsidiary CDM bought cobalt from artisanal traders, according to Amnesty.")
node("sqm", "SQM", "processing", "Santiago, Chile",
     "One of two lithium producers on the Salar de Atacama; sells refined lithium to battery makers.")
node("cnrefiners", "Chinese rare-earth refiners & magnet makers", "processing", "Baotou and Ganzhou, China",
     "China Northern Rare Earth (Baotou Steel) holds Bayan Obo; Kachin ore is exported to Chinese magnet manufacturers.")
# --- Hardware
node("asml", "ASML", "hardware", "Veldhoven, Netherlands",
     "The only company that makes extreme-ultraviolet lithography machines, which every advanced chip needs.")
node("tsmc", "TSMC", "hardware", "Hsinchu, Taiwan / Phoenix",
     "Fabricates Nvidia's GPUs and the custom AI chips of all five hyperscalers.")
node("skhynix", "SK hynix", "hardware", "Icheon, South Korea",
     "Main supplier of the high-bandwidth memory stacked on Nvidia's AI processors.")
node("nvidia", "Nvidia", "hardware", "Santa Clara, California",
     "Designs the GPUs almost every AI data centre on this graph runs on; also an investor in OpenAI.")
# --- Compute sites
node("abilene", "Abilene, Texas (Stargate)", "compute", "Abilene, Texas",
     "First Stargate campus: 2.1 GW planned, on-site gas plants, built by Crusoe, owned by Oracle, used by OpenAI.")
node("memphis", "Memphis (Colossus / Boxtown)", "compute", "Memphis, Tennessee",
     "xAI's Colossus, built in 122 days with 35 gas turbines photographed before any permit, two miles from Boxtown.")
node("newcarlisle", "New Carlisle, Indiana (Rainier)", "compute", "St. Joseph County, Indiana",
     "Amazon's $11 billion campus built exclusively for Anthropic's Claude; 2.2 GW expected demand.")
node("iowa", "West Des Moines, Iowa", "compute", "West Des Moines, Iowa",
     "Microsoft's cluster where GPT-4 was trained; 11.5 million gallons of water in July 2022.")
node("dalles", "The Dalles, Oregon", "compute", "The Dalles, Oregon",
     "Google's data centres use about a third of the city's water; the city fought for 13 months to keep the figure secret.")
node("phoenix", "Phoenix, Arizona (TSMC fab)", "compute", "Phoenix, Arizona",
     "TSMC's first Arizona fab uses about 1.7 billion gallons of water a year; expansion could make it the city's largest water customer.")
# --- Labour
node("sama", "Sama", "labour", "Nairobi, Kenya / Kampala, Uganda",
     "Labelled toxic text for OpenAI and moderated Facebook for Meta; workers took home under $2 an hour.")
node("teleperformance", "Teleperformance / Majorel", "labour", "Accra, Ghana",
     "Runs Meta's East African moderation from an unmarked Accra office; base pay about $80 a month.")
node("genpact", "Genpact", "labour", "Hyderabad, India",
     "Ran a 1,600-person Facebook content-review unit; 2,000 posts per eight-hour shift on busy days.")
node("scaleai", "Scale AI / Remotasks", "labour", "San Francisco / Lagos / Caracas",
     "Data-labelling platform whose Remotasks workers in Nigeria, Kenya and Venezuela were cut off without explanation in 2024.")
# --- Companies
node("openai", "OpenAI", "company", "San Francisco", "Maker of ChatGPT.")
node("anthropic", "Anthropic", "company", "San Francisco", "Maker of Claude, the model that helped build this page.")
node("google", "Google / Alphabet", "company", "Mountain View", "Maker of Gemini; owns 14% of Anthropic.")
node("meta", "Meta", "company", "Menlo Park", "Maker of Llama; buys moderation from Sama, Teleperformance and Genpact.")
node("microsoft", "Microsoft", "company", "Redmond", "OpenAI's main investor and cloud; the biggest buyer of Nvidia chips in 2024.")
node("amazon", "Amazon (AWS)", "company", "Seattle", "Anthropic's main investor and training partner.")
node("xai", "xAI", "company", "Palo Alto / Memphis", "Maker of Grok; runs Colossus in Memphis.")
node("oracle", "Oracle", "company", "Austin", "Owns the Abilene Stargate campus and leases its computing power to OpenAI.")

TYPES = {
    "material": dict(label="Supplies material", color="#b5541c", dash=""),
    "hardware": dict(label="Manufactures / supplies hardware", color="#1b7f79", dash="6 3"),
    "compute":  dict(label="Hosts compute (power, water, land)", color="#2a5db0", dash=""),
    "labour":   dict(label="Supplies labour", color="#7b3b8c", dash="2 3"),
    "capital":  dict(label="Owns / invests in", color="#222222", dash="9 4 2 4"),
}

E = []
def edge(s, t, type, fact, src_label, src_url, contested=False):
    E.append(dict(source=s, target=t, type=type, fact=fact, source_label=src_label, source_url=src_url, contested=contested))

# Material
edge("kolwezi", "glencore", "material",
     "Kamoto Copper Company, in Kolwezi, is a large-scale copper and cobalt producer owned 70% by Glencore, 25% by Gécamines and 5% by the DRC state.",
     "Kamoto Copper Company, 'About'", "https://www.kamotocoppercompany.com/en")
edge("kolwezi", "huayou", "material",
     "Amnesty traced cobalt dug by hand, including by children, from mines in southern DRC to Congo Dongfang Mining, the local subsidiary of China's Huayou Cobalt.",
     "Amnesty International, 'This is what we die for' (2016)", "https://www.amnesty.org/en/documents/afr62/3183/2016/en/")
edge("huayou", "microsoft", "material",
     "Amnesty named Microsoft among the brands downstream of Huayou's battery customers. Microsoft said it could not determine whether the cobalt in its products came from Katanga. The edge is drawn because a source names both ends, and marked contested because the company disputes it.",
     "TechCrunch on the Amnesty report (2016)", "https://techcrunch.com/2016/01/19/apple-microsoft-samsung-and-other-tech-firms-implicated-in-child-labor-report/", contested=True)
edge("atacama", "sqm", "material",
     "SQM pumps lithium brine from the Salar de Atacama at 1,280 litres per second by its own figures, while Lickanantay communities report dried wells and lagoons.",
     "AP News, 'Native groups sit on a treasure trove of lithium' (2024)", "https://apnews.com/article/lithium-water-mining-indigenous-cb2f5b1580c12f8ba1b19223648069b7")
edge("bayanobo", "cnrefiners", "material",
     "Baotou Steel Group, the controlling shareholder of China Northern Rare Earth, holds the exclusive mining rights to Bayan Obo, the world's largest rare-earth mine.",
     "China Tungsten Industry Association news (2026)", "https://www.ctia.com.cn/en/news/52603.html")
edge("kachin", "cnrefiners", "material",
     "Researchers say all rare earth minerals from Kachin State end up at magnet manufacturers in China.",
     "Mongabay, 'Satellite data show burst of deforestation in Myanmar rare earth mining hotspots' (2025)", "https://news.mongabay.com/2025/09/satellite-data-show-burst-of-deforestation-in-myanmar-rare-earth-mining-hotspots/")

# Hardware
edge("asml", "tsmc", "hardware",
     "ASML is the only company that makes EUV lithography scanners; TSMC is receiving the first High-NA EUV machines.",
     "DatacenterDynamics, 'TSMC to receive first High NA EUV machine from ASML' (2026)", "https://www.datacenterdynamics.com/en/news/tsmc-to-receive-first-high-na-euv-lithography-machine-from-asml-in-q4/")
edge("tsmc", "nvidia", "hardware",
     "Nvidia outsources the production of all its advanced GPUs to TSMC; Blackwell mass production has started at TSMC's Phoenix fab, with packaging still done in Taiwan.",
     "The Chosun Daily, 'NVIDIA Blackwell chip starts U.S. production' (2025)", "https://www.chosun.com/english/industry-en/2025/10/19/TFMACE4OHVCENBVOFCX7T5CG7I/")
edge("skhynix", "nvidia", "hardware",
     "SK hynix is Nvidia's main supplier of high-bandwidth memory; its 2025 HBM output was almost sold out a year ahead.",
     "Reuters, 'Nvidia supplier SK Hynix to boost spending on AI chips' (2025)", "https://www.reuters.com/world/asia-pacific/nvidia-supplier-sk-hynix-boost-spending-ai-chips-after-record-q2-2025-07-23/")
edge("tsmc", "amazon", "hardware",
     "TSMC fabricates the custom AI chips of all five hyperscalers, including Amazon's Trainium, designed by its Annapurna Labs unit.",
     "Tom's Hardware, 'The custom AI ASIC state of play' (2026)", "https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia")
edge("tsmc", "google", "hardware",
     "Google's TPUs are architected with Broadcom and fabricated by TSMC.",
     "Tom's Hardware, 'The custom AI ASIC state of play' (2026)", "https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia")
edge("nvidia", "microsoft", "hardware",
     "Microsoft bought about 485,000 Nvidia Hopper chips in 2024, more than twice any rival.",
     "Fortune, citing Omdia via the Financial Times (Dec 2024)", "https://fortune.com/2024/12/19/microsoft-biggest-mystery-whales-buying-up-nvidia-hopper-ai-chips/")
edge("nvidia", "meta", "hardware",
     "Zuckerberg said Meta's infrastructure would include 350,000 Nvidia H100 GPUs by the end of 2024.",
     "CNBC, 'Zuckerberg indicates Meta is spending billions on Nvidia AI chips' (2024)", "https://www.cnbc.com/2024/01/18/mark-zuckerberg-indicates-meta-is-spending-billions-on-nvidia-ai-chips.html")
edge("nvidia", "xai", "hardware",
     "Nvidia announced that xAI's Colossus in Memphis runs 100,000 Nvidia Hopper GPUs on Nvidia Spectrum-X networking; xAI has since said 200,000.",
     "Nvidia press release (Oct 2024)", "https://nvidianews.nvidia.com/news/spectrum-x-ethernet-networking-xai-colossus")
edge("nvidia", "oracle", "hardware",
     "Oracle is set to spend about $40 billion on Nvidia GB200 chips for OpenAI's Stargate data centre in Abilene.",
     "DatacenterDynamics, citing the Financial Times (2025)", "https://www.datacenterdynamics.com/en/news/oracle-to-spend-40bn-on-nvidia-chips-for-openai-texas-data-center/")
edge("nvidia", "openai", "hardware",
     "OpenAI and Nvidia agreed to deploy at least 10 gigawatts of Nvidia systems for OpenAI's data centres.",
     "Nvidia press release (Sept 2025)", "https://investor.nvidia.com/news/press-release-details/2025/OpenAI-and-NVIDIA-Announce-Strategic-Partnership-to-Deploy-10-Gigawatts-of-NVIDIA-Systems/default.aspx")

# Compute: site -> company that uses it
edge("abilene", "openai", "compute",
     "The first Stargate campus, used by OpenAI: about 421 MW of IT power already running on roughly 200,000 Nvidia chips, heading for 2.1 GW, with its own gas-fired power plants.",
     "Epoch AI, 'OpenAI Stargate Abilene' (2026)", "https://epoch.ai/data/ai-data-centers/directory/openai-stargate-abilene")
edge("abilene", "microsoft", "compute",
     "Microsoft took over a planned expansion of the Abilene site, with a planned 900 MW of gas generation.",
     "AP News, 'Microsoft takes over a Texas AI data center expansion' (2026)", "https://apnews.com/article/ai-stargate-microsoft-openai-crusoe-oracle-f4f74c3a4617d8cfab5b933fc31ccc6e")
edge("memphis", "xai", "compute",
     "xAI brought Colossus online in 122 days in a former Electrolux factory; 35 gas turbines were photographed before any permit was issued, two miles from Boxtown.",
     "Southern Environmental Law Center, 'Inside Memphis' fight against xAI' (2025)", "https://www.selc.org/news/inside-memphis-fight-against-xai/")
edge("newcarlisle", "anthropic", "compute",
     "Amazon's Project Rainier campus was built exclusively to train and run Anthropic's Claude models on about 500,000 Trainium 2 chips.",
     "CNBC, 'Amazon opens $11 billion AI data center in rural Indiana' (2025)", "https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html")
edge("iowa", "openai", "compute",
     "OpenAI trained GPT-4 on Microsoft's supercomputing cluster in West Des Moines; in July 2022 the cluster used about 11.5 million gallons of water, 6% of the district's supply.",
     "AP News, 'AI technology behind ChatGPT was built in Iowa, with a lot of water' (2023)", "https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4")
edge("dalles", "google", "compute",
     "Google's three data centres used about a third of The Dalles' water in 2024; the city fought The Oregonian for 13 months to keep the figure secret.",
     "OPB, 'As Google's water demands grow, The Dalles aims to pull more from Mount Hood forest' (2026)", "https://www.opb.org/article/2026/01/15/as-googles-water-demands-grow-the-dalles-aims-to-pull-more-from-mount-hood-forest/")
edge("phoenix", "tsmc", "compute",
     "TSMC's first Arizona fab uses about 5,300 acre-feet (1.7 billion gallons) of water a year; the planned expansion could make it Phoenix's largest water customer.",
     "Arizona's Family, 'TSMC Arizona expansion could make it Phoenix's largest water customer' (2026)", "https://www.azfamily.com/2026/07/23/tsmc-arizona-expansion-could-make-it-phoenixs-largest-water-customer/")

# Labour: firm -> company
edge("sama", "openai", "labour",
     "OpenAI paid Sama $12.50 an hour per worker to label descriptions of abuse and violence so ChatGPT could refuse them; the Nairobi workers took home $1.32 to $2 an hour.",
     "TIME, 'OpenAI used Kenyan workers on less than $2 per hour' (2023)", "https://time.com/6247678/openai-chatgpt-kenya-workers/")
edge("sama", "meta", "labour",
     "Sama's Nairobi office moderated Facebook content for Meta; more than 140 former moderators have been diagnosed with PTSD, depression or anxiety, and Kenya's courts have allowed them to sue Meta.",
     "Al Jazeera, Mercy Mutemi, 'African workers are taking on Meta' (2025)", "https://www.aljazeera.com/opinions/2025/4/1/african-workers-are-taking-on-meta-and-the-world-should-pay-attention")
edge("teleperformance", "meta", "labour",
     "After the Nairobi lawsuits, Meta's East African moderation moved to an unmarked Accra office run by Teleperformance/Majorel, where base pay starts around $80 a month.",
     "The Bureau of Investigative Journalism, 'Meta's content moderators face worst conditions yet' (2025)", "https://www.thebureauinvestigates.com/stories/2025-04-27/suicide-attempts-sackings-and-a-vow-of-silence-metas-new-moderators-face-worst-conditions-yet")
edge("genpact", "meta", "labour",
     "Genpact ran a 1,600-person Facebook and Instagram review unit in Hyderabad; on a busy day each reviewer saw 2,000 posts in an eight-hour shift.",
     "Reuters, 'Facebook contractor hikes pay for Indian content reviewers' (2019)", "https://www.reuters.com/article/business/facebook-contractor-hikes-pay-for-indian-content-reviewers-idUSKCN1V91FL/")
edge("scaleai", "openai", "labour",
     "OpenAI named Scale a preferred partner for fine-tuning its models; Scale's Remotasks platform supplies the human labelling behind that work.",
     "OpenAI, 'OpenAI partners with Scale' (2023)", "https://openai.com/index/openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models/")

# Capital: owner/investor -> asset/investee
edge("glencore", "kolwezi", "capital",
     "Glencore owns 70% of KCC, one of the largest industrial cobalt operations in Kolwezi.",
     "Glencore, 2024 KCC Responsible Mineral Supply Chain Report", "https://www.glencore.com/.rest/api/v1/documents/b6865610f23c9bb307697aa655435163/2024+KCC+Responsible+Supply+Chain+Due+Diligence+Report.pdf")
edge("microsoft", "openai", "capital",
     "Microsoft has invested about $13 billion in OpenAI since 2019.",
     "CNBC, 'Microsoft's $13 billion bet on OpenAI' (2023)", "https://www.cnbc.com/2023/04/08/microsofts-complex-bet-on-openai-brings-potential-and-uncertainty.html")
edge("nvidia", "openai", "capital",
     "Nvidia agreed to invest up to $100 billion in OpenAI, progressively as each gigawatt of Nvidia systems is deployed.",
     "Reuters, 'Nvidia to invest up to $100 billion in OpenAI' (2025)", "https://www.reuters.com/business/nvidia-invest-100-billion-openai-2025-09-22/")
edge("amazon", "anthropic", "capital",
     "Amazon has invested $8 billion in Anthropic and in 2026 committed $5 billion more, with up to an additional $20 billion to follow.",
     "Anthropic, 'Anthropic and Amazon expand collaboration' (2026)", "https://www.anthropic.com/news/anthropic-amazon-compute")
edge("google", "anthropic", "capital",
     "Google owns about 14% of Anthropic according to legal filings, and in April 2026 agreed to invest up to $40 billion more.",
     "CNBC, 'Google to invest up to $40 billion in Anthropic' (2026)", "https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html")
edge("meta", "scaleai", "capital",
     "Meta paid $14.3 billion for a 49% stake in Scale AI and hired its CEO to lead a 'superintelligence' team.",
     "AP News, 'Meta invests $14.3B in AI firm Scale' (2025)", "https://apnews.com/article/meta-ai-superintelligence-agi-scale-alexandr-wang-4b55aabf7ea018e38ffdccb66e37cf26")
edge("oracle", "abilene", "capital",
     "The Abilene campus is owned by Oracle and built by Crusoe; Oracle leases the computing power to OpenAI.",
     "AP News, 'Microsoft takes over a Texas AI data center expansion' (2026)", "https://apnews.com/article/ai-stargate-microsoft-openai-crusoe-oracle-f4f74c3a4617d8cfab5b933fc31ccc6e")
edge("amazon", "newcarlisle", "capital",
     "Amazon owns the $11 billion Project Rainier campus: seven buildings on 1,200 acres, 30 planned, more than 2.2 GW of expected demand.",
     "CNBC, 'Amazon opens $11 billion AI data center in rural Indiana' (2025)", "https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html")
edge("microsoft", "iowa", "capital",
     "Microsoft built and owns the West Des Moines cluster, 'really made in Iowa' in the words of its president.",
     "AP News, 'AI technology behind ChatGPT was built in Iowa' (2023)", "https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4")
edge("google", "dalles", "capital",
     "Google's first company-built data centre opened in The Dalles in 2006; it now has three sites there with more under way and a 92% property-tax discount.",
     "The Oregonian, 'Google's water use is soaring in The Dalles' (2022)", "https://www.oregonlive.com/silicon-forest/2022/12/googles-water-use-is-soaring-in-the-dalles-records-show-with-two-more-data-centers-to-come.html")
edge("xai", "memphis", "capital",
     "xAI is spending at least $400 million building Colossus in Memphis, according to documents.",
     "Business Insider, 'xAI is spending at least $400 million building its supercomputer in Memphis' (2025)", "https://www.businessinsider.com/elon-musk-xai-data-center-colossus-power-memphis-2025-4")
edge("tsmc", "phoenix", "capital",
     "TSMC received up to $6.6 billion in CHIPS Act funding and committed to building at least six fabs in Phoenix.",
     "The Verge, 'Arizona's lifeline for chip manufacturing is drying up' (2026)", "https://www.theverge.com/science/993522/water-chip-semiconductor-manufacturing-colorado-river")

# ---- metrics -------------------------------------------------------------
ids = [n["id"] for n in N]
assert len(ids) == len(set(ids))
for e in E:
    assert e["source"] in ids and e["target"] in ids, e

adj = collections.defaultdict(set)
deg = collections.Counter()
indeg = collections.Counter(); outdeg = collections.Counter()
for e in E:
    adj[e["source"]].add(e["target"]); adj[e["target"]].add(e["source"])
    deg[e["source"]] += 1; deg[e["target"]] += 1
    outdeg[e["source"]] += 1; indeg[e["target"]] += 1

# Brandes betweenness on the undirected simple graph
def betweenness(nodes, adj):
    bc = dict.fromkeys(nodes, 0.0)
    for s in nodes:
        S = []; P = {w: [] for w in nodes}; sigma = dict.fromkeys(nodes, 0); sigma[s] = 1
        d = dict.fromkeys(nodes, -1); d[s] = 0; Q = collections.deque([s])
        while Q:
            v = Q.popleft(); S.append(v)
            for w in adj[v]:
                if d[w] < 0: d[w] = d[v] + 1; Q.append(w)
                if d[w] == d[v] + 1: sigma[w] += sigma[v]; P[w].append(v)
        delta = dict.fromkeys(nodes, 0.0)
        while S:
            w = S.pop()
            for v in P[w]: delta[v] += sigma[v] / sigma[w] * (1 + delta[w])
            if w != s: bc[w] += delta[w]
    n = len(nodes)
    return {k: v / ((n - 1) * (n - 2)) for k, v in bc.items()}  # undirected normalisation (x2 cancels the double count)

bc = betweenness(ids, adj)

# components
seen = set(); comps = []
for s in ids:
    if s in seen: continue
    comp = []; Q = [s]; seen.add(s)
    while Q:
        v = Q.pop(); comp.append(v)
        for w in adj[v]:
            if w not in seen: seen.add(w); Q.append(w)
    comps.append(comp)

for n in N:
    n["degree"] = deg[n["id"]]; n["in_degree"] = indeg[n["id"]]; n["out_degree"] = outdeg[n["id"]]
    n["betweenness"] = round(bc[n["id"]], 3)

# ---- write ----------------------------------------------------------------
data = dict(tiers=[dict(id=t, label=l) for t, l in TIERS], types=TYPES, nodes=N, edges=E)
json.dump(data, open("assets/data/ai-supply-chain.json", "w"), indent=1, ensure_ascii=False)
open("assets/data/ai-supply-chain.js", "w").write("window.SUPPLY_CHAIN = " + json.dumps(data, ensure_ascii=False) + ";\n")
with open("assets/data/ai-supply-chain-nodes.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(N[0].keys())); w.writeheader(); w.writerows(N)
with open("assets/data/ai-supply-chain-edges.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(E[0].keys())); w.writeheader(); w.writerows(E)

print(f"{len(N)} nodes, {len(E)} edges, {len(comps)} components")
print("type counts:", collections.Counter(e["type"] for e in E))
print("\nDegree (in/out):")
for n in sorted(N, key=lambda n: -n["degree"])[:12]:
    print(f"  {n['label']:<40} deg={n['degree']:>2}  in={n['in_degree']}  out={n['out_degree']}  betw={n['betweenness']:.3f}")
print("\nBetweenness:")
for n in sorted(N, key=lambda n: -n["betweenness"])[:10]:
    print(f"  {n['label']:<40} betw={n['betweenness']:.3f} deg={n['degree']}")
print("\nComponents:")
for c in comps: print("  ", len(c), [x for x in c])
print("\nPeriphery (degree 1):", [n["label"] for n in N if n["degree"] == 1])
print("Contested edges:", [(e["source"], e["target"]) for e in E if e["contested"]])
print("Sources:", len({e["source_url"] for e in E}))
