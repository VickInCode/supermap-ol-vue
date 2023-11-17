<template>
  <div v-if="!isClosed" class=" fixed w-80 h-48 bg-white shadow-lg rounded-lg" ref="windowRef" @mousedown="startDragging">
    <!-- Barra de título -->
    <div class="bg-sky-500  text-white flex items-center justify-between p-2" @mousedown="startDragging" @mouseenter="changeCursorToHand" @mouseleave="restoreCursor">
      <span class="ml-4">Ventana de Windows</span>
      <div class="flex space-x-2">
        <!-- <button @click="minimizeWindow" class="w-5 h-5 bg-yellow-400 rounded-full"></button>
        <button @click="maximizeWindow" class="w-5 h-5 bg-green-500 rounded-full"></button> -->
        <button @click="closeWindow" class="w-5 h-5 bg-red-500 rounded-full"></button>
      </div>
    </div>
    <!-- Contenido de la ventana -->
    <div class="p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const windowRef = ref(null);
    const isDragging = ref(false);
    const isMinimized = ref(false);
    const isClosed = ref(false);
    let offsetX, offsetY;

    const startDragging = (event) => {
      isDragging.value = true;
      offsetX = event.clientX - windowRef.value.getBoundingClientRect().left;
      offsetY = event.clientY - windowRef.value.getBoundingClientRect().top;
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', stopDragging);
    };

    const onDrag = (event) => {
      if (isDragging.value) {
        const left = event.clientX - offsetX;
        const top = event.clientY - offsetY;
        windowRef.value.style.left = left + 'px';
        windowRef.value.style.top = top + 'px';
      }
    };

    const stopDragging = () => {
      isDragging.value = false;
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', stopDragging);
    };

    const changeCursorToHand = () => {
      document.body.style.cursor = 'pointer';
    };

    const restoreCursor = () => {
      document.body.style.cursor = 'auto';
    };

    const minimizeWindow = () => {
      isMinimized.value = true;
    };

    const maximizeWindow = () => {
      isMinimized.value = false;
    };

    const closeWindow = () => {
      isClosed.value = true;
    };

    return {
      startDragging,
      minimizeWindow,
      maximizeWindow,
      closeWindow,
      windowRef,
      changeCursorToHand,
      restoreCursor,
      isMinimized,
      isClosed,
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
