<script setup>
import { computed, onMounted } from 'vue'
import Project from './Project.vue'
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
let storageFull = localStorage.length
onMounted(async () => {
  console.log(storageFull)
  if (storageFull === 0) {
    await store.fetchProjects()
  }
})

let projects = computed(() => {
  return store.getProjects
})

let searchProject = computed(() => {
  return store.getSearchProjects
})
</script>

<template>
  <div>
    <table class="border border-red-500">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in searchProject" :key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>{{ project.createdAt }}</td>
          <td>
            <span @click="store.rateProject(project.id, project.stars)"> {{ project.stars }} </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
