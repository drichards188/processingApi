import { NextFunction } from 'express'

import express from 'express'
import { Router } from 'express'

const routes = Router()

const filepath = '/home/drich/assets/full/encenadaport.jpg'

/* GET home page. */
routes.get('/api', function (req: any, res: any, next: NextFunction) {
    res.sendFile(filepath)
    // res.send(`hiya david this is /api with params of: ${req.query.id}`)
    // res.render('index', { title: 'Hiya David this is /api' })
})

export default routes
// module.exports = router
