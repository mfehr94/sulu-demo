<script setup lang="ts">
import viewRegistry from '@/registries/viewRegistry';
import viewDataStore from '@/stores/viewDataStore';

const { type: currentViewType, template: currentViewTemplate, data: currentViewData } = viewDataStore;
const viewComponent = viewRegistry.get(currentViewType, currentViewTemplate);
</script>

<template>
        <component :is="viewComponent" v-if="currentViewType || currentViewTemplate" :data="currentViewData"></component>
</template>
