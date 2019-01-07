class Validations {
  confirmArray(data) {
    if (Array.isArray(data)) {
      return data;
    }
    return true;
  }
}

export default new Validations();
