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
                <template v-for="(v, k) in list_danh_muc" :key="k">
                    <li class="nav-item">
                        <router-link :to="'/danh-muc/' + v.id + '-' + v.slug_danh_muc">
                            <a class="nav-link" href="'/danh-muc/' + v.id + '-' + v.slug_danh_muc">
                                <div class="parent-icon">
                                    <span v-html="v.icon_danh_muc"></span>
                                </div>
                                <div class="menu-title">{{ v.ten_danh_muc }}</div>
                            </a>
                        </router-link>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_danh_muc: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/trang-chu/danh-muc/data")
                .then((res) => {
                    this.list_danh_muc = res.data.data;
                });
        }
    },
}
</script>
<style></style>