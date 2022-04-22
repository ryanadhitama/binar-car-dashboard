const api = axios.create({
  baseURL: window.location.origin,
});

let listCar = document.getElementById("list-car");
let listSize = document.getElementById("list-size");

function filterCar(id, e) {
  document
    .querySelectorAll(".btn-filter")
    .forEach((button) => button.classList.remove("active"));
  e.classList.add("active");
  listCar.innerHTML = "";
  api.get("/api/cars?size_id=" + id).then((result) => {
    generateCar(result?.data?.data);
  });
}

function loadDataCars() {
  api.get("/api/cars").then((result) => {
    generateCar(result?.data?.data);
  });
}

function generateCar(data) {
  Car.init(data);
  Car.list.forEach((car) => {
    const node = document.createElement("div");
    node.classList.add("col-md-4");
    node.innerHTML = car.render();
    listCar.appendChild(node);
  });
}

function loadDataSize() {
  api
    .get("/api/sizes")
    .then((result) => {
      Size.init(result?.data?.data);
      Size.list.forEach((size) => {
        let node = size.render();
        listSize.insertAdjacentHTML("beforeend", node);
      });
    })
    .catch(() => {});
}

function handleDelete(id) {
  api.delete("/api/cars/" + id).then((result) => {
    window.location = "/";
  });
}

loadDataCars();
loadDataSize();
