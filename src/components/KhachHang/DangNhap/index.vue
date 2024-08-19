<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                    <div class="mb-4 text-center">
                        <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180"/>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">Đăng Nhập</h3>
                                    <p>Don't have an account yet? 
                                        <router-link to="/khach-hang/dang-ky">
                                            <a href="/khach-hang/dang-ky">Đăng Ký Ở Đây</a>
                                        </router-link>
                                    </p>
                                </div>
                                <hr>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label for="inputEmailAddress" class="form-label">Email Address</label>
                                            <input v-model="tk.email" type="email" class="form-control" id="inputEmailAddress"
                                                placeholder="Nhập email">
                                        </div>                                      
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Nhập mật khẩu</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="tk.password" type="password" class="form-control border-end-0"
                                                    id="inputChoosePassword"
                                                    placeholder="Nhập mật khẩu"> <a href="javascript:;"
                                                    class="input-group-text bg-transparent"><i
                                                        class='bx bx-hide'></i></a>
                                            </div>
                                        </div>                                     
                                        <div class="col-md-6">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckChecked" checked>
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 text-end"><a
                                                href="authentication-forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="login()" type="button" class="btn btn-danger mt-3"><i
                                                        class="bx bx-user"></i>Đăng Nhập</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            tk: {'email': '', 'password':''},
            
        }
    },
    methods: {
       login() {
        axios
        .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap", this.tk)
        .then((res) => {
            if(res.data.status) {
                this.$toast.success(res.data.message);
                localStorage.setItem('tk_khach_hang', res.data.id);
            } else {
                this.$toast.error(res.data.message);
            }
        });
       }
    }
}
</script>
<style></style>