function formClick() {
  var message = document.form.message.value;
  document.form.message.value = "";
  document.form.chatBox.value += "\n" + message;
}