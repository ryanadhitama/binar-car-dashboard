const api = axios.create({
  baseURL: window.location.origin,
});

let listCar = document.getElementById("list-car");
let listSize = document.getElementById("list-size");

function loadDataCars() {
  api
    .get("/api/cars")
    .then((result) => {
      Car.init(result?.data?.data);
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add("col-md-4");
        node.innerHTML = car.render();
        listCar.appendChild(node);
      });
    })
    .catch(() => {});
}

function loadDataSize() {
  api
    .get("/api/sizes")
    .then((result) => {
      Size.init(result?.data?.data);
      Size.list.forEach((size) => {
        let node = size.render();
        listSize.insertAdjacentHTML('beforeend', node);
      });
    })
    .catch(() => {});
}

loadDataCars();
loadDataSize();
