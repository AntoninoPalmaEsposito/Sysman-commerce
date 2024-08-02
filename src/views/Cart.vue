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
        removeCart() {
            useProductStore().deleteCart(this.cart)
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

    <section class="px-[60px]">


        <!-- heading container -->
        <div class="flex  items-center border-b-2 border-gray-200">

            <!-- goBack -->
            <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                    class="w-[80px] opacity-70 hover:scale-125 duration-500"></button>

            <!-- title -->
            <h1 class="text-center text-[30px] text-[rgb(73,73,73)] font-bold mx-auto pr-[80px] py-[60px]">Carrello</h1>

        </div>

        <div v-if="(!this.totalPrice == 0)">

            <div class="grid grid-cols-1">

                <div v-for="(item, index) in cart" :key="index">

                    <div class="flex items-center border-r-2 border-b-2 border-gray-300  w-[50%]">



                        <div class="w-[180px] border-x-[2px] p-[20px] flex justify-center items-center">
                            <img :src="item.img" alt="" class="h-[100px] my-auto">
                        </div>



                        <div class="flex justify-between items-center w-[100%] px-[30px]">


                            <div class="flex flex-col justify-center">
                                <h2 class="font-semibold text-[16px]">{{ item.title }}</h2>

                                <p><span class="font-semibold">Prezzo: </span>{{ item.price }}€ </p>
                            </div>


                            <button @click="removeCart(); priceCalculator()"
                                class="px-[20px] py-[12px] bg-red-500 rounded-full text-white font-bold text-[18px] mr-[20px] hover:scale-125 duration-500">X</button>

                        </div>
                    </div>



                </div>

            </div>

            <div class="fixed right-[18%] top-[50%]">
                <div class="flex pb-[15px]">
                    <button class="text-[30px] font-bold text-[rgb(73,73,73)] ">Prezzo totale:</button>
                    <p class="text-[30px] font-semibold pl-[10px] text-[rgb(73,73,73)]">{{ totalPrice }}€</p>
                </div>

                <div class="flex justify-center items-center
                "><button class="px-[20px] py-[10px] rounded-xl bg-blue-500 text-white font-semibold">Acquista!</button></div>
            </div>

        </div>




        <div v-if="(this.totalPrice == 0)" class="h-[40vh] flex justify-center items-center">
            <h1 class="text-[40px] font-bold text-red-500">Il tuo carrello è vuoto.</h1>
        </div> 

    </section>

</template>
