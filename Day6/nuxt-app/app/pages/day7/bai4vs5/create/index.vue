<script setup lang="ts" >
import { useRouter } from 'vue-router';
import { useItems } from '~/composables/useItems'
const router = useRouter();
const {createItem} = useItems();
const form = reactive({
    name: '',
    description: ''
});
const submit = async ()=>{
    await createItem(form);
    router.push('/day7/bai4vs5');
}

</script>
<template>
    <div class="container py-4">
        <h1 class="h4 mb-3">Tạo Item mới</h1>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required />
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Mô tả</label>
                <textarea id="description" v-model="form.description" class="form-control" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Tạo Item</button>
        </form>
    </div>

</template>
