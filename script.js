const additionalPlaces = [
  {
    name: "Swayambhunath Stupa",
    category: "Heritage",
    label: "Buddhist heritage",
    location: "Swayambhu, Kathmandu",
    description: "Set on a wooded hill west of central Kathmandu, Swayambhunath is one of Nepal’s holiest Buddhist stupas. Its white dome, gilded spire and all-seeing Buddha eyes rise among shrines and monasteries, while the hilltop terrace offers a broad view across the Kathmandu Valley.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Swayambhunath%20Stupa%2C%20Kathmandu%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Swayambhunath_temple_Kathmandu.jpg/1280px-Swayambhunath_temple_Kathmandu.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Swayambhunath_temple_Kathmandu.jpg",
    credit: "Sanish shr / CC BY-SA 4.0",
  },
  {
    name: "Pashupatinath Temple",
    category: "Heritage",
    label: "Hindu pilgrimage",
    location: "Pashupati, Kathmandu",
    description: "On the sacred Bagmati River, Pashupatinath is Nepal’s most revered Hindu temple complex and a major shrine of Shiva. The two-tiered, gold-roofed main temple houses the sacred linga, while riverside ghats and nearby shrines make the wider precinct a deeply living pilgrimage landscape.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pashupatinath%20Temple%2C%20Kathmandu%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pashupatinath_Temple-2020.jpg/1280px-Pashupatinath_Temple-2020.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pashupatinath_Temple-2020.jpg",
    credit: "Bijay Chaurasia / CC BY-SA 4.0",
  },
  {
    name: "Kathmandu Durbar Square",
    category: "Heritage",
    label: "Royal heritage",
    location: "Basantapur, Kathmandu",
    description: "In Basantapur, Kathmandu Durbar Square gathers the former Hanuman Dhoka royal palace, courtyards and more than fifty temples at the historic heart of the city. Malla-era architecture, the towering Taleju Temple and Kumari Ghar give the square its exceptional ceremonial character.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kathmandu%20Durbar%20Square%2C%20Kathmandu%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Kathmandu_Durbar_Square%2C_Platform%2C_Nepal.jpg/1280px-Kathmandu_Durbar_Square%2C_Platform%2C_Nepal.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kathmandu_Durbar_Square,_Platform,_Nepal.jpg",
    credit: "Vyacheslav Argenberg / CC BY 4.0",
  },
  {
    name: "Patan Durbar Square",
    category: "Heritage",
    label: "Royal heritage",
    location: "Mangal Bazaar, Lalitpur",
    description: "At the centre of Lalitpur, Patan Durbar Square is the former palace precinct of Patan’s Malla kings, renowned for refined Newari art and architecture. Its palace courtyards, pagoda temples, stone Krishna Mandir, bronze museum and sunken Tusha Hiti water tank reward an unhurried walk.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Patan%20Durbar%20Square%2C%20Lalitpur%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Patan_Durbar_Square_2020.jpg/1280px-Patan_Durbar_Square_2020.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Patan_Durbar_Square_2020.jpg",
    credit: "Sujan Shrestha / CC BY-SA 4.0",
  },
  {
    name: "Bhaktapur Durbar Square",
    category: "Heritage",
    label: "Royal heritage",
    location: "Bhaktapur",
    description: "Bhaktapur Durbar Square is the open, ceremonial heart of Bhaktapur, framed by monuments from the thirteenth through eighteenth centuries. The Palace of Fifty-Five Windows, exquisitely worked Golden Gate, temples and royal statuary evoke the artistic high point of the Malla period.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bhaktapur%20Durbar%20Square%2C%20Bhaktapur%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bhaktapur_Durbar_square.jpg/1280px-Bhaktapur_Durbar_square.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bhaktapur_Durbar_square.jpg",
    credit: "Suzalgurungz / CC BY-SA 4.0",
  },
  {
    name: "Changu Narayan Temple",
    category: "Heritage",
    label: "Hindu heritage",
    location: "Changu Narayan, Bhaktapur",
    description: "Changu Narayan Temple crowns a hill in Bhaktapur District and is among Nepal’s best-known shrines to Vishnu. The richly carved, two-tiered pagoda precinct preserves exceptional stone and wood art, including a fifth-century Garuda and Nepal’s oldest known stone inscription nearby.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Changu%20Narayan%20Temple%2C%20Bhaktapur%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Changu_narayan_temple.jpg/1280px-Changu_narayan_temple.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Changu_narayan_temple.jpg",
    credit: "Prajan11 / CC BY-SA 4.0",
  },
  {
    name: "Nagarkot",
    category: "Mountains",
    label: "Mountain views",
    location: "Nagarkot, Bhaktapur",
    description: "Nagarkot is a quiet hill settlement on the Kathmandu Valley rim, prized for sunrise and sunset over broad Himalayan scenery. At about 2,175 metres, its clear-day panorama includes several of the world’s highest peaks; forest trails and the walk toward Changu Narayan add to the escape.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nagarkot%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sunrise_at_Nagarkot%2C_Nepal_4.jpg/1280px-Sunrise_at_Nagarkot%2C_Nepal_4.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sunrise_at_Nagarkot,_Nepal_4.jpg",
    credit: "NSaad (WMF) / CC BY-SA 4.0",
  },
  {
    name: "Chandragiri Hills",
    category: "Mountains",
    label: "Hilltop adventure",
    location: "Thankot, Kathmandu",
    description: "Chandragiri Hills rises southwest of Kathmandu, combining a quick cable-car ascent with sweeping views over the valley and the Himalayan range on clear days. The hilltop brings together Bhaleshwor Mahadev Temple, short trails and family-friendly leisure activities.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chandragiri%20Hills%2C%20Thankot%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chandragiricablecar.jpg/1280px-Chandragiricablecar.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chandragiricablecar.jpg",
    credit: "Chandragiri Cable Car / CC BY 4.0",
  },
  {
    name: "Maya Devi Temple, Lumbini",
    category: "Heritage",
    label: "Buddhist pilgrimage",
    location: "Lumbini, Rupandehi",
    description: "Maya Devi Temple anchors Lumbini’s sacred garden, traditionally identified as the birthplace of Siddhartha Gautama, the Buddha. The UNESCO site brings together excavated brick remains, the Ashoka pillar inscription, sacred pool and monastic archaeology, preserving evidence of a long Buddhist pilgrimage tradition.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Maya%20Devi%20Temple%2C%20Lumbini%2C%20Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/MayaDevi_Temple%2C_Lumbini.jpg/1280px-MayaDevi_Temple%2C_Lumbini.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:MayaDevi_Temple,_Lumbini.jpg",
    credit: "Sashank.gaudel / CC BY-SA 4.0",
  },
  {
    name: "Bandipur",
    category: "Culture",
    label: "Heritage town",
    location: "Bandipur, Tanahun",
    description: "Bandipur is a preserved Newar hill town whose temples, shrines, sacred caves, festivals and traditional architecture give its compact streets a distinctive cultural character. Surrounding trails lead through forest and villages to viewpoints such as Tundikhel, where visitors can take in the Annapurna range and Marshyangdi Valley.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bandipur%2C+Tanahun%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bandipur_Nepal_01.jpg/1280px-Bandipur_Nepal_01.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bandipur_Nepal_01.jpg",
    credit: "Rahul Kumar Shakya / CC BY-SA 4.0",
  },
  {
    name: "Sarangkot",
    category: "Mountains",
    label: "Sunrise & adventure",
    location: "Sarangkot, Pokhara",
    description: "Sarangkot is Pokhara’s celebrated sunrise ridge, looking across Phewa Lake and the city toward a long sweep of Himalayan peaks. Its easy access from Lakeside makes it a popular viewpoint, while paragliding, zip lining, hiking and birdwatching add adventure to the mountain-and-lake panorama.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sarangkot%2C+Pokhara%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pokhara-Sarangkot-10-Morgendaemmerung-2015-gje.jpg/1280px-Pokhara-Sarangkot-10-Morgendaemmerung-2015-gje.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pokhara-Sarangkot-10-Morgendaemmerung-2015-gje.jpg",
    credit: "Gerd Eichmann / CC BY-SA 4.0",
  },
  {
    name: "World Peace Pagoda",
    category: "Heritage",
    label: "Peace stupa",
    location: "Raniban, Pokhara",
    description: "Set on a hill above the southern edge of Phewa Lake, the World Peace Pagoda is a white Buddhist stupa with four Buddha images facing the cardinal directions. Its elevated setting opens broad views of Pokhara, the lake and surrounding Himalayan ranges, rewarding a short hike or drive.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=World+Peace+Pagoda%2C+Pokhara%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/World_peace_pagoda_pokhara.jpg/1280px-World_peace_pagoda_pokhara.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_peace_pagoda_pokhara.jpg",
    credit: "Maxcady007 / CC BY-SA 4.0",
  },
  {
    name: "Begnas Lake",
    category: "Lakes",
    label: "Lakeside retreat",
    location: "Pokhara, Kaski",
    description: "Begnas Lake is a quieter Pokhara escape framed by green hills and part of the valley’s celebrated lake landscape. Visitors come for an unhurried lakeside break, boating and mountain scenery; the lake is included within the Pokhara Valley Ramsar Site.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Begnas+Lake%2C+Pokhara%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Begnas_Lake%2C_Pokhara%2C_Kaski.jpg/1280px-Begnas_Lake%2C_Pokhara%2C_Kaski.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Begnas_Lake,_Pokhara,_Kaski.jpg",
    credit: "Shadow Ayush / CC BY-SA 4.0",
  },
  {
    name: "Annapurna Base Camp",
    category: "Mountains",
    label: "High-altitude trek",
    location: "Annapurna Sanctuary, Gandaki",
    description: "Annapurna Base Camp sits at 4,130 metres in the Annapurna Sanctuary, encircled by towering Himalayan walls including Annapurna I, Machhapuchhre and Hiunchuli. The trek into this high alpine basin combines mountain scenery with Gurung hospitality, passing through varied landscapes and Machhapuchhre Base Camp on the approach.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Annapurna+Base+Camp%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Annapurna_Massif-IMG_5221-Pano.jpg/1280px-Annapurna_Massif-IMG_5221-Pano.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Annapurna_Massif-IMG_5221-Pano.jpg",
    credit: "Bijay Chaurasia / CC BY-SA 4.0",
  },
  {
    name: "Ghorepani–Poon Hill",
    category: "Mountains",
    label: "Sunrise trek",
    location: "Ghorepani, Myagdi",
    description: "Ghorepani–Poon Hill is a classic short Annapurna-region trek through rhododendron forest and mountain villages to a famed dawn viewpoint. From Poon Hill, first light reveals a wide Himalayan panorama, especially Machhapuchhre and the Annapurna and Dhaulagiri ranges; Ghorepani provides the welcoming overnight stop.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ghorepani+Poon+Hill%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sunrise_from_Poon_Hill%2C_Ghorepani.jpg/1280px-Sunrise_from_Poon_Hill%2C_Ghorepani.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sunrise_from_Poon_Hill,_Ghorepani.jpg",
    credit: "Aditya Pal / CC BY-SA 4.0",
  },
  {
    name: "Mardi Himal",
    category: "Mountains",
    label: "Ridge trek",
    location: "Annapurna Conservation Area, Kaski",
    description: "Mardi Himal is a ridge trek in the Annapurna region that climbs from forested foothills to High Camp and Mardi Himal Base Camp. The route’s progression to roughly 4,450 metres brings close perspectives on Machhapuchhre and the Annapurna skyline, while overnight stops break the journey into manageable stages.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mardi+Himal+Base+Camp%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Machhapuchchhre_Himal_%28Fishtail%29_from_Mardi_Himal_Viewpoint.jpg/1280px-Machhapuchchhre_Himal_%28Fishtail%29_from_Mardi_Himal_Viewpoint.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Machhapuchchhre_Himal_(Fishtail)_from_Mardi_Himal_Viewpoint.jpg",
    credit: "Kuber Rana Magar / CC BY-SA 4.0",
  },
  {
    name: "Manang Valley",
    category: "Mountains",
    label: "Himalayan valley",
    location: "Manang District, Gandaki",
    description: "Manang Valley forms the high, dry upper arc of the Annapurna Circuit along the Marsyangdi River. Its villages sit amid stark rocky terrain with a Tibetan-plateau character, turquoise lakes and high mountain views; it is a natural acclimatization stop before the higher sections of the circuit.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Manang+Valley%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Manang_Nepal.jpg/1280px-Manang_Nepal.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Manang_Nepal.jpg",
    credit: "Smiley.toerist / CC BY-SA 3.0",
  },
  {
    name: "Muktinath Temple",
    category: "Heritage",
    label: "Sacred pilgrimage",
    location: "Muktinath, Mustang",
    description: "Muktinath Temple stands in Nepal’s trans-Himalayan Mustang at about 3,800 metres and is sacred to both Hindus and Buddhists. Pilgrims venerate its Vishnu shrine, 108 waterspouts used for ritual bathing and nearby Jwala Mai flame; trekkers also reach it on the Annapurna Circuit via Thorong La.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Muktinath+Temple%2C+Mustang%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Muktinath_Temple_%281%29.jpg/1280px-Muktinath_Temple_%281%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Muktinath_Temple_(1).jpg",
    credit: "Faj2323 / CC BY-SA 4.0",
  },
  {
    name: "Upper Mustang & Lo Manthang",
    category: "Culture",
    label: "Cultural trek",
    location: "Lo Manthang, Upper Mustang",
    description: "Upper Mustang’s walled capital, Lo Manthang, opens onto stark trans-Himalayan landscapes shaped by Tibetan Buddhist culture. The restricted region rewards trekkers with monasteries, ancient settlements and dry, wind-swept valleys; its rain-shadow setting also makes it a practical Himalayan route during Nepal’s monsoon.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lo+Manthang%2C+Mustang%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Upper_Mustang_Lomanthang.jpg/1280px-Upper_Mustang_Lomanthang.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Upper_Mustang_Lomanthang.jpg",
    credit: "Aworld2bb / CC BY-SA 4.0",
  },
  {
    name: "Everest Base Camp",
    category: "Mountains",
    label: "High-altitude trek",
    location: "Khumbu, Solukhumbu",
    description: "Everest Base Camp is the iconic high-Himalayan trekking destination at the foot of the world’s tallest mountain. The approach from Lukla follows the Dudh Koshi valley through Sherpa villages, Namche Bazaar and Sagarmatha National Park before reaching the Khumbu Glacier and base-camp landscape.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Everest+Base+Camp%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Everest_Base_camp_in_Nepal%2C_photographed_on_November_29%2C_2023.jpg/1280px-Everest_Base_camp_in_Nepal%2C_photographed_on_November_29%2C_2023.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Everest_Base_camp_in_Nepal,_photographed_on_November_29,_2023.jpg",
    credit: "Billjones94 / CC0",
  },
  {
    name: "Gokyo Lakes",
    category: "Lakes",
    label: "Glacial lakes",
    location: "Gokyo Valley, Solukhumbu",
    description: "Gokyo Lakes is a high-altitude wetland series in Sagarmatha National Park, celebrated for jewel-toned glacial water and broad Himalayan views. The trekking route reaches Gokyo village and Gokyo Ri, where Cho Oyu, Everest, Lhotse and Makalu line a dramatic panorama above the Ngozumpa Glacier.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gokyo+Lakes%2C+Solukhumbu%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gogyo_Lake.jpg/1280px-Gogyo_Lake.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gogyo_Lake.jpg",
    credit: "JP Vets / CC BY-SA 4.0",
  },
  {
    name: "Namche Bazaar",
    category: "Culture",
    label: "Sherpa culture",
    location: "Khumbu, Solukhumbu",
    description: "Namche Bazaar is the Sherpa heartland’s lively market town and the principal acclimatization stop on the Everest trail. Built like an amphitheatre on a mountainside, it combines Himalayan viewpoints, a weekly Saturday market, trekking supplies and access to nearby Khumjung, Khunde and Syangboche.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Namche+Bazaar%2C+Solukhumbu%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Namche_Bazaar%2C_Nepal.jpg/1280px-Namche_Bazaar%2C_Nepal.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Namche_Bazaar,_Nepal.jpg",
    credit: "Vyacheslav Argenberg / CC BY 4.0",
  },
  {
    name: "Langtang Valley",
    category: "Mountains",
    label: "Valley trek",
    location: "Rasuwa, Bagmati",
    description: "Langtang Valley combines high Himalayan scenery with Tamang culture close to Kathmandu. Its trail rises from Syabrubesi through forests, villages and alpine meadows toward Kyanjin, framed by glaciers and Langtang Lirung; it is a compelling lower-crowd alternative to Nepal’s busier trekking routes.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Langtang+Valley%2C+Rasuwa%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Langtang_Valley.jpg/1280px-Langtang_Valley.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Langtang_Valley.jpg",
    credit: "Stha.nibesh16 / CC BY-SA 3.0",
  },
  {
    name: "Gosaikunda Lake",
    category: "Lakes",
    label: "Pilgrimage lake",
    location: "Rasuwa, Bagmati",
    description: "Gosaikunda Lake is a sacred alpine freshwater lake in Langtang National Park, revered by Hindu pilgrims and especially busy during the Janai Purnima festival. Reached on a high mountain trek through the Langtang region, its surrounding wetlands, meadows and habitats add a strong nature dimension to the pilgrimage.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gosaikunda+Lake%2C+Rasuwa%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lake_Gosaikunda.jpg/1280px-Lake_Gosaikunda.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Gosaikunda.jpg",
    credit: "Sergey Pesterev / CC BY-SA 4.0",
  },
  {
    name: "Rara Lake",
    category: "Lakes",
    label: "Wilderness lake",
    location: "Mugu, Karnali",
    description: "Rara Lake is Nepal’s largest lake, a deep-blue alpine centerpiece of Rara National Park in the remote northwest. Conifer forests, lakeshore walks, boating and mountain viewpoints surround the water, while the protected landscape provides a quieter setting for birdwatching and wildlife-focused trekking.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rara+Lake%2C+Mugu%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rara_Lake%2C_Nepal_U5A9689-Pano.jpg/1280px-Rara_Lake%2C_Nepal_U5A9689-Pano.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rara_Lake,_Nepal_U5A9689-Pano.jpg",
    credit: "Nrik kiran / CC BY-SA 4.0",
  },
  {
    name: "Shey Phoksundo Lake",
    category: "Lakes",
    label: "Remote wilderness",
    location: "Dolpa, Karnali",
    description: "Shey Phoksundo Lake is the turquoise heart of remote Dolpo, inside Shey Phoksundo National Park. Its dramatic cliffs, high-altitude ecosystems, nearby Ringmo village and Tibetan-influenced culture make the multi-day approach a distinctive wilderness trek, with birdlife and wildlife adding to the experience.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shey+Phoksundo+Lake%2C+Dolpa%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Shey_Phoksundo_Lake.jpg/1280px-Shey_Phoksundo_Lake.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shey_Phoksundo_Lake.jpg",
    credit: "Tsering wongel / CC BY-SA 4.0",
  },
  {
    name: "Ilam Tea Gardens",
    category: "Nature",
    label: "Tea & hills",
    location: "Ilam District, Koshi",
    description: "Ilam’s tea gardens sweep across the green hills of eastern Nepal, offering gentle walks, photography, picnics and fresh local tea. Around Kanyam and Fikkal, plantations blend with forested slopes, viewpoints and small-town culture, making the region an easygoing contrast to Nepal’s high-altitude treks.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ilam+Tea+Gardens%2C+Ilam%2C+Nepal",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ilam_tea_garden.jpg/1280px-Ilam_tea_garden.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ilam_tea_garden.jpg",
    credit: "Pravinchapagain / CC BY-SA 4.0",
  },
  {
    name: "Khaptad National Park",
    category: "Nature",
    label: "Far-western wilderness",
    location: "Bajhang & Doti, Sudurpashchim",
    description: "Khaptad is a remote far-western national park of rolling grasslands, forests and quiet highlands. It suits visitors looking for multi-day trekking, birdwatching and meditative scenery, with camping and nature walks forming the core experience rather than busy resort tourism.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Khaptad+National+Park%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenery_Khaptad_National_Park.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Greenery_Khaptad_National_Park.jpg",
    credit: "Sksnepal / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Bardiya National Park",
    category: "Nature",
    label: "Quiet jungle safari",
    location: "Thakurdwara, Bardiya, Lumbini",
    description: "Bardiya offers a quieter Terai jungle experience along the Karnali River. Its grasslands and sal forest make a rewarding setting for guided wildlife viewing, river scenery and unhurried nature stays away from the busier safari routes.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bardiya+National+Park%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bardiya_national_park.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bardiya_national_park.jpg",
    credit: "Aashutoshg1994 / CC BY-SA 3.0",
    hiddenGem: true,
  },
  {
    name: "Tansen",
    category: "Culture",
    label: "Hill-town heritage",
    location: "Tansen, Palpa, Lumbini",
    description: "Tansen is a relaxed hill town with cobbled lanes, Newari-influenced houses and broad views from Shreenagar Hill. Wander its historic core, look for local handicrafts and use the town as a gentle base for Palpa’s temples, viewpoints and riverside heritage.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tansen%2C+Palpa%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Evening_View_of_Tansen.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Evening_View_of_Tansen.jpg",
    credit: "Mithunkunwar9 / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Nuwakot Durbar Square",
    category: "Heritage",
    label: "Ridge-top heritage",
    location: "Nuwakot, Bagmati",
    description: "Nuwakot Durbar Square gathers historic palaces, temples and stone courtyards on a hilltop above the Trishuli valley. It offers a slower heritage walk than the Kathmandu Valley squares, with traditional architecture, local village life and green-hill views.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nuwakot+Durbar+Square%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nuwakot_Durbar_Square.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nuwakot_Durbar_Square.jpg",
    credit: "Arksarkar / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Ghandruk",
    category: "Culture",
    label: "Gurung village",
    location: "Ghandruk, Kaski, Gandaki",
    description: "Ghandruk is a traditional stone village in the Annapurna foothills, known for Gurung culture and close-up mountain scenery. Its footpaths, small museums and village-scale stays offer a rich cultural pause before or after the larger Annapurna treks.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ghandruk%2C+Kaski%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ghandruk%2C_Nepal_-_49673004118.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ghandruk_Nepal_-_49673004118.jpg",
    credit: "Catherine Poh Huay Tan / CC BY 2.0",
    hiddenGem: true,
  },
  {
    name: "Ghalegaun",
    category: "Culture",
    label: "Community village stay",
    location: "Lamjung, Gandaki",
    description: "Ghalegaun is a Gurung village above the mid-hills, where homestays make local food, music and everyday culture part of the visit. Clear-day Himalayan views, birdlife and village walks lend it an easygoing alternative to a full-scale trek.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ghalegaun%2C+Lamjung%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ghalegaun.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ghalegaun.jpg",
    credit: "Britti paudyal / Wikimedia Commons",
    hiddenGem: true,
  },
  {
    name: "Sikles",
    category: "Culture",
    label: "Mountain village",
    location: "Sikles, Kaski, Gandaki",
    description: "Sikles is a large Gurung village tucked into the Annapurna region. The approach combines terraced hillsides, village life and snow-peak views, making it a rewarding short-trek destination for travelers who want culture and mountain scenery in one route.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sikles%2C+Kaski%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikles_village.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sikles_village.jpg",
    credit: "Nirojsedhai / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Tsum Valley",
    category: "Culture",
    label: "Sacred valley",
    location: "Gorkha, Gandaki",
    description: "Tsum Valley is a high, culturally distinct Himalayan valley off the Manaslu routes. Ancient monasteries, stone villages and a strong Tibetan Buddhist heritage meet stark mountain landscapes, rewarding visitors who make time for its quieter side trails.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tsum+Valley%2C+Gorkha%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tsum_Valley.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tsum_Valley.jpg",
    credit: "Tsephu / CC BY 4.0",
    hiddenGem: true,
  },
  {
    name: "Panch Pokhari",
    category: "Lakes",
    label: "Five sacred lakes",
    location: "Sindhupalchok, Bagmati",
    description: "Panch Pokhari is a group of five high-altitude lakes in the Jugal Himal. The trail rewards patient hikers with alpine ridges, quiet camps and a landscape that feels far removed from Nepal’s busiest trekking corridors.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Panch+Pokhari%2C+Sindhupalchok%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Panchpokhari_at_Sindhupalchok.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Panchpokhari_at_Sindhupalchok.jpg",
    credit: "Anish Manandhar / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Daman",
    category: "Mountains",
    label: "Pan-Himalayan lookout",
    location: "Makwanpur, Bagmati",
    description: "Daman is a peaceful hill station on the Tribhuvan Highway, valued for its wide Himalayan panorama and views over the patchwork Palung Valley. It is a calm, scenic stop for cool air, mountain-watching and short walks close to Kathmandu.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Daman%2C+Makwanpur%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_view_of_mountains_from_Daman_Nepal..JPG?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Daman_(Nepal)",
    credit: "Wikimedia Commons / see source",
    hiddenGem: true,
  },
  {
    name: "Bhedetar",
    category: "Nature",
    label: "Eastern hill station",
    location: "Dhankuta, Koshi",
    description: "Bhedetar is a cool eastern hill station above the plains, known for cloud-draped hills, sunrises and sunsets from Charles Point. Nearby paths, rhododendron groves and Namaste Falls make it an appealing slower-paced escape around Dharan and Dhankuta.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bhedetar%2C+Dhankuta%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bhedetar_NS.jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bhedetar_NS.jpg",
    credit: "Nawalshrestha / CC BY-SA 4.0",
    hiddenGem: true,
  },
  {
    name: "Limi Valley",
    category: "Mountains",
    label: "Trans-Himalayan quiet",
    location: "Humla, Karnali",
    description: "Limi Valley is a remote Trans-Himalayan landscape in northwestern Nepal, close to the Tibetan border. Its broad valleys, high passes and centuries-old villages make it one of Nepal’s most distinctive long-route adventures for visitors seeking vast, sparsely traveled scenery.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Limi+Valley%2C+Humla%2C+Nepal",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ISS064-E-12584_-_View_of_Tibet_-_Transhimalaya_(left)_-_clouds_and_snow_in_Kailash_Range_(Gangdis%C3%AA)_-_Yarlung_Zangbo_(source_of_Brahmaputra)_-_Changla_Himal_-_Nalakankar_Himal_-_Lake_Manosarovar_-_Nepal_(cropped).jpg?width=1280",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ISS064-E-12584_-_View_of_Tibet_-_Transhimalaya_(left)_-_clouds_and_snow_in_Kailash_Range_(Gangdis%C3%AA)_-_Yarlung_Zangbo_(source_of_Brahmaputra)_-_Changla_Himal_-_Nalakankar_Himal_-_Lake_Manosarovar_-_Nepal_(cropped).jpg",
    credit: "NASA / public domain",
    hiddenGem: true,
  },
];

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });

