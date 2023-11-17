<template>
 
 <MapViewVue></MapViewVue>
 <zoom-in></zoom-in>
 <zoom-out></zoom-out>  
 <Window>
      <p>Este es el contenido de la ventana de Windows.</p>
      <button @click="handleAccept" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Aceptar</button>
 </Window>  
</template>

<script>
import MapViewVue from '@/components/mapview/MapView.vue' 
import ZoomIn from '@/components/btn-zoom-in/ZoomIn.vue' 
import ZoomOut from '@/components/btn-zoom-out/ZoomOut.vue'
import Window from '@/components/window/window.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MapViewVue,
    ZoomIn,
    ZoomOut,
    Window,
    handleAccept:()=>{console.log("Botón Aceptar presionado");}
  },

}
</script>
