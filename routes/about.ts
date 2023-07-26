import express = require('express');
const router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {
    res.render('about', { title: 'About' });
});

export default router;