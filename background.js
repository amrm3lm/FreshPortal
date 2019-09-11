console.log("background.js");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("message received: " + request.todo );
    if (request.todo == "refreshPortal")
    {
        chrome.tabs.query({url:"*://pdportal.apsc.ubc.ca/*",currentWindow: true}, function(tabs){
            console.log("refreshing");
            for(let i = 0; i < tabs.lenghth; i++) {
                chrome.tabs.reload(tabs[i]);
            }
        });
    }
});