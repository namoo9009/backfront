const express = require('express');
const router = express.Router();
/**
* @openapi
* /api/hello:
*   get:
*     description: Welcome to swagger-jsdoc!
*     parameters:
*       - name: name
*         in: query
*         required: false
*         schema:
*           type: string
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/hello', function (req, res, next) {
  const name = req.query.name || 'World';
  res.json({ message: `Hello ${name}` });
});
module.exports = router;

//YAML방식으로 되어있어서 들여쓰기가 중요하다! 잘못되면 정보가 제대로 안나오는 현상이 있으니 주의!!