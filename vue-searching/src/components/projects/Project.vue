<script setup>
import { ref, onMounted } from 'vue'
import { useProjectStore } from '../../stores/ProjectStore.js'
let store = useProjectStore()
let props = defineProps({
  project: Object
})
let starRate = 0
onMounted(() => {
  starRate = props.project.stars
})

function rate() {
  console.log('STARRATECONST' + ': ' + starRate)
  if (starRate === props.project.stars) {
    props.project.stars++
    store.rateProject(props.project.name)
  } else {
    props.project.stars--
  }
}
</script>
<template>
  <section>
    <td>{{ project.name }}</td>
    <td>{{ project.description }}</td>
    <td>{{ project.createdAt }}</td>
    <td>
      <span @click="rate()"> {{ project.stars }} </span>
    </td>
  </section>
</template>
