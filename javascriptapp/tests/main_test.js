"use strict";

//var assert = require("assert");

var methods=require("./scripts/methods.js");

var tm=new methods.TMethods();
alert(tm.testFunction());
/*
module.exports = {

    "Test main page" : function() {
        var tm=new methods.TMethods();
         assert.equal(tm.testFunction(), "hi"); 
    }

};

if (typeof module !== "undefined" && module === require.main) {
    require("asyncjs").test.testcase(module.exports).exec()
}
*/
