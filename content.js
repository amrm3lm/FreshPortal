console.log("content.js");
setInterval(function () {
    chrome.runtime.sendMessage({todo: "refreshPortal"});
    console.log("refreshing pdportal");
 }, 60000);
