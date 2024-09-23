<template>
    <div class="row">
        <div class="col-lg-5">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH SẢN PHẨM</b></h6>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th colspan="3">
                                    <div class="input-group mt-3 w-100">
                                        <input v-on:keyup.enter="TimKiemBE()" v-model="search.noi_dung" type="text"
                                            class="form-control search-control border border-1 border-secondary"
                                            placeholder="Search...">
                                        <span class="position-absolute top-50 search-show translate-middle-y"
                                            style="left: 15px;"><i class="bx bx-search"></i></span>
                                        <button v-on:click="TimKiemBE()" class="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Tìm
                                            Kiếm</button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Sản Phẩm</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_san_pham" :key="k">
                                <tr>
                                    <th class="align-middle text-center">{{ k + 1 }}</th>
                                    <td class="align-middle text-wrap">{{ v.ten_san_pham }}</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary">Add</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH ĐANG NHẬP KHO</b></h6>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Tên Sản Phẩm</th>
                                <th class="text-center align-middle">Số Lượng</th>
                                <th class="text-center align-middle">Đơn Giá</th>
                                <th class="text-center align-middle">Thành Tiền</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_nhap_kho" :key="k">
                                <tr>
                                    <th class="align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle text-wrap">{{ v.ten_san_pham }}</td>
                                    <td class="align-middle text-center">
                                        <input v-model="v.so_luong" type="number" class="form-control text-center">
                                    </td>
                                    <td class="align-middle text-center">
                                        <input v-model="v.don_gia" type="number" class="form-control text-center">
                                    </td>
                                    <td class="align-middle text-center">{{ v.thanh_tien }}</td>
                                    <td class="align-middle">
                                        <button class="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="4"></th>
                                <th colspan="2">
                                    <button class="btn btn-primary w-100">Nhập Kho</button>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
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
            list_nhap_kho: [],
            list_san_pham: [],
            search: {},
        }
    },


    mounted() {
        this.loadNhapKho();
        this.loadSanPham();
    },
    methods: {
        TimKiemBE() {
            axios
                .post('http://127.0.0.1:8000/api/dai-ly/san-pham/tim-kiem', this.search)
                .then((res) => {
                    this.list_san_pham = res.data.data
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'Error');
                    });
                });
        },
        loadNhapKho() {
            axios
                .get('http://127.0.0.1:8000/api/dai-ly/nhap-kho/data')
                .then((res) => {
                    this.list_nhap_kho = res.data.data;
                })
        },
        loadSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/dai-ly/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                })
        },
    }
}
</script>
<style></style>