<template>
  <div></div>
</template>

<script>
import { onMounted } from "vue";
import useMapStore from "@/composables/useMapStore";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import { useStore } from "vuex";

export default {
  name: "BaseMaps",
  setup() {
    const store = useStore();       

    const initTool = async () => {
 
      const { view } = useMapStore();
    
       await Promise.resolve();

  
        const basemaps = new BasemapGallery({
          view: view.value
        });        

        const bkExpandBaseGallery = new Expand({
          view: view.value,
          content: basemaps,
          expanded: false,
          expandTooltip: "Galeria de Mapas",
          group: "top-left"
        }) 

        view.value.ui.add(bkExpandBaseGallery, "bottom-right");
         
       
    };

    onMounted(() => {    
            
      initTool();
       
    });

    

    return {};
  },
};
</script>

 
