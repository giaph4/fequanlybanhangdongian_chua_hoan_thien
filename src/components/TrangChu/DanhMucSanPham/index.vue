<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2 text-nowrap">
                            <h4>Danh Mục Sản Phẩm</h4>
                        </div>
                        <div class="col-lg-9 col-xl-10">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="position-relative">
                                            <input type="text" class="form-control ps-5"
                                                placeholder="Search Product..."> <span
                                                class="position-absolute top-50 product-show translate-middle-y"><i
                                                    class="bx bx-search"></i></span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group"
                                            aria-label="Button group with nested dropdown">
                                            <button type="button" class="btn btn-white">Sắp Xếp</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class='bx bx-chevron-down'></i>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                    <li><a class="dropdown-item" href="#">A - Z</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Z - A</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 product-grid">
        <template v-for="(v, k) in list" :key="k">
            <div class="col d-flex">
                <div class="card flex-fill">
                    <img :src="v.hinh_anh" class="card-img-top w-100" height="230"
                        style="object-fit: contain; vertical-align: middle;" alt="...">
                    <div class="">
                        <div class="position-absolute top-0 end-0 m-3 product-discount d-flex justify-content-end">
                            <span v-if="v.is_hom_nay == 1" class="badge bg-warning">new</span>
                            <span v-if="v.is_flash_sale == 1" class="badge bg-success">sale</span>
                            <span v-if="v.is_noi_bat == 1" class="badge bg-danger">hot</span>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <router-link :to="`/chi-tiet-san-pham/` + v.id + '-' + v.slug_san_pham">
                            <h6 class="card-title cursor-pointer">{{ v.ten_san_pham }}</h6>
                        </router-link>
                        <div class="mt-auto">
                            <div class="d-flex align-items-center fs-6">
                                <div class="cursor-pointer">
                                    <template v-for="items in v.sao_danh_gia" :key="items">
                                        <i class="bx bxs-star text-warning"></i>
                                    </template>
                                    <template v-for="items in (5 - v.sao_danh_gia)" :key="items">
                                        <i class="bx bxs-star text-secondary"></i>
                                    </template>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="clearfix mt-2">
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-muted">{{
                                            v.gia_ban }}</span><span class="fs-5 text-danger">{{
                                            v.gia_khuyen_mai }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['id_danh_muc'],
    data() {
        return {
            list: [],
            id_danh_muc: this.$route.params.id_danh_muc,
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            var payload = {
                'id_danh_muc': this.id_danh_muc,
            };
            axios
                .post("http://127.0.0.1:8000/api/trang-chu/san-pham-theo-danh-muc", payload)
                .then((res) => {
                    this.list = res.data.data;
                });
        }
    },
}
</script>
<style></style>