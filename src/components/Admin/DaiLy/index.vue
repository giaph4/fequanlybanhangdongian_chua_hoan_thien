<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH ĐẠI LÝ</b></h6>
                </div>
                <div class="card-body table-responsive">
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
                            <tr>
                                <th class="align-middle text-center">1</th>
                                <td class="align-middle">Nguyễn Quốc Long</td>
                                <td class="align-middle">quoclongdng@gmail.com</td>
                                <td class="align-middle">0123456789</td>
                                <td class="align-middle text-center">01/01/1998</td>
                                <td class="align-middle">DZFullStack</td>
                                <td class="align-middle">0123456789</td>
                                <td class="align-middle">32 Xuân Diệu</td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-success w-100">Đã Kích
                                        Hoạt</button>
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-success w-100">Mở</button>
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#capnhatDM">Cập nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#delModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                            Bạn có chắc muốn xóa đại lý <b class="text-danger">AAA</b> này
                            không?
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Email</label>
                            <input type="email" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Số Điện Thoại</label>
                            <input type="tel" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Ngày Sinh</label>
                            <input type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Tên Doanh Nghiệp</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Mã Số Thuế</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2">
                            <label>Địa Chỉ Kinh Doanh</label>
                            <input type="text" class="form-control mt-2">
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
    </div>
</template>
<script>
export default {

}
</script>
<style></style>