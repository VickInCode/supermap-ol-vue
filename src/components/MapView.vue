<template>
  <div class="relative">
    <div v-if="!isReady"
      class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 text-white z-50 d-flex justify-contenet-center">
      <div class="text-center">
        <h3>Espere por favor</h3>
        <span>Cargando ... </span>
      </div>
    </div>
     
    <div v-show="isReady" class="w-screen h-screen bg-black" ref="mapElement"></div>
  </div>
</template>

<script>
import useMapStore from "@/composables/useMapStore";
import { onMounted, ref,markRaw  } from "vue";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView"
 

export default {
  name: "MapView", 
  setup() {

    const mapElement = ref(HTMLDivElement);

    const isReady = ref(true);



    const initEsriMap = async () => {

      const { setMap, setView,  } = useMapStore();

      //Crear mapa
      let map = new WebMap({
        basemap: "hybrid",
      })

      //crear la vista 2d
      let view = new MapView({
        map: map
      })

      if (!mapElement.value) return; //throw new Error ('Div element no exists')

      view.set({
        container: mapElement.value,
        center: [-100, 20.3],
        zoom: 4
      })
        
      await Promise.resolve()    

       // Mandamos guardar el mapa en el state
       setMap(markRaw(map)); // Usar markRaw para evitar reactividad

       // Mandamos guardar la vista 2D en el state 
       setView(markRaw(view)); // Usar markRaw para evitar reactividad

    };
    //fin initEsriMap


    onMounted(() => {
      initEsriMap();
    });

    return {
      isReady,
      mapElement,

    };
  },
};
</script>

<style>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css"
</style>
