<template>
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand">
                <div class="topbar-logo-header d-flex align-items-center">
                    <img src="https://dzfullstack.com/assets/images/logo-img.png" class="logo-icon" style="width: 70px;"
                        alt="logo icon">
                    <h4 class="mt-3 ms-2">DZFULLSTACK</h4>
                </div>
                <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                <div class="search-bar flex-grow-1">
                    <div class="position-relative search-bar-box input-group w-100">
                        <input type="text"
                            class="form-control search-control border border-1 border-secondary radius-30"
                            placeholder="Search..."> <span
                            class="position-absolute top-50 search-show translate-middle-y"><i
                                class='bx bx-search'></i></span>
                        <span class="position-absolute top-50 search-close translate-middle-y"><i
                                class='bx bx-x'></i></span>
                        <button class="btn btn-outline-secondary radius-30" type="button" id="button-addon2">Tìm
                            Kiếm</button>
                    </div>
                </div>
                <div class="user-box dropdown">
                    <router-link to="/khach-hang/dang-nhap">
                        <button type="button"
                            class="btn btn-outline-dark px-5 radius-30 me-2 d-flex align-items-center"><i
                                class="fa-regular fa-user me-2"></i>Đăng Nhập</button>
                    </router-link>
                    <router-link to="/khach-hang/dang-ky">
                        <button type="button" class="btn btn-dark px-5 radius-30 d-flex align-items-center"><i
                                class="fa-solid fa-arrow-right-to-bracket me-2"></i>Đăng Ký</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style></style>