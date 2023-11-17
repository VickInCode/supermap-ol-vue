<template>
  <div v-if="!isReady" class="loading-map d-flex justify-contenet-center">
    <div class="text-center">
      <h3>Espere por favor</h3>

      <span>Cargando ... </span>
    </div>
  </div>

  <div v-show="isReady" class="map-container" ref="mapElement"></div>
</template>

<script>
import useMapStore from "../../composables/useMapStore";
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { TileSuperMapRest } from "@supermap/iclient-ol";

// import Map from 'ol/Map.js';
// import OSM from 'ol/source/OSM.js';
// import TileLayer from 'ol/layer/Tile.js';
// import View from 'ol/View.js';

export default {
  name: "MapView",
  setup() {
    const mapElement = ref(HTMLDivElement);
    const isReady = ref(true);
    const { setMap } = useMapStore();

    const initSuperMap = async () => {
      if (!mapElement.value) return; //throw new Error ('Div element no exists')

      //const url ="https://iserver.supermap.io/iserver/services/map-world/rest/maps/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Day"
      const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Gray"
      //const url ="https://iserver.supermap.io/iserver/services/map-world/rest/maps/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World%20Map";
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE_Night"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World_Common"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World_Robinson"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World_VanderGrintenI"
      //const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World_AirLine_Part"

      const map = new Map({
        target: mapElement.value,
        controls: [],
        view: new View({
          center: [0, 0],
          zoom: 2,
          projection: "EPSG:4326",
        }),
      });
      var layer = new TileLayer({
        source: new TileSuperMapRest({
          url: url,
          wrapX: true,
        }),
        projection: "EPSG:4326",
      });
      map.addLayer(layer);

      //  console.log(mapElement.value);
      await Promise.resolve();
      //Establecer el mapa en el store usando el composable
      setMap(map);
    };
    //Inicio de funcion initEsriMap
    const initEsriMap = async () => {
      if (!mapElement.value) return; //throw new Error ('Div element no exists')
    };
    //fin initEsriMap

    const initMap = () => {
      if (!mapElement.value) return; //throw new Error ('Div element no exists')

      const map = new Map({
        target: mapElement.value,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    };
    onMounted(() => {
      //initMap()
      initSuperMap();
      // initEsriMap();
    });

    return {
      isReady,
      mapElement,
    };
  },
};
</script>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.loading-map {
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>
