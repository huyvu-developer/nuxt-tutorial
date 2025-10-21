<template>
    <div class="container">
       <h2>Profile</h2>
       <p>Current User: {{ username }}</p>
       <input type="text" v-model="newName" placeholder="Enter new name">
       <button @click="updateName">Update Name</button>
       <p class="mt-2">Info: {{ userinfo }}</p>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const username = computed(() => store.state.userName)
const userinfo = computed(() => store.getters.userinfo)
const newName = ref('')
const updateName = () =>{
    if(newName.value.trim() !== ''){
        store.commit('updateUserName', newName.value.trim())
        newName.value = ''
    }
}
</script>