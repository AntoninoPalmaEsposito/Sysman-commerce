<script>
import { useProductStore } from '@/stores/products'

export default {

    data() {
        return {
            cart: useProductStore().cart,
        
            totalPrice: 0
        }
    },

    mounted() {


        this.totalPrice = this.cart.reduce((accumulatore, productPrice) => accumulatore + productPrice.price, 0)
        console.log(this.totalPrice)




    },

    methods: {
        removeCart(index) {
            this.cart.splice(index, 1)
        },

        priceCalculator() {
            this.totalPrice = this.cart.reduce((accumulatore, productPrice) => accumulatore + productPrice.price, 0)
            console.log(this.totalPrice)
        },

        goBack() {
            this.$router.go(-1)
        }

    }


}
</script>



<template>

    <section class="px-[4vw] md:px-[60px]">



        <!-- heading container DEKSTOP-->
        <div class="hidden md:flex  items-center border-b-2 border-gray-200">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[80px] opacity-70 hover:scale-125 duration-500"></button>

            <!-- title -->
            <h1 class="text-center text-[30px] text-[rgb(73,73,73)] font-bold mx-auto pr-[80px] py-[60px]">Carrello</h1>

        </div>



        <!-- heading container MOBILE -->
        <div class="flex md:hidden  items-center  border-b-2 border-gray-200">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[10vw] opacity-70 hover:scale-125 duration-500"></button>

            <!-- title -->
            <h1 class="text-center text-[5vw] text-[rgb(73,73,73)] font-bold mx-auto pr-[8vw] pb-[10vw] pt-[10vw]">
                Carrello</h1>

        </div>



        <!-- cart container DEKSTOP-->
        <div v-if="(!this.totalPrice == 0)" class="hidden md:block">

            <!-- product container -->
            <div class="grid grid-cols-1">

                <div v-for="(item, index) in cart" :key="item.id">


                    <div class="flex items-center border-r-2 border-b-2 border-gray-300  w-[50%]">


                        <!-- img -->
                        <div class="w-[180px] border-x-[2px] p-[20px] flex justify-center items-center">
                            <img :src="item.img" alt="" class="h-[100px] my-auto">
                        </div>


                        <!-- description container -->
                        <div class="flex justify-between items-center w-[100%] px-[30px]">


                            <div class="flex flex-col justify-center">
                                <!-- title -->
                                <h2 class="font-semibold text-[16px]">{{ item.title }}</h2>
                                <!-- price -->
                                <p><span class="font-semibold">Prezzo: </span>{{ item.price }}€ </p>

                            </div>

                            <!-- remove button -->
                            <button @click="removeCart(index); priceCalculator()"
                                class="px-[20px] py-[12px] bg-red-500 rounded-full text-white font-bold text-[18px] mr-[20px] hover:scale-125 duration-500">X</button>


                        </div>
                    </div>



                </div>

            </div>



            <!-- total price -->
            <div class="fixed right-[18%] top-[50%]">


                <div class="flex pb-[15px]">
                    <button class="text-[30px] font-bold text-[rgb(73,73,73)] ">Prezzo totale:</button>
                    <p class="text-[30px] font-semibold pl-[10px] text-[rgb(73,73,73)]">{{ totalPrice }}€</p>
                </div>

                <div class="flex justify-center items-center">
                    <button
                        class="px-[20px] py-[10px] rounded-xl bg-blue-500 text-white font-semibold">Acquista!</button>
                </div>


            </div>

        </div>



        <!-- cart container MOBILE-->
        <div v-if="(!this.totalPrice == 0)" class="block md:hidden">

            <!-- product container -->
            <div class="grid grid-cols-1">

                <div v-for="(item, index) in cart" :key="item.id">


                    <div class="flex items-center border-r-2 border-b-2 border-gray-200  ">


                        <!-- img -->
                        <div class="w-[40vw] border-x-2 p-[3vw] flex justify-center items-center">
                            <img :src="item.img" alt="" class="h-[14vw] my-auto">
                        </div>


                        <!-- description container -->
                        <div class="flex justify-between w-[100%] px-[3.5vw] ">


                            <div class="flex flex-col justify-between ">

                                <!-- title -->
                                <div class="font-semibold text-[2.5vw] pb-[0.5vw] w-[52vw]">{{ item.title }}</div>

                                <!-- price -->
                                <p class="text-[2.5vw] "><span class="font-semibold text-[2.5vw] ">Prezzo: </span>{{
                                    item.price }}€ </p>

                                <!-- remove button -->
                                <div class="flex justify-end  ">

                                    <button @click="removeCart(index); priceCalculator()"
                                        class="w-[5.2vw]  py-[1vw] bg-red-500 rounded-full text-white font-bold text-[2vw] text-center hover:scale-125 duration-500">X</button>

                                </div>

                            </div>




                        </div>
                    </div>



                </div>

            </div>



            <!-- total price MOBILE-->

            <div class="flex justify-center pb-[5vw] pt-[8vw]">
                <h2 class="text-[6vw] font-bold text-[rgb(73,73,73)] text-center ">Prezzo totale:</h2>
                <p class="text-[6vw] font-semibold pl-[2vw] text-[rgb(73,73,73)]">{{ totalPrice }}€</p>
            </div>

            <div class="flex justify-center items-center pb-[20vw]">
                <button class="text-[5vw] px-[4vw] py-[2vw] rounded-xl bg-blue-500 text-white font-semibold">Acquista!</button>
            </div>



        </div>




        <!-- cart null DEKSTOP-->
        <div v-if="(this.totalPrice == 0)" class="h-[40vh] hidden md:flex justify-center items-center">
            <h1 class="text-[40px] font-bold text-red-500 underline underline-offset-8">Il tuo carrello è vuoto.</h1>
        </div>



        <!-- cart null MOBILE-->
        <div v-if="(this.totalPrice == 0)" class="h-[100vw]  flex md:hidden justify-center items-center">
            <h1 class="text-[7vw] font-bold text-red-500 underline underline-offset-8">Il tuo carrello è vuoto.</h1>
        </div>



    </section>

</template>
