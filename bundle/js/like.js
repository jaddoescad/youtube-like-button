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
    interval = setInterval(attemptLike, 1);

    });
    //     // Fetch our options
    // }

    function attemptLike() {
        if (IS_MATERIAL) {
            likeButton = document.querySelector('#icon[alt^="like this"]').parentNode.parentNode.parentNode
        }
        else {
            likeButton = document.querySelector('.like-button-renderer-like-button-unclicked')
        }
        if (!likeButton || isLiked()){
        stop();
            return
        }
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

