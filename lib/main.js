'use strict';

const { browserWindows } = require('sdk/windows');
// const { windows } = require('sdk/window/utils');
const tabs = require('sdk/tabs');
const { data } = require("sdk/self");
const { ActionButton } = require("sdk/ui/button/action");
const { PageMod } = require("sdk/page-mod");

console.log("loaded main");

var button = ActionButton({
  id: "test-addon",
  label: "test label",
  tooltip: "test tooltip",
  // Relative to the data directory
  icon: {
    "16": "./icons/lightbeam_logo-only_16x16.png",
    "32": "./icons/lightbeam_logo-only_32x32.png",
  },
  onClick: function() {
    tabs.open({
      url: data.url("index.html"),
    });
  }
});

PageMod({
  include: data.url("index.html"),
  contentScriptWhen: "ready",
  contentScriptFile: [ data.url("send_xhr.js") ]
});
