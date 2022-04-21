const api = axios.create({
  baseURL: window.location.origin,
});

let sizeID = document.getElementById("size_id");

function loadDataSize() {
  api
    .get("/api/sizes")
    .then((result) => {
      Size.init(result?.data?.data);
      Size.list.forEach((size) => {
        let node = size.renderOption();
        console.log(node)
        sizeID.insertAdjacentHTML("beforeend", node);
      });
    })
    .catch(() => {});
}
loadDataSize();
