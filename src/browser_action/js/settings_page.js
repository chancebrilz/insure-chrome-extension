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
     button.setAttribute("class", "wl_close");
     //TODO: button.addEventListener("click", removeElement);
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
       button.setAttribute("class", "bl_close");
       //TODO: button.addEventListener("click", removeElement);
       var textnode = document.createTextNode(blacklist_arr[i]);
       node.appendChild(textnode);
       node.appendChild(button);
       button.innerHTML = "&times;"
       document.getElementById("local_blacklist_table").appendChild(node);
     }
  }

var wl_closebtns = document.getElementsByClassName("wl_close");

//Assign clicklisteners to x buttons in whitelist
for(var i = 0; i < wl_closebtns.length; i++){
    wl_closebtns[i].addEventListener('click', function removeWLItem(){
    var temparr = JSON.parse(localStorage.getItem('whitelist'));
    var unparsed_html = this.parentElement.innerHTML;
    var parsed_html = unparsed_html.substring(0, unparsed_html.search("<span"));
    for(var j = 0; j < temparr.length; j++){
      console.log(parsed_html);
      if(parsed_html == temparr[j]){
        temparr.splice(j, 1);
        console.log(temparr);
      }
    }
    localStorage.setItem('whitelist', JSON.stringify(temparr));
    updateWhitelist();
  });
}

var bl_closebtns = document.getElementsByClassName("bl_close");

//Assign clicklisteners to x buttons in blacklist
for(var i = 0; i < bl_closebtns.length; i++){
    bl_closebtns[i].addEventListener('click', function removeBLItem(){
    var temparr = JSON.parse(localStorage.getItem('blacklist'));
    var unparsed_html = this.parentElement.innerHTML;
    var parsed_html = unparsed_html.substring(0, unparsed_html.search("<span"));
    for(var j = 0; j < temparr.length; j++){
      console.log(parsed_html);
      if(parsed_html == temparr[j]){
        temparr.splice(j, 1);
        console.log(temparr);
      }
    }
    localStorage.setItem('blacklist', JSON.stringify(temparr));
    updateBlacklist();
  });
}
