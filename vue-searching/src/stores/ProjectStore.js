import { defineStore } from "pinia";
import axios from "axios";
import { onMounted } from "vue";

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [],
    searchProjects: []
  }),
  getters: {
    getProjects(state){
                return state.projects;
            },
            getSearchProjects(state){
                return state.searchProjects;
            }
  },

  actions: {
        async addProject(project){
        this.projects.push(project);
        try {
            let data = JSON.stringify(project);
            const response = await axios.post('http://localhost:3004/projects', data, { headers: {'Content-Type': 'application/json'}});       
        } catch (error) {
            console.log(error);
        }
    },
    async fetchProjects() {
        try {
            const data = await axios.get('http://localhost:3004/projects');
            this.projects = data.data

        } catch (error) {
            console.log(error);
        }
    },
    setSearchedProjects(value){
        console.log(value)
        if(value === "Most Stars"){
        const projectsStorage = useProjectStore();
        console.log(projectsStorage);
           let projectsStar = projectsStorage.sortByStars();
           console.log(projectsStar);
           this.searchProjects = projectsStar.slice(0,3);
              return this.searchProjects;
        }
            this.searchProjects = this.projects.filter(function (project) { 
                let something = project.name.includes(value);
                return something});
                return this.searchProjects;
    },
    sortByName(){
            return this.projects.sort(function (a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
    },
    sortByStars(){
           return this.projects.sort(function (a, b) {
            if (a.stars < b.stars) {
              return 1;
            }
            if (a.stars > b.stars) {
              return -1;
            }
            return 0;
          });
    }
  },
  persist:true
});


// import { defineStore } from "pinia"
// import axios, { formToJSON } from "axios";
// import { onMounted, ref } from "vue";

// export const useProjectStore = defineStore('projects', () => {
//     let projects = ref([])

//     let searchProjects = ref([]);
  
//    async function fetchProjects() {
//     console.log("API CALL");
//         try {
//             console.log(searchProjects.value.length);
//             const data = await axios.get('http://localhost:3000/projects');
//             projects.value = data.data
//             console.log(projects.value)
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     function getProjects(value){
       
//         console.log(value)
//         if(value !== undefined){
//             searchProjects = projects.value.filter(function (project) { 
//                 console.log(project.name);
//                 let something = project.name.includes(value);
//                 console.log(something);
//                 return something});
//                 console.log(searchProjects);
//                 return searchProjects.value;
//             }
//             console.log(projects.value);
        
//         return projects.value;
//     };

//     async function addProject(project){
//         projects.value.push(project);
//         try {
//             let data = JSON.stringify(project);
//             const response = await axios.post('http://localhost:3000/projects', data, { headers: {'Content-Type': 'application/json'}});       
//         } catch (error) {
//             console.log(error);
//         }

//     };
  
//   // Runs the very first time the store is used. i.e., when the store is initialized.
//    onMounted(fetchProjects);
  
//     return {
//       getProjects,
//       addProject,
//       searchProjects
//     }
//   })
