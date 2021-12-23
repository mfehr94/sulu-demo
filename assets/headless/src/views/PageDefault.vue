<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue';

const props = defineProps<{ data: any }>();

const serializedData = JSON.stringify(props.data, null, 2);
</script>

<template>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="About"></HelloWorld>
    <a href="http://sulu-demo.lo/en">Home</a>
    <pre>{{ serializedData }}</pre>
</template>
