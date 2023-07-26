"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});
exports.default = router;
//# sourceMappingURL=login.js.map