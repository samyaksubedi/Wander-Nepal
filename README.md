# Wander Nepal — complete static travel guide

Open `index.html` in a browser to view the site. It uses only HTML, CSS, and JavaScript—there is no server or database needed.

## What is included

- 42 researched Nepal destinations, including 12 underrated hidden gems
- A photo, short description, general location, Google Maps search link, and linked photo credit for every destination
- Search plus filters for hidden gems, mountains, lakes, heritage, nature, and culture
- A responsive layout and mobile menu

The first three cards are written directly in `index.html`. The remaining 39 cards are stored in the clearly labelled `additionalPlaces` list at the top of `script.js`, so the page stays easier to maintain.

## Add another place

The simplest option is to copy one object in `additionalPlaces` inside `script.js` and replace its values. Use one of these category values so the filters continue to work:

`Mountains`, `Lakes`, `Heritage`, `Nature`, or `Culture`. Add `hiddenGem: true` to include it in the Hidden gems filter.

You can also copy the commented card template at the end of `index.html`. If you do, update its `data-category` and `data-search` attributes too.

For a Google Maps link, search for a destination in Google Maps, choose **Share**, and copy the link. The site currently uses Google Maps search links instead of coordinates.

## The 42 destinations

1. Phewa Lake
2. Chitwan National Park
3. Boudhanath Stupa
4. Swayambhunath Stupa
5. Pashupatinath Temple
6. Kathmandu Durbar Square
7. Patan Durbar Square
8. Bhaktapur Durbar Square
9. Changu Narayan Temple
10. Nagarkot
11. Chandragiri Hills
12. Maya Devi Temple, Lumbini
13. Bandipur
14. Sarangkot
15. World Peace Pagoda
16. Begnas Lake
17. Annapurna Base Camp
18. Ghorepani–Poon Hill
19. Mardi Himal
20. Manang Valley
21. Muktinath Temple
22. Upper Mustang & Lo Manthang
23. Everest Base Camp
24. Gokyo Lakes
25. Namche Bazaar
26. Langtang Valley
27. Gosaikunda Lake
28. Rara Lake
29. Shey Phoksundo Lake
30. Ilam Tea Gardens
31. Khaptad National Park
32. Bardiya National Park
33. Tansen
34. Nuwakot Durbar Square
35. Ghandruk
36. Ghalegaun
37. Sikles
38. Tsum Valley
39. Panch Pokhari
40. Daman
41. Bhedetar
42. Limi Valley

## Sources and photo use

Destination information was researched from the Nepal Tourism Board, UNESCO, and relevant destination authorities. Each card links to its original Wikimedia Commons photo page, where you can see the creator and licence. Keep those credits if you reuse the images—most are licensed CC BY-SA, which requires attribution.
