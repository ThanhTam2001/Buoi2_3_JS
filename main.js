/**
 * DOM
 */
// var username = document.getElementById("txtUsername").value;
// console.log(username);

document.getElementById("btnLogin").onclick = function () {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;

  var ketQua = "Username la: " + username + "<br />Password la: " + password;

  document.getElementById("footerLogin").innerHTML = ketQua;
};

/**
 * Cộng 2 số
 */
document.getElementById("btnCong").onclick = function () {
  /**
   * lấy value số thứ 1
   * lấy value số thứ 2
   * Tổng => show tổng
   */
  var number_1 = document.getElementById("txtNumber_1").value * 1;
  var number_2 = document.getElementById("txtNumber_2").value * 1;

  //Chuyển kiểu dữ liệu từ string => number
  //   number_1 = parseInt(number_1);
  //   number_2 = parseInt(number_2);

  var tong = number_1 + number_2;

  var ketQuaTong = "Tong la: " + tong;

  //Gán ketQuaTong ra thẻ div#thongBao
  document.getElementById("thongBao").innerHTML = ketQuaTong;

  //Style inline cho thẻ div#thongBao
  //   document.getElementById("thongBao").style.color = "white";
  //   document.getElementById("thongBao").style.backgroundColor = "red";
  //   document.getElementById("thongBao").style.fontSize = "30px";
  //   document.getElementById("thongBao").style.textAlign = "center";

  //Style add class cho thẻ div#thongBao
  //   document.getElementById("thongBao").className = "showInfo";
  document.getElementById("thongBao").classList.add("showInfo");
};

document.getElementById("btnOff").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulboff.gif";
};

document.getElementById("btnOn").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulbon.gif";
};

document.getElementById("btnDisableBtnOn").onclick = function () {
  //Khoá nút On (k cho user click vào nút On)
  document.getElementById("btnOn").disabled = true;
};

document.getElementById("enableBtnOn").onclick = function () {
  //Mở nút On (cho user click vào nút On)
  document.getElementById("btnOn").disabled = false;
};

/**
 * Tinh tien tip
 * - Đầu vào
 *     - tongTienThanhToan
 *     - phanTramTip
 *     - soLuongNguoiChia
 * - Xử lý: 100 => 100 * 30/100 / 3 => 10
 *      tongTienThanhToan * phanTramTip/100 / soLuongNguoiChia
 * - Đầu ra: Hien thi thong tin
 */
document.getElementById("btnTinh").onclick = function () {
  var tongTienThanhToan = document.getElementById("txtTongTien").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soLuongNguoiChia = document.getElementById("soNguoi").value;

  var total = (tongTienThanhToan * phanTramTip) / 100 / soLuongNguoiChia;

  // var ketQua = "Mỗi người típ " + total + "$";
  // var ketQua = "<div>Mỗi người típ" + total + "$</div>";
  var ketQua = "<div> Mỗi người típ: ";
  ketQua += total;
  ketQua += "$</div>";

  document.getElementById("footerTienTip").innerHTML = ketQua;
};

document.getElementById("btnCreateP").onclick = function () {
  // var tagP = "<p>Lại là mình đây !!!</p>";
  // document.getElementById("divcontent").innerHTML = tagP;

  //clear contentcủa thẻ div : tạo 1 thẻ dù nhấn nhiều lần
  document.getElementById("divcontent").innerHTML = " ";
  var tagP = document.createElement("p");
  tagP.innerHTML = "Xin chào !!!";
  document.getElementById("divcontent").appendChild(tagP);
};

//Lợi nhuận
/*
Đầu vào:
        - tenPhim
        -

Xử lí:


Đầu ra:

*/

