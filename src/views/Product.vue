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
            this.edit = true
            this.$router.push('/products')
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

    <!-- goBack -->
    <div class="flex  items-center px-[60px] py-[42px]">

        <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                class="w-[80px] opacity-70 hover:scale-125 duration-500"></button>

    </div>


    <!-- product container -->
    <section class="flex justify-center px-[60px]">


        <!-- img / edit container -->
        <div class="flex flex-col justify-between items-center mr-[100px]">

            <!-- img product -->
            <img :src="product.img" alt="" class="h-[230px] ">

            <!-- buttons -->
            <div class="flex pt-[80px] scale-90">


                <button @click="isEdit"
                    class="hover:scale-125 duration-300 py-[20px] px-[20px] mr-[30px] rounded-[50px] bg-green-500"><img
                        src="/src/assets/edit.png" alt="" class="w-[30px]"></button>

                <button @click="addToCart(product)"
                    class="hover:scale-125 duration-300 py-[15px] px-[13px] mr-[30px] rounded-[50px] flex text-[20px] font-bold justify-center items-center bg-orange-400">+<img
                        src="/src/assets/cart.png" alt="" class="w-[30px]"></button>

                <button @click="removeProduct()"
                    class=" hover:scale-125 duration-300 py-[13px] px-[27px] rounded-[50px] font-semibold text-[28px] bg-red-500">
                    X
                </button>


            </div>

        </div>



        <!-- form container -->
        <form @submit.prevent="submitForm">



            <!-- title -->
            <div class="flex pb-[15px]">
                <textarea cols="60" rows="1" type="text" v-model="product.title" id="title" name="title"
                    placeholder="Inserisci il titolo" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none font-bold"></textarea>
            </div>

            <!-- description -->
            <div class="flex pb-[10px]">
                <textarea cols="60" rows="4" type="text" v-model="product.description" id="description"
                    name="descrizione" placeholder="Inserisci la descrizione" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none"></textarea>
            </div>

            <!-- price -->
            <div class="flex pb-[10px] font-semibold">
                <span>€</span>
                <input type="number" v-model="product.price" id="price" name="price" placeholder="Inserisci il prezzo"
                    :disabled="edit" class="appearance-none border-none bg-transparent focus:outline-none">
            </div>

            <div class="h-[2px] bg-gray-200 w-[82%] mb-[10px]"></div>


            <!-- img url -->
            <div class="flex flex-col pb-[65px]">
                <label for="img" class="w-[120px] text-[15px] ">Img URL:</label>
                <textarea cols="60" rows="2" type="text" v-model="product.img" id="img" name="img"
                    placeholder="Inserisci url immagine" :disabled="edit"
                    class="appearance-none border-none bg-transparent focus:outline-none text-[12px]"></textarea>
            </div>

            <!-- button salva -->
            <div class="flex justify-center items-center scale-90 ml-[-90px]">
                <button type="submit" value="Invia"
                    :class="{ 'opacity-40': edit, 'hover:scale-125': !edit, 'duration-300': !edit, 'opacity-100': !edit }"
                    class="bg-blue-400 text-white font-bold text-[25px] px-[20px] py-[5px] rounded-xl">Salva!</button>
            </div>



        </form>

    </section>






</template>
