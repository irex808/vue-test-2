<script setup>
import ProjectCreate from '../../components/projects/ProjectCreate.vue';
</script>
<template>
    <div class="projects">
    <ProjectCreate />
</div>
</template>
<style>
@media (min-width: 1024px) {
  .projects {
    padding-top: 25px;
    min-height: 100vh;
    align-items: top;
    text-align: center;
    border-left: 1px;
    border-color: black;
  }
}
</style>