<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h4>Danh Sách Đơn Hàng Đại Lý</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Mã Đơn Hàng</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Tên Khách Hàng</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Tổng Tiền Thanh Toán</th>
                                <th>Thanh Toán</th>
                                <th>Tình Trạng Đơn Hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_don_hang" :key="k">
                                <tr class="align-middle">
                                    <th>{{ k + 1 }}</th>
                                    <td class="text-center">{{ v.ma_don_hang }}</td>
                                    <td>{{ v.ten_san_pham }}</td>
                                    <td>{{ v.ten_nguoi_nhan }}</td>
                                    <td class="text-center">{{ v.so_dien_thoai }}</td>
                                    <td>{{ v.dia_chi }}</td>
                                    <td class="text-end">{{ v.so_tien_thanh_toan }} đ</td>
                                    <td class="text-center">
                                        <button v-if="v.is_thanh_toan == 0" class="btn btn-danger w-100">Chưa Thanh Toán</button>
                                        <button v-else class="btn btn-success w-100">Đã Thanh Toán</button>
                                    </td>
                                    <td class="text-center">
                                        <button v-if="v.tinh_trang == 0" class="btn btn-success w-100"
                                        data-bs-toggle="modal" data-bs-target="#tinhTrangModal">Đã Đặt Hàng</button>
                                    <button v-else-if="v.tinh_trang == 1" class="btn btn-warning w-100"
                                        data-bs-toggle="modal" data-bs-target="#tinhTrangModal">Đang Xử
                                        Lý</button>
                                    <button v-else-if="v.tinh_trang == 2" class="btn btn-info w-100"
                                        data-bs-toggle="modal" data-bs-target="#tinhTrangModal">Đang Vận
                                        Chuyển</button>
                                    <button v-else-if="v.tinh_trang == 3" class="btn btn-primary w-100">Đã Giao</button>
                                    <button v-else class="btn btn-danger w-100">Đã Hủy</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="tinhTrangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Tình Trạng Đơn Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-check">
                                    <input value="0" class="form-check-input" type="radio" name="flexRadioDefault"
                                        checked>
                                    <label class="form-check-label">Đã Đặt Hàng</label>
                                </div>
                                <div class="form-check">
                                    <input value="1" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đang Xử Lý</label>
                                </div>
                                <div class="form-check">
                                    <input value="2" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đang Vận Chuyển</label>
                                </div>
                                <div class="form-check">
                                    <input value="3" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đã Giao Hàng</label>
                                </div>
                                <div class="form-check">
                                    <input value="4" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đã Hủy</label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                            </div>
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
            list_don_hang: [],
        }
    },


    mounted() {
        this.loadDonHang();
    },
    methods: {
        loadDonHang() {
            axios
                .get('http://127.0.0.1:8000/api/dai-ly/don-hang/data')
                .then((res) => {
                    this.list_don_hang = res.data.data;
                })
        },
    }
}
</script>
<style></style>