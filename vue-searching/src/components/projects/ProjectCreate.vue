<script setup>
import { ref } from 'vue'
import { onMounted, computed } from 'vue'
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
let project = ref({ name: 'something', description: 'anything', createdAt: '', stars: 50 })

// function saveProject(){
//     console.log(project.value);
//     store.addProject(project.value);
// }
</script>
<template>
  <div>
    <input v-model="project.name" type="text" placeholder="name" />
    <input v-model="project.description" type="text" placeholder="description" />
    <input v-model="project.createdAt" type="date" placeholder="createdAt" />
    <input v-model="project.stars" type="number" placeholder="stars" />
    <button @click="store.addProject(project)">Save</button>
  </div>
</template>
