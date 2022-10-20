import { NextFunction } from 'express'

import express from 'express'
import { Router } from 'express'

const routes = Router()

/* GET home page. */
routes.get('/api', function (req: any, res: any, next: NextFunction) {
    res.send(`hiya david this is /api with params of: ${req.query.id}`)
    // res.render('index', { title: 'Hiya David this is /api' })
})

export default routes
// module.exports = router
