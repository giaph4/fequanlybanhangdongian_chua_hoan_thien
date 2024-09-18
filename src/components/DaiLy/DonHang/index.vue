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
                            <tr class="align-middle">
                                <th>1</th>
                                <td class="text-center">DZ01</td>
                                <td>AAAA</td>
                                <td>Nguyễn Quốc Long</td>
                                <td class="text-center">0123456789</td>
                                <td>32 Xuân Diệu, Hải Châu, Đà Nẵng</td>
                                <td class="text-end">1.000.000 đ</td>
                                <td class="text-center">
                                    <button class="btn btn-danger w-100">Chưa Thanh Toán</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-success w-100"
                                        data-bs-toggle="modal" data-bs-target="#tinhTrangModal">Đã Đặt Hàng</button>
                                </td>
                            </tr>
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
                                    <input  value="0" class="form-check-input" type="radio" name="flexRadioDefault" checked>
                                    <label class="form-check-label">Đã Đặt Hàng</label>
                                </div>
                                <div class="form-check">
                                    <input  value="1" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đang Xử Lý</label>
                                </div>
                                <div class="form-check">
                                    <input  value="2" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đang Vận Chuyển</label>
                                </div>
                                <div class="form-check">
                                    <input  value="3" class="form-check-input" type="radio" name="flexRadioDefault">
                                    <label class="form-check-label">Đã Giao Hàng</label>
                                </div>
                                <div class="form-check">
                                    <input  value="4" class="form-check-input" type="radio" name="flexRadioDefault">
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
export default {

}
</script>
<style></style>