<script setup lang="ts">
import { SITE, SOCIAL_MEDIA} from "~/config";


const socialLinks = SOCIAL_MEDIA.filter(link => link.active).length

definePageMeta({
    layout: "index",
})
</script>
<template>
  <Layout title="">
      <main id="main-content">
          <section id="hero">
              <h1>Nemesis Layer</h1>
              <a
        target="_blank"
        href="/rss.xml"
        class="rss-link"
        aria-label="rss feed"
        title="RSS Feed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="rss-icon"
          ><path
            d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"
          ></path><path
            d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"
          ></path><circle cx="6" cy="18" r="2"></circle>
        </svg>
      </a>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
          </section>

          <hr>

<!--          Display Social Links Here -->

      </main>
  </Layout>
</template>
<style>
#main-content {
    @apply mx-auto w-full max-w-3xl px-4 pb-12;
  }
 #hero {
    @apply pt-8 pb-6;
  }
   #hero h1 {
      @apply text-4xl font-bold text-gray-900 dark:text-gray-100;
    }
    #hero p {
      @apply mt-4 text-gray-600 dark:text-gray-400;
    }
    #hero .rss-link {
      @apply inline-flex items-center justify-center w-10 h-10 mt-4 text-gray-600 transition-colors duration-200 rounded-full dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300;
    }
    #hero .rss-icon {
      @apply w-5 h-5;
    }
</style>