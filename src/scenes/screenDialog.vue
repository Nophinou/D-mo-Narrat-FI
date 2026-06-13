<template>
  <div class="scene-dialog-sans-menu">
    <!-- La scène "playing" normale est toujours active en dessous,
         on se contente de cacher les boutons indésirables -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.body.classList.add('hide-menu-buttons');
});

onUnmounted(() => {
  document.body.classList.remove('hide-menu-buttons');
});
</script>