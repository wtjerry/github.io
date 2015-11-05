function loadChatMessages() {
  var allCookies = Cookies.get();
    
  var chatMessages = Cookies.get('chatMessages');
  if (chatMessages !== undefined) {
    document.form.message.value = chatMessages;
  }
}

function formClick() {
  var message = document.form.message.value;
  
  document.form.message.value = "";
  
  var allMessages = document.form.chatBox.value + "\n" + message;
  
  document.form.chatBox.value = allMessages;
  Cookies.set('chatMessages', allMessages, { expires: 14 });
  
  navigateTo(4);
}