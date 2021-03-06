window.init_redactor = function(){
  var csrf_token = $('meta[name=csrf-token]').attr('content');
  var csrf_param = $('meta[name=csrf-param]').attr('content');
  var params;
  if (csrf_param !== undefined && csrf_token !== undefined) {
    params = csrf_param + "=" + encodeURIComponent(csrf_token);
  }
  $('.redactor').redactor(
      { "imageUpload":"/redactor_rails/pictures.json?" + params,
        "imageGetJson":"/redactor_rails/pictures.json",
        "fileUpload":"/redactor_rails/documents.json?" + params,
        "fileGetJson":"/redactor_rails/documents.json",
        "path":"/assets/redactor-rails",
        "css":"style.css"}
      );
}

$(document).ready( window.init_redactor );
document.addEventListener("turbolinks:load", function() {
  window.init_redactor();
});