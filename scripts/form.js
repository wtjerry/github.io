function loadChatMessages() {
  var allCookies = Cookies.get();
    
  var chatMessages = Cookies.get('chatMessages');
  if (chatMessages !== undefined) {
    document.getElementById("chatBox").innerHTML = chatMessages;
  }
}

function formClick() {
  var message = document.form.message.value;
    document.form.message.value = "";
  
  var chatBox = document.getElementById("chatBox");
  var chatBoxMessages = chatBox.innerHTML;
  if (chatBoxMessages == undefined) {
    chatBoxMessages = "";
  }
  
  var allMessages = chatBoxMessages + "&#13;&#10;" + message;
  console.log(allMessages);
  chatBox.innerHTML = allMessages;
  Cookies.set('chatMessages', allMessages, { expires: 14 });
}