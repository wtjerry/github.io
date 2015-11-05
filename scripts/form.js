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
  
  var chatBox = document.getElementById("chatBox");
  var chatBoxMessages = chatBox.innerHtml;
  if (chatBoxMessages == "undefined") {
    chatBoxMessages = "";
  }
  
  var allMessages = chatBoxMessages + "<br>" + message;
  
  chatBox.innerHtml = allMessages;
  Cookies.set('chatMessages', allMessages, { expires: 14 });
  
  navigateTo(4);
}