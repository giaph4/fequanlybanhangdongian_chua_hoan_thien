<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH NHÂN VIÊN</b></h6>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm Mới
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <div class="" style="margin-top: -15px;">
                        <nav class="navbar bg-body-tertiary">
                            <div class="container-fluid">
                                <input v-on:keyup.enter="TimKiemBE()" v-model="search.noi_dung" style="width: 1180px;"
                                    class="form-control me-2" type="text" placeholder="Search">
                                <button v-on:click="TimKiemBE()" class="btn btn-outline-success"
                                    type="button">Search</button>
                            </div>
                        </nav>
                    </div>
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Họ Và Tên</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Số Điện Thoại</th>
                                <th class="text-center">Địa Chỉ</th>
                                <th class="text-center">Quyền</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_nhan_vien" :key="k">
                                <tr>
                                    <th class="align-middle text-center">{{ k + 1 }}</th>
                                    <td class="align-middle">{{ v.ho_va_ten }}</td>
                                    <td class="align-middle">q{{ v.email }}</td>
                                    <td class="align-middle">{{ v.so_dien_thoai }}</td>
                                    <td class="align-middle text-center">{{ v.dia_chi }}</td>
                                    <td class="align-middle text-center">{{ v.id_quyen }}</td>
                                    <td class="align-middle text-center">
                                        <template v-if="v.tinh_trang == 1">
                                            <button v-on:click="changeStatus(v)" class="btn btn-success w-100">Hoạt
                                                Động</button>
                                        </template>
                                        <template v-else>
                                            <button v-on:click="changeStatus(v)"
                                                class="btn btn-warning w-100">Tắt</button>
                                        </template>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#capnhatDM"
                                            v-on:click="Object.assign(edit_nhan_vien, v)">Cập nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            v-on:click="Object.assign(delete_nhan_vien, v)"
                                            data-bs-target="#delModal">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Nhân Viên</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2">
                            <label class="form-lable">Họ Và Tên</label>
                            <input v-model="create_nhan_vien.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Email</label>
                            <input v-model="create_nhan_vien.email" type="email" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Số Điện Thoại</label>
                            <input v-model="create_nhan_vien.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Password</label>
                            <input v-model="create_nhan_vien.password" type="password" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Địa Chỉ</label>
                            <input v-model="create_nhan_vien.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Quyền</label>
                            <select v-model="create_nhan_vien.id_quyen" class="form-control mt-2">
                                <option value="0">Admin</option>
                                <option value="1">Nhân Viên</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Tình Trạng</label>
                            <select v-model="create_nhan_vien.tinh_trang" class="form-control">
                                <option value="0">Tạm Dừng</option>
                                <option value="1">Hoạt Động</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button v-on:click="createNhanVien()" class="btn btn-danger">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhân Viên</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" role="alert">
                            Bạn có chắc muốn xóa Nhân Viên <b class="text-danger">{{ delete_nhan_vien.ho_va_ten
                                }}</b>
                            này
                            không?
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="xoaNhanVien()">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật Nhân Viên</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2">
                            <label class="form-lable">Họ Và Tên</label>
                            <input v-model="edit_nhan_vien.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Email</label>
                            <input v-model="edit_nhan_vien.email" type="email" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Số Điện Thoại</label>
                            <input v-model="edit_nhan_vien.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Địa Chỉ</label>
                            <input v-model="edit_nhan_vien.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="mb-2">
                            <label>Quyền</label>
                            <select v-model="edit_nhan_vien.id_quyen" class="form-control mt-2">
                                <option value="0">Admin</option>
                                <option value="1">Nhân Viên</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="form-lable">Tình Trạng</label>
                            <select v-model="edit_nhan_vien.tinh_trang" class="form-control">
                                <option value="0">Tạm Dừng</option>
                                <option value="1">Hoạt Động</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="capNhatNhanVien()">Cập
                            nhật</button>
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
            create_nhan_vien: { 'ho_va_ten': '', 'email': '', 'so_dien_thoai': '', 'password': '', 'dia_chi': '', 'tinh_trang': '', 'id_quyen': 0 },
            edit_nhan_vien: {},
            delete_nhan_vien: {},
            list_nhan_vien: [],
            search: {}
        }

    },
    mounted() {
        this.loadNhanVien();
    },
    methods: {
        TimKiemBE() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/tim-kiem', this.search)
                .then((res) => {
                    this.list_nhan_vien = res.data.data
                })
        },
        loadNhanVien() {
            axios
                .get('http://127.0.0.1:8000/api/admin/nhan-vien/data')
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                })
        },
        createNhanVien() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/create', this.create_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadNhanVien();
                    }
                })
        },
        capNhatNhanVien() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/update', this.edit_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadNhanVien();
                    };
                })

        },
        xoaNhanVien() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/delete', this.delete_nhan_vien)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadNhanVien();
                    };
                })

        },
        changeStatus(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadNhanVien();
                    }
                })
        }
    }
}
</script>
<style></style>
