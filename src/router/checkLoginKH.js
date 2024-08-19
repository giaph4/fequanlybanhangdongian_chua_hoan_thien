import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right", });

export default function(to, from, next) {
    axios
    .post("http://127.0.0.1:8000/api/khach-hang/kiem-tra-tk", {}, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("tk_khach_hang")
        }
    })
    .then((res) => {
        if(res.data.status) {
            next();
        } else {
            next("/khach-hang/dang-nhap");
            toaster.error(res.data.message);
        }
    });
}