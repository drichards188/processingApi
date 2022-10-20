import { NextFunction } from 'express'
import sharp from 'sharp'

import express from 'express'
import { Router } from 'express'

const routes = Router()

/* GET home page. */
routes.get('/api', async function (req: any, res: any, next: NextFunction) {
    const filepath = '/home/drich/assets/full/' + req.query.id

    const thumbFile = await resizeImage(req.query.id, filepath, 100, 200)
    console.log(thumbFile)
    res.sendFile(thumbFile)
    // res.send(`hiya david this is /api with params of: ${req.query.id}`)
    // res.render('index', { title: 'Hiya David this is /api' })
})

const resizeImage = async (
    id: string,
    filepath: string,
    width: number,
    height: number
) => {
    try {
        await sharp(filepath)
            .resize({ width: 100 })
            .toFile('/home/drich/assets/thumb/' + id)
    } catch (error) {
        console.log(error)
    }

    return '/home/drich/assets/thumb/' + id
}

export default routes
