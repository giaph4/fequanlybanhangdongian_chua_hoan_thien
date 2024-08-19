<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="https://dzfullstack.com/assets/images/logo-img.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">DZFULLSTACK</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <a class="nav-link" href="/">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Home</div>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-spa'></i>
                        </div>
                        <div class="menu-title">Sản Phẩm</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Laptop</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i class="bx bx-right-arrow-alt"></i>Điện
                                Thoại</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i class="bx bx-right-arrow-alt"></i>Quần
                                Áo</a>
                        </li>
                    </ul>
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