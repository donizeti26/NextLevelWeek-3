//create map
const map = L.map('mapid').setView([-27.2192366,-49.6469021], 15);

//create and add TileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanages"> <img src="./public/images/arrow-white.svg"></a>')
//create and add maker

L.marker([-27.2192366,-49.6469021],{icon}).addTo(map)
    .bindPopup(popup)
    