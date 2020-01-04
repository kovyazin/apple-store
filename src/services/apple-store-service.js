export default class AppleStoreService {
  data = [
    { title: 'Iphone 8', price: 600, id: 1 },
    { title: 'Iphone 11', price: 1200, id: 2 }
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
