<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                <div class="col mx-auto">
                    <div class="my-4 text-center">
                        <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">ĐĂNG NHẬP ĐẠI LÝ</h3>
                                </div>
                                <div class="login-separater text-center mb-4">
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </div>
                                                <input v-model="tai_khoan.email" type="email"
                                                    class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Password</label>
                                            <div class="input-group">
                                                <div class="input-group-text bg-transparent"><i
                                                        class="fa-solid fa-lock"></i></div>
                                                <input v-model="tai_khoan.password" type="password"
                                                    class="form-control border-end-0">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="Login()" type="button"
                                                    class="btn btn-primary"><i class="fa-solid fa-lock-open"></i>Đăng
                                                    Nhập</button>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <router-link to="/dai-ly/dang-ky">
                                                <button type="button" class="btn btn-danger w-100"><i
                                                        class='bx bx-user'></i>Đăng Ký</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tai_khoan: {},
        }
    },
    methods: {
        Login() {
            axios
                .post("http://127.0.0.1:8000/api/dai-ly/dang-nhap", this.tai_khoan)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        // Lưu lại ở trình duyệt
                        localStorage.setItem('tk_dai_ly', res.data.id);
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        },
    },
}
</script>
<style></style>