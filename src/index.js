"use strict";
/**
 * Event Scheduling and Management System
 * @author Gabriel Demetrios Lafis
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
app.get('/', function (req, res) {
    res.json({
        message: 'Event Scheduling and Management System',
        author: 'Gabriel Demetrios Lafis',
        version: '1.0.0'
    });
});
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Event Scheduling and Management System running on port ".concat(PORT));
    console.log('👨‍💻 Created by Gabriel Demetrios Lafis');
});
