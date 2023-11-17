import { useStore } from "vuex";
import { computed } from "vue"; 
  
const useMapStore = () => {
  
    const store = useStore();

     return {   
           map:computed(()=> store.state.map.map),
            
           //call mutations 
           setMap:(map) => store.commit('map/setMap', map),

           //call getters
           isMapReady: computed(()=> store.getters['map/isMapReady'])
     };
     
 };


export default useMapStore;