<template>
	<div>
		<div class="py-12 bg-gray-100 md:py-24">
		  <div
			class="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20"
		  >
			<div class="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
			  <h1
				class="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8"
			  >
				Nemesis Nuxt Layer
			  </h1>
			  <p class="mb-6 text-sm text-gray-400 xl:text-xl lg:mb-8 xl:mb-10">
				TailWindCSS, Nuxt.js, Content@2 Vue.js, &amp; Netlify
			  </p>
			  <h1
				class="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8"
			  >
				Try out Nuxt Layers
			  </h1>
			  <p class="mb-6 text-lg text-gray-600 xl:text-xl lg:mb-8 xl:mb-10">
					<div class="social-links">
						<SocialButton />
					</div>

				</p>
			</div>
			<div class="order-1 col-span-2 md:order-2 xl:col-span-3">
			  <img
				src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
				class="rounded-lg shadow-2xl"
				alt="Vantol Bennett"
			  />
			</div>
		  </div>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>
<style>
 .social-links {
    @apply mr-2 mb-1 whitespace-nowrap sm:mb-0;
  }
</style>
