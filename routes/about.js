"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('about', { title: 'About' });
});
exports.default = router;
//# sourceMappingURL=about.js.map