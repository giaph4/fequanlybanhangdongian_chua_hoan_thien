<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4 border-end">
                        <img v-bind:src="san_pham.hinh_anh"
                            style="    width: 100%; height: 500px; object-fit: contain; vertical-align: middle;"
                            class="img-fluid" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">{{ san_pham.ten_san_pham }}</h4>
                            <div class="d-flex gap-3 py-3">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <div>182 reviews</div>
                                <div class="text-success"><i class="bx bxs-cart-alt align-middle"></i> 134
                                    orders</div>
                            </div>
                            <div class="mb-3">
                                <p class="mb-0  fw-bold">
                                    <span class="me-2 text-decoration-line-through text-secondary">{{ san_pham.gia_ban
                                        }}đ&nbsp;₫</span>
                                    <span>{{ san_pham.gia_khuyen_mai }}đ&nbsp;₫</span>
                                </p>
                            </div>
                            <p class="card-text fs-6">{{ san_pham.mo_ta_ngan }}</p>

                            <hr>
                            <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">
                                <div class="col">
                                    <label class="form-label">Số Lượng</label>
                                    <div class="input-group input-spinner">
                                        <button class="btn btn-white" type="button" id="button-plus"> -
                                        </button>
                                        <input type="text" class="form-control text-center" value="1"
                                            style="width: 100px; max-width: 100px;">
                                        <button class="btn btn-white" type="button" id="button-minus"> +
                                        </button>
                                    </div>
                                </div>
                                <div class="col">

                                    <div class="color-indigators d-flex align-items-center gap-2">
                                        <div class="color-indigator-item bg-primary"></div>
                                        <div class="color-indigator-item bg-danger"></div>
                                        <div class="color-indigator-item bg-success"></div>
                                        <div class="color-indigator-item bg-warning"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-3 mt-3">
                                <a href="#" class="btn btn-primary">Mua ngay</a>
                                <a href="" class="btn btn-outline-primary"><span class="text">Thêm vào giỏ
                                        hàng</span> <i class="bx bxs-cart-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                aria-selected="true">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="bx bx-comment-detail font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title"> Mô Tả Sản Phẩm </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="bx bx-star font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Đánh Giá</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content pt-3">
                        <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                            {{ san_pham.mo_ta_chi_tiet }}
                        </div>
                        <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control"
                                                    placeholder="Điền đánh giá của bạn!"> <button
                                                    class="btn btn-primary">Gửi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li class="d-flex align-items-center border-bottom pb-2">
                                                    <img src="assets/images/avatars/avatar-8.png"
                                                        class="rounded-circle p-1 border" width="90" height="90"
                                                        alt="...">
                                                    <div class="flex-grow-1 ms-3">
                                                        <h5 class="mt-0 mb-1">List-based media object</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                                        nisi vulputate fringilla
                                                    </div>
                                                </li>
                                                <li class="d-flex align-items-center my-4 border-bottom pb-2">
                                                    <img src="assets/images/avatars/avatar-9.png"
                                                        class="rounded-circle p-1 border" width="90" height="90"
                                                        alt="...">
                                                    <div class="flex-grow-1 ms-3">
                                                        <h5 class="mt-0 mb-1">List-based media object</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                                        nisi vulputate fringilla
                                                    </div>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <img src="assets/images/avatars/avatar-10.png"
                                                        class="rounded-circle p-1 border" width="90" height="90"
                                                        alt="...">
                                                    <div class="flex-grow-1 ms-3">
                                                        <h5 class="mt-0 mb-1">List-based media object</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                                        nisi vulputate fringilla
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['id_san_pham'],
    data() {
        return {
            id_san_pham: this.$route.params.id_san_pham,
            san_pham: {},
        }
    },
    mounted() {
        this.loadChiTiet();
    },
    methods: {
        loadChiTiet() {
            var payload = {
                'id_san_pham': this.id_san_pham,
            };
            axios
                .post("http://127.0.0.1:8000/api/trang-chu/san-pham/chi-tiet", payload)
                .then((res) => {
                    if (res.data.status) {
                        this.san_pham = res.data.data;
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        }
    },
}

</script>
<style></style>