"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('contact', { title: 'Contact' });
});
exports.default = router;
//# sourceMappingURL=contact.js.map