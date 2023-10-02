<template>
  <div class="max-w-md mx-auto">
    <div>
      <div class="container">
        <div class="grid 2xl:grid-cols-5 grid-cols-1 gap-6">
          <div class="2xl:col-span-2">
            <span class="uppercase font-medium tracking-widest text-purple-500">App using vue.js & Graphql</span>
            <h2 class="mt-2 md:text-5xl text-3xl font-medium tracking-tight">Thomas J Smallwood</h2>
            <p class="mt-6 leading-7 text-gray-500 dark:text-gray-400">Thank you for your time and interest. I'm eager to contribute my skills and passion to help Gameday LGX achieve its vision. Let's build something great together.</p>
            <div class="container">
              <div class="grid grid-cols-1 mt-2 youtube-container sm:grid-cols-2 2xl:grid-cols-4">
                <!-- YouTube Section -->
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/yOJ8n1l6HpU?si=Eju1sZ4BPQky-Z60"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <!-- Repo Section -->
                <div class="mt-5">
                  <h2>Repo</h2>
                  <ul>
                    <li>
                      <a href="https://github.com/thomasjs02/gameday-view" target="_blank">View</a>
                    </li>
                    <li>
                      <a href="https://github.com/thomasjs02/gameday-graphql" target="_blank">Graphql API</a>
                    </li>
                  </ul>
                  <div class="mt-5">
                    <a href="https://www.thomasjsmallwood.com" target="_blank">Personal Website</a>
                  </div>
                </div>

                <!-- Personal Website Link -->
              </div>

            </div>
          </div>

          <div v-if="thomas" class="2xl:col-span-3">
            <div v-if="thomas.loading">Loading...</div>
            <div v-else-if="thomas.error">Error: {{ thomas.error.message }}</div>
            <div v-else>
              <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" v-for="personal in thomas" :key="personal.title">
                <div v-for="detail in personal" :key="detail.title">

                    <div class="text-center bg-purple-500/5 p-10 dark:bg-neutral-800/70">
                      <span v-html="detail.icon"></span>
                      <h3 class="text-2xl font-semibold mt-5">{{ detail.title }}</h3>
                      <p class="leading-7 font-medium text-gray-500 dark:text-gray-400">
                        {{ detail.description }}
                      </p>
                    </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { GET_PERSONAL } from './../assets/js/graphql';

export default {
  setup() {
    const { result: thomas } = useQuery(GET_PERSONAL);

    return {
      thomas,
    };
  },
};
</script>

<style scoped>
/* Tailwind CSS classes can be used directly in your component's style section */
.youtube-container{
  align-content: center;
}
</style>
