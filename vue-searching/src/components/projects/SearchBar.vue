<script setup>
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
</script>
<template>
  <input @input="store.setSearchedProjects($event.target.value)" type="text" placeholder="search" />
</template>
