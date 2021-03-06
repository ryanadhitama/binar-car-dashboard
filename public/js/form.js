const api = axios.create({
  baseURL: window.location.origin,
});

let formData = document.getElementById("formData");
let name = document.getElementById("name");
let price = document.getElementById("price");
let sizeID = document.getElementById("size_id");
let attachment = document.getElementById("attachment");
let mode = document.getElementById("mode");
let id = document.getElementById("id");
let image = "";

attachment.onchange = function (e) {
  uploadFile(e.target.files[0]);
};
formData.onsubmit = function (e) {
  e.preventDefault();
  handleSubmit();
};

function loadDataSize() {
  api.get("/api/sizes").then((result) => {
    Size.init(result?.data?.data);
    Size.list.forEach((size) => {
      let node = size.renderOption();
      sizeID.insertAdjacentHTML("beforeend", node);
    });
  });
}

function loadDataCar() {
  if (mode.value === "edit") {
    api.get(`/api/cars/${id.value}`).then((result) => {
      let res = result.data.data;
      name.value = res.name;
      price.value = res.price;
      sizeID.value = res.size_id;
      image = res.image;
      document.getElementById(
        "image-preview"
      ).src = "/uploads/car/" + res.image;
    });
  }
}

function handleSubmit() {
  let form = {
    name: name.value,
    price: price.value,
    size_id: sizeID.value,
    image: image,
  };
  if (mode.value === "edit") {
    api.put(`/api/cars/${id.value}`, form).then((res) => {
      window.location = "/";
    });
  } else {
    api.post("/api/cars", form).then((res) => {
      window.location = "/";
    });
  }
}

function uploadFile(fileData) {
  let form = new FormData();
  form.append("attachment", fileData);
  api
    .post("/api/upload", form, {
      "content-type": "multipart/form-data",
    })
    .then((res) => {
      image = res.data.attachment;
    });
}

loadDataSize();
loadDataCar();
