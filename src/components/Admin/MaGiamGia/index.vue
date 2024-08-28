<template>
   <div class="row">
      <div class="col-lg-3">
         <div class="card">
            <div class="card-header">
               <h6><b>THÊM MỚI MÃ GIẢM GIÁ</b></h6>
            </div>
            <div class="card-body">
               <div class="mb-2">
                  <label>Mã Code</label>
                  <input type="text" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Thời Gian Bắt Đầu</label>
                  <input type="date" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Thời Gian Kết Thúc</label>
                  <input type="date" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Loại Giảm</label>
                  <select class="form-control mt-2">
                     <option value="0">Giảm %</option>
                     <option value="1">Tiền Mặt</option>
                  </select>
               </div>
               <div class="mb-2">
                  <label>Số Giảm Giá</label>
                  <input type="number" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Số Tiền Tối Đa</label>
                  <input type="number" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Đơn Hàng Tối Thiểu</label>
                  <input type="number" class="form-control mt-2">
               </div>
               <div class="mb-2">
                  <label>Tình trạng</label>
                  <select class="form-control mt-2">
                     <option value="0">Tạm Tắt</option>
                     <option value="1">Hiển Thị</option>
                  </select>
               </div>
            </div>
            <div class="card-footer text-end">
               <button class="btn btn-primary">Thêm Mới</button>
            </div>
         </div>
      </div>
      <div class="col-lg-9">
         <div class="card">
            <div class="card-header">
               <h6><b>DANH SÁCH MÃ GIẢM GIÁ</b></h6>
            </div>
            <div class="card-body table-responsive">
               <div class="" style="margin-top: -15px;">
                  <nav class="navbar bg-body-tertiary">
                     <div class="container-fluid">
                        <input style="width: 800px;" class="form-control me-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success" type="button">Search</button>
                     </div>
                  </nav>
               </div>
               <table class="table table-bordered table-hover ">
                  <thead>
                     <tr>
                        <th class="text-center">#</th>
                        <th class="text-center">Mã Code</th>
                        <th class="text-center">Thời Gian Bắt Đầu</th>
                        <th class="text-center">Thời Gian Kết Thúc</th>
                        <th class="text-center">Loại Giảm</th>
                        <th class="text-center">Số Giảm Giá</th>
                        <th class="text-center">Số Tiền Tối Đa</th>
                        <th class="text-center">Đơn Hàng Tối Thiểu</th>
                        <th class="text-center">Tình Trạng</th>
                        <th class="text-center">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th class="align-middle">1</th>
                        <td class="align-middle">DZ01</td>
                        <td class="align-middle text-center">16/08/2024</td>
                        <td class="align-middle text-center">20/08/2024</td>
                        <td class="align-middle">
                           Giảm %
                        </td>
                        <td class="align-middle text-end">10</td>
                        <td class="align-middle text-end">1000 đ</td>
                        <td class="align-middle text-end">1000 đ</td>
                        <td class="align-middle text-center">
                           <button class="btn btn-success">Hiển thị</button>
                        </td>
                        <td class="align-middle text-center">
                           <button class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#capnhatMGG">Cập
                              nhật</button>
                           <button class="btn btn-danger" data-bs-toggle="modal"
                              data-bs-target="#delModal">Xóa</button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <div class="modal fade" id="capnhatMGG" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật Mã Giảm Giá</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <div class="mb-2">
                     <label>Mã Code</label>
                     <input type="text" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Thời Gian Bắt Đầu</label>
                     <input type="date" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Thời Gian Kết Thúc</label>
                     <input type="date" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Loại Giảm</label>
                     <select class="form-control mt-2">
                        <option value="0">Giảm %</option>
                        <option value="1">Tiền Mặt</option>
                     </select>
                  </div>
                  <div class="mb-2">
                     <label>Số Giảm Giá</label>
                     <input type="number" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Số Tiền Tối Đa</label>
                     <input type="number" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Đơn Hàng Tối Thiểu</label>
                     <input type="number" class="form-control mt-2">
                  </div>
                  <div class="mb-2">
                     <label>Tình trạng</label>
                     <select class="form-control mt-2">
                        <option value="0">Tạm Tắt</option>
                        <option value="1">Hiển Thị</option>
                     </select>
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
      <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Mã Giảm Giá</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <div class="alert alert-danger" role="alert">
                     Bạn có chắc muốn xóa <b class="text-danger">DZ01</b> này không?
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         search: {},
         list_ma_giam_gia: [],
      }
   },
   mounted() {

   },
   methods: {
      TimKiemBE() {
         axios
            .post('http://127.0.0.1:8000/api/admin/nhan-vien/tim-kiem', this.search)
            .then((res) => {
               this.list_ma_giam_gia = res.data.data
            })
      },
   },
}
</script>
<style></style>
