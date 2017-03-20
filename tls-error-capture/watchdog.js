// Copyright (c) 2017 Marcel Moura. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var filter = {
    urls: [
      "*://*/*"
    ],
  };

var expectedError = "net::ERR_CONNECTION_RESET";

chrome.webRequest.onErrorOccurred.addListener(
  function(info) {
    var errorOcurred = (info.error.search(expectedError) == 0);
    if (errorOcurred) {
      console.log("Error: {url=" + info.url + 
                  ", method=" + info.method +
                  ", type=" + info.type +
                  ", timeStamp=" + info.timeStamp +
                  ", tabId=" + info.tabId +
                  ", ip=" + info.ip +
                  ", error=" + info.error);

      chrome.tabs.update(info.tabId, {url: "error.html"});
    }
  },
  filter);
