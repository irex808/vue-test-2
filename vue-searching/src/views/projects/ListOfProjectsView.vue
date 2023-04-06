<script setup>
import ListOfProjects from '../../components/projects/ListOfProjects.vue';
</script>
<template>
    <div class="projects">
    <ListOfProjects />
</div>
</template>
<style>
@media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    align-items: top;
    text-align: center;

  }
  .projects table {
    width: 650px;
  }
}
</style>