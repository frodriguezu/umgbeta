﻿(function () {
    "use strict";
    angular
        .module("common.services",
        ["ngResource"])
    .constant("appSettings", { serverPath: "http://localhost:15522" });
}());