document.getElementById("btn-Tinh").onclick = function () {
  var tenPhim = document.getElementById("txtTenPhim").value;
  var giaVeNguoiLon = parseInt(document.getElementById("txtNguoiLon").value);
  var giaVeTreEm = parseInt(document.getElementById("txtTreEm").value);
  var sluongLon = parseInt(document.getElementById("txtSluongLon").value);
  var sluongTre = parseInt(document.getElementById("txtSluongTre").value);

  var tongSlVe = giaVeNguoiLon + giaVeTreEm;
  var doanhThu = giaVeNguoiLon * sluongLon + giaVeTreEm * sluongTre;
  console.log(doanhThu);
  // Từ thiện
  var tuThien = (doanhThu * 10) / 100;

  // Lợi nhuận

  var loiNhuan = doanhThu - tuThien;

  var currentFormat = new Intl.NumberFormat("vn-VN");
  // Format vnd
  var tienVnd = currentFormat.format(loiNhuan);

  console.log(tienVnd + "vnd");

  var ketQua = "<div class= 'alert alert-successss'>";
  ketQua += "<p>Tên Phim: " + tenPhim + "</p>";
  ketQua += "<p>Số vé đã bán: " + tongSlVe + "</p>";
  ketQua += "<p>Doanh Thu:  " + currentFormat.format(doanhThu) + "</p>";
  ketQua += "<p>Phần % từ thiện:10% </p>";
  ketQua += "<p>Tiền từ thiện: " + currentFormat.format(tuThien) + "</p>";
  ketQua += "<p>Tiền lợi nhuận: " + tienVnd + "</p>";
  ketQua += "</div>";

  document.getElementById("footerLoiNhuan").innerHTML = ketQua;

  //tính lương nhân viên

};

document.getElementById("btnTinhLuongNV").onclick = function () {
  const luong = 100000;
  var soNgayLam = document.getElementById("txtSoNgayLam").value;

  var tongLuong = soNgayLam * luong;

  // chuyển sang vnd
  var currentFormat = new Intl.NumberFormat('vn-VN');

  var tongLuongVnd = currentFormat.format(tongLuong);

  console.log(tongLuong);

  // đầu ra

  var ketQua = "<div> Tổng tiền lương là: " + tongLuong + "Vnd</div>";

  document.getElementById("footerTinhLuongNV").innerHTML = ketQua;
};

//Trung bình 5 số thực:

document.getElementById("btnTrungBinh").onclick = function () {
  
  var so1 = document.getElementById("txtSo1").value *1;
  var so2 = document.getElementById("txtSo2").value*1;
  var so3 = document.getElementById("txtSo3").value*1;
  var so4 = document.getElementById("txtSo4").value*1;
  var so5 = document.getElementById("txtSo5").value*1;

  var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5 ;

  var ketQua = "<div class='alert alert-danger'>Trung bình là: " + trungBinh + " </div>";
  document.getElementById("footerTinhTrungBinh").innerHTML = ketQua;

}

// Quy đổi tiền :
document.getElementById("btnQuyDoi").onclick = function () {
  const USD = 23500 ;
  var soTien = document.getElementById("txtSoTien").value;

  var quyDoi = soTien * USD;
  var currentFormat = new Intl.NumberFormat('vn-VN');
  var ketQua = "<div>Sau khi quy đổi: " + quyDoi + "Vnd</div>";
  var quyDoiVnd = currentFormat.format(quyDoi);
  document.getElementById("footerQuyDoi").innerHTML = ketQua ;
}

//Tính diện tích và chu vi
document.getElementById("btnTinh-DT-CV").onclick = function () {
  var chieuDai = document.getElementById("txtCD").value;
  var chieuRong = document.getElementById("txtCR").value;

  var dienTich = chieuDai * chieuRong ;

  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

  var ketQua = "<div>"
  ketQua += "<p>Diện tích HCN là: " + dienTich + "</p>";
  ketQua += "<p>Chu vi HCN là: " + chuVi + "</p>";
  ketQua +="</div>"
  document.getElementById("footerTinh-DT-CV").innerHTML = ketQua;
}

//Tính tổng 2 ký số

document.getElementById("btnTinhTong").onclick = function () {
  var soThuNhat = document.getElementById("txtSoThuNhat").value;
  var donvi = soThuNhat%10;
  var chuc = Math.floor (soThuNhat/10);
  var ketQua = donvi + chuc ;

  var ketQua1 = "<div>"
  ketQua1 += "<p>Tổng 2 ký số là: " + ketQua + "</p>";
  ketQua1 +="</div>"

  document.getElementById("footerTinhTong").innerHTML = ketQua1;

}
