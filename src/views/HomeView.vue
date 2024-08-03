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
    <div
        class="hidden md:flex bg-[rgb(211,231,235)] text-black pb-[6vw] flex-col  rounded-b-3xl mt-[-20px] px-[3vw]">

        <h1 class="pt-[6vw] font-bold text-[3vw] text-center leading-[3.5vw] ">Potenzia il Tuo PC <br> con i Migliori
            Componenti Hardware</h1>

        <p class="pt-[1.5vw] text-[1.5vw] text-center ">Benvenuto su Sysman-Commerce, il tuo punto di riferimento per
            tutto ciò che riguarda l’hardware per PC. Che tu sia un gamer appassionato, un professionista IT o un
            semplice appassionato di tecnologia, qui troverai tutto ciò di cui hai bisogno per costruire, aggiornare e
            ottimizzare il tuo computer.</p>

    </div>



    <!-- Hero section MOBILE -->
    <div
        class="flex md:hidden  bg-[rgb(211,231,235)] text-black pb-[10vw] flex-col items-center rounded-b-[4vw] mt-[-4vw] px-[4vw]">

        <h1 class="pt-[12vw] font-bold text-[6vw] text-center leading-[6vw] w-[67vw]  ">Potenzia il Tuo PC con i
            Migliori
            Componenti Hardware</h1>

        <p class="pt-[3vw] text-[3.5vw] text-center ">Benvenuto su Sysman-Commerce, il tuo punto di riferimento per
            tutto ciò che riguarda l’hardware per PC. Che tu sia un gamer appassionato, un professionista IT o un
            semplice appassionato di tecnologia, qui troverai tutto ciò di cui hai bisogno per costruire, aggiornare e
            ottimizzare il tuo computer.</p>

    </div>



    <!-- last product DEKSTOP -->
    <section class="hidden md:block px-[3vw] py-[5vw]">

        <h1 class="text-[1.8vw] font-bold pb-[1.8vw]">Ultimi prodotti</h1>

        <!-- Grid Product -->
        <div class="grid grid-cols-3">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products.slice(0, 3)"
                :key="index"
                class="flex flex-col  items-center pb-[2vw] px-[2vw]  border-2 border-gray-200 hover:border-black duration-300">

                <!-- img -->
                <div class="h-[22vw] py-[2vw] border-b-2 w-[80%] flex justify-center items-center">
                    <img :src="product.img" alt="" class="w-[18vw] my-auto">
                </div>

                <!-- title -->
                <h2 class="font-semibold pt-[2vw] pb-[0.5vw] text-[1vw]">{{ product.title }}</h2>

                <!-- description -->
                <p class="pb-[0.5vw] text-[0.9vw]">{{ product.description }}</p>

                <!-- price -->
                <p class="w-[100%] text-[1vw]"><span class="font-semibold">Prezzo: </span>{{ product.price }} €</p>

            </RouterLink>

        </div>


        <!-- Button tutti i prodotti Dekstop-->

        <RouterLink to="/products" class="flex justify-center items-center pt-[4vw]">
            <button
                class=" px-[1vw]  py-[0.8vw] text-[1vw] rounded-xl text-orange-500 border-2 border-orange-500 font-bold scale-125 hover:scale-150 duration-300">Tutti
                i prodotti</button>
        </RouterLink>


    </section>



    <!-- last product MOBILE -->
    <section class="block md:hidden px-[4vw] pt-[8vw] pb-[20vw]">

        <h1 class="text-[4vw] font-bold pb-[3vw]">Ultimi prodotti</h1>

        <!-- Grid Product -->
        <div class="grid grid-cols-1">

            <RouterLink :to="{ path: '/product/' + index }" v-for="(product, index) in products.slice(0, 3)"
                :key="index" class="flex flex-col  items-center pb-[8vw] px-[6vw] pt-[2vw] border-2 border-gray-200">

                <!-- img -->
                <div class="h-[50vw] border-b-2 w-[70vw] flex justify-center items-center">
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



        <!-- Button tutti i prodotti MOBILE-->
        <RouterLink to="/products" class="flex md:hidden justify-center items-center pt-[10vw]">
            <button
                class=" px-[3.5vw]  py-[3vw] rounded-xl text-orange-500 text-[4vw] font-bold border-2 border-orange-500 hover:scale-125 duration-300">Tutti
                i prodotti</button>
        </RouterLink>


    </section>



</template>
