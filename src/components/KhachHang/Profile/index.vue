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
                            <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-address-book font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Địa chỉ nhận hàng</div>
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
                                                    <h4>Nguyễn Quốc Long</h4>
                                                    <p class="text-secondary mb-1">Khách Hàng</p>
                                                    <p class="text-muted font-size-sm">32 Xuân Diệu, Hải Châu,
                                                        Đà Nẵng</p>
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
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập họ và tên">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Email</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <label class="form-control">quoclongdng@gmail.com</label>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Số Điện Thoại</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input type="text" class="form-control"
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
                        <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                            <div class="row">
                                <div class="col-7">
                                    <h2>Địa chỉ nhận hàng</h2>
                                </div>
                                <div class="col-5 text-end">
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#themModal">
                                        <i class="fa-solid fa-plus"></i>Thêm địa chỉ
                                    </button>
                                </div>
                                <hr>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <template v-for="(v, k) in list" :key="k">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h5 class="mb-4">Địa chỉ</h5>
                                                {{ v.ten_nguoi_nhan }} | ({{ v.so_dien_thoai }})
                                                <div class="row">
                                                    <div class="col-lg-6">{{ v.dia_chi }}</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3"></div>
                                            <div class="col-lg-2 text-end">
                                                <div class="row mb-2 mt-3">
                                                    <button v-on:click="Object.assign(delete_dia_chi, v)" type="button" class="btn btn-danger px-5 radius-30"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal">Xoá</button>
                                                </div>
                                                <div class="row">
                                                    <button v-on:click="Object.assign(edit_dia_chi, v)" type="button" class="btn btn-primary px-5 radius-30"
                                                        data-bs-toggle="modal" data-bs-target="#capnhatModal">Cập
                                                        Nhật</button>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                style="display: none;" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3 class="modal-title" id="exampleModalLabel">Xoá</h3>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div
                                                class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="mb-0 text-dark">Lưu ý!</h6>
                                                        <div class="text-dark">
                                                            Dòng này sẽ bị xoá vĩnh viễn!
                                                            <br>
                                                            Bạn có chắc chắn muốn xoá <b>{{ delete_dia_chi.dia_chi }}</b>
                                                            không?
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button v-on:click="deleteDiaChi()" type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Xoá</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="capnhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true" style="display: none;">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cập nhật địa chỉ</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label class="mb-2">Tên Người Nhận:</label>
                                                    <input v-model="edit_dia_chi.ten_nguoi_nhan" type="text" class="form-control" placeholder="Họ và tên">
                                                </div>
                                                <div class="col-lg-6">
                                                    <label class="mb-2">Số điện thoại:</label>
                                                    <input v-model="edit_dia_chi.so_dien_thoai" type="text" class="form-control" placeholder="Số điện thoại">
                                                </div>
                                            </div>
                                            <label class="mt-2 mb-2">Địa chỉ:</label>
                                            <input v-model="edit_dia_chi.dia_chi" type="text" class="form-control"
                                                placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button v-on:click="updateDiaChi()" type="button" class="btn btn-primary"
                                                data-bs-dismiss="modal">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="themModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm địa chỉ
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label class="mb-2">Tên Người Nhận:</label>
                                                    <input v-model="create_dia_chi.ten_nguoi_nhan" type="text" class="form-control" placeholder="Họ và tên">
                                                </div>
                                                <div class="col-lg-6">
                                                    <label class="mb-2">Số điện thoại:</label>
                                                    <input v-model="create_dia_chi.so_dien_thoai" type="text" class="form-control" placeholder="Số điện thoại">
                                                </div>
                                            </div>
                                            <label class="mt-2 mb-2">Địa chỉ:</label>
                                            <input v-model="create_dia_chi.dia_chi" type="text" class="form-control"
                                                placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã">

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Trở
                                                lại</button>
                                            <button v-on:click="createDiaChi()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Hoàn
                                                Thành</button>
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
import axios from 'axios'
export default {
    data() {
        return {
            list: [],
            create_dia_chi : {},
            edit_dia_chi : {},
            delete_dia_chi : {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/dia-chi/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_khach_hang")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                });
        },
        createDiaChi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dia-chi/create', this.create_dia_chi, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    };
                    this.create_dia_chi = {}
                })
        },
        updateDiaChi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dia-chi/update', this.edit_dia_chi, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    };
                })

        },
        deleteDiaChi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/dia-chi/delete', this.delete_dia_chi, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    };
                })

        },
    },
}
</script>
<style></style>