const createPlaceCard = (place) => {
  const searchText = [
    place.name,
    place.category,
    place.label,
    place.location,
    place.description,
  ]
    .join(" ")
    .toLowerCase();

  const hiddenGemBadge = place.hiddenGem
    ? '<span class="gem-badge">Hidden gem</span>'
    : "";

  return `
    <article class="place-card" data-category="${escapeHtml(place.category)}" data-hidden-gem="${place.hiddenGem ? "true" : "false"}" data-search="${escapeHtml(searchText)}">
      <figure class="place-image-wrap">
        ${hiddenGemBadge}
        <img class="place-image" src="${escapeHtml(place.imageUrl)}" alt="Photo of ${escapeHtml(place.name)} in Nepal" loading="lazy" decoding="async" />
        <figcaption>${escapeHtml(place.label)}</figcaption>
      </figure>
      <div class="place-content">
        <p class="place-location"><span aria-hidden="true">⌖</span> ${escapeHtml(place.location)}</p>
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.description)}</p>
        <div class="card-bottom">
          <a class="map-link" href="${escapeHtml(place.mapUrl)}" target="_blank" rel="noopener noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
          <a class="photo-credit" href="${escapeHtml(place.sourceUrl)}" target="_blank" rel="noopener noreferrer">Photo: ${escapeHtml(place.credit)}</a>
        </div>
      </div>
    </article>
  `;
};

