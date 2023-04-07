<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/projects/SearchBar.vue'
import ProjectFilters from './components/projects/ProjectFilters.vue'
</script>

<template>
  <header class="py-4 flex justify-between items-center">
    <img alt="Vue logo" class="h-8 w-auto" src="@/assets/logo.svg" width="125" height="125" />

    <div class="flex items-center">
      <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/create">New Project</RouterLink>
      </nav>

      <SearchBar id="search" class="mx-4" />

      <ProjectFilters />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#search {
  text-align: center;
  border-color: black;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 0 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: nowrap;
  }
}
</style>
