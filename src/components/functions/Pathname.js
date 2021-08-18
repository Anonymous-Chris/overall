function Pathname() {
  var url = window.location.href;
  var pathname = new URL(url).pathname;
  var finalPath = pathname.substring(1);
  return finalPath;
}

export default Pathname;
