<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/admin/danh-muc">
                        <a class="nav-link" href="/admin/danh-muc">
                            <div class="parent-icon"><i class="fa-solid fa-rectangle-list"></i>
                            </div>
                            <div class="menu-title">Danh Mục</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/san-pham">
                        <a class="nav-link" href="/admin/san-pham">
                            <div class="parent-icon"><i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <div class="menu-title">Sản Phẩm</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/dai-ly">
                        <a class="nav-link" href="/admin/dai-ly">
                            <div class="parent-icon"><i class="fa-solid fa-user-secret"></i>
                            </div>
                            <div class="menu-title">Đại Lý</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/nhan-vien">
                        <a class="nav-link" href="/admin/nhan-vien">
                            <div class="parent-icon"><i class="fa-solid fa-clipboard-user"></i>
                            </div>
                            <div class="menu-title">Nhân Viên</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/khach-hang">
                        <a class="nav-link" href="/admin/khach-hang">
                            <div class="parent-icon"><i class="fa-solid fa-users"></i>
                            </div>
                            <div class="menu-title">Khách Hàng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/ma-giam-gia">
                        <a class="nav-link" href="/admin/ma-giam-gia">
                            <div class="parent-icon"><i class="fa-solid fa-ticket"></i>
                            </div>
                            <div class="menu-title">Mã Giảm Giá</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/phan-quyen">
                        <a class="nav-link" href="/admin/phan-quyen">
                            <div class="parent-icon"><i class="fa-solid fa-user"></i>
                            </div>
                            <div class="menu-title">Phân Quyền</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>
