<template>
 
 <MapViewVue></MapViewVue>
 <BaseMaps></BaseMaps>
 
</template>

<script>
import MapViewVue from '@/components/MapView.vue' 
import BaseMaps from '@/components/BaseMaps.vue'
 
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MapViewVue,BaseMaps, 
  },

}
</script>
