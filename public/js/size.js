class Size {
  static list = [];

  static init(sizes) {
    this.list = sizes.map((i) => new this(i));
  }

  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  render() {
    return `
      <button class="btn btn-outline-primary btn-filter" value='${this.id}' onclick="filterCar(${this.id}, this)">
        ${this.name}
      </button>
        `;
  }

  renderOption() {
    return `
      <option value='${this.id}'>
        ${this.name}
      </option>
        `;
  }
}
