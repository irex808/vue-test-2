<script setup>
import { computed, onMounted } from 'vue';
import Project from './Project.vue';
import { useProjectStore } from '../../stores/ProjectStore.js';
let store = useProjectStore();
onMounted(() => {
  store.fetchProjects();
});

let projects = computed(() => { return store.getProjects})

 let searchProject = computed(() => { return store.getSearchProjects });

</script>

<template>
        <div v-if="searchProject.length !== 0">
                <table>
                        <thead > <tr> <th> Name </th> <th> Description </th> <th> Date </th> <th> Stars </th></tr></thead>
                </table>
            <Project
            v-for="project in searchProject"
            :key="project.name"
             :project="project" />
        </div>
        <div v-else>
                <table>
                        <thead> <tr> <th> Name </th> <th> Description </th> <th> Date </th> <th> Stars </th></tr></thead>
                </table>
            <Project
            v-for="project in projects"
            :key="project.name"
             :project="project" />
        </div>
</template>