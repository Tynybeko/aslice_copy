export const downloadFile = (blob, fileName) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.classList.add("d-none");
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const blobToObject = async result => {
  return new Promise(resolve => {
    const fr = new FileReader();
    fr.readAsText(result);
    fr.onload = function() {
      try {
        resolve(JSON.parse(this.result));
      } catch (error) {
        new Error(`Invalid object json on blob error handler ${error.message}`);
      }
    };
  });
};

export const readFile = async file => {
  return new Promise(resolve => {
    const fr = new FileReader();
    fr.readAsBinaryString(file);
    fr.onload = function() {
      try {
        resolve(this.result);
      } catch (error) {
        new Error(`Not a file object ${error.message}`);
      }
    };
  });
};
