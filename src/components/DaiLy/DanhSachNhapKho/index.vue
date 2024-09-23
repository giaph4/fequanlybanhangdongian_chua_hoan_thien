<template>
    <div class="modal fade" id="moTaChiTiet" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ghi Chú</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ABCXYZ
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
                <div class="card-header ">
                    <h6><b>DANH SÁCH NHẬP KHO</b></h6>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Sản Phẩm</th>
                                <th class="text-center">Số Lượng</th>
                                <th class="text-center">Đơn Giá</th>
                                <th class="text-center">Thành Tiền</th>
                                <th class="text-center">Ngày Nhập</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_nhap_kho" :key="k">
                                <tr>
                                    <th class="align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle text-wrap">{{ v.ten_san_pham }}</td>
                                    <td class="align-middle text-center">{{ v.so_luong }}</td>
                                    <td class="align-middle text-end">{{ v.don_gia }}đ</td>
                                    <td class="align-middle text-end">{{ v.thanh_tien }}đ</td>
                                    <td class="align-middle text-center">{{ v.created_at }}</td>
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
            list_nhap_kho: [],
        }
    },


    mounted() {
        this.loadNhapKho();
    },
    methods: {
        loadNhapKho() {
            axios
                .get('http://127.0.0.1:8000/api/dai-ly/nhap-kho/data-kho')
                .then((res) => {
                    this.list_nhap_kho = res.data.data;
                })
        },
    }
}
</script>
<style></style>