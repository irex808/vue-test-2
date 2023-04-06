<script setup>
import { ref, onMounted } from 'vue'
let props = defineProps({
    project:Object
})
let starRate = 0;
onMounted(() => { starRate = props.project.stars});

function rate(){
    console.log("STARRATECONST"+": "+starRate)
    if(starRate === props.project.stars){
        props.project.stars++;
    } else {
        props.project.stars--;
    }
}
</script>
<template>
        <section>
            <div>
                <table>
                        <tbody> <tr> 
                            <td> {{ project.name }} </td>
                             <td> {{ project.description }} </td> 
                             <td> {{ project.createdAt }} </td> 
                             <td> <span @click="rate()"> {{ project.stars }} </span> </td>
                        </tr></tbody>
                </table>
        </div>
    </section>
</template>