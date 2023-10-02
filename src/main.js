import { createApp } from 'vue'
import App from './App.vue'
import apolloClient from './assets/js/apollo-client.js'; // Import your Apollo Client setup file
import { ApolloProvider, provideApolloClient } from '@vue/apollo-composable'; // Import provideApolloClient

const app = createApp(App);

// Provide the Apollo Client instance using provideApolloClient
provideApolloClient(apolloClient);

// Use the ApolloProvider at the root level
app.use(ApolloProvider);

app.mount('#app')

