"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompaireCircle_1 = require("./CompaireCircle");
var circles = [];
circles[0] = new CompaireCircle_1.ComparableCircle(10);
circles[1] = new CompaireCircle_1.ComparableCircle(20);
circles[2] = new CompaireCircle_1.ComparableCircle(30);
var result = circles[1].compareTo(circles[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
