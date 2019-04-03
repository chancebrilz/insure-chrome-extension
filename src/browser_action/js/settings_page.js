//Initialize local lists on refresh
if(localStorage.getItem('whitelist') != null){
  updateWhitelist();
}
if(localStorage.getItem('blacklist') != null){
  updateBlacklist();
}

//Submit Buttons
document.getElementById('submit_to_whitelist_btn').addEventListener('click', submitToWhitelist);
document.getElementById('submit_to_blacklist_btn').addEventListener('click', submitToBlacklist);

//When button clicked, push new URL to localStorage
function submitToWhitelist(){
	var whitelist_arr = JSON.parse(localStorage.getItem('whitelist'));
  var element = document.getElementById("local_whitelist_text").value;
  if(whitelist_arr == null){
    whitelist_arr = [element]
  }else{
	 whitelist_arr.push(element);
   }
   localStorage.setItem('whitelist', JSON.stringify(whitelist_arr));
   updateWhitelist();
}

//Display the current localStorage to HTML
function updateWhitelist(){
  //clear local_whitelist_table
  var ul = document.getElementById("local_whitelist_table");
  var lis = ul.getElementsByTagName("li");
  while(lis.length > 0) {
	   ul.removeChild(lis[0]);
   }
   var whitelist_arr = JSON.parse(localStorage.getItem('whitelist'));
   //loop through whitelist_arr and append elements to local_whitelist_table
   for(var i = 0; i < whitelist_arr.length; i++){
    var node = document.createElement("LI");
     var button = document.createElement("SPAN");
     button.setAttribute("id", "close_button");
     var textnode = document.createTextNode(whitelist_arr[i]);
     node.appendChild(textnode);
     node.appendChild(button);
     button.innerHTML = "&times;"
     document.getElementById("local_whitelist_table").appendChild(node);
   }
}
//When button clicked, push new URL to localStorage
  function submitToBlacklist(){
    var blacklist_arr = JSON.parse(localStorage.getItem('blacklist'));
    var element = document.getElementById("local_blacklist_text").value;
    if(blacklist_arr == null){
      blacklist_arr = [element]
    }else{
  	 blacklist_arr.push(element);
    }
  	localStorage.setItem('blacklist', JSON.stringify(blacklist_arr));
    updateBlacklist();
  }
  
//Display the current blacklist to HTML
  function updateBlacklist(){
    //clear local_blacklist_table
    var ul = document.getElementById("local_blacklist_table");
    var lis = ul.getElementsByTagName("li");
    while(lis.length > 0) {
  	   ul.removeChild(lis[0]);
     }
     var blacklist_arr = JSON.parse(localStorage.getItem('blacklist'));
     //loop through blacklist_arr and append elements to local_blacklist_table
     for(var i = 0; i < blacklist_arr.length; i++){
      var node = document.createElement("LI");
       var button = document.createElement("SPAN");
       button.setAttribute("id", "close_button");
       var textnode = document.createTextNode(blacklist_arr[i]);
       node.appendChild(textnode);
       node.appendChild(button);
       button.innerHTML = "&times;"
       document.getElementById("local_blacklist_table").appendChild(node);
     }
  }
