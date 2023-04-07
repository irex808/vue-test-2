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
    <input
      class="border rounded-md pl-4 mx-2"
      v-model="project.name"
      type="text"
      placeholder="name"
    />
    <input
      class="border rounded-md pl-4 mx-2"
      v-model="project.description"
      type="text"
      placeholder="description"
    />
    <input
      class="border rounded-md pl-4 mx-2"
      v-model="project.createdAt"
      type="date"
      placeholder="createdAt"
    />
    <input
      class="border rounded-md pl-4 mx-2"
      v-model="project.stars"
      type="number"
      placeholder="stars"
    />
    <button class="border rounded-md mx-2" @click="store.addProject(project)">Save</button>
  </div>
</template>
