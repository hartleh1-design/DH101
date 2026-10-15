// Make 6 – The Cloud Has a Body. Site data for the AI infrastructure map.
// Each pin is placed at the published centre of a town, salt flat or mining district,
// not at a facility gate. Every "what", "who" and "number" field comes from the sources
// listed on that pin; the "link" field says how the place connects to AI, in my words.
// Compiled October 2026 by Ryan Hartle for DH 101 (Denison University).
window.AI_SITES = [
  /* ---------------- MINING ---------------- */
  {
    id: "kolwezi", layer: "mining", name: "Kolwezi (Kamilombe mine)", place: "Lualaba Province, DR Congo",
    lat: -10.717, lon: 25.467,
    what: "The centre of the Congolese Copperbelt. Congo supplied an estimated 73% of the world's mined cobalt in 2025, the metal that stabilises lithium-ion batteries in laptops, phones and the battery backups that keep servers running.",
    who: "At Kamilombe, on the south-western edge of Kolwezi, an estimated 11,000 men and women dig cobalt with hand tools from shafts up to 100 metres deep. One miner told a researcher: 'We miners die a lot.' Amnesty traced cobalt dug by children as young as seven into the supply chains of major electronics brands.",
    number: "73%", numberLabel: "of world cobalt mine supply came from DR Congo in 2025 (USGS)",
    link: "hardware", linkNote: "Cobalt goes into the batteries inside devices and the backup systems in data centres. The mining sources talk about phones and EVs, not AI; the connection is mine, following Kate Crawford's Atlas of AI.",
    sources: [
      { label: "USGS, Mineral Commodity Summaries 2026: Cobalt", url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf" },
      { label: "The Conversation, 'We miners die a lot' (Kamilombe)", url: "https://theconversation.com/we-miners-die-a-lot-appalling-conditions-and-poverty-wages-the-lives-of-cobalt-miners-in-the-drc-220986" },
      { label: "Amnesty International, 'This is what we die for' (2016)", url: "https://www.amnesty.org/en/documents/afr62/3183/2016/en/" },
      { label: "Cobalt Institute, Cobalt Market Report 2024 (artisanal share below 2%)", url: "https://www.cobaltinstitute.org/wp-content/uploads/2025/05/Cobalt-Market-Report-2024_Press-Release-1.pdf" }
    ]
  },
  {
    id: "atacama", layer: "mining", name: "Salar de Atacama", place: "Antofagasta Region, Chile",
    lat: -23.5, lon: -68.25,
    what: "Chile's two lithium producers, SQM and Albemarle, pump lithium-rich brine out of this salt flat and evaporate it in ponds. SQM's own figures put the pumping at 1,280 litres of salty groundwater per second.",
    who: "Lickanantay (Atacameño) communities around the salar depend on the connected freshwater for livestock, crops and ceremonies. Residents report dried wells and lagoons, shrinking harvests and fewer flamingos. Reuters saw a filing showing a third of the algarrobo trees SQM pledged to monitor had died.",
    number: "1,280 L/s", numberLabel: "of brine pumped at SQM's operation, by the company's own numbers (AP, 2024)",
    link: "hardware", linkNote: "Lithium is the 'lithium' in lithium-ion. The sources connect it to EVs and phones; batteries also sit in every laptop and in the uninterruptible power supplies of data centres.",
    sources: [
      { label: "AP News, 'Native groups sit on a treasure trove of lithium' (2024)", url: "https://apnews.com/article/lithium-water-mining-indigenous-cb2f5b1580c12f8ba1b19223648069b7" },
      { label: "Reuters, 'A water fight in Chile's Atacama' ", url: "https://www.reuters.com/article/world/a-water-fight-in-chiles-atacama-raises-questions-over-lithium-mining-idUSKCN1MS1NI/" }
    ]
  },
  {
    id: "uyuni", layer: "mining", name: "Salar de Uyuni", place: "Potosí Department, Bolivia",
    lat: -20.134, lon: -67.489,
    what: "The world's largest salt flat, more than 10,000 square kilometres, sits on what the USGS counts as roughly 23 million tonnes of lithium, the biggest known store on Earth. Bolivia's state company YLB opened its first industrial plant here in late 2023; it produces a fraction of what was planned.",
    who: "Highland communities say they are not consulted. In 2025, Indigenous representatives in Nor Lípez province refused Russian and Chinese companies access to their territory because the contracts had no Indigenous agreement. Evaporation extraction needs huge volumes of water in a place where water is already scarce.",
    number: "23 Mt", numberLabel: "of lithium estimated in Bolivia, the largest national total (USGS via D+C, 2026)",
    link: "hardware", linkNote: "A place that is on the map because of what it might become: the biggest lithium reserve on the planet, still mostly in the ground.",
    sources: [
      { label: "D+C Development and Cooperation, 'The untapped treasure of the Andes' (2026)", url: "https://www.dandc.eu/en/article/bolivia-lithium-salar-de-uyuni" },
      { label: "CSIS, 'South America's Lithium Triangle' (2021)", url: "https://www.csis.org/analysis/south-americas-lithium-triangle-opportunities-biden-administration" }
    ]
  },
  {
    id: "hombremuerto", layer: "mining", name: "Salar del Hombre Muerto", place: "Catamarca Province, Argentina",
    lat: -25.35, lon: -67.07,
    what: "Argentina's largest lithium mine, the Fénix project (Arcadium, formerly Livent), has pumped brine here since 1997. It produced 22,000 tonnes of lithium carbonate in a year, almost half the country's output; more than 40% of Argentina's lithium is sold to China.",
    who: "A seven-kilometre stretch of the Trapiche River has dried up; one family's herd fell from more than 300 llamas to eight. In March 2024 Catamarca's supreme court suspended new mining permits in the area until a cumulative environmental study is done, after an appeal by the Atacameños del Altiplano community.",
    number: "7 km", numberLabel: "of the Trapiche River now dry (El CLIP / Ruido investigation)",
    link: "hardware", linkNote: "Lithium carbonate from this salar ends up in battery cathodes for cars, phones and computers.",
    sources: [
      { label: "El CLIP / Ruido, 'In Argentina, lithium mining leaves a river running dry'", url: "https://www.elclip.org/trapiche-el-rio-que-se-seca-por-el-litio/?lang=en" },
      { label: "Business & Human Rights Resource Centre, Catamarca court suspends permits (2024)", url: "https://www.business-humanrights.org/en/latest-news/argentina-catamarca-court-suspends-new-mining-permits-pending-environmental-impact-studies-on-lithium-projects/" }
    ]
  },
  {
    id: "bayanobo", layer: "mining", name: "Bayan Obo", place: "Inner Mongolia, China",
    lat: 41.783, lon: 109.974,
    what: "The world's largest rare earth mine, in a district that holds about half the world's supply. Neodymium and dysprosium from here go into the permanent magnets in hard drives, motors and wind turbines. Satellite images show the pit and waste ponds doubled in size in 25 years.",
    who: "Each tonne of rare earths leaves about 2,000 tonnes of toxic waste. An 11-kilometre tailings pond near Baotou holds grey sludge laced with radioactive thorium; villagers near the Weikuang dam were diagnosed with bone deformities and arsenic poisoning, and thousands have left. The mines also pay 5,000 to 6,000 yuan a month, good money locally.",
    number: "2,000 : 1", numberLabel: "tonnes of toxic waste per tonne of rare earths mined (BBC, 2025)",
    link: "hardware", linkNote: "Rare earth magnets spin the hard drives in storage arrays and the turbines that power 'green' data centres.",
    sources: [
      { label: "BBC News, 'Poisoned water and scarred hills' (2025)", url: "https://www.bbc.co.uk/news/resources/idt-66cdf862-5e96-4e6e-90b8-a407b597c8d9" },
      { label: "DW, 'Toxic and radioactive: the damage from mining rare elements' (2021)", url: "https://www.dw.com/en/toxic-and-radioactive-the-damage-from-mining-rare-elements/a-57148185" }
    ]
  },
  {
    id: "kachin", layer: "mining", name: "Kachin Special Region 1 (Chipwi–Pangwa)", place: "Kachin State, Myanmar",
    lat: 25.884, lon: 98.132,
    what: "In a few years this border region became the world's largest source of heavy rare earths, dug illegally under militia control. By March 2022 satellite images showed more than 2,700 leaching pools at almost 300 sites across an area the size of Singapore. Everything is exported to China for refining.",
    who: "Miners inject ammonium sulphate into the mountainsides; villages downstream report poisoned water, dead livestock and lost fishing. Chinese workers hold the skilled jobs while Burmese workers, including children, do the manual labour. 'No one wants to give up their ancestors' lands, but if they resist they can be killed,' a civil society member told Mongabay.",
    number: "2,700+", numberLabel: "mining collection pools counted by satellite in March 2022 (Global Witness)",
    link: "hardware", linkNote: "Dysprosium and terbium from Kachin harden the magnets in electric motors and turbines; the supply chain runs through China's refineries, which handle about 80% of the world's rare earths.",
    sources: [
      { label: "Global Witness, 'Myanmar's poisoned mountains' (2022)", url: "https://globalwitness.org/en/campaigns/transition-minerals/myanmars-poisoned-mountains/" },
      { label: "Mongabay, 'Toxic rare earth mines fuel deforestation, rights abuses in Myanmar' (2022)", url: "https://news.mongabay.com/2022/08/toxic-rare-earth-mines-fuel-deforestation-rights-abuses-in-myanmar-report-says/" }
    ]
  },

  /* ---------------- DATA CENTERS ---------------- */
  {
    id: "loudoun", layer: "datacenter", name: "Ashburn / Loudoun County", place: "Virginia, United States",
    lat: 39.044, lon: -77.488,
    what: "'Data Center Alley': the largest data centre market in the world, with 13% of all reported global capacity. Loudoun alone has 250+ data centres, 53 million square feet built and 60 million more in the pipeline. The county drew 5.33 gigawatts in 2025 and projects 14 to 20+ GW by 2030 as AI racks jump from 10–14 kW to 100+ kW each.",
    who: "A typical 250,000-square-foot data centre runs with about 50 full-time workers, half of them contractors. A third of Virginia's data centres sit near homes, and neighbours report constant low-frequency noise. JLARC estimates a typical Dominion residential customer could pay $14 to $37 more a month by 2040 to build the grid these facilities need. Data centres also fund $1.3 billion of Loudoun's budget.",
    number: "13%", numberLabel: "of the world's reported data centre capacity is in Northern Virginia (JLARC)",
    link: "direct", linkNote: "This is where 'the cloud' physically is for a large share of the internet, including AI services.",
    sources: [
      { label: "JLARC (Virginia General Assembly), Data Centers in Virginia (2024)", url: "https://jlarc.virginia.gov/landing-2024-data-centers-in-virginia.asp" },
      { label: "Loudoun County, 'Data Center Growth: Our Changing Paradigm' (July 2026)", url: "https://www.loudoun.gov/DocumentCenter/View/217605/Loudoun-County-Data-Center-Brief---Turner" }
    ]
  },
  {
    id: "iowa", layer: "datacenter", name: "West Des Moines", place: "Iowa, United States",
    lat: 41.509, lon: -93.781,
    what: "Microsoft built a supercomputing cluster here to let OpenAI train GPT-4: more than 285,000 CPU cores and 10,000 GPUs, in the words of its 2020 announcement. 'It was really made in Iowa,' Microsoft's president said.",
    who: "In July 2022, the month before GPT-4 finished training, Microsoft's Iowa data centres used about 11.5 million gallons of water, roughly 6% of everything the West Des Moines Water Works district supplies, including drinking water. The utility now says it will only consider new Microsoft projects if they cut peak water use.",
    number: "11.5M gal", numberLabel: "of water used by Microsoft's Iowa cluster in July 2022, about 6% of the district (AP)",
    link: "direct", linkNote: "A specific AI model, GPT-4, was trained at a specific address with a specific town's water.",
    sources: [
      { label: "AP News, 'AI technology behind ChatGPT was built in Iowa, with a lot of water' (2023)", url: "https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4" }
    ]
  },
  {
    id: "dalles", layer: "datacenter", name: "The Dalles", place: "Oregon, United States",
    lat: 45.602, lon: -121.185,
    what: "Google's first company-built data centre opened here in 2006 beside the Columbia River. By 2024 its three local sites used about a third of the city's water, roughly a million gallons a day; a fourth building finished in 2025 and a fifth is due in 2026.",
    who: "The city fought The Oregonian for 13 months to keep Google's water numbers secret before settling. Google employs about 200 people here and gets a 92% property-tax discount. To supply it, the city plans to triple a reservoir fed from the Mount Hood watershed; residents' water bills are projected to rise 99% by 2036, and Yakama Nation fisheries staff worry about salmon and steelhead.",
    number: "~1/3", numberLabel: "of The Dalles' water went to Google's data centres in 2024 (OPB)",
    link: "direct", linkNote: "A hyperscale campus whose water use was a trade secret until a newspaper sued.",
    sources: [
      { label: "OPB, 'As Google's water demands grow, The Dalles aims to pull more from Mount Hood' (Jan 2026)", url: "https://www.opb.org/article/2026/01/15/as-googles-water-demands-grow-the-dalles-aims-to-pull-more-from-mount-hood-forest/" },
      { label: "The Oregonian, 'Google's water use is soaring in The Dalles, records show' (2022)", url: "https://www.oregonlive.com/silicon-forest/2022/12/googles-water-use-is-soaring-in-the-dalles-records-show-with-two-more-data-centers-to-come.html" }
    ]
  },
  {
    id: "phoenix", layer: "datacenter", name: "Phoenix metro", place: "Arizona, United States",
    lat: 33.448, lon: -112.074,
    what: "A desert hub with more than 150 data centres statewide and 124 built or planned around Phoenix. A Ceres study projects direct cooling water rising from 385 million to 3.7 billion gallons a year within six years, and indirect water for power plants from 2.9 to 14.5 billion gallons. TSMC is spending $165 billion on chip fabs in north Phoenix.",
    who: "In August 2026 Arizona's attorney general called for a statewide pause on new data centres after federal cuts of almost 30% to the state's Colorado River supply and rising power bills; a town hall on a proposed Ahwatukee hyperscale project was set for October 14, 2026. An ASU study found data centres can raise nearby temperatures by as much as four degrees Fahrenheit.",
    number: "~10×", numberLabel: "projected growth in Phoenix-area data centre cooling water within six years (Ceres via Phoenix New Times)",
    link: "direct", linkNote: "AI-scale campuses in a city whose water comes from a river that is being cut.",
    sources: [
      { label: "Arizona Attorney General, call for statewide pause on data centers (Aug 31, 2026)", url: "https://www.azag.gov/press-release/attorney-general-mayes-calls-statewide-pause-data-centers-announces-town-hall" },
      { label: "Phoenix New Times, 'Phoenix data center water use set to surge nearly tenfold' (2025)", url: "https://www.phoenixnewtimes.com/news/phoenix-data-center-water-use-surge-nearly-tenfold-study-22762054/" },
      { label: "Grist, 'Arizona's water is drying up. That won't stop its data center rush' (2026)", url: "https://grist.org/technology/arizona-water-data-centers-semiconducters/" }
    ]
  },
  {
    id: "abilene", layer: "datacenter", name: "Abilene (Stargate)", place: "Texas, United States",
    lat: 32.45, lon: -99.75,
    what: "The first Stargate campus, owned by Oracle and used by OpenAI, built by Crusoe on what had been mesquite shrubland. Epoch AI estimates 421 MW of IT power already running on about 200,000 Nvidia B200 and B300 chips, heading for roughly 843 MW by the end of 2026. With two more Microsoft buildings, the site is planned to reach 2.1 gigawatts.",
    who: "The campus has its own gas-fired power plants: 350 MW for the OpenAI/Oracle buildings and a planned 900 MW for Microsoft's. 'We're burning gas to run this data center,' Sam Altman said. Land clearing began in May 2024; the sources name no residents, which is itself a data point about who gets interviewed.",
    number: "2.1 GW", numberLabel: "of planned computing capacity at one campus (AP, March 2026)",
    link: "direct", linkNote: "Purpose-built for frontier AI training; the clearest example on this map of AI as a physical power plant.",
    sources: [
      { label: "Epoch AI, 'OpenAI Stargate Abilene' (updated Oct 12, 2026)", url: "https://epoch.ai/data/ai-data-centers/directory/openai-stargate-abilene" },
      { label: "AP News, 'Microsoft takes over a Texas AI data center expansion' (March 2026)", url: "https://apnews.com/article/ai-stargate-microsoft-openai-crusoe-oracle-f4f74c3a4617d8cfab5b933fc31ccc6e" }
    ]
  },
  {
    id: "memphis", layer: "datacenter", name: "Memphis (xAI Colossus / Boxtown)", place: "Tennessee, United States",
    lat: 35.146, lon: -90.052,
    what: "xAI announced the 'world's largest supercomputer' in June 2024 and brought Colossus online in 122 days inside a former Electrolux factory, roughly 200,000 GPUs in a building the size of 13 football fields. Aerial images in April 2025 showed 35 methane gas turbines on site; a second campus (Colossus 2) and 41 more turbines in Southaven, Mississippi, followed.",
    who: "Colossus sits about two miles from Boxtown, a nearly all-Black South Memphis neighbourhood already living with industrial pollution and high asthma rates. Residents packed permit hearings. 'Until we see all of the turbines removed from South Memphis, there's nothing to celebrate,' said KeShaun Pearson of Memphis Community Against Pollution.",
    number: "35", numberLabel: "gas turbines photographed at Colossus in April 2025, before any permit was issued (SELC)",
    link: "direct", linkNote: "An AI training cluster whose power came from unpermitted gas turbines next to a Black neighbourhood.",
    sources: [
      { label: "Southern Environmental Law Center, 'Inside Memphis' fight against xAI' (May 2026)", url: "https://www.selc.org/news/inside-memphis-fight-against-xai/" },
      { label: "NBC News, 'Up against Musk's Colossus supercomputer, a Memphis neighborhood fights' (2025)", url: "https://www.nbcnews.com/news/us-news/musk-xai-colossus-supercomputer-boxtown-memphis-tennessee-rcna206242" }
    ]
  },
  {
    id: "newcarlisle", layer: "datacenter", name: "New Carlisle (Project Rainier)", place: "Indiana, United States",
    lat: 41.701, lon: -86.496,
    what: "Amazon's $11 billion campus built exclusively to train and run Anthropic's Claude models: seven buildings on 1,200 acres by October 2025, about 500,000 Trainium 2 chips, with 30 buildings planned and more than 2.2 gigawatts of expected demand, enough for 1.6 million homes.",
    who: "'Cornfields to data centers, almost overnight,' said AWS's CEO. 'It's just difficult to keep losing farmland,' said the president of New Carlisle's town council. The local utility expects peak demand to more than double by 2030 and is buying a natural-gas plant in Ohio partly to serve the site. More than 4,000 construction workers a day at peak.",
    number: "2.2 GW", numberLabel: "expected electricity demand of the full campus (CNBC, Oct 2025)",
    link: "direct", linkNote: "I use Claude through Perplexity Computer; this is one of the places where my questions are answered. It replaced a cornfield.",
    sources: [
      { label: "CNBC, 'Amazon opens $11 billion AI data center in rural Indiana' (Oct 2025)", url: "https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html" }
    ]
  },
  {
    id: "iceland", layer: "datacenter", name: "Blönduós", place: "Northern Iceland",
    lat: 65.667, lon: -20.3,
    what: "A town of 800 people with a data centre on its outskirts whose servers answer AI queries from around the world, running on a nearby hydroelectric dam. Data centres take roughly 6% of Iceland's all-renewable electricity and account for about 5% of GDP; they are used mostly for training AI models.",
    who: "Conservationists say the sector grows without saying what the power is for: 'The transparency is nil,' said Árni Finnsson of the Icelandic Nature Conservation Association. A research professor argues the models stored here do not serve Icelandic society. Rainfall swings in the past year affected the dam's output.",
    number: "6%", numberLabel: "of Iceland's electricity goes to data centres (Reykjavík Grapevine, 2025)",
    link: "direct", linkNote: "The 'clean' node on the map: renewable power and a cold climate make it the industry's favourite example, and the transparency problem is the same.",
    sources: [
      { label: "The Reykjavík Grapevine, 'Artificial Iceland: Data Centres Use Up Much Of Iceland's Energy, But For What?' (2025)", url: "https://grapevine.is/society/article/2025/07/24/artificial-iceland-data-centres-use-up-much-of-icelands-energy/" }
    ]
  },
  {
    id: "dublin", layer: "datacenter", name: "Dublin", place: "Ireland",
    lat: 53.35, lon: -6.26,
    what: "Ireland is the clearest case of a national grid reorganised around data centres: they used 7,663 GWh in 2025, 23% of all metered electricity, up from 5% in 2015. All other users combined grew 2% that year; data centres grew 10%.",
    who: "Urban households used 18% of Ireland's electricity in 2025 and rural households 9%; data centres used more than both put together. The statistics office cannot even see them directly: it identifies data centres by operator name searches and high-consumption customers because they are not a category in the source data.",
    number: "23%", numberLabel: "of Ireland's metered electricity used by data centres in 2025 (CSO, July 2026)",
    link: "direct", linkNote: "European headquarters and cloud regions for most US tech companies; Ireland's grid shows what hosting the cloud costs a small country.",
    sources: [
      { label: "Central Statistics Office Ireland, Data Centres Metered Electricity Consumption 2025 (July 2026)", url: "https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2025/keyfindings/" },
      { label: "RTÉ, 'Data centre electricity usage increased by 10%' (2025)", url: "https://www.rte.ie/news/business/2025/0610/1517667-cso-figures-data-centre-electricity-usage/" }
    ]
  },
  {
    id: "middenmeer", layer: "datacenter", name: "Middenmeer (Agriport A7)", place: "North Holland, Netherlands",
    lat: 52.809, lon: 4.998,
    what: "Former greenhouse and farm country where Google and Microsoft built hyperscale data centres; a second Microsoft centre got its environmental permit after construction had already started, over 64 formal objections. In 2022 the Dutch government paused new mega data centres of 10+ hectares and 70+ MW nationwide, but exempted Middenmeer.",
    who: "Residents of the Wieringermeer polder organised as 'Red de Wieringermeer' (Save the Wieringermeer). Their complaint: a Vattenfall wind farm built with up to €660 million in public subsidy to power homes now powers data centres instead. 'We barely have enough space for wind turbines to compensate our own energy usage,' as one TV presenter put it.",
    number: "64", numberLabel: "formal objections filed against the second Microsoft data centre (DCD via NH Nieuws)",
    link: "direct", linkNote: "Public renewable subsidies, private AI compute: the clearest example of who gets the 'green' electricity.",
    sources: [
      { label: "DatacenterDynamics, 'Hollands Kroon grants environmental permit for second Microsoft data center'", url: "https://www.datacenterdynamics.com/en/news/hollands-kroon-grants-environmental-permit-second-microsoft-data-center/" },
      { label: "NOS, 'Voorlopige stop op nieuwe megadatacenters' (2022, Dutch)", url: "https://nos.nl/artikel/2417657-voorlopige-stop-op-nieuwe-megadatacenters-geen-gevolgen-voor-zeewolde" }
    ]
  },
  {
    id: "zeewolde", layer: "datacenter", name: "Zeewolde (cancelled Meta campus)", place: "Flevoland, Netherlands",
    lat: 52.333, lon: 5.55,
    what: "Meta announced the largest data centre in the Netherlands here in 2021: 166 hectares of farmland, five server halls, as much power as a city of 460,000 people. After a local party opposing it won an absolute majority in the March 2022 elections and the national cabinet refused to sell part of the land, Meta withdrew, calling it 'not the right investment'. In 2023 the Council of State struck down the zoning plan.",
    who: "The pin that is not there. Zeewolde's residents are on this map because they said no, which makes them the only community on it whose decision shaped the geography instead of absorbing it.",
    number: "460,000", numberLabel: "people whose electricity use the cancelled campus would have matched (DutchNews)",
    link: "direct", linkNote: "A counter-example: refusal is also part of AI's geography, and it is almost never mapped.",
    sources: [
      { label: "DutchNews, ''Not a good match': Facebook parent drops Zeewolde data centre plan' (2022)", url: "https://www.dutchnews.nl/2022/07/not-a-good-match-facebook-parent-drops-zeewolde-data-centre-plan/" },
      { label: "NL Times, 'Court strikes down Meta's data center plans in Zeewolde' (2023)", url: "https://nltimes.nl/2023/09/21/court-strikes-metas-data-center-plans-zeewolde" }
    ]
  },
  {
    id: "singapore", layer: "datacenter", name: "Singapore", place: "Singapore",
    lat: 1.283, lon: 103.833,
    what: "A city-state of 730 square kilometres with no fossil fuels of its own, where data centres were already using about 7% of all electricity when the government froze new builds in 2019. The moratorium ended with a trickle: four approvals totalling about 120 MW, on condition of liquid cooling, waste-heat recovery and renewable certificates.",
    who: "The 'who' here is a government rationing land and power between data centres and everyone else. Industry analysts count more than 500 MW of unmet demand, which did not disappear; it moved across the causeway to Johor.",
    number: "7%", numberLabel: "of Singapore's electricity used by data centres when the 2019 moratorium began",
    link: "direct", linkNote: "A limit, and the way a limit redraws the map: see Johor.",
    sources: [
      { label: "Datacentres.com, 'Singapore lifts data centre moratorium with strict conditions' (2026)", url: "https://www.datacentres.com/news/singapore-lifts-data-centre-moratorium" },
      { label: "DatacenterDynamics, 'Singapore's sustainability drive'", url: "https://www.datacenterdynamics.com/en/analysis/singapores-sustainable-drive/" }
    ]
  },
  {
    id: "johor", layer: "datacenter", name: "Johor Bahru", place: "Johor, Malaysia",
    lat: 1.456, lon: 103.761,
    what: "Where Singapore's demand went. Johor had about 580 MW of data centre capacity in 2025 and 5,800 MW planned, with Google, Microsoft and ByteDance among the builders; by November 2025 the state had approved 51 projects worth RM183 billion.",
    who: "A state of about four million people that already has water supply disruptions and buys treated water from Singapore. In late 2025 Johor stopped approving basic-tier data centres that can use up to 50 million litres of water a day, after a state assembly member raised the issue; complaints about water cuts rise every year.",
    number: "5,800 MW", numberLabel: "of planned data centre capacity, ten times what exists (DC Byte via CNBC, 2025)",
    link: "direct", linkNote: "The spillover node: the cost of Singapore's moratorium lands on its neighbour.",
    sources: [
      { label: "CNBC, 'This Asian data center hub is grappling with the massive costs of AI' (2025)", url: "https://www.cnbc.com/2025/08/18/an-asian-data-center-hub-is-quietly-grappling-with-ais-massive-costs.html" },
      { label: "The Straits Times, 'Malaysia's data centre hub tightens approvals on water worries' (Nov 2025)", url: "https://www.straitstimes.com/business/companies-markets/malaysias-data-centre-hub-tightens-approvals-on-water-worries" }
    ]
  },
  {
    id: "canelones", layer: "datacenter", name: "Canelones (Parque de las Ciencias)", place: "Uruguay",
    lat: -34.517, lon: -56.283,
    what: "Google bought 30 hectares in a free-trade zone here in 2021. Campaigners only learned through a court case that the planned cooling towers would need 7.6 million litres of drinking water a day. After Uruguay's 2023 drought, Google shrank the project and switched to air cooling; the environment ministry then approved it.",
    who: "Montevideo residents were drinking salty tap water during the drought when the figures came out. 'Google will generate very little employment as it will just store data,' said researcher Daniel Peña. A data centre that uses a small city's electricity may employ about 30 people.",
    number: "7.6M L/day", numberLabel: "of potable water in Google's original plan, revealed by a court case (Mongabay)",
    link: "direct", linkNote: "A plan that changed because people found out. The number only became public through litigation.",
    sources: [
      { label: "Mongabay, 'The Cloud vs. drought: Water hog data centers threaten Latin America' (2023)", url: "https://news.mongabay.com/2023/11/the-cloud-vs-drought-water-hog-data-centers-threaten-latin-america-critics-say/" },
      { label: "DatacenterDynamics, 'Google's Uruguay data center approved after reformulation'", url: "https://www.datacenterdynamics.com/en/news/googles-uruguay-data-center-approved-after-reformulation/" }
    ]
  },
  {
    id: "queretaro", layer: "datacenter", name: "Colón / Querétaro", place: "Querétaro, Mexico",
    lat: 20.783, lon: -100.05,
    what: "Mexico's data centre capital: scores of facilities owned by Microsoft, Amazon Web Services, ODATA and others, with more than $10 billion of investment forecast for the decade. In 2023 Microsoft obtained a concession to pump 25 million litres of groundwater a year for one data centre in Colón, from an aquifer already in deficit by 56.8 billion litres.",
    who: "That one concession equals 24% of the water the municipality gets for public use. A farmer in the drought-stricken area said she receives water every 15 days and lost 60% of her crop. Officials and companies declined to say how much water the state's data centres use in total. 'If there is no water for the population, much less will there be water for the companies,' said activist Teresa Roldán.",
    number: "24%", numberLabel: "of Colón's public water allocation matched by one Microsoft groundwater concession (Context / CONAGUA data)",
    link: "direct", linkNote: "Nearshoring the cloud: US companies, Mexican aquifers.",
    sources: [
      { label: "Context (Thomson Reuters Foundation), 'Thirsty data centres spring up in water-poor Mexican town' (2024)", url: "https://www.context.news/ai/thirsty-data-centres-spring-up-in-water-poor-mexican-town" },
      { label: "BBC News, 'AI demand means data centres are worsening drought in Mexico'", url: "https://www.bbc.co.uk/news/articles/cx2ngz7ep1eo" }
    ]
  },

  /* ---------------- LABOR ---------------- */
  {
    id: "manila", layer: "labor", name: "Manila", place: "Philippines",
    lat: 14.596, lon: 120.977,
    what: "A global hub for content moderation: the Philippine BPO industry employs more than 1.2 million people, and thousands of them review the violence, abuse and spam that social platforms remove. The 2018 documentary The Cleaners followed five Manila moderators who delete thousands of images a day under secret rules they are forbidden to discuss.",
    who: "'The despair and darkness of people will get to you,' a former moderator told Rest of World. Counselling is often outsourced or unaffordable, and Manila's traffic alone can make treatment unreachable. Their decisions also become labelled training data for the automated filters meant to replace them.",
    number: "1.2M+", numberLabel: "people employed in Philippine BPO firms, the industry that houses moderation (Rest of World, 2020)",
    link: "platform", linkNote: "Moderators clean the platforms whose posts and images train AI; their labels are also the ground truth for the classifiers that follow.",
    sources: [
      { label: "Rest of World, ''The despair and darkness of people will get to you'' (2020)", url: "https://restofworld.org/2020/facebook-international-content-moderators/" },
      { label: "DW, 'The Cleaners: Social media's shadow industry' (2020)", url: "https://www.dw.com/en/the-cleaners-social-medias-shadow-industry/a-53436461" }
    ]
  },
  {
    id: "nairobi", layer: "labor", name: "Nairobi", place: "Kenya",
    lat: -1.286, lon: 36.817,
    what: "Starting in November 2021, OpenAI sent tens of thousands of text snippets describing abuse, violence and self-harm to Sama in Nairobi to be labelled so ChatGPT could learn to refuse them. Sama was paid $12.50 an hour per worker; the labellers took home between $1.32 and $2. From 2019 to 2023 most moderation of African Facebook content also happened here.",
    who: "More than 140 former moderators have been diagnosed with PTSD, depression or anxiety. Workers who tried to unionise were laid off; in 2024 Kenya's Court of Appeal ruled they can sue Meta in Kenyan labour courts. A Nairobi-based Data Labelers Association now represents 5,000+ workers in 15+ countries. 'You are told you're replaceable right up until the moment your labels are the reason the model works at all,' one member said.",
    number: "<$2/hour", numberLabel: "take-home pay for the Kenyan workers who made ChatGPT safer (TIME, 2023)",
    link: "direct", linkNote: "The most direct AI link on the map: a named model, a named contractor, a payslip.",
    sources: [
      { label: "TIME, 'OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic' (2023)", url: "https://time.com/6247678/openai-chatgpt-kenya-workers/" },
      { label: "Al Jazeera, Mercy Mutemi, 'African workers are taking on Meta' (2025)", url: "https://www.aljazeera.com/opinions/2025/4/1/african-workers-are-taking-on-meta-and-the-world-should-pay-attention" },
      { label: "Data Labelers Association, 2026 Labor Conditions Report (blog)", url: "https://datalabelers.org/blogpost.html" }
    ]
  },
  {
    id: "hyderabad", layer: "labor", name: "Hyderabad", place: "Telangana, India",
    lat: 17.362, lon: 78.475,
    what: "Genpact ran a 1,600-person Facebook content review unit here covering English, Arabic, Indian languages and some Afghan dialects. On a busy day a reviewer saw 2,000 posts in an eight-hour shift, almost four a minute, with a 98% accuracy target.",
    who: "Entry-level pay slips showed 100,000 rupees a year (about $1,400) in 2019; after Reuters reported it, Genpact more than doubled the starting salary for new hires, not existing staff. When 30 Kannada-language screening jobs opened, more than 3,000 graduates applied. Workers described the job as 'undercompensated, stressful, and at times traumatic'.",
    number: "2,000", numberLabel: "posts reviewed per eight-hour shift on a busy day (The Wire / Reuters, 2019)",
    link: "platform", linkNote: "Human judgement at four decisions a minute is what the platform's 'AI moderation' was trained on.",
    sources: [
      { label: "Reuters, 'Facebook contractor hikes pay for Indian content reviewers' (2019)", url: "https://www.reuters.com/article/business/facebook-contractor-hikes-pay-for-indian-content-reviewers-idUSKCN1V91FL/" },
      { label: "The Wire, 'Facebook Content Reviewers in India Complain of Low Pay and High Pressure' (2019)", url: "https://thewire.in/economy/tech/facebook-content-reviewers-in-india-complain-of-low-pay-and-high-pressure" },
      { label: "The Economic Times, 'India's graduates line up to rid Facebook of inappropriate content' (2018)", url: "https://economictimes.indiatimes.com/tech/internet/indias-graduates-line-up-to-rid-facebook-of-inappropriate-content/articleshow/65676967.cms" }
    ]
  },
  {
    id: "bhubaneswar", layer: "labor", name: "Bhubaneswar (iMerit)", place: "Odisha, India",
    lat: 20.27, lon: 85.84,
    what: "In a white four-storey building, rows of iMerit workers draw boxes around polyps in colonoscopy videos, lane lines for self-driving cars and objects in photos: the labels that supervised AI learns from. About 90% of iMerit's annotation work is done in India, in centres from Kolkata's Metiabruz to Ranchi and Shillong.",
    who: "Labelers earned $150 to $200 a month in 2019 while, an executive said, each generated $800 to $1,000 in revenue. About 80% come from families earning under $100 a month and about half are women. 'It was disgusting at first, but then you get used to it,' said Namita Pradhan, 24, of her medical images.",
    number: "$150–200", numberLabel: "monthly pay for an iMerit labeler in 2019, against $800–1,000 in revenue each (Forbes India)",
    link: "direct", linkNote: "Data labelling is the manual work that makes 'machine learning' learn.",
    sources: [
      { label: "Forbes India, 'Not machine learning: AI is learning from humans. Many, many humans' (2019)", url: "https://www.forbesindia.com/article/special/not-machine-learning-ai-is-learning-from-humans-many-many-humans/54859/1" },
      { label: "FactorDaily, 'How India's data labellers are powering the global AI race' (2019)", url: "https://archive.factordaily.com/indian-data-labellers-powering-the-global-ai-race/" }
    ]
  },
  {
    id: "kampala", layer: "labor", name: "Kampala", place: "Uganda",
    lat: 0.314, lon: 32.581,
    what: "Sama opened an office here in 2019; more than 150 young people trace lane markings so Teslas know where to drive and tag apples so drones can pick them, millions of clicks around the clock on a piecework basis. Sama lists Google, Microsoft, Ford, Walmart and NASA among its clients and also works for Meta. It also runs a centre in Gulu, in the north.",
    who: "Workers say pay is about 20% above the roughly $160 a month untrained workers usually earn, plus health insurance. 'But are these meaningful jobs? Are they secure jobs with future prospects?' asks researcher Nanjira Sambuli, pointing to the Kenyan lawsuits against the same company.",
    number: "150+", numberLabel: "young Ugandans at Sama's Kampala office labelling data for US clients (DW, 2023)",
    link: "direct", linkNote: "Labelling for computer vision and language models; the quieter neighbour of Nairobi's story.",
    sources: [
      { label: "DW, 'Cheap labor: Are tech giants exploiting Ugandans?' (2023)", url: "https://www.dw.com/en/cheap-labor-are-tech-giants-exploiting-ugandans/a-67529209" },
      { label: "Sama job posting, 'AI Evaluator (Gulu, Uganda)'", url: "https://job-boards.greenhouse.io/samainc/jobs/5423882004" }
    ]
  },
  {
    id: "venezuela", layer: "labor", name: "Caracas (and all of Venezuela)", place: "Venezuela",
    lat: 10.506, lon: -66.914,
    what: "Not an office but a country: by mid-2018 an estimated 200,000 Venezuelans had signed up to two labelling platforms, making up 75% of their workforces, and Scale AI built a Venezuela-specific Remotasks site in 2020. Workers tagged images, moderated content and drew 3-D lidar boxes for self-driving cars.",
    who: "People living through hyperinflation worked for $70 in a good week and $6 to $8 in a bad one, sharing one computer per household in shifts, with accounts suspended by rules they could not see. 'There are huge power imbalances,' says Julian Posada, who studies Latin American annotators. The industry found a catastrophe and priced it.",
    number: "200,000", numberLabel: "Venezuelans registered on two labelling platforms by mid-2018 (MIT Technology Review)",
    link: "direct", linkNote: "Crowd labelling has no address, so this pin stands for a whole country's living rooms.",
    sources: [
      { label: "MIT Technology Review, 'How the AI industry profits from catastrophe' (2022)", url: "https://www.technologyreview.com/2022/04/20/1050392/ai-industry-appen-scale-data-labels/" }
    ]
  },
  {
    id: "accra", layer: "labor", name: "Accra", place: "Ghana",
    lat: 5.55, lon: -0.2,
    what: "After the Nairobi lawsuits, Meta's East African moderation moved to an anonymous office building in Accra run by Teleperformance/Majorel, where about 150 moderators review Facebook, Instagram and Messenger content in East African languages. Most are not Ghanaian; they are on temporary permits, housed two to a room.",
    who: "Base pay starts around 1,300 cedis a month, just over $80 and under a fifth of Accra's estimated cost of living. Moderators describe suicide attempts, depression and fear of being sent back to conflict zones if they speak. 'These are the worst conditions I have seen in six years of working with content moderators around the world,' said Martha Dark of Foxglove.",
    number: "~$80/month", numberLabel: "starting base pay for a Meta moderator in Accra in 2025 (TBIJ / The Guardian)",
    link: "platform", linkNote: "Where the work went when workers in Kenya organised. Labour geography moves faster than labour law.",
    sources: [
      { label: "The Bureau of Investigative Journalism, 'Meta's content moderators face worst conditions yet at secret site in Ghana' (2025)", url: "https://www.thebureauinvestigates.com/stories/2025-04-27/suicide-attempts-sackings-and-a-vow-of-silence-metas-new-moderators-face-worst-conditions-yet" },
      { label: "DW, 'Will Meta lawsuits shape Africa's data privacy laws?' (2025)", url: "https://www.dw.com/en/will-meta-lawsuits-shape-africas-data-privacy-laws/a-72567105" }
    ]
  },
  {
    id: "bogota", layer: "labor", name: "Bogotá", place: "Colombia",
    lat: 4.711, lon: -74.072,
    what: "As TikTok's Latin American audience passed 100 million, it hired hundreds of moderators in Colombia through Teleperformance, one of the country's largest private employers with 42,000 workers. One Bogotá moderator had a target of 900 videos a day, about 15 seconds each. Their decisions double as policy labels used to train TikTok's machine-learning filters.",
    who: "Base salary 1.2 million pesos ($254) a month, six days a week on rotating shifts, with bonuses for hitting accuracy and timekeeping targets. Moderators describe nightmares, anxiety, salary deductions, surveillance and resistance to unionising.",
    number: "900", numberLabel: "videos a day for one moderator, about 15 seconds each (TBIJ / TIME, 2022)",
    link: "platform", linkNote: "Human moderators working beside the algorithm, generating the labels that teach it.",
    sources: [
      { label: "The Bureau of Investigative Journalism, 'Behind TikTok's boom: A legion of traumatised, $10-a-day content moderators' (2022)", url: "https://www.thebureauinvestigates.com/stories/2022-10-20/behind-tiktoks-boom-a-legion-of-traumatised-10-a-day-content-moderators/" },
      { label: "TIME, 'The Traumatized Content Moderators Behind TikTok's Boom' (2022)", url: "https://time.com/6223340/tiktok-content-moderators-latin-america/" }
    ]
  },
  {
    id: "lagos", layer: "labor", name: "Lagos (and all of Nigeria)", place: "Nigeria",
    lat: 6.456, lon: 3.394,
    what: "In March 2024, Scale AI's Remotasks platform shut off access for workers across Nigeria, Kenya and Pakistan, some of whom learned when they tried to log in and saw 'we are unable to provide service in your location'. Workers were paid per task with no contracts.",
    who: "Onyekachi Ogbu spent more than 20 hours on five projects training AI in the Igbo language and had less than a dollar to show for it before everyone was removed from the project's Slack channel. Many relied on the platform as their main income. The company says it benchmarks pay against a living-wage coalition.",
    number: "<$1", numberLabel: "earned for 20+ hours of Igbo-language AI training work (Rest of World, 2024)",
    link: "direct", linkNote: "Language data for AI models, gathered from speakers of that language, then switched off from San Francisco.",
    sources: [
      { label: "Rest of World, 'Scale AI's Remotasks is booting workers with no explanation' (2024)", url: "https://restofworld.org/2024/scale-ai-remotasks-banned-workers/" },
      { label: "Computerworld, 'Scale cuts off subsidiary's remote workers in several countries' (2024)", url: "https://www.computerworld.com/article/2075670/report-scale-cuts-off-subsidiarys-remote-workers-in-several-countries.html" }
    ]
  },

  /* ---------------- HEADQUARTERS (reference layer) ---------------- */
  {
    id: "openai", layer: "hq", name: "OpenAI", place: "Mission Bay, San Francisco, United States",
    lat: 37.7775, lon: -122.4164,
    what: "Headquarters at 1455 and 1515 Third Street; about 4,500 employees company-wide in 2026. Decisions made here are executed in Abilene, West Des Moines and Nairobi.",
    who: "Microsoft, Amazon, Alphabet and Meta together planned more than $344 billion of capital spending in 2025, most of it on data centres. Meta recruited researchers with packages worth hundreds of millions of dollars.",
    number: "$344B+", numberLabel: "Big Tech capital spending planned for 2025, mostly on AI data centres (LA Times)",
    link: "direct", linkNote: "Drawn small on purpose. These five addresses are the only places on the map that appear in the companies' own stories about AI.",
    sources: [
      { label: "Wikipedia, OpenAI (headquarters, employees)", url: "https://en.wikipedia.org/wiki/OpenAI" },
      { label: "Los Angeles Times, 'The AI race has Big Tech spending $344 billion this year' (2025)", url: "https://www.latimes.com/business/story/2025-08-01/the-ai-race-has-big-tech-spending-344-billion-this-year" }
    ]
  },
  {
    id: "anthropic", layer: "hq", name: "Anthropic", place: "SoMa, San Francisco, United States",
    lat: 37.7875, lon: -122.3975,
    what: "Headquarters at 500 Howard Street; about 2,500 employees in 2026, expanding into an entire downtown office building. Claude, the model that helped build this page, is trained and run on Amazon's Project Rainier campus in Indiana.",
    who: "Half a mile from OpenAI. Of the five headquarters on this map, four are within 40 miles of each other; the fifth is in Redmond.",
    number: "500,000", numberLabel: "Trainium chips in Indiana dedicated to this company's models (CNBC, 2025)",
    link: "direct", linkNote: "Included because I used this company's model to make the map, and the map should show where that happens.",
    sources: [
      { label: "Wikipedia, Anthropic (headquarters, employees)", url: "https://en.wikipedia.org/wiki/Anthropic" },
      { label: "CNBC, Project Rainier (2025)", url: "https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html" }
    ]
  },
  {
    id: "google", layer: "hq", name: "Google / Alphabet (Googleplex)", place: "Mountain View, California, United States",
    lat: 37.386, lon: -122.084,
    what: "1600 Amphitheatre Parkway: a 26-acre campus with a public park, creek access and rooftop solar covering 30% of peak demand in the buildings it serves. Alphabet raised its 2025 capital-spending plan to $85 billion.",
    who: "The campus was built on the site of one of the area's few working farms. Its data centres are in The Dalles, Middenmeer, Canelones and dozens of other towns that get the water bill.",
    number: "$85B", numberLabel: "Alphabet's 2025 capital expenditure guidance (LA Times)",
    link: "direct", linkNote: "Reference point for the Oregon, Dutch and Uruguayan pins.",
    sources: [
      { label: "Wikipedia, Googleplex", url: "https://en.wikipedia.org/wiki/Googleplex" },
      { label: "Los Angeles Times, Big Tech capex (2025)", url: "https://www.latimes.com/business/story/2025-08-01/the-ai-race-has-big-tech-spending-344-billion-this-year" }
    ]
  },
  {
    id: "meta", layer: "hq", name: "Meta (1 Hacker Way)", place: "Menlo Park, California, United States",
    lat: 37.4528, lon: -122.1833,
    what: "A 250-acre bayside campus with Frank Gehry buildings designed so employees can 'do their best work'. Meta is spending hundreds of billions on AI infrastructure and experimented with recording workers' clicks and keystrokes to train models.",
    who: "The company whose moderation contracts run through Nairobi, Hyderabad and Accra, and whose cancelled data centre is the Zeewolde pin.",
    number: "250 acres", numberLabel: "of headquarters campus (TheStreet via Yahoo Finance, 2026)",
    link: "platform", linkNote: "Reference point for the moderation pins and for the one community that said no.",
    sources: [
      { label: "Yahoo Finance / TheStreet, 'A look inside Meta's Menlo Park headquarters' (2026)", url: "https://finance.yahoo.com/technology/articles/look-inside-meta-menlo-park-151300538.html" }
    ]
  },
  {
    id: "microsoft", layer: "hq", name: "Microsoft", place: "Redmond, Washington, United States",
    lat: 47.676, lon: -122.117,
    what: "A 502-acre campus of more than 80 buildings and over 50,000 employees. Microsoft set a $24.2 billion quarterly capital-spending record in 2025 and disclosed that its global water consumption rose 34% from 2021 to 2022, to nearly 1.7 billion gallons, a jump researchers tie to AI.",
    who: "The company behind the Iowa cluster that trained GPT-4, the Middenmeer campus, the Querétaro groundwater concession and the new Abilene buildings.",
    number: "+34%", numberLabel: "rise in Microsoft's global water consumption 2021–2022 (AP, citing Microsoft's report)",
    link: "direct", linkNote: "Reference point for Iowa, the Netherlands, Mexico and Texas.",
    sources: [
      { label: "Wikipedia, Microsoft Redmond campus", url: "https://en.wikipedia.org/wiki/Microsoft_Redmond_campus" },
      { label: "AP News, GPT-4 and Iowa water (2023)", url: "https://apnews.com/article/chatgpt-gpt4-iowa-ai-water-consumption-microsoft-f551fde98083d17a7e8d904f8be822c4" }
    ]
  }
];
