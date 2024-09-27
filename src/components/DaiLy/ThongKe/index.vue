<template>
    <div class="row">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Từ ngày</span>
                                    <input v-model="ngay.tu_ngay" type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Đến ngày</span>
                                    <input v-model="ngay.den_ngay" type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <button v-on:click="sendBE()" class="btn btn-primary w-100">Thống Kê</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">THÔNG TIN ĐÃ THỐNG KÊ</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center text-nowrap align-middle">#</th>
                                    <th class="text-center text-nowrap align-middle">Tên Sản Phẩm</th>
                                    <th class="text-center text-nowrap align-middle">Số Lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list" :key="k">
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle">{{ v.ten_san_pham }}</td>
                                    <td class="text-center align-middle">{{ v.so_luong }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">Thống Kê Số Lượng Đã Bán Của Sản Phẩm</h5>
                    </div>
                    <div class="card-body">
                        <Bar v-if="is_load" :data="chartData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'ThongKe1',
    components: {
        Bar
    },
    data() {
        return {
            ngay : {},
            list : [],
            is_load: false,
            chartData   : null,
            chartData   : {
                labels: [],
                datasets: [ 
                    {
                        label: 'Thống Kê',
                        backgroundColor: [
                            "#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"
                        ],
                        data: []
                    }
                 ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {
        this.is_load = false;
    },
    methods: {
        sendBE() {
            this.is_load = false;
            axios
                .post("http://127.0.0.1:8000/api/dai-ly/thong-ke-san-pham", this.ngay, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("tk_dai_ly")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                    var array_ten_san_pham = res.data.array_ten_san_pham;
                    var array_tong_so_luong = res.data.array_tong_so_luong;
                    this.chartData.labels = array_ten_san_pham;
                    this.chartData.datasets[0].data = array_tong_so_luong;
                    this.is_load = true;
                })
        }
    },
}
</script>
<style lang="">

</style>