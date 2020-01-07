export default class AppleStoreService {
  data = [
    {
      title: 'Apple Iphone 6s',
      imageUrl:
        'https://static.re-store.ru/upload/resize_cache/iblock/46d/494_340_17f5c944b3b71591cc9304fac25365de2/46ded64b5fa698a3abb67ae80116bfa9.jpg',
      price: 500,
      id: 1
    },
    {
      title: 'Apple Iphone 7',
      imageUrl:
        'https://static.re-store.ru/upload/resize_cache/iblock/aad/494_340_17f5c944b3b71591cc9304fac25365de2/aad9d623affeca74cfa323abd61f32cd.jpg',
      price: 600,
      id: 2
    },
    {
      title: 'Apple Iphone XS',
      imageUrl:
        'https://static.re-store.ru/upload/resize_cache/iblock/a03/1120_772_17f5c944b3b71591cc9304fac25365de2/a0360b6e1e29b15acc023e49aa744dc3.jpg',
      price: 900,
      id: 3
    },
    {
      title: 'Apple Iphone 11',
      imageUrl:
        'https://static.re-store.ru/upload/resize_cache/iblock/107/1120_1533_17f5c944b3b71591cc9304fac25365de2/107e8127a1a2e20e73f4ab9b391addb7.jpg',
      price: 1200,
      id: 4
    },
    {
      title: 'Apple Watch Series 5',
      imageUrl:
        'https://static.re-store.ru/upload/resize_cache/iblock/c1d/1120_1341_17f5c944b3b71591cc9304fac25365de2/c1dd0e640afc6bbb25084e700e309e06.jpg',
      price: 600,
      id: 5
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
