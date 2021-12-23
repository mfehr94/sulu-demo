<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import interceptAnchorClick from '@/utils/interceptAnchorClick';
import ViewRenderer from '@/containers/ViewRenderer.vue';
</script>

<template>
    <div @click="interceptAnchorClick">
        <ViewRenderer></ViewRenderer>
    </div>
</template>

<style>
#sulu-headless-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
