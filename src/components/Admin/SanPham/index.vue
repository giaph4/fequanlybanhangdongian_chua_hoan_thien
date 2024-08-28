<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center"><b>DANH SÁCH SẢN PHẨM</b></h4>
                </div>
                <div class="card-body">
                    <div class="" style="margin-top: -15px;">
                        <nav class="navbar bg-body-tertiary">
                            <div class="container-fluid">
                                <input v-on:keyup.enter="TimKiemBE()" v-model="search.noi_dung" style="width: 1160px;"
                                    class="form-control me-2" type="text" placeholder="Search">
                                <button v-on:click="TimKiemBE()" class="btn btn-outline-success"
                                    type="button">Search</button>
                            </div>
                        </nav>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Sản Phẩm</th>
                                <th class="text-center">Hình Ảnh</th>
                                <th class="text-center">Giá Bán</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_san_pham" :key="k">
                                <tr class="align-middle">
                                    <td>{{ k + 1 }}</td>
                                    <td>{{ v.ten_san_pham }}</td>
                                    <td class="text-nowrap text-center">
                                        <img v-bind:src="v.hinh_anh" style="width: 200px;" class="img-fluid">
                                    </td>
                                    <td>
                                        <p><del>Giá Bán: {{ v.don_gia }}</del></p>
                                        Giá KM: {{ v.gia_khuyen_mai }}
                                    </td>
                                    <td class="text-nowrap text-center">
                                        <p>
                                            <button v-if="v.is_flash_sale == 1" v-on:click="doiTrangThai(v.id, 1)"
                                                class="btn btn-primary w-100">Flash Sale</button>
                                            <button v-else v-on:click="doiTrangThai(v.id, 1)"
                                                class="btn btn-warning w-100">Flash
                                                Sale</button>
                                        </p>
                                        <p>
                                            <button v-if="v.is_noi_bat == 1" v-on:click="doiTrangThai(v.id, 2)"
                                                class="btn btn-primary w-100">Nổi Bật</button>
                                            <button v-else v-on:click="doiTrangThai(v.id, 2)"
                                                class="btn btn-warning w-100">Nổi
                                                Bật</button>
                                        </p>
                                        <p>
                                            <button v-if="v.is_hom_nay == 1" v-on:click="doiTrangThai(v.id, 3)"
                                                class="btn btn-primary w-100">Hôm Nay</button>
                                            <button v-else v-on:click="doiTrangThai(v.id, 3)"
                                                class="btn btn-warning w-100">Hôm
                                                Nay</button>
                                        </p>
                                    </td>
                                    <td class="text-nowrap text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#suaSP">Cập
                                            nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#delSP">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="suaSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa thông tin sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Sản Phẩm</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Slug Sản phẩm</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Số Lượng</label>
                                <input type="number" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Giá bán</label>
                                <input type="number" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Giá khuyến mãi</label>
                                <input type="number" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Sao Đánh Giá</label>
                                <input type="number" class="form-control mt-2">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Hình ảnh</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Danh Mục</label>
                                <select class="form-control mt-2">
                                    <option value="1">Điện Thoại</option>
                                    <option value="0">LapTop</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label>Mô tả ngắn</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Mô tả chỉ tiết</label>
                                <textarea class="form-control mt-2" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                        nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="delSP" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa Sản Phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc muốn xóa sản phẩm <b class="text-danger">Iphone 16</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
            list_san_pham: [],
            search: {},
        }
    },
    mounted() {
        this.loadData();
    },

    methods: {
        TimKiemBE() {
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/tim-kiem', this.search)
                .then((res) => {
                    this.list_san_pham = res.data.data
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'Error');
                    });
                });
        },
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/admin/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                })
        },
        doiTrangThai(id, type) {
            var payload = {
                "id": id,
                "type": type
            };
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/change-type', payload)
                .then((res) => {
                    this.loadData();
                })
        }
    },
}
</script>
<style></style>