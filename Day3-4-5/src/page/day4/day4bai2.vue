<template>
    <div class="container mt-4">
        <h2 class="text-center mb-3">Đăng ký tài khoản</h2>

        <form @submit.prevent="handleSubmit" class="card p-3 shadow-sm">
            <div class="mb-3">
                <label class="form-label">Họ và tên:</label>
                <input v-model="form.name" type="text" class="form-control" placeholder="Nhập họ và tên..." />
            </div>

            <div class="mb-3">
                <label class="form-label">Email:</label>
                <input v-model="form.email" type="email" class="form-control" placeholder="Nhập email..." />
            </div>

            <div class="mb-3">
                <label class="form-label">Mật khẩu:</label>
                <input v-model="form.password" type="password" class="form-control" placeholder="Nhập mật khẩu..." />
            </div>

            <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
        </form>

        <!-- Hiển thị kết quả sau khi submit -->
        <div v-if="submitted" class="alert alert-success mt-3">
            <h5>Dữ liệu đã gửi:</h5>
            <p><strong>Họ tên:</strong> {{ submitData.name }}</p>
            <p><strong>Email:</strong> {{ submitData.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
    name:'',
    email:'',
    password:''
})

const submitted  = ref(false);
const submitData = reactive({email:'',name:''});

const handleSubmit =()=>{
    if(!form.name || !form.email || !form.password){
        alert('Vui lòng nhập đủ thông tin')
        return
    }

    submitData.name = form.name
    submitData.email = form.email

    submitted.value = true
    console.log('Dữ liệu form:', { ...form })

    form.name = '',
    form.email= '',
    form.password = ''
}
</script>