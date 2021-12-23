import { createApp } from 'vue';
import App from '@/App.vue';
import viewRegistry from '@/registries/viewRegistry';
import PageHomepage from '@/views/PageHomepage.vue';
import PageDefault from '@/views/PageDefault.vue';

viewRegistry.add('page', 'homepage', PageHomepage);
viewRegistry.add('page', 'default', PageDefault);

createApp(App).mount('#sulu-headless-container');
