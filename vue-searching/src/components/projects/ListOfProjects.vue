<script setup>
import { computed, onMounted } from 'vue'
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
let storageFull = localStorage.getItem('projects')
onMounted(async () => {
  await store.fetchProjects()
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
      <thead class="border-b">
        <tr>
          <th class="border-r"><span @click="store.sortByName()">Name</span></th>
          <th class="border-r"><span>Description</span></th>
          <th class="border-r"><span @click="store.sortByDate()">Date</span></th>
          <th><span @click="store.sortByStars()">Stars</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in searchProject" :key="project.id">
          <td class="border-r">{{ project.name }}</td>
          <td class="border-r">{{ project.description }}</td>
          <td class="border-r">{{ project.createdAt }}</td>
          <td>
            <span @click="store.rateProject(project.id, project.stars)"> {{ project.stars }} </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
