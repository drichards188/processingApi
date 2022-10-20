import express, { Express } from 'express'
import routes from './src/routes/api'

const app: Express = express()
const port = 3000

export const myFunc = (num: number): number => {
    return num * num
}

app.get('/', routes)

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})
