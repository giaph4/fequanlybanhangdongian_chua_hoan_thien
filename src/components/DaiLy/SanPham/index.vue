<template>
    <div class="modal fade" id="themSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="form-lable">Tên Sản Phẩm</label>
                                <input v-model="create.ten_san_pham" type="text" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Slug Sản Phẩm</label>
                                <input v-model="create.slug_san_pham" type="text" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Số Lượng</label>
                                <input v-model="create.so_luong" type="number" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Đơn Giá</label>
                                <input v-model="create.don_gia" type="number" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Giá Khuyến Mãi</label>
                                <input v-model="create.gia_khuyen_mai" type="number" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Sao Đánh Giá</label>
                                <input v-model="create.sao_danh_gia" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="form-lable">Hình Ảnh</label>
                                <input v-model="create.hinh_anh" type="text" class="form-control">
                            </div>
                            <div class="mb-2">
                                <label class="form-lable">Danh Mục</label>
                                <select v-model="create.id_danh_muc" class="form-control">
                                    <template v-for="(v, k) in list_danh_muc" :key="k">
                                        <option v-bind:value="v.id">{{ v.ten_danh_muc }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label>Mô tả ngắn</label>
                                <input v-model="create.mo_ta_ngan" type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Mô tả chỉ tiết</label>
                                <textarea v-model="create.ma_ta_chi_tiet" class="form-control mt-2" cols="30"
                                    rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="themMoi()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm
                        mới</button>
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
    <div class="modal fade" id="moTaChiTiet" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Mô Tả Chi Tiết Sản Phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quisquam cumque corrupti facilis,
                    modi
                    cum debitis, dicta omnis repellendus reprehenderit repudiandae. Cumque laboriosam officiis quos
                    doloremque. Et odio porro totam.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH SẢN PHẨM</b></h6>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themSP">Thêm mới sản
                        phẩm</button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Hình Ảnh</th>
                                <th class="text-center">Tên Sản Phẩm</th>
                                <th class="text-center">Slug Sản Phẩm</th>
                                <th class="text-center">Số Lượng</th>
                                <th class="text-center">Giá Bán</th>
                                <th class="text-center">Giá Khuyến Mãi</th>
                                <th class="text-center">Mô Tả Ngắn</th>
                                <th class="text-center">Mô Tả Chi Tiết</th>
                                <th class="text-center">Sao Đánh Giá</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_san_pham" :key="index">
                                <tr>
                                    <th class="align-middle">{{ index + 1 }}</th>
                                    <th class="align-middle text-center">
                                        <img style="max-height: 200px;" v-bind:src="value.hinh_anh" class="img-fluid"
                                            alt="">
                                    </th>
                                    <td class="align-middle text-wrap">{{ value.ten_san_pham }}</td>
                                    <td class="align-middle text-wrap">{{ value.slug_san_pham }}</td>
                                    <td class="align-middle">{{ value.so_luong }}</td>
                                    <td class="align-middle text-end">{{ value.don_gia }}</td>
                                    <td class="align-middle text-end">{{ value.gia_khuyen_mai }}</td>
                                    <td class="align-middle text-wrap">{{ value.mo_ta_ngan }}</td>
                                    <td class="align-middle text-center">
                                        <i class="fa-solid fa-newspaper fa-2xl" data-bs-toggle="modal"
                                            data-bs-target="#moTaChiTiet"></i>
                                    </td>
                                    <td class="align-middle text-center">{{ value.sao_danh_gia }}</td>
                                    <td class="align-middle">
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
</template>
<script>
import axios from 'axios';


export default {
    data() {
        return {
            create: {
                'id_danh_muc': '',
                'ten_san_pham': '',
                'slug_san_pham': '',
                'don_gia': '',
                'gia_khuyen_mai': '',
                'hinh_anh': '',
                'sao_danh_gia': '',
            },
            list_danh_muc: [],
            list_san_pham: [],

        }
    },


    mounted() {
        this.loadDanhMuc();
        this.loadSanPham();
    },
    methods: {
        loadDanhMuc() {
            axios
                .get('http://127.0.0.1:8000/api/admin/danh-muc/data')
                .then((res) => {
                    this.list_danh_muc = res.data.data;
                })
        },
        loadSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/dai-ly/san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                })
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/dai-ly/san-pham/create', this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                    };
                    this.create = {
                        'id_danh_muc': '',
                        'ten_san_pham': '',
                        'slug_san_pham': '',
                        'don_gia': '',
                        'gia_khuyen_mai': '',
                        'hinh_anh': '',
                        'sao_danh_gia': '',
                    }
                })
        }
    }
}
</script>
<style></style>