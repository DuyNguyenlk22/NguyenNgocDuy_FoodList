export const BASE_URL = "https://64d6fadf2a017531bc12e6f4.mockapi.io/food";

const CHAY_MAN = true;
const CON_HET = true;
const CON_MON = true;
export let render = (list) => {
  let content = "";
  list.reverse().forEach((item) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang, img, desc } = item;
    let listTr = /*html*/ `
    <tr>
        <td>${ma}</td>
        <td>${ten}</td>
        <td>${loai == CHAY_MAN ? "Mặn" : "Chay"}</td>
        <td>${gia}</td>
        <td>${khuyenMai}</td>
        <td>0</td>
        <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
        <td><button class="btn btn-warning" onclick="editFood(${ma})">Sửa</button>
        <button class="btn btn-primary" onclick="deleteFood(${ma})">Xoá</button></td>
    </tr>
    `;
    content += listTr;
  });
  document.getElementById("tbodyFood").innerHTML = content;
};

export let fetchFoodList = () => {
  axios
    .get(BASE_URL)
    .then((res) => {
      console.log(res);
      render(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export let showMessage = (message, isSuccess = true) => {
  Toastify({
    text: message,
    style: {
      background: isSuccess
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "red",
    },
  }).showToast();
};

export let getDataForm = () => {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let img = document.getElementById("hinhMon").value;
  let desc = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    img,
    desc,
  };
};

export let showDataForm = (data) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, img, desc } = data;

  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == CHAY_MAN ? "loai1" : "loai2";
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang == CON_HET ? "1" : "0";
  document.getElementById("hinhMon").value = img;
  document.getElementById("moTa").value = desc;
};
