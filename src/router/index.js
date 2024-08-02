import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from '../views/AddProduct.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/AddProduct',
      name: 'AddProduct',
      component: AddProduct
    },

    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },

    {
      path: '/product/:index',
      name: 'Product',
      component: Product
    },

    {
      path: '/products',
      name: 'Products',
      component: Products
    },
  ]
})

export default router
