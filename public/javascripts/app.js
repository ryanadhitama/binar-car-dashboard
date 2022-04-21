const api = axios.create({
  baseURL: window.location.origin,
});

let listCar = document.getElementById("list-car");

function loadData() {
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

loadData();
