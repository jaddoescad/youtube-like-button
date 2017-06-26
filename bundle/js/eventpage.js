function onCommand(command) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log("executed");
  });
});    
}


chrome.commands.onCommand.addListener(onCommand);