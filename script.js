function button() {
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("vote").innerHTML = this.responseText;
    }
  };
  ajaxRequest.open("GET", "ajax_info.txt", true);
  ajaxRequest.send();
}
