(function() {
    'use strict';
    var IS_MATERIAL = false,
    //     options = null,
         interval = null,
         likeButton = null;

    function init() {
    chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    IS_MATERIAL = !document.body.id
    attemptLike();

    });
    //     // Fetch our options
    // }

    function attemptLike() {
        if (IS_MATERIAL) {
            likeButton = document.querySelector('[aria-label^="like this"]')
    }
        else {
            likeButton = document.querySelector('.like-button-renderer-like-button-unclicked')
        }
        if (!likeButton || isLiked()){
        console.log("stopping...")
        stop();
        return
        }
        console.log("clicking...")
        likeButton.click();
    }
}
function stop() {
        clearInterval(interval);
    }
  function isLiked() {
        return IS_MATERIAL ?
            likeButton.classList.contains('style-default-active') :
            likeButton.classList.contains('hid')
    }
    window.addEventListener('DOMContentLoaded', init);
})();



