<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h4>Lịch Sử Đơn Hàng</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Mã Đơn Hàng</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Tên Đại Lý</th>
                                <th>Tên Người Nhận</th>
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
                                <td>DZFullStack</td>
                                <td>Nguyễn Quốc Long</td>
                                <td class="text-center">0123456789</td>
                                <td>32 Xuân Diệu, Hải Châu, Đà Nẵng</td>
                                <td class="text-end">1.000.000 đ</td>
                                <td class="text-center">
                                    <button class="btn btn-danger w-100">Chưa Thanh Toán</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-success w-100">Đã Đặt Hàng</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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