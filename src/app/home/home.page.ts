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

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([51.505, -0.09], 10);
    // Pilihan base map
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    });

    const googleMaps = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
    });

    // Menambahkan pilihan base map ke dalam Layer Control
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Mapbox': mapbox,
      'Google Maps': googleMaps,
    };

    // Tambahkan Layer Control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    // Tambahkan marker pada koordinat tertentu
    const marker = L.marker([51.505, -0.09]).addTo(this.map);

    // Tambahkan popup information ke marker
    marker.bindPopup('Ini adalah informasi popup.').openPopup();
  }
}
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);


