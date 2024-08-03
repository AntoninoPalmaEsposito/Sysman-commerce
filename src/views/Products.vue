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

    <section class="px-[4vw] pb-[4vw] md:px-[60px] md:pb-[60px]">



        <!-- heading container DEKSTOP -->
        <div class="hidden md:flex  items-center">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[80px] opacity-70 hover:scale-125 duration-500"></button>

            <!-- title -->
            <h1 class="text-center text-[30px] text-[rgb(73,73,73)] font-bold mx-auto pr-[80px] py-[60px]">Tutti i
                prodotti</h1>

        </div>




        <!-- heading container MOBILE -->
        <div class="flex md:hidden  items-center">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[10vw] opacity-70 hover:scale-125 duration-500"></button>

            <!-- title -->
            <h1 class="text-center text-[5vw] text-[rgb(73,73,73)] font-bold mx-auto pr-[8vw] pb-[10vw] pt-[10vw]">Tutti i
                prodotti</h1>

        </div>



        <!-- Grid Product DEKSTOP-->
        <div class="hidden md:grid grid-cols-4">

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



        <!-- Grid Product MOBILE-->
        <div class="grid md:hidden grid-cols-1">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products" :key="index"
                class="flex flex-col  items-center pb-[8vw] px-[6vw] pt-[2vw] border-2 border-gray-200">


                <!-- img -->
                <div class="h-[50vw] border-b-2 w-[70vw] flex justify-center items-center">
                    <img :src="product.img" alt="" class="h-[40vw] my-auto">
                </div>

                <!-- title -->
                <h2 class="font-semibold pt-[5vw] pb-[3vw] text-[3.5vw]">{{ product.title }}</h2>

                <!-- description -->
                <p class="pb-[3vw] text-[3vw]">{{ product.description }}</p>

                <!-- price -->
                <p class="w-[100%]"><span class="font-semibold">Prezzo: </span>€{{ product.price }} </p>


            </RouterLink>

        </div>



    </section>

</template>
