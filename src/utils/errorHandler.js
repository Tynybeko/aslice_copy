import swal from "sweetalert2";

const errorHandler = (response, success, reject) => {
  if (!response) return;
  if (response.Error && !reject) {
    swal.close();
    swal.fire({
      icon: "error",
      text: response.Error
    });
    
    return response;
  } else if (response.Error && reject) {
    reject(response.Error);
  } else {
    if (success) {
      const args = success.args;
      success(args);
    }
    return response;
  }
};

export { errorHandler };
