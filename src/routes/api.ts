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
    } else {
        res.send('oopsies... please enter a valid string for id')
    }

    if (typeof req.query.width !== 'string' || isNaN(Number(req.query.width))) {
        res.send('oopsies... please enter a valid number for width')
        return
    }

    if (
        typeof req.query.height !== 'string' ||
        isNaN(Number(req.query.height))
    ) {
        res.send('oopsies... please enter a valid number for height')
        return
    }

    let width: number = 0
    try {
        width = parseInt(<string>req.query.width)
    } catch (e) {
        res.send('oopsies... please enter a valid number for width')
        return
    }

    let height: number = 0
    try {
        height = parseInt(<string>req.query.height)
    } catch (e) {
        res.send('oopsies... please enter a valid number for height')
        return
    }

    const filepath = filehead + '/full/' + id

    if (fs.existsSync(filepath)) {
        id = processFileExtension(id, width, height)
        const thumbFilePath = path.join(filehead, '/thumb/', id)
        if (!fs.existsSync(thumbFilePath)) {
            const thumbFile = await resizeImage(id, filepath, width, height)

            res.sendFile(thumbFile)
        } else {
            res.sendFile(filehead + '/thumb/' + id)
        }
    } else {
        res.send('oopsies... desired image not found')
    }
})

export const processFileExtension = (
    fileId: string,
    width: number,
    height: number
) => {
    const fileExtension = fileId.match(/\.\S+/g)
    fileId = fileId.split('.')[0]
    fileId = fileId + width.toString() + height.toString() + fileExtension
    return fileId
}

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
