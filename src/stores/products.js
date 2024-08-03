import { defineStore } from 'pinia'



export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        "title": "ASUS ROG Strix Z790-E Gaming WiFi II",
        "description": "Scheda madre Intel® Z790 LGA 1700 ATX con 18+1+2 stadi di potenza, slot DDR5, cinque slot M.2 con dissipatori, slot SSD PCIe® 5.0 NVMe® con M.2 Combo-Sink, PCIe 5.0 x16 SafeSlot con Q-Release, WiFi 7, porta I/O posteriore USB 20Gbps e connettore del pannello frontale con PD 3.0 fino a 30W, AI Overclocking, AI Cooling II e illuminazione Aura Sync RGB.",
        "price": 450,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNsqLpkB_avy8yruFppvD2w4lbwl9GEfdYw&s"

      },

      {
        "title": "MSI GeForce RTX 4060 VENTUS 2X Black 8G OC",
        "description": "Scheda video con GPU NVIDIA GeForce RTX 4060, 8 GB di memoria GDDR6, supporto per ray tracing e DLSS, design compatto e doppia ventola per un raffreddamento efficiente.",
        "price": 306,
        "img": "https://asset.msi.com/resize/image/global/product/product_1691553350a0917e4c56fe0c1d2661fccf68071151.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
      },

      {
        "title": "Intel Core i9-13900K",
        "description": "Processore di 13a generazione con 24 core (8 Performance-cores e 16 Efficient-cores), frequenza base di 3.0 GHz e turbo boost fino a 5.8 GHz, supporto per DDR5 e PCIe 5.0, ideale per gaming e applicazioni ad alte prestazioni.",
        "price": 600,
        "img": "https://media.ldlc.com/r1600/ld/products/00/05/98/23/LD0005982302.jpg"
      },

      {
        "title": "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4",
        "description": "Kit di memoria DDR4 con una velocità di 3200 MHz, progettato per l'overclocking ad alte prestazioni. Dispone di un dissipatore di calore in alluminio per una gestione termica ottimale.",
        "price": 80,
        "img": "https://m.media-amazon.com/images/I/71jGZ9WpjTL.jpg"
      },

      {
        "title": "ASUS TUF Gaming B550-PLUS",
        "description": "Scheda madre ATX con socket AM4, supporto per processori AMD Ryzen, DDR4, PCIe 4.0, dual M.2, USB 3.2 Gen 2, HDMI 2.1, DisplayPort 1.2, Realtek S1200A codec audio, LAN 2.5Gb e illuminazione Aura Sync RGB.",
        "price": 160,
        "img": "https://dlcdnwebimgs.asus.com/gain/194ef7df-2785-4486-8c91-eaaed7a0604a/"
      },

      {
        "title": "ASUS Dual AMD Radeon RX 7600 V2 OC",
        "description": "Scheda video con GPU AMD Radeon RX 7600, 8 GB di memoria GDDR6, ottima per il gaming in Full HD, con doppia ventola e design robusto.",
        "price": 250,
        "img": "https://dlcdnwebimgs.asus.com/gain/77f13d73-4a67-45d1-8a2d-913c03f4cf88/"
      },

      {
        "title": "AMD Ryzen 9 7950X",
        "description": "Processore con 16 core e 32 thread, frequenza base di 4.5 GHz e boost fino a 5.7 GHz, supporto per DDR5 e PCIe 5.0, eccellente per multitasking e carichi di lavoro intensivi.",
        "price": 700,
        "img": "https://m.media-amazon.com/images/I/617c8LZ3ywL.jpg"
      },

      {
        "title": "G.Skill Trident Z RGB 32GB (2 x 16GB) DDR4",
        "description": "Memoria DDR4 con una velocità di 3600 MHz, dotata di illuminazione RGB personalizzabile. Ideale per i gamer e gli appassionati di PC che cercano prestazioni elevate e un design accattivante.",
        "price": 150,
        "img": "https://m.media-amazon.com/images/I/61l4EStxhnL._AC_UF1000,1000_QL80_.jpg"
      },

      {
        "title": "ASUS Prime Z690-P",
        "description": "Scheda madre ATX con socket LGA 1700, supporto per processori Intel di 12a generazione, DDR5, PCIe 5.0, dual M.2, USB 3.2 Gen 2x2, HDMI 2.1, DisplayPort 1.4, Realtek 7.1 Surround Sound e supporto per Intel Optane Memory.",
        "price": 220,
        "img": "https://dlcdnwebimgs.asus.com/gain/b384807e-6b83-43bb-bf0b-28f1ec75fb1c/w800"
      },

      {
        "title": "Gigabyte GeForce RTX 3060 Gaming OC",
        "description": "Scheda video con GPU NVIDIA GeForce RTX 3060, 12 GB di memoria GDDR6, supporto per ray tracing e DLSS, sistema di raffreddamento a tripla ventola per prestazioni ottimali.",
        "price": 400,
        "img": "https://m.media-amazon.com/images/I/61jN35sc4jS.jpg"
      },

      {
        "title": "Intel Core i5-13600K",
        "description": "Processore di 13a generazione con 14 core (6 Performance-cores e 8 Efficient-cores), frequenza base di 3.5 GHz e turbo boost fino a 5.1 GHz, supporto per DDR5 e PCIe 5.0, ottimo rapporto qualità-prezzo per gaming e produttività.",
        "price": 320,
        "img": "https://media.ldlc.com/r1600/ld/products/00/05/98/21/LD0005982183.jpg"

      },

      {
        "title": "Kingston FURY Beast 16GB (2 x 8GB) DDR5",
        "description": "Modulo di memoria DDR5 con una velocità di 5200 MHz, progettato per le piattaforme di nuova generazione. Offre prestazioni superiori e una maggiore efficienza energetica rispetto ai moduli DDR4.",
        "price": 120,
        "img": "https://m.media-amazon.com/images/I/717cPftxQgL.jpg"
      }


    ],

    cart: []

  }),



  actions: {
    deleteProduct(index) {
      this.products.splice(index, 1);
    },

    addProduct(product) {
      this.products.unshift(product)
    },

    pushcart(product) {
      this.cart.push(product)
    },

    deleteCart(index) {
      this.cart.splice(index, 1);
    },
  },



})
