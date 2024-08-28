<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Khách Hàng</h4>

                </div>
                <div class="card-body">
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
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Họ Và Tên</th>
                                <th>Email</th>
                                <th>Số Điện Thoại</th>
                                <th>Trạng Thái</th>
                                <th>Kích Hoạt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_khach_hang" :key="k">
                                <tr class="align-middle">
                                    <th class="text-center">{{ k + 1 }}</th>
                                    <td>{{ v.ho_va_ten }}</td>
                                    <td>{{ v.email }}</td>
                                    <td class="text-center">{{ v.so_dien_thoai }}</td>
                                    <td class="align-middle text-center">
                                        <template v-if="v.is_block == 1">
                                            <button v-on:click="changeStatus(v)" class="btn btn-success">Hiển
                                                thị</button>
                                        </template>
                                        <template v-else>
                                            <button v-on:click="changeStatus(v)" class="btn btn-warning">Block</button>
                                        </template>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-primary me-1">
                                            Đã Kích Hoạt
                                        </button>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-primary me-1" data-bs-toggle="modal"
                                            data-bs-target="#capNhatKhachhangModal"
                                            v-on:click="Object.assign(edit_khach_hang, v)">Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaKhachhangModal"
                                            v-on:click="Object.assign(delete_khach_hang, v)">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="capNhatKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Họ và Tên</label>
                        <input v-model="edit_khach_hang.ho_va_ten" type="text" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Email</label>
                        <input v-model="edit_khach_hang.email" type="email" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Số Điện Thoại</label>
                        <input v-model="edit_khach_hang.so_dien_thoai" type="text" class="form-control">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="capNhatKhachHang()">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="xoaKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                <div class="text-white">Bạn Có chắc chắn xóa tài khoản <b>{{ delete_khach_hang.ho_va_ten
                                        }}</b> này không!</div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="xoaKhachHang()">Xóa</button>
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
            create_khach_hang: {},
            edit_khach_hang: {},
            delete_khach_hang: {},
            list_khach_hang: [],
            search: {}
        }
    },

    mounted() {
        this.loadKhachHang();
    },
    methods: {
        TimKiemBE() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/tim-kiem', this.search)
                .then((res) => {
                    this.list_nhan_vien = res.data.data
                })
        },
        loadKhachHang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang/data')
                .then((res) => {
                    this.list_khach_hang = res.data.data;
                })
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/create', this.create_khach_hang)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadKhachHang();
                    };
                    this.create_khach_hang = {}
                })
        },
        capNhatKhachHang() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/update', this.edit_khach_hang)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadKhachHang();
                    };
                })

        },
        xoaKhachHang() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/delete', this.delete_khach_hang)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadKhachHang();
                    };
                })

        },
        changeStatus(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadKhachHang();
                    }
                })
        }
    }
}
</script>
<style></style>
