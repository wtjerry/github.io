function loadChatMessages() {
  var allCookies = Cookies.get();
    
  var chatMessages = Cookies.get('chatMessages');
  if (chatMessages !== undefined) {
    document.getElementById("chatBox").innerHTML = chatMessages;
  }
}

function formClick() {
  var isValid = validateForm();
  if (!isValid) {
    alert("muhahaha something is wrong");
    return;
  }
  
  var message = createMessage();
  
  var chatBox = document.getElementById("chatBox");
  var chatBoxMessages = chatBox.innerHTML;
  
  var allMessages = "";
  if (chatBoxMessages == undefined) {
    allMessages = message;
  }
  else {
    allMessages = chatBoxMessages + "<br>" + message;
  }

  chatBox.innerHTML = allMessages;
  Cookies.set('chatMessages', allMessages, { expires: 14 });
}

function validateForm() {
  if (document.form.name.value == "") {
    return false;
  }
  
  if (document.form.message.value == "") {
    return false;
  }
  
  return true;
}

function createMessage() {
  var userName = document.form.name.value;
  document.form.name.value = "";
  
  var text = document.form.message.value;
  document.form.message.value = "";
  
  var message = "<b>" + userName + "</b>" + ":  " + text;
  return message;
}