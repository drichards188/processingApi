import { resizeImage } from '../routes/api'
import supertest from 'supertest'
import { app } from '../index'

const request = supertest(app)
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get(
            '/api?id=icelandwaterfall.jpg&height=100&width=200'
        )
        expect(response.status).toBe(200)
    })
})

it('should resize image and save to thumb', () => {
    resizeImage(
        'santamonica.jpg',
        '/home/drich/assets/full/santamonica.jpg',
        100,
        200
    ).then((data) => {
        expect(data).toMatch('/home/drich/assets/thumb/santamonica.jpg')
    })
})
