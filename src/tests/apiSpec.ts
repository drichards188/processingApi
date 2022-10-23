import { resizeImage } from '../routes/api'
import supertest from 'supertest'
import { app } from '../index'

const request = supertest(app)
it('gets the api endpoint', async (done) => {
    const response = await request.get('/api')
    expect(response.status).toBe(200)
    done()
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
