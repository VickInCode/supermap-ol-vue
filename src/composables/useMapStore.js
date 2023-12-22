import { useStore } from "vuex";
import { computed } from "vue"; 
  
const useMapStore = () => {
  
    const store = useStore();

     return {   
           map: computed(() => store.state.map.map),
           view:computed(()=> store.state.map.view),
           //ui:computed(()=> store.state.map.ui),
            
           //call mutations 
           setMap:(map) => store.commit('map/setMap', map),

           setView:(view) => store.commit('map/setView', view),

          // setUI:(ui) => store.commit('map/setUI', ui),

           //call getters
           isMapReady:   computed(()  => store.getters['map/isMapReady']),
           isViewReady:  computed(()  => store.getters['map/isViewReady'])
     };
     
 };


export default useMapStore;