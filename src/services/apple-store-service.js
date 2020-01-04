export default class AppleStoreService {
  data = [
    {
      title: 'Iphone 8',
      imageUrl: 'https://img.mvideo.ru/Pdb/30030157b.jpg',
      price: 600,
      id: 1
    },
    {
      title: 'Iphone 11',
      imageUrl:
        'https://htstatic.imgsmail.ru/pic_image/a5ac7a5858bd50a0853f05fee3e5411a/450/450/1670179/',
      price: 1200,
      id: 2
    }
  ]

  getData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.75) {
          resolve(this.data)
        } else {
          reject(new Error('Something bad happened!'))
        }
      }, 700)
    })
}
