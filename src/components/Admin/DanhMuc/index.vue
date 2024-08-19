<template>
    <div class="row">
       <div class="col-lg-5">
          <div class="card">
             <div class="card-header">
                <h6><b>THÊM MỚI DANH MỤC</b></h6>
             </div>
             <div class="card-body">
                <div class="mb-2">
                   <label>Tên Danh Mục</label>
                   <input
                      type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Slug Danh Mục</label>
                   <input type="text"
                      class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Icon Danh Mục</label>
                   <input type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Tình trạng</label>
                   <select class="form-control mt-2">
                      <option value="0">Tạm Tắt</option>
                      <option value="1">Hiển Thị</option>
                   </select>
                </div>
                <div class="mb-2">
                   <label>Danh Mục Cha</label>
                   <select class="form-control mt-2">
                      <option value="1">Cha là ai?</option>
                      <option value="0">Có cha rồi</option>
                   </select>
                </div>
             </div>
             <div class="card-footer text-end">
                <button class="btn btn-primary">Thêm Mới</button>
             </div>
          </div>
       </div>
       <div class="col-lg-7">
          <div class="card">
             <div class="card-header">
                <h6><b>DANH SÁCH DANH MỤC</b></h6>
             </div>
             <div class="card-body table-responsive">
                <table class="table table-bordered table-hover ">
                   <thead>
                      <tr>
                         <th class="text-center">#</th>
                         <th class="text-center">Tên Danh Mục</th>
                         <th class="text-center">Slug Danh Mục</th>
                         <th class="text-center">Icon</th>
                         <th class="text-center">Tình Trạng</th>
                         <th class="text-center">Danh Mục Cha</th>
                         <th class="text-center">Action</th>
                      </tr>
                   </thead>
                   <tbody>
                         <tr>
                            <th class="align-middle">1</th>
                            <td class="align-middle">Điện Thoại</td>
                            <td class="align-middle">dien-thoai</td>
                            <td class="align-middle text-center">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </td>
                            <td class="align-middle text-center">
                               <button class="btn btn-success">Hiển thị</button>
                            </td>
                            <td class="align-middle text-center">
                               <i>Root</i>
                            </td>
                            <td class="align-middle text-center">
                               <button class="btn btn-primary me-2"
                                  data-bs-toggle="modal" data-bs-target="#capnhatDM">Cập nhật</button>
                               <button class="btn btn-danger" data-bs-toggle="modal"
                                  data-bs-target="#delModal">Xóa</button>
                            </td>
                         </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
       <div class="modal fade" id="capnhatDM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
          <div class="modal-content">
             <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật Danh Mục</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                <div class="mb-2">
                   <label>Tên Danh Mục</label>
                   <input type="text"
                      class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Slug Danh Mục</label>
                   <input type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Icon Danh Mục</label>
                   <input type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Tình trạng</label>
                   <select class="form-control mt-2">
                      <option value="0">Tạm Tắt</option>
                      <option value="1">Hiển Thị</option>
                   </select>
                </div>
                <div class="mb-2">
                   <label>Danh Mục Cha</label>
                   <select class="form-control mt-2">
                      <option value="1">Cha là ai?</option>
                      <option value="0">Có cha rồi</option>
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
                   <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Danh Mục</h1>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div class="alert alert-danger" role="alert">
                      Bạn có chắc muốn xóa <b class="text-danger">XXX</b> này không?
                   </div>
                </div>
                <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                      nhận</button>
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