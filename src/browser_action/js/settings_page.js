document.getElementById('submit_to_whitelist_btn').addEventListener('click', submitToWhitelist);
document.getElementById('submit_to_blacklist_btn').addEventListener('click', submitToBlacklist);

function submitToWhitelist(){
  var url = document.getElementById('local_whitelist_text').value;
  var node = document.createElement("LI");
  var button = document.createElement("SPAN");
  button.setAttribute("id", "close_button");
  var textnode = document.createTextNode(url);
  node.appendChild(textnode);
  node.appendChild(button);
  button.innerHTML = "&times;"
  document.getElementById("local_whitelist_table").appendChild(node);
}

function submitToBlacklist(){
  var url = document.getElementById('local_blacklist_text').value;
  var node = document.createElement("LI");
  var button = document.createElement("SPAN");
  button.setAttribute("id", "close_button");
  var textnode = document.createTextNode(url);
  node.appendChild(textnode);
  node.appendChild(button);
  button.innerHTML = "&times;"
  document.getElementById("local_blacklist_table").appendChild(node);
}
