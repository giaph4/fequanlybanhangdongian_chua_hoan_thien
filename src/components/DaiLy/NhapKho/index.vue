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
                                        <input type="text"
                                            class="form-control search-control border border-1 border-secondary"
                                             placeholder="Search...">
                                        <span class="position-absolute top-50 search-show translate-middle-y"
                                            style="left: 15px;"><i class="bx bx-search"></i></span>
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm
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
                            
                                <tr>
                                    <th class="align-middle text-center">1</th>
                                    <td class="align-middle text-wrap">Iphone 16</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary">Add</button>
                                    </td>
                                </tr>
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
                                <tr>
                                    <th class="align-middle">1</th>
                                    <td class="align-middle text-wrap">Iphone 16</td>
                                    <td class="align-middle ">
                                        <input type="number" class="form-control text-center"
                                         style="width: 100px;">
                                    </td>
                                    <td class="align-middle text-center">
                                        <input type="number" class="form-control text-center"
                                         style="width: 100px;">
                                    </td>
                                    <td class="align-middle text-center">1đ</td>
                                    <td class="align-middle">
                                        <button class="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
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
export default {

}
</script>
<style></style>