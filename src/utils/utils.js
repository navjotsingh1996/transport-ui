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