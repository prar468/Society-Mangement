const express = require('express')
const router = express.Router()
const Controller = require('../Controller/Workspace.Controller')
const { verifyAccessToken } = require('../helpers/jwt_helpers')

router.post('/', Controller.create)
router.get('/:id', Controller.get)
router.get('/', Controller.list)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)
router.put('/:id/restore', Controller.restore)

module.exports = router
