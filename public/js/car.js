class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, name, price, image, size, created_at, updated_at }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.size = size?.name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  render() {
    return `
      <div class="card car-card">
        <div class="card-body">
          <img class="img-fluid w-100 mb-3 card-img" src='/uploads/car/${
            this.image
          }' alt="Car" />
          <span class="type mb-2">${this.name} </span>
          <span class="price mb-3">Rp ${new Intl.NumberFormat("de-DE").format(
            this.price
          )}  / hari</span>
          <span class="updatedAt mb-4"
            ><i data-feather="clock"></i> Updated at ${moment(
              this.updated_at
            ).format("DD MMM YYYY, hh.mm")}</span
          >
          <div class="d-flex card-action justify-content-between">
            <a class="btn btn-outline-danger mr-3" data-toggle="modal" href="#modalDelete${
              this.id
            }">
              <i data-feather="trash"></i> Delete</a
            >
            <a class="btn btn-success" href='/car/${
              this.id
            }/edit'><i data-feather="edit"></i> Edit</a>
          </div>
        </div>
      </div>
      <div
        class="modal modal-delete fade"
        id="modalDelete${this.id}"
        tabindex="-1"
        aria-labelledby="modalDeleteLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <img src="/img/modal_img.png" alt="" />
              <h4>Menghapus Data Mobil</h4>
              <p>
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
                menghapus?
              </p>
                <div class="modal-action">
                  <button onclick="return handleDelete(${this.id})" class="btn btn-primary mr-3">Ya</button>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    data-dismiss="modal"
                  >
                    Tidak
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      `;
  }
}
