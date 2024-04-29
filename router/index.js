const Router = require('express').Router
const router = new Router()
const path = require('path')

router.post('/DummyBytes', (req, res) => {
	const userAgent = req.headers['user-agent'];
	if (userAgent.includes('Instagram')) {
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'inline; filename=blablabla');
	res.setHeader('Content-Transfer-Encoding', 'binary');
	res.setHeader('Accept-Ranges', 'bytes');
	res.sendFile(__dirname, path.resolve('../files/dummy.pdf'));
	} else {
		res.redirect('https://halterapp.com');
	}
})

module.exports = router;