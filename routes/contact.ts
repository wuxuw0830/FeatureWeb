import express = require('express');
const router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {
    res.render('contact', { title: 'Contact' });
});

export default router;