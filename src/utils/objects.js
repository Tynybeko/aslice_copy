const appendToObject = (object, path, value) => {
  const pathNames = path.split(".");

  const key = pathNames.splice(0, 1);
  if (!pathNames.length) {
    object[key] = value;
    return;
  } else {
    if (!object[key]) {
      object[key] = {};
    }
    appendToObject(object[key], pathNames.join("."), value);
  }
};

export { appendToObject };
