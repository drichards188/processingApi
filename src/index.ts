import express, { Express, Request, Response } from 'express'
import routes from './routes/api'

export const app: Express = express()
const port = 3000

export const myFunc = (num: number): number => {
    return num * num
}

app.get('/api', routes)

app.get('/', (req: Request, res: Response) => {
    res.send(
        'image api is at /api endpoint. use id param for filename as well as width and height to resize such as => http://localhost:3000/api?id=encenadaport.jpg&height=100&width=200'
    )
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})
