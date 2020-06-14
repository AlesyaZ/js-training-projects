import mapboxgl from '../../node_modules/mapbox-gl';
import { TokenMaps, StyleMap } from './Constants';

mapboxgl.accessToken = TokenMaps;

const map = new mapboxgl.Map({
  container: 'map',
  center: [12.550343, 55.665957],
  style: `${StyleMap}`,
  zoom: 8,
});

const marker = new mapboxgl.Marker()
  .setLngLat([12.550343, 55.665957])
  .addTo(map);

export default function searchMap(lat, long) {
  map.flyTo({ center: [long, lat] });
  marker.setLngLat([long, lat]);
}
