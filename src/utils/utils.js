/**
 * For downloading files
 * @param name filename
 * @param fileType the type of file (pdf, csv, etc) (must be in format { type: '<type>' }
 * @param fileData contents of the file
 */
export const downloadFile = (name, fileType, fileData) => {
  // create a download anchor tag
  const downloadLink      = document.createElement('a');
  downloadLink.target   = '_blank';
  downloadLink.download = name;
  // convert downloaded data to a Blob
  const blob = new Blob([fileData], fileType);

  // create an object URL from the Blob
  const URL = window.URL || window.webkitURL;
  const downloadUrl = URL.createObjectURL(blob);

  // set object URL as the anchor's href
  downloadLink.href = downloadUrl;

  // append the anchor to document body
  document.body.append(downloadLink);

  // fire a click event on the anchor
  downloadLink.click();

  // cleanup: remove element and revoke object URL
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(downloadUrl);
};

/**
 * helper function that pulls out the filename from content disposition string
 * @param contentDisposition string that needs to be parsed
 * @returns {string} filename
 */
export const getFileName = (contentDisposition) => {
  let filename = "";
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = filenameRegex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    filename = matches[1].replace(/['"]/g, '');
  }
  return filename;
};


/**
 * creates a copy of two arrays and compares them
 * @param arr1 first array
 * @param arr2 second array
 * @returns {boolean}
 */
export const arrayCompare = (arr1, arr2) => {
  const arr1C = [];
  const arr2C = [];
  arr1.forEach((elem) => {
    arr1C.push(elem);
  });
  arr2.forEach((elem) => {
    arr2C.push(elem);
  });
  arr1C.sort((a, b) =>  b - a);
  arr2C.sort((a, b) =>  b - a);
  if (arr1C.length !== arr2C.length) {
    return false;
  }
  arr1C.forEach((elem, i) => {
    if (elem !== arr2C[i]) {
      return false;
    }
  });
  return true;
};