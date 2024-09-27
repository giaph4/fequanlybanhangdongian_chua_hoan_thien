import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginKH from "./checkLoginKH";
import checkLoginNV from "./checkLoginNV";
import checkLoginDL from "./checkLoginDL";

const routes = [
    //------------------------------ADMIN---------------------------------//
    {
        path: "/admin/nhan-vien",
        component: () => import("../components/Admin/NhanVien/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/dai-ly",
        component: () => import("../components/Admin/DaiLy/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/khach-hang",
        component: () => import("../components/Admin/KhachHang/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/danh-muc",
        component: () => import("../components/Admin/DanhMuc/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/san-pham",
        component: () => import("../components/Admin/SanPham/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/ma-giam-gia",
        component: () => import("../components/Admin/MaGiamGia/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/phan-quyen",
        component: () => import("../components/Admin/PhanQuyen/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/profile",
        component: () => import("../components/Admin/Profile/index.vue"),
        beforeEnter: checkLoginNV
    },
    {
        path: "/admin/dang-nhap",
        component: () => import("../components/Admin/DangNhap/index.vue"),
        meta: { layout: "blank" },
    },
    //------------------------------DAILY---------------------------------//
    {
        path: "/dai-ly/dang-ky",
        component: () => import("../components/DaiLy/Dangky/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/dai-ly/dang-nhap",
        component: () => import("../components/DaiLy/DangNhap/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/dai-ly/quen-mat-khau",
        component: () => import("../components/DaiLy/QuenMatKhau/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/dai-ly/lay-lai-mat-khau",
        component: () => import("../components/DaiLy/LayLaiMatKhau/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/dai-ly/san-pham",
        component: () => import("../components/DaiLy/SanPham/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    {
        path: "/dai-ly/profile",
        component: () => import("../components/DaiLy/Profile/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    {
        path: "/dai-ly/nhap-kho",
        component: () => import("../components/DaiLy/NhapKho/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    {
        path: "/dai-ly/danh-sach-nhap-kho",
        component: () => import("../components/DaiLy/DanhSachNhapKho/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    {
        path: "/dai-ly/don-hang",
        component: () => import("../components/DaiLy/DonHang/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    {
        path: "/dai-ly/thong-ke",
        component: () => import("../components/DaiLy/ThongKe/index.vue"),
        meta: { layout: "daily" },
        beforeEnter: checkLoginDL
    },
    //------------------------------KHACHHANG---------------------------------//
    {
        path: "/khach-hang/dang-ky",
        component: () => import("../components/KhachHang/Dangky/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/khach-hang/dang-nhap",
        component: () => import("../components/KhachHang/DangNhap/index.vue"),
        meta: { layout: "blank" },

    },
    {
        path: "/khach-hang/quen-mat-khau",
        component: () => import("../components/KhachHang/QuenMatKhau/index.vue"),
        meta: { layout: "blank" },

    },
    {
        path: "/khach-hang/lay-lai-mat-khau",
        component: () => import("../components/KhachHang/LayLaiMatKhau/index.vue"),
        meta: { layout: "blank" },

    },
    {
        path: "/khach-hang/gio-hang",
        component: () => import("../components/KhachHang/GioHang/index.vue"),
        meta: { layout: "client" },
        beforeEnter: checkLoginKH
    },
    {
        path: "/khach-hang/don-hang",
        component: () => import("../components/KhachHang/DonHang/index.vue"),
        meta: { layout: "client" },
        beforeEnter: checkLoginKH
    },
    {
        path: "/khach-hang/profile",
        component: () => import("../components/KhachHang/Profile/index.vue"),
        meta: { layout: "client" },
        beforeEnter: checkLoginKH
    },
    //------------------------------TRANGCHU---------------------------------//
    {
        path: "/",
        component: () => import("../components/TrangChu/Home/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/danh-muc/:id_danh_muc-:slug_danh_muc",
        component: () => import("../components/TrangChu/DanhMucSanPham/index.vue"),
        meta: { layout: "client" },
        props: true
    },
    {
        path: "/chi-tiet-san-pham/:id_san_pham-:slug_san_pham",
        component: () => import("../components/TrangChu/ChiTietSanPham/index.vue"),
        meta: { layout: "client" },
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
