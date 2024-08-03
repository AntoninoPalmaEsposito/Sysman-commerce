<script>
import { useProductStore } from '@/stores/products'

export default {

    data() {
        return {

            product: useProductStore().products[this.$route.params.index],
            index: this.$route.params.index,
            edit: true
        }
    },



    methods: {

        removeProduct() {
            useProductStore().deleteProduct(this.index);
            this.edit = true
            this.$router.push('/products')
        },

        isEdit() {
            this.edit = false
        },

        submitForm() {

            if(this.edit) {
            } else {
                this.$router.go(-1)
            }

            this.edit = true
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

    <!-- goBack DEKSTOP-->
    <div class="hidden md:flex  items-center px-[3vw] py-[2.1vw]">

        <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                class="w-[4vw] hover:scale-125 duration-500"></button>

    </div>



    <!-- goBack MOBILE-->
    <div class="flex md:hidden items-center px-[4vw] pt-[8vw]">

        <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                class="w-[10vw] hover:scale-125 duration-500"></button>

    </div>



    <!-- product container DEKSTOP-->
    <section class="hidden md:flex justify-center px-[3vw]">


        <!-- img / edit container -->
        <div class="flex flex-col justify-between items-center mr-[5vw]">

            <!-- img product -->
            <img :src="product.img" alt="" class="h-[12vw] ">

            <!-- buttons -->
            <div class="flex scale-90">


                <button @click="isEdit"
                    class="hover:scale-125 duration-300  p-[1vw]  mr-[1.5vw] rounded-full bg-green-500"><img
                        src="/src/assets/edit.png" alt="" class="w-[1.5vw]"></button>

                <button @click="addToCart(product)"
                    class="hover:scale-125 duration-300 py-[0.8vw] px-[0.7vw] mr-[1.5vw] rounded-[50px] flex text-[1vw] font-bold justify-center items-center bg-orange-400">+<img
                        src="/src/assets/cart.png" alt="" class="w-[30px]"></button>

                <button @click="removeProduct()"
                    class=" hover:scale-125 duration-300 py-[0.7vw] px-[1.4vw] rounded-[50px] font-semibold text-[1.4vw] bg-red-500">
                    X
                </button>


            </div>

        </div>



        <!-- form container -->
        <form @submit.prevent="submitForm">



            <!-- title -->
            <div class="flex pb-[0.8vw]">
                <textarea cols="60" rows="1" type="text" v-model="product.title" id="title" name="title"
                    placeholder="Inserisci il titolo" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none font-bold text-[1vw]"></textarea>
            </div>

            <!-- description -->
            <div class="flex pb-[0.5vw]">
                <textarea cols="83" rows="4" type="text" v-model="product.description" id="description"
                    name="descrizione" placeholder="Inserisci la descrizione" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none text-[0.9vw]"></textarea>
            </div>

            <!-- price -->
            <div class="flex pb-[0.5vw] font-semibold  text-[1vw]">
                <span>€</span>
                <input type="number" v-model="product.price" id="price" name="price" placeholder="Inserisci il prezzo"
                    :disabled="edit" class="appearance-none border-none bg-transparent focus:outline-none  text-[1vw]">
            </div>

            <div class="h-[0.1vw] bg-gray-200 w-[100%] mb-[0.5vw]"></div>


            <!-- img url -->
            <div class="flex flex-col pb-[3.3vw]">
                <label for="img" class="w-[6vw] text-[0.9vw] ">Img URL:</label>
                <textarea cols="60" rows="2" type="text" v-model="product.img" id="img" name="img"
                    placeholder="Inserisci url immagine" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none text-[0.7vw]"></textarea>
            </div>

            <!-- button salva -->
            <div class="flex justify-center items-center scale-90 ml-[-0vw]">
                <button type="submit" value="Invia"
                    :class="{ 'opacity-40': edit, 'hover:scale-125': !edit, 'duration-300': !edit, 'opacity-100': !edit }"
                    class="text-green-600 border-2 border-green-600 font-bold text-[1.4vw] px-[1vw] py-[0.4vw] rounded-xl">Modifica!</button>
            </div>


        </form>

    </section>





    <!-- product container MOBILE-->
    <section class="flex md:hidden flex-col px-[4vw]">


        <!-- img / edit container -->
        <div class="flex flex-col  justify-between items-center pb-[10vw]">

            <!-- img product -->
            <img :src="product.img" alt="" class="h-[45vw] mb-[7vw] ">

            <!-- buttons -->
            <div class="flex justify-center w-full border-t-2 pt-[5vw]">


                <button @click="isEdit"
                    class="hover:scale-125 duration-300 px-[3vw] h-[12vw] mr-[10vw] rounded-[50px] bg-green-500"><img
                        src="/src/assets/edit.png" alt="" class="w-[5.5vw]"></button>

                <button @click="addToCart(product)"
                    class="hover:scale-125 duration-300 px-[2vw] h-[12vw] mr-[10vw] rounded-[50px] flex text-[4vw] font-bold justify-center items-center bg-orange-400">+<img
                        src="/src/assets/cart.png" alt="" class="w-[5.5vw]"></button>

                <button @click="removeProduct()"
                    class=" hover:scale-125 duration-300 px-[4.5vw] h-[12vw] rounded-[50px] font-semibold text-[5vw] bg-red-500">
                    X
                </button>


            </div>

        </div>


        <!-- form container MOBILE-->
        <form @submit.prevent="submitForm">


            <!-- title -->
            <div class="flex pb-[2.5vw]">
                <textarea cols="60" rows="1" type="text" v-model="product.title" id="title" name="title"
                    placeholder="Inserisci il titolo" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none font-bold text-[3.7vw]"></textarea>
            </div>

            <!-- description -->
            <div class="flex pb-[2.5vw]">
                <textarea cols="60" rows="4" type="text" v-model="product.description" id="description"
                    name="descrizione" placeholder="Inserisci la descrizione" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none text-[3.2vw]"></textarea>
            </div>

            <!-- price -->
            <div class="flex pb-[2.5vw] font-semibold">
                <span class="text-[3.5vw]">€</span>
                <input type="number" v-model="product.price" id="price" name="price" placeholder="Inserisci il prezzo"
                    :disabled="edit" class="appearance-none border-none bg-transparent focus:outline-none text-[3.5vw]">
            </div>

            <div class="h-[2px] bg-gray-200 w-[82vw] mb-[2.5vw]"></div>


            <!-- img url -->
            <div class="flex flex-col pb-[10vw]">
                <label for="img" class=" text-[3vw] ">IMG URL:</label>
                <textarea cols="60" rows="2" type="text" v-model="product.img" id="img" name="img"
                    placeholder="Inserisci url immagine" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none text-[2.5vw]"></textarea>
            </div>

            <!-- button salva -->
            <div class="flex justify-center items-center pb-[20vw]">
                <button type="submit" value="Invia"
                    :class="{ 'opacity-40': edit, 'hover:scale-125': !edit, 'duration-300': !edit, 'opacity-100': !edit }"
                    class="text-green-600 border-2 border-green-600 font-bold text-[4vw] px-[3.5vw] py-[3vw] rounded-xl">Modifica!</button>
            </div>


        </form>

    </section>







</template>
