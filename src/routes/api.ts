import sharp from 'sharp'
import fs from 'fs'
import { Router } from 'express'

const routes = Router()

/* GET home page. */
routes.get('/api', async function (req: any, res: any) {
    const filepath = '/home/drich/assets/full/' + req.query.id

    if (fs.existsSync(filepath)) {
        if (!fs.existsSync(filepath)) {
            //todo add error handling
            const thumbFile = await resizeImage(
                req.query.id,
                filepath,
                parseInt(req.query.width),
                parseInt(req.query.height)
            )
            res.sendFile(thumbFile)
        } else {
            res.sendFile('/home/drich/assets/thumb/' + req.query.id)
        }
    } else {
        res.send('oopsies... desired image not found')
    }
})

const resizeImage = async (
    id: string,
    filepath: string,
    width: number,
    height: number
) => {
    try {
        await sharp(filepath)
            .resize({ width: width, height: height })
            .toFile('/home/drich/assets/thumb/' + id)
    } catch (error) {
        console.log(error)
    }

    return '/home/drich/assets/thumb/' + id
}

export default routes
