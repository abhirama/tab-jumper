// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//key code p -> 80
//key code 0 -> 79
document.addEventListener("keydown", function(event){
    if (event.keyCode == 80) {
      // Send message to background page to toggle tab
      console.log("Sending tab changing request");
      chrome.extension.sendRequest({toggle_tabs: true, href: document.location.href}, function(response) {
        // Do stuff on successful response
      });
    }

    if (event.keyCode == 79) {
      // Send message to background page to toggle tab
      console.log("Sending tab naming request");
      var tabNameLoc = prompt("Please enter a name for your tab");
      chrome.extension.sendRequest({name_tab: true, tabName: tabNameLoc}, function(response) {
        // Do stuff on successful response
      });
      /*
      chrome.tabs.getCurrent(function(tab){
        tab.tabJumperName = "foo";  
      });
      */
    }

}, false);
