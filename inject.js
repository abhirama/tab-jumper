var J_KEY_CODE = 74;
var N_KEY_CODE = 78;

document.addEventListener("keydown", function(event){
    if (event.altKey && event.keyCode == J_KEY_CODE) {
      var tabNameLoc = prompt("Jump to");
      if (tabNameLoc) {
        chrome.extension.sendRequest({jump_tabs: true, tabName: tabNameLoc});
      }
    }

    if (event.altKey && event.keyCode == N_KEY_CODE) {
      var tabNameLoc = prompt("Name your tab");
      if (tabNameLoc) {
        chrome.extension.sendRequest({name_tab: true, tabName: tabNameLoc});
      }
    }
}, false);
