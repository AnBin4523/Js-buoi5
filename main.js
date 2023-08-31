// Bài 1
function diemUuTienTheoKhuVuc(khuVuc) {
    if (khuVuc === "A") {
        return 2;
    } else if (khuVuc === "B") {
        return 1;
    } else if (khuVuc === "C") {
        return 0.5;
    } else {
        return 0;
    }
}

function diemUuTienTheoDoiTuong(doiTuong) {
    if (doiTuong == 1) {
        return 2.5;
    } else if (doiTuong == 2) {
        return 1.5;
    } else if (doiTuong == 3) {
        return 1;
    } else {
        return 0;
    }
}

function ketQua() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemMon_1 = document.getElementById("diemMon_1").value * 1;
    var diemMon_2 = document.getElementById("diemMon_2").value * 1;
    var diemMon_3= document.getElementById("diemMon_3").value * 1;
    var content = "";

    var diemUuTienKhuVuc = diemUuTienTheoKhuVuc(khuVuc);
    var diemUuTienDoiTuong = diemUuTienTheoDoiTuong(doiTuong);
    var tongDiem = diemMon_1 + diemMon_2 + diemMon_3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0) {
        content = "Rớt vì có môn 0 điểm";
    } else if (tongDiem >= diemChuan) {
        content = "Đậu! Tổng điểm bạn là: " + tongDiem;
    } else {
        content = "Rớt vì điểm tổng không đạt chuẩn";
    }

    document.getElementById("noti").style.display = "block";
    document.getElementById("noti").innerText = content;  
}

// Bài 2
function tinhTienDien() {
    var name = document.getElementById("name").value;
    var soKw = document.getElementById("soKw").value * 1;
    var tongTien = 0;
    var content = "";

    if (soKw <= 50) {
        tongTien = 500 * soKw;
        content = "Tên: " + name + "\nSố tiền phải trả: " + tongTien + " đồng";
    } else if (soKw <= 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
        content = "Tên: " + name + "\nSố tiền phải trả: " + tongTien + " đồng";
    } else if (soKw <= 150) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
        content = "Tên: " + name + "\nSố tiền phải trả: " + tongTien + " đồng";
    } else if (soKw <= 200) {
        tongTien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
        content = "Tên: " + name + "\nSố tiền phải trả: " + tongTien + " đồng"; 
    } else {
        tongTien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
        content = "Tên: " + name + "\nSố tiền phải trả: " + tongTien + " đồng"; 
    }

    document.getElementById("noti_2").style.display = "block";
    document.getElementById("noti_2").innerText = content;
}

// Bài 3
function tinhThueThuNhap() {
    var name = document.getElementById("name_2").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPhuThuoc * 1600000);

    var tienThue = 0;
    var thueSuat = 0;
    var content = "";

    if (thuNhapChiuThue <= 60000000) {
        thueSuat = 0.05;
    } else if (60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000) {
        thueSuat = 0.1;
    } else if (120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000) {
        thueSuat = 0.15;
    } else if (210000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000) {
        thueSuat = 0.2;
    } else if (384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000) {
        thueSuat = 0.25;
    } else if (624000000 < thuNhapChiuThue && thuNhapChiuThue <= 960000000) {
        thueSuat = 0.3
    } else if (thuNhapChiuThue > 960000000) {
        thueSuat = 0.35;
    }

    tienThue = thuNhapChiuThue * thueSuat;
    content = "Tên: " + name + "\nTiền thuế thu nhập cá nhân: " + tienThue + " VND";

    document.getElementById("noti_3").style.display = "block";
    document.getElementById("noti_3").innerText = content;
}

// Bài 4
function showKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = document.getElementById("soKetNoi");

    if (loaiKhachHang === "Nhà dân") {
        soKetNoi.disabled = true;
        soKetNoi.style.display = "none";
    } else {
        soKetNoi.disabled = false;
        soKetNoi.style.display = "block";
    }
}

function tinhTheoNhaDan(soKenhCaoCap) {
    return tienCap = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
}

function tinhTheoDoanhNghiep(soKenhCaoCap , soKetNoi) {
    if (0 < soKetNoi && soKetNoi <= 10) {
        return tienCap = 15 + 75 + (50 * soKenhCaoCap);
    } else {
        return tienCap = 15 + 75 + 5 * (soKetNoi - 10) + (50 * soKenhCaoCap);
    }
}

function tinhTienCap() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maSoKhachHang = document.getElementById("maSoKhachHang").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    
    var content = "";

    if (loaiKhachHang === "Nhà dân") {
        var tienTheoNhaDan = tinhTheoNhaDan(soKenhCaoCap , soKetNoi);
        content = "Mã số khách hàng: " + maSoKhachHang + "\nTiền cáp: " + tienTheoNhaDan;
    } else {
        var tienTheoDoanhNghiep = tinhTheoDoanhNghiep(soKenhCaoCap , soKetNoi);
        content = "Mã số khách hàng: " + maSoKhachHang + "\nTiền cáp: " + tienTheoDoanhNghiep;
    }

    document.getElementById("noti_4").style.display = "block";
    document.getElementById("noti_4").innerText = content;
}
