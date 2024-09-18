<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH ĐẠI LÝ</b></h6>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoiDL">Thêm Mới</button>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mt-3 w-100">
                        <input v-on:keyup.enter="TimKiemBE()" v-model="search.noi_dung" type="text" class="form-control search-control border border-1 border-secondary"
                            placeholder="Search...">
                        <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                class="bx bx-search"></i></span>
                        <button v-on:click="TimKiemBE()" class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm
                            Kiếm</button>
                    </div>
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Họ Và Tên</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Số Điện Thoại</th>
                                <th class="text-center">Ngày Sinh</th>
                                <th class="text-center">Tên Doanh Nghiệp</th>
                                <th class="text-center">Mã Số Thuế</th>
                                <th class="text-center">Địa Chỉ Kinh Doanh</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">VIP</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_dai_ly" :key="k">
                                <tr>
                                    <th class="align-middle text-center">{{ k + 1 }}</th>
                                    <td class="align-middle">{{ v.ho_va_ten }}</td>
                                    <td class="align-middle">{{ v.email }}</td>
                                    <td class="align-middle">{{ v.so_dien_thoai }}</td>
                                    <td class="align-middle text-center">{{ v.ngay_sinh }}</td>
                                    <td class="align-middle">{{ v.ten_doanh_nghiep }}</td>
                                    <td class="align-middle">{{ v.ma_so_thue }}</td>
                                    <td class="align-middle">{{ v.dia_chi_kinh_doanh }}</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-success w-100">Đã Kích
                                            Hoạt</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-success w-100">Mở</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" v-on:click="Object.assign(edit_dai_ly, v)"
                                            data-bs-toggle="modal" data-bs-target="#capnhatDM">Cập
                                            nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            v-on:click="Object.assign(delete_dai_ly, v)"
                                            data-bs-target="#delModal">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        <div class="modal fade" id="themmoiDL" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Đại Lý</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2">
                            <label>Họ Và Tên</label>
                            <input v-model="create_dai_ly.ho_va_ten" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Email</label>
                            <input v-model="create_dai_ly.email" type="email" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Số Điện Thoại</label>
                            <input v-model="create_dai_ly.so_dien_thoai" type="tel" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Ngày Sinh</label>
                            <input v-model="create_dai_ly.ngay_sinh" type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Password</label>
                            <input v-model="create_dai_ly.password" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Tên Doanh Nghiệp</label>
                            <input v-model="create_dai_ly.ten_doanh_nghiep" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Mã Số Thuế</label>
                            <input v-model="create_dai_ly.ma_so_thue" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Địa Chỉ Kinh Doanh</label>
                            <input v-model="create_dai_ly.dia_chi_kinh_doanh" type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="themMoi()">Thêm
                            Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Đại Lý</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" role="alert">
                            Bạn có chắc muốn xóa đại lý <b class="text-danger">{{ delete_dai_ly.ten_doanh_nghiep
                                }}</b>
                            này
                            không?
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                            v-on:click="xoaDaiLy()">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật Đại Lý</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-2">
                            <label>Họ Và Tên</label>
                            <input v-model="edit_dai_ly.ho_va_ten" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Email</label>
                            <input v-model="edit_dai_ly.email" type="email" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Số Điện Thoại</label>
                            <input v-model="edit_dai_ly.so_dien_thoai" type="tel" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Ngày Sinh</label>
                            <input v-model="edit_dai_ly.ngay_sinh" type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Tên Doanh Nghiệp</label>
                            <input v-model="edit_dai_ly.ten_doanh_nghiep" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Mã Số Thuế</label>
                            <input v-model="edit_dai_ly.ma_so_thue" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Địa Chỉ Kinh Doanh</label>
                            <input v-model="edit_dai_ly.dia_chi_kinh_doanh" type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="capNhatDaiLy()">Cập
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
            create_dai_ly: {},
            edit_dai_ly: {},
            delete_dai_ly: {},
            list_dai_ly: [],
            search: {},
        }
    },

    mounted() {
        this.loadDaiLy();
    },
    methods: {
        TimKiemBE() {
            axios
                .post('http://127.0.0.1:8000/api/admin/dai-ly/tim-kiem', this.search)
                .then((res) => {
                        this.list_dai_ly = res.data.data
                })
        },
        loadDaiLy() {
            axios
                .get('http://127.0.0.1:8000/api/admin/dai-ly/data')
                .then((res) => {
                    this.list_dai_ly = res.data.data;
                })
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/dai-ly/create', this.create_dai_ly)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDaiLy();
                    };
                    this.create_dai_ly = {}
                })
        },
        capNhatDaiLy() {
            axios
                .post('http://127.0.0.1:8000/api/admin/dai-ly/update', this.edit_dai_ly)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDaiLy();
                    };
                })

        },
        xoaDaiLy() {
            axios
                .post('http://127.0.0.1:8000/api/admin/dai-ly/delete', this.delete_dai_ly)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDaiLy();
                    };
                })

        },
        changeStatus(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/dai-ly/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDaiLy();
                    }
                })
        }
    }
}
</script>
<style></style>
