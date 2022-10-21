import sharp from 'sharp'
import fs from 'fs'
import { Request, Response, Router } from 'express'
import path from 'path'

const filehead = process.cwd() + '/assets'

const routes = Router()

routes.get('/api', async function (req: Request, res: Response) {
    let id = ''
    if (typeof req.query.id === 'string') {
        id = req.query.id
    }

    const width: number = parseInt(<string>req.query.width)

    const height: number = parseInt(<string>req.query.height)

    const filepath = filehead + '/full/' + id

    if (fs.existsSync(filepath)) {
        const thumbFilePath = path.join(filehead, '/thumb/', id)
        if (!fs.existsSync(thumbFilePath)) {
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
        const theFilePath = path.join(filehead, `/thumb/${id}`)
        await sharp(filepath)
            .resize({ width: width, height: height })
            .toFile(theFilePath)
    } catch (error) {
        console.log(error)
    }

    return path.join(filehead, '/thumb', id)
}

export default routes
