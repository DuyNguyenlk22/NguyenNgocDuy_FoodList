import {
  BASE_URL,
  fetchFoodList,
  getDataForm,
  showDataForm,
  showMessage,
} from "./controller.js";

fetchFoodList();

window.deleteFood = (id) => {
  console.log("🚀 ~ file: main.js:7 ~ window.deleteFood ~ id:", id);
  axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log(res);
      showMessage("Xoá thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.addFood = () => {
  let data = getDataForm();
  axios
    .post(BASE_URL, data)
    .then((res) => {
      console.log(res);
      showMessage("Thêm thành công");
      $("#exampleModal").modal("hide");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = (id) => {
  console.log("🚀 ~ file: main.js:40 ~ id:", id);
  axios
    .get(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("show");
      document.getElementById("foodID").readOnly = true;
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateFood = () => {
  let data = getDataForm();
  axios
    .put(`${BASE_URL}/${data.ma}`, data)
    .then((res) => {
      console.log(res);
      showMessage("Cập nhật thành công");
      $("#exampleModal").modal("hide");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