const placesGrid = document.querySelector("#places-grid");

if (placesGrid) {
  placesGrid.insertAdjacentHTML(
    "beforeend",
    additionalPlaces.map(createPlaceCard).join("")
  );
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#current-year");
const searchInput = document.querySelector("#place-search");
const filterButtons = document.querySelectorAll(".filter-button");
const sortSelect = document.querySelector("#place-sort");
const resultCount = document.querySelector("#places-result-count");
const emptyState = document.querySelector("#empty-state");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector("span[aria-hidden='true']");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Close" : "Menu";
    }
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");

      if (menuLabel) {
        menuLabel.textContent = "Menu";
      }
    });
  });
}

if (placesGrid && searchInput && resultCount && emptyState) {
  let activeFilter = "all";
  const placeCards = Array.from(placesGrid.querySelectorAll(".place-card"));
  const originalOrder = new Map(
    placeCards.map((card, index) => [card, index])
  );
  const alphabetize = new Intl.Collator(undefined, { sensitivity: "base" });

  const getCardName = (card) => card.querySelector("h3")?.textContent.trim() || "";

  const sortCards = () => {
    const sortMode = sortSelect?.value || "default";
    const sortedCards = [...placeCards].sort((firstCard, secondCard) => {
      if (sortMode === "name-asc") {
        return alphabetize.compare(getCardName(firstCard), getCardName(secondCard));
      }

      if (sortMode === "name-desc") {
        return alphabetize.compare(getCardName(secondCard), getCardName(firstCard));
      }

      if (sortMode === "category") {
        const categoryDifference = alphabetize.compare(
          firstCard.dataset.category,
          secondCard.dataset.category
        );

        return categoryDifference || alphabetize.compare(
          getCardName(firstCard),
          getCardName(secondCard)
        );
      }

      return originalOrder.get(firstCard) - originalOrder.get(secondCard);
    });

    sortedCards.forEach((card) => placesGrid.append(card));
  };

  const updateResults = () => {
    sortCards();
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    placeCards.forEach((card) => {
      const categoryMatches =
        activeFilter === "all" ||
        (activeFilter === "Hidden gems"
          ? card.dataset.hiddenGem === "true"
          : card.dataset.category === activeFilter);
      const searchMatches =
        searchTerm === "" || card.dataset.search.includes(searchTerm);
      const isVisible = categoryMatches && searchMatches;

      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    resultCount.textContent =
      visibleCount === placeCards.length
        ? `Showing all ${placeCards.length} places`
        : `Showing ${visibleCount} of ${placeCards.length} places`;
    emptyState.hidden = visibleCount !== 0;
  };

  searchInput.addEventListener("input", updateResults);
  sortSelect?.addEventListener("change", updateResults);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton === button;
        filterButton.classList.toggle("is-active", isSelected);
        filterButton.setAttribute("aria-pressed", String(isSelected));
      });

      updateResults();
    });
  });

  updateResults();
}
