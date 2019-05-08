var site;

document.getElementById('GoBack').addEventListener('click', () => history.go(-2);
document.getElementById('continue').addEventListener('click', continuebutton);

chrome.runtime.onMessage.addListener(
	function(request, sender)
	{
		site = request.site; 
	});

function continuebutton()
{
	whitelistURL();
	chrome.tabs.update({url: site});
}


function whitelistURL()  
{
  var whitelist_arr = JSON.parse(localStorage.getItem('whitelist'));
  var element = site;
  if(whitelist_arr == null){
    whitelist_arr = [element]
  }else{
	 whitelist_arr.push(element);
   }
   localStorage.setItem('whitelist', JSON.stringify(whitelist_arr));
}
