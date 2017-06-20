function onCommand(command) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response);
  });
});    
}


chrome.commands.onCommand.addListener(onCommand);


//         var IS_MATERIAL = false,
//         options = null,
//         interval = null,
//         likeButton = null;
//         IS_MATERIAL = !document.body.id
     
//      interval = setInterval(attemptLike, 1000);

//     function attemptLike() {
//         if (IS_MATERIAL) {

//             likeButton = document.querySelector('#icon[alt^="like this"]').parentNode.parentNode.parentNode
// console.log(likeButton)
//     }
//         else {
//             likeButton = document.querySelector('.like-button-renderer-like-button-unclicked')
// console.log(likeButton)
//     }
//         //likeButton.click();
//     }