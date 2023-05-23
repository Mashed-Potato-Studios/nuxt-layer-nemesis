<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "~/config";

export interface HeaderProps {
    navigationLinks?: "posts" | "projects" | "about" | "contact" | "resume";
    activeLink?: string;
}

const {navigationLinks, activeLink} = defineProps<HeaderProps>();
</script>
<template>
  <div>
      <header>
          <div class="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row;">
              <div class="relative flex w-full items-start justify-between sm:flex-row">
                <NuxtLink to="/" class="logo">
                    {{
                    LOGO_IMAGE.enable ?  '<img :src="LOGO_IMAGE.svg" alt=""/>' : `${SITE.siteName}`
                    }}
                </NuxtLink>
                  <nav id="navigation-menu">
                      <button class="focus-outline">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  d="M4 6h16M4 12h16M4 18h16"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                              />
                          </svg>

                      </button>
                      <ul id="menu-items" class="display-none sm:flex">
                          <li>
                              <NuxtLink to="/blogs" class="nav-link">Blog</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                          </li>
                          <li>
                              <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </header>
  </div>
</template>
<style>
.logo {
    @apply absolute py-1 text-xl font-semibold sm:static sm:text-2xl;
  }
  .hamburger-menu {
    @apply self-end p-2 sm:hidden;
  }
  .hamburger-menu svg {
    @apply h-6 w-6 scale-125;
  }

  nav {
    @apply flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0;
  }
  nav ul {
    @apply mt-4 grid w-44 grid-cols-2 grid-rows-4 gap-y-2 gap-x-2 sm:mt-0 sm:ml-0 sm:w-auto sm:gap-y-0 sm:gap-x-5;
  }
  nav ul li {
    @apply col-span-2 flex items-center justify-center;
  }
  nav ul li a {
    @apply w-full px-4 py-3 text-center font-medium sm:my-0 sm:px-2 sm:py-1;
  }
  nav ul li:nth-child(4) a {
    @apply w-auto;
  }
  nav ul li:nth-child(4),
  nav ul li:nth-child(5) {
    @apply col-span-1;
  }
  nav a.active {
    @apply underline decoration-wavy decoration-2 underline-offset-4;
  }


  nav button {
    @apply p-1;
  }
  nav button svg {
    @apply h-6 w-6;
  }
  #theme-btn {
    @apply p-3 sm:p-1;
  }
  #theme-btn svg {
    @apply scale-125 hover:rotate-12 sm:scale-100;
  }

  .menu-icon line {
    @apply transition-opacity duration-75 ease-in-out;
  }
  .menu-icon .close {
    opacity: 0;
  }
  .menu-icon.is-active .line {
    @apply opacity-0;
  }
  .menu-icon.is-active .close {
      @apply opacity-100;
  }
</style>