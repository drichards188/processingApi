import { resizeImage } from '../routes/api'

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
