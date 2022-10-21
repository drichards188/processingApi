import sharp from 'sharp'
import fs from 'fs'
import { Request, Response, Router } from 'express'

//add file path head here to filehead
const filehead = '/home/drich/assets/'

const routes = Router()

routes.get('/api', async function (req: Request, res: Response) {
    let id = ''
    if (typeof req.query.id === 'string') {
        id = req.query.id
    }

    const width: number = parseInt(<string>req.query.width)

    const height: number = parseInt(<string>req.query.height)

    const filepath = filehead + 'full/' + id

    if (fs.existsSync(filepath)) {
        if (!fs.existsSync(filepath)) {
            const thumbFile = await resizeImage(id, filepath, width, height)
            res.sendFile(thumbFile)
        } else {
            res.sendFile(filehead + '/thumb/' + req.query.id)
        }
    } else {
        res.send('oopsies... desired image not found')
    }
})

export const resizeImage = async (
    id: string,
    filepath: string,
    width: number,
    height: number
) => {
    try {
        await sharp(filepath)
            .resize({ width: width, height: height })
            .toFile(filehead + id)
    } catch (error) {
        console.log(error)
    }

    return filehead + id
}

export default routes
