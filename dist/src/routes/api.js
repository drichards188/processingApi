"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/* GET home page. */
router.get('/api', function (req, res, next) {
    res.send('hiya david this is /api');
    // res.render('index', { title: 'Hiya David this is /api' })
});
exports.default = router;
// module.exports = router
