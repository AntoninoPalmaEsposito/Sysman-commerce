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
    }
}
</script>





<template>

    <!-- Hero section DEKSTOP -->
    <div class="hidden md:flex bg-[rgb(38,121,114)] text-white pb-[150px] flex-col  rounded-b-3xl mt-[-20px] px-[60px]">

        <h1 class="pt-[130px] font-bold text-[60px] text-center leading-[70px] ">Potenzia il Tuo PC <br> con i Migliori
            Componenti Hardware</h1>

        <p class="pt-[40px] text-[30px] text-center ">Benvenuto su Sysman-Commerce, il tuo punto di riferimento per
            tutto ciò che riguarda l’hardware per PC. Che tu sia un gamer appassionato, un professionista IT o un
            semplice appassionato di tecnologia, qui troverai tutto ciò di cui hai bisogno per costruire, aggiornare e
            ottimizzare il tuo computer.</p>

    </div>



    <!-- Hero section MOBILE -->
    <div class="flex md:hidden bg-[rgb(38,121,114)] text-white pb-[10vw] flex-col  rounded-b-[4vw] mt-[-4vw] px-[4vw]">

        <h1 class="pt-[12vw] font-bold text-[6vw] text-center leading-[6vw] ">Potenzia il Tuo PC con i Migliori
            Componenti Hardware</h1>

        <p class="pt-[3vw] text-[3.5vw] text-center ">Benvenuto su Sysman-Commerce, il tuo punto di riferimento per
            tutto ciò che riguarda l’hardware per PC. Che tu sia un gamer appassionato, un professionista IT o un
            semplice appassionato di tecnologia, qui troverai tutto ciò di cui hai bisogno per costruire, aggiornare e
            ottimizzare il tuo computer.</p>

    </div>



    <!-- last product DEKSTOP -->
    <section class="hidden md:block px-[60px] py-[60px]">

        <h1 class="text-[30px] font-bold text-[rgb(73,73,73)] pb-[30px]">Ultimi prodotti</h1>

        <!-- Grid Product -->
        <div class="grid grid-cols-3">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products.slice(0, 3)"
                :key="index"
                class="flex flex-col  items-center pb-[60px] px-[40px] pt-[20px] border-[1px] border-gray-100 hover:border-black duration-700">

                <div class="h-[260px] border-b-[2px] w-[80%] flex justify-center items-center">
                    <img :src="product.img" alt="" class="h-[200px] my-auto">
                </div>



                <h2 class="font-semibold pt-[30px] pb-[10px] text-[18px]">{{ product.title }}</h2>
                <p class="pb-[10px] text-[15px]">{{ product.description }}</p>
                <p class="w-[100%]"><span class="font-semibold">Prezzo: </span>{{ product.price }} €</p>

            </RouterLink>

        </div>


        <!-- Button tutti i prodotti -->

        <RouterLink to="/products" class="flex justify-center items-center pt-[60px]">
            <button
                class=" px-[20px]  py-[15px] bg-blue-300 rounded-xl text-white font-bold hover:bg-blue-500 hover:scale-125 duration-300">Tutti
                i prodotti</button>
        </RouterLink>


    </section>



    <!-- last product MOBILE -->
    <section class="px-[4vw] py-[8vw]">

        <h1 class="text-[4vw] font-bold text-[rgb(73,73,73)] pb-[3vw]">Ultimi prodotti</h1>

        <!-- Grid Product -->
        <div class="grid grid-cols-1">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products.slice(0, 3)"
                :key="index"
                class="flex flex-col  items-center pb-[8vw] px-[6vw] pt-[2vw] border-[1px] border-gray-100 hover:border-black duration-700">

                <!-- img -->
                <div class="h-[50vw] border-b-[0.5vw] w-[70vw] flex justify-center items-center">
                    <img :src="product.img" alt="" class="h-[40vw] my-auto">
                </div>

                <!-- title -->
                <h2 class="font-semibold pt-[5vw] pb-[3vw] text-[3.5vw]">{{ product.title }}</h2>

                <!-- description -->
                <p class="pb-[3vw] text-[3vw]">{{ product.description }}</p>

                <!-- price -->
                <p class="w-[100%]"><span class="font-semibold">Prezzo: </span>{{ product.price }} €</p>

            </RouterLink>

        </div>


        <!-- Button tutti i prodotti DEKSTOP-->
        <RouterLink to="/products" class="hidden md:flex justify-center items-center pt-[60px]">
            <button
                class=" px-[20px]  py-[15px] bg-blue-300 rounded-xl text-white font-bold hover:bg-blue-500 hover:scale-125 duration-300">Tutti
                i prodotti</button>
        </RouterLink>



        <!-- Button tutti i prodotti MOBILE-->
        <RouterLink to="/products" class="flex md:hidden justify-center items-center pt-[7vw]">
            <button
                class=" px-[3.5vw]  py-[3vw] bg-blue-300 rounded-xl text-white text-[3vw] font-bold hover:bg-blue-500 hover:scale-125 duration-300">Tutti
                i prodotti</button>
        </RouterLink>


    </section>



</template>
