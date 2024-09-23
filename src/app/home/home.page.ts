import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
     // Base map layers
     const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satellite = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">ESRI World Imagery</a>'
    });

    const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenTopoMap contributors'
    });

    const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
    });

    const streetMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });


    // Initialize map with OpenStreetMap as the default layer
    this.map = L.map('mapId', {
      center: [-7.774856, 110.374392], // Coordinates of Sekolah Vokasi UGM
      zoom: 13,
      layers: [openStreetMap]  // Default layer
    });

     // Basemap options
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite': satellite,
      'Topo Map': topoMap,
      'Dark Map': darkMap,
      'Street Map': streetMap
    };



    L.control.layers(baseMaps).addTo(this.map);

    const icon = L.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

      // Menambahkan marker dengan ikon bawaan
        const marker = L.marker([-7.774856, 110.374392], {icon}).addTo(this.map);
        marker.bindPopup('<b>Sekolah Vokasi UGM</b><br>Yogyakarta, Indonesia.').openPopup();
}
}