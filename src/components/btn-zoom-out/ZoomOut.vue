<template>
  <div class="absolute pt-40 pl-10 flex">
    <button
      @click="onZoomOutClicked"      
      class=" top-20 left-5 btn-tool"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-10 h-10 p-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import useMapStore from "../../composables/useMapStore";
import { ref } from "vue";

export default {
  name: "zoomOut",
  setup() {
    const { map } = useMapStore();
    return {
      onZoomOutClicked() {
     //   map.value.getView().setZoom(map.value.getView().getZoom() - 1);
        map.value.getView().animate({
          zoom: map.value.getView().getZoom() - 1,
          duration: 250,
        });
      },
    };
  },
};
</script>

<style scoped>
</style>
