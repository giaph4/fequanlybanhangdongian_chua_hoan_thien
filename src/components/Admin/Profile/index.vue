<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                aria-selected="true">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-user font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Profile</div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-lock font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Đổi mật khẩu</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content py-3">
                        <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                            <div class="row">
                                <div class="col-lg-4 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="d-flex flex-column align-items-center text-center">
                                                <img src="https://rypuop.stripocdn.email/content/guids/CABINET_cffa413c5ccab048888fec6cc485b815f8f80028a73882101227ae6949ec8f11/images/387321979_687594463281792_7574468668499025541_n.jpg"
                                                    style="width: 140px; height: 140px;" alt="Admin"
                                                    class="rounded-circle p-1 bg-primary">
                                                <div class="mt-3">
                                                    <h4>{{ nhan_vien.ho_va_ten }}</h4>
                                                    <p class="text-secondary mb-1">Nhân Viên</p>
                                                    <p class="text-muted font-size-sm">32 Xuân Diệu, Đà Nẵng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Họ và Tên</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input v-model="nhan_vien.ho_va_ten" type="text"
                                                        class="form-control" placeholder="Nhập họ và tên">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Email</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input v-model="nhan_vien.email" type="text" class="form-control"
                                                        placeholder="Nhập email">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Số Điện Thoại</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input v-model="nhan_vien.so_dien_thoai" type="text"
                                                        class="form-control" placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Địa Chỉ</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input v-model="nhan_vien.dia_chi" type="text" class="form-control"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3"></div>
                                                <div class="col-lg-9 text-secondary">
                                                    <button type="button" class="btn btn-primary px-4">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                            <div class="col">
                                <h4>Thay đổi mật khẩu</h4>
                            </div>
                            <div class="col">Quản lý mật khẩu để bảo mật tài khoản</div>
                            <hr>
                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Mật khẩu cũ</label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="text" placeholder="Nhập mật khẩu cũ" class="form-control">
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Mật khẩu mới</label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="password" placeholder="Nhập mật khẩu mới" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Nhập lại Mật khẩu mới </label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="password" placeholder="Nhập lại mật khẩu mới" class="form-control">
                                </div>
                            </div>
                            <button class="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            nhan_vien: {},
        }
    },

    mounted() {
        this.loadNhanVien();
    },
    methods: {
        loadNhanVien() {
            axios
                .get('http://127.0.0.1:8000/api/admin/profile/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_nhan_vien")
                    }
                })
                .then((res) => {
                    this.nhan_vien = res.data.data;
                })
        },
    }
}
</script>
<style></style>