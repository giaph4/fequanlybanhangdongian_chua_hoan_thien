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
                   <input v-model="create_danh_muc.ten_danh_muc"
                      type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Slug Danh Mục</label>
                   <input v-model="create_danh_muc.slug_danh_muc" type="text"
                      class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Icon Danh Mục</label>
                   <input v-model="create_danh_muc.icon" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Tình trạng</label>
                   <select v-model="create_danh_muc.tinh_trang" class="form-control mt-2">
                      <option value="0">Tạm Tắt</option>
                      <option value="1">Hiển Thị</option>
                   </select>
                </div>
             </div>
             <div class="card-footer text-end">
                <button v-on:click="themMoi()" class="btn btn-primary">Thêm Mới</button>
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
                         <th class="text-center">Action</th>
                      </tr>
                   </thead>
                   <tbody>
                     <template v-for="(value, index) in list_danh_muc" :key="index">
                        <tr>
                            <th class="align-middle">{{ index + 1 }}</th>
                            <td class="align-middle">{{ value.ten_danh_muc }}</td>
                            <td class="align-middle">{{ value.slug_danh_muc }}</td>
                            <td class="align-middle text-center">
                                <span v-html="value.icon"></span>
                            </td>
                            <td class="align-middle text-center">
                              <template v-if="value.tinh_trang == 1">
                                 <button v-on:click="changeStatus(value)" class="btn btn-success">Hiển thị</button>
                              </template>
                              <template v-else>
                                 <button v-on:click="changeStatus(value)" class="btn btn-warning">Tạm tắt</button>
                              </template>
                            </td>
                            <td class="align-middle text-center">
                               <button class="btn btn-primary me-2"
                                  data-bs-toggle="modal" data-bs-target="#capnhatDM" v-on:click="Object.assign(edit_danh_muc,value)" >Cập nhật</button>
                               <button class="btn btn-danger" data-bs-toggle="modal" v-on:click="Object.assign(delete_danh_muc,value)"
                                  data-bs-target="#delModal">Xóa</button>
                            </td>
                         </tr>
                     </template>
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
                   <input v-model="edit_danh_muc.ten_danh_muc"
                      type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Slug Danh Mục</label>
                   <input v-model="edit_danh_muc.slug_danh_muc" type="text"
                      class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Icon Danh Mục</label>
                   <input v-model="edit_danh_muc.icon" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                   <label>Tình trạng</label>
                   <select v-model="edit_danh_muc.tinh_trang" class="form-control mt-2">
                      <option value="0">Tạm Tắt</option>
                      <option value="1">Hiển Thị</option>
                   </select>
                </div>
             </div>
             <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button v-on:click="capNhatDanhMuc()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
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
                      Bạn có chắc muốn xóa <b class="text-danger">{{ delete_danh_muc.ten_danh_muc }}</b> này không?
                   </div>
                </div>
                <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="xoaDanhMuc()" >Xác
                      nhận</button>
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
            create_danh_muc: {},
            edit_danh_muc: {},
            delete_danh_muc: {},
            list_danh_muc: [],
        }
    },

    mounted() {
        this.loadDanhMuc();
    },
    methods: {
        loadDanhMuc() {
            axios
                .get('http://127.0.0.1:8000/api/admin/danh-muc/data')
                .then((res) => {
                    this.list_danh_muc = res.data.data;
                })
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/danh-muc/create', this.create_danh_muc)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDanhMuc();
                    };
                    this.create_danh_muc = {}
                })
        },
        capNhatDanhMuc() {
            axios
                .post('http://127.0.0.1:8000/api/admin/danh-muc/update', this.edit_danh_muc)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDanhMuc();
                    };
                })

        },
        xoaDanhMuc() {
            axios
                .post('http://127.0.0.1:8000/api/admin/danh-muc/delete', this.delete_danh_muc)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDanhMuc();
                    };
                })

        },
        changeStatus(value) {
            axios
                .post('http://127.0.0.1:8000/api/admin/danh-muc/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadDanhMuc();
                    }
                })
        }
    }
}
 </script>
 <style></style>
