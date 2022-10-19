import express, { Express, Request, Response } from 'express'
import router from './src/routes/api'
import routes from './src/routes/api'

const app: Express = express()
const port = 3000

export const myFunc = (num: number): number => {
    return num * num
}

app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})
