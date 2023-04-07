<script setup>
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
</script>
<template>
  <div>
    <input
      class="border rounded-md px-4 placeholder-black focus:outline-none focus:border-gray-500 focus:ring-gray-500"
      @input="store.setSearchedProjects($event.target.value)"
      type="text"
      placeholder="search"
    />
  </div>
</template>
