<script>
import { useProductStore } from '@/stores/products'

export default {

    data() {
        return {
            products: useProductStore().products
        }
    },

    methods: {
        removeProduct(index) {
            useProductStore().deleteProduct(index);
        },

        addToCart(product) {
            useProductStore().pushcart(product);
        },

        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>



<template>

    <section class="px-[60px] pb-[60px]">



        <!-- heading container -->
        <div class="flex  items-center">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[80px] opacity-70 hover:scale-125 duration-500"></button>
                    
            <!-- title -->
            <h1 class="text-center text-[30px] text-[rgb(73,73,73)] font-bold mx-auto pr-[80px] py-[60px]">Tutti i
                prodotti</h1>

        </div>



        <!-- Grid Product -->
        <div class="grid grid-cols-4">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products" :key="index"
                class="flex flex-col  items-center pb-[40px] px-[40px] pt-[20px] border-[1px] border-gray-100 hover:border-black">


                <!-- img -->
                <div class="h-[230px] border-b-[2px] w-[80%] flex justify-center items-center">
                    <img :src="product.img" alt="" class="h-[180px] my-auto">
                </div>

                <!-- title -->
                <h2 class="font-semibold pt-[30px] pb-[10px] text-[16px]">{{ product.title }}</h2>

                <!-- description -->
                <p class="pb-[10px] text-[13px]">{{ product.description }}</p>

                <!-- price -->
                <p class="w-[100%]"><span class="font-semibold">Prezzo: </span>€{{ product.price }} </p>


            </RouterLink>

        </div>



    </section>

</template>
