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
                                    <h3 class="">Đăng Ký</h3>
                                </div>
                                <hr>
                                <div class="form-body">
                                    <form class="row g-3">
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Họ Và Tên</label>
                                            <div class="input-group" id="show_hide_password" aria-placeholder="Nhập họ và tên">
                                                <input v-model="dang_ky.ho_va_ten" type="text" class="form-control border-end-0"
                                                    id="inputChoosePassword"
                                                    placeholder="Enter Password"> <a href="javascript:;"
                                                    class="input-group-text bg-transparent"></a>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputEmailAddress" class="form-label">Email Address</label>
                                            <input v-model="dang_ky.email" type="email" class="form-control" id="inputEmailAddress"
                                                placeholder="Nhập email">
                                        </div>                                      
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Số Điện Thoại</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="dang_ky.so_dien_thoai" type="text" class="form-control border-end-0"
                                                    id="inputChoosePassword"
                                                    placeholder="Nhập số điện thoại"> <a href="javascript:;"
                                                    class="input-group-text bg-transparent"></a>
                                            </div>
                                        </div> 
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Nhập mật khẩu</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input v-model="dang_ky.password" type="password" class="form-control border-end-0"
                                                    id="inputChoosePassword"
                                                    placeholder="Nhập mật khẩu"> <a href="javascript:;"
                                                    class="input-group-text bg-transparent"><i
                                                        class='bx bx-hide'></i></a>
                                            </div>
                                        </div>                                     
                                        <div class="col-md-6">
                                        </div>
                                        <div class="col-md-6 text-end"><a
                                                href="/khach-hang/quen-mat-khau">Forgot Password ?</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button v-on:click="themMoi()" type="submit" class="btn btn-danger mt-3"><i
                                                        class="bx bx-user"></i>Đăng Ký</button>
                                            </div>
                                        </div>
                                    </form>
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
            dang_ky: { 'ho_va_ten': '', 'email': '', 'so_dien_thoai': '', 'password':''},
            
        }
    },
    methods: {
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dang-ky', this.dang_ky)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                    }
                })
        }
    }
}
</script>
<style></style>