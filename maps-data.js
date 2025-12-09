// Google Maps links for all locations
const mapsLinks = {
    // Accommodations
    'radium-hall': 'https://www.google.com/maps/search/?api=1&query=Radium+Hall+Guest+House+Gardens+Cape+Town',
    'nima-lodge': 'https://www.google.com/maps/search/?api=1&query=Nima+Lodge+Wilderness+South+Africa',
    'knysna-loerie': 'https://www.google.com/maps/search/?api=1&query=11+Loerie+Street+Knysna+6571+South+Africa',
    'plett-cottage': 'https://www.google.com/maps/search/?api=1&query=Cape+Dutch+Cottage+Plettenberg+Bay+South+Africa',
    'addo-camp': 'https://www.google.com/maps/search/?api=1&query=Addo+Rest+Camp+Addo+Elephant+National+Park',
    'cape-paradise': 'https://www.google.com/maps/search/?api=1&query=48+Leeuwenhof+Road+Gardens+Cape+Town+8001',
    'mount-ceder': 'https://www.google.com/maps/search/?api=1&query=Mount+Ceder+Klipbokkop+Villa+Ceres+South+Africa',
    'sea-point-airbnb': 'https://www.google.com/maps/search/?api=1&query=21+Bickley+Road+Sea+Point+Cape+Town+8005',
    
    // Restaurants
    'la-colombe': 'https://www.google.com/maps/search/?api=1&query=La+Colombe+Restaurant+Constantia+Cape+Town',
    'kloof-street-house': 'https://www.google.com/maps/search/?api=1&query=Kloof+Street+House+Cape+Town',
    'ficks-hermanus': 'https://www.google.com/maps/search/?api=1&query=Ficks+Restaurant+Hermanus+South+Africa',
    'views-wilderness': 'https://www.google.com/maps/search/?api=1&query=Views+Restaurant+Wilderness+South+Africa',
    'green-shed': 'https://www.google.com/maps/search/?api=1&query=Green+Shed+Coffee+Roastery+Wilderness',
    'ile-de-pain': 'https://www.google.com/maps/search/?api=1&query=ile+de+pain+Knysna+South+Africa',
    '34-degrees': 'https://www.google.com/maps/search/?api=1&query=34+Degrees+South+Knysna+South+Africa',
    'glenshiel': 'https://www.google.com/maps/search/?api=1&query=Glenshiel+Restaurant+Knysna+South+Africa',
    'freshline': 'https://www.google.com/maps/search/?api=1&query=Freshline+Fisheries+Knysna+South+Africa',
    'nest-food': 'https://www.google.com/maps/search/?api=1&query=Nest+Food+Knysna+South+Africa',
    'enrico': 'https://www.google.com/maps/search/?api=1&query=Enrico+Ristorante+Keurboomstrand+Plettenberg+Bay',
    'amelias': 'https://www.google.com/maps/search/?api=1&query=Amelias+at+The+Plettenberg+Plettenberg+Bay',
    'lookout-deck': 'https://www.google.com/maps/search/?api=1&query=The+Lookout+Deck+Plettenberg+Bay',
    'woodlands': 'https://www.google.com/maps/search/?api=1&query=The+Woodlands+Eatery+Cape+Town',
    'tintswalo': 'https://www.google.com/maps/search/?api=1&query=Tintswalo+Atlantic+Hout+Bay+Cape+Town',
    'cape-point-vineyards': 'https://www.google.com/maps/search/?api=1&query=Cape+Point+Vineyards+Noordhoek+Cape+Town',
    'don-armando': 'https://www.google.com/maps/search/?api=1&query=Don+Armando+Cape+Town',
    'codfather': 'https://www.google.com/maps/search/?api=1&query=Codfather+Seafood+Camps+Bay+Cape+Town',
    'beau-constantia': 'https://www.google.com/maps/search/?api=1&query=Chefs+Warehouse+Beau+Constantia+Cape+Town',
    'constantia-glen': 'https://www.google.com/maps/search/?api=1&query=Constantia+Glen+Wine+Estate+Cape+Town',
    'ariel-italian': 'https://www.google.com/maps/search/?api=1&query=Ariel+Italian+Restaurant+Sea+Point+Cape+Town',
    
    // Activities & Attractions
    'table-mountain': 'https://www.google.com/maps/search/?api=1&query=Table+Mountain+Cable+Car+Cape+Town',
    'platteklip-gorge': 'https://www.google.com/maps/search/?api=1&query=Platteklip+Gorge+Trailhead+Table+Mountain',
    'clifton-beach': 'https://www.google.com/maps/search/?api=1&query=Clifton+4th+Beach+Cape+Town',
    'camps-bay': 'https://www.google.com/maps/search/?api=1&query=Camps+Bay+Beach+Cape+Town',
    'eden-adventures': 'https://www.google.com/maps/search/?api=1&query=Eden+Adventures+Wilderness+South+Africa',
    'touw-river': 'https://www.google.com/maps/search/?api=1&query=Touw+River+Wilderness+South+Africa',
    'kingfisher-trail': 'https://www.google.com/maps/search/?api=1&query=Giant+Kingfisher+Trail+Wilderness',
    'virgin-wembley': 'https://www.google.com/maps/search/?api=1&query=Virgin+Active+Wembley+Square+Cape+Town',
    'kfit-knysna': 'https://www.google.com/maps/search/?api=1&query=KFit+Persellos+Knysna+South+Africa',
    'otter-trail': 'https://www.google.com/maps/search/?api=1&query=Otter+Trail+Storms+River+Mouth+Tsitsikamma',
    'circles-forest': 'https://www.google.com/maps/search/?api=1&query=Circles+in+the+Forest+Knysna',
    'featherbed': 'https://www.google.com/maps/search/?api=1&query=Featherbed+Nature+Reserve+Knysna',
    'knysna-charters': 'https://www.google.com/maps/search/?api=1&query=Knysna+Waterfront+Charters+Knysna',
    'outeniqua-trail': 'https://www.google.com/maps/search/?api=1&query=Outeniqua+Trail+Harkerville+Knysna',
    'canopy-tour': 'https://www.google.com/maps/search/?api=1&query=Tsitsikamma+Canopy+Tour+Storms+River',
    'drupkelders': 'https://www.google.com/maps/search/?api=1&query=Drupkelders+Trail+Bibbys+Hoek+Knysna',
    'plett-gym': 'https://www.google.com/maps/search/?api=1&query=Plett+Gym+and+Pool+Plettenberg+Bay',
    'keurbooms-river': 'https://www.google.com/maps/search/?api=1&query=Keurbooms+River+Ferries+Plettenberg+Bay',
    'keurbooms-beach': 'https://www.google.com/maps/search/?api=1&query=Keurbooms+Beach+Plettenberg+Bay',
    'ocean-safaris': 'https://www.google.com/maps/search/?api=1&query=Ocean+Safaris+Plettenberg+Bay',
    'schotia-safari': 'https://www.google.com/maps/search/?api=1&query=Schotia+Safaris+Paterson+South+Africa',
    'addo-park': 'https://www.google.com/maps/search/?api=1&query=Addo+Elephant+National+Park+Main+Gate',
    'chapmans-peak': 'https://www.google.com/maps/search/?api=1&query=Chapmans+Peak+Drive+Cape+Town',
    'hout-bay-market': 'https://www.google.com/maps/search/?api=1&query=Hout+Bay+Market+Cape+Town',
    'kirstenbosch': 'https://www.google.com/maps/search/?api=1&query=Kirstenbosch+Botanical+Gardens+Cape+Town',
    'oranjezicht-market': 'https://www.google.com/maps/search/?api=1&query=Oranjezicht+City+Farm+Market+Cape+Town',
    'constantia-neck': 'https://www.google.com/maps/search/?api=1&query=Constantia+Nek+Hiking+Trail+Cape+Town',
    'atlantic-outlook': 'https://www.google.com/maps/search/?api=1&query=Atlantic+Outlook+V+and+A+Waterfront+Cape+Town',
    'sea-point-promenade': 'https://www.google.com/maps/search/?api=1&query=Sea+Point+Promenade+Cape+Town',
    'mojo-market': 'https://www.google.com/maps/search/?api=1&query=Mojo+Market+Sea+Point+Cape+Town',
    'horizen-gym': 'https://www.google.com/maps/search/?api=1&query=Horizen+Gym+Sea+Point+Cape+Town',
    
    // Airports
    'cpt-airport': 'https://www.google.com/maps/search/?api=1&query=Cape+Town+International+Airport',
    'pe-airport': 'https://www.google.com/maps/search/?api=1&query=Port+Elizabeth+Airport'
};

// Function to create map link HTML
function createMapLink(text, key) {
    const url = mapsLinks[key];
    if (!url) return text;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="map-link">${text}</a>`;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mapsLinks, createMapLink };
}
