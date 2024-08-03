<script>
import { useProductStore } from '@/stores/products'

export default {

    data() {
        return {

            product: {
                title: '',
                description: '',
                price: 0,
                img: ""
            }

        }
    },

    methods: {

        submitForm() {
            useProductStore().addProduct(this.product)
            this.$router.push('/products')
        },

        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>



<template>



    <!-- heading container -->
    <div class="hidden md:flex  items-center px-[3vw]">

        <!-- goBack -->
        <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                class="w-[4vw] hover:scale-125 duration-500"></button>

        <!-- title -->
        <h1 class="text-center text-[1.5vw] font-bold mx-auto pr-[4vw] py-[3vw]">Aggiungi prodotto
        </h1>

    </div>



    <!-- heading container MOBILE -->
    <div class="flex md:hidden  items-center px-[4vw] ">

        <!-- goBack -->
        <button @click="goBack"><img src="/src/assets/arrow.png" alt=""
                class="w-[10vw] hover:scale-125 duration-500"></button>

        <!-- title -->
        <h1 class="text-center text-[5vw] font-bold mx-auto pr-[8vw] pb-[10vw] pt-[10vw]">Aggiungi
            prodotto</h1>

    </div>




    <!-- form DEKSTOP -->
    <section class="hidden md:flex justify-center items-center h-[31vw]">

        <!-- form -->
        <form @submit.prevent="submitForm" class="">


            <!-- container -->
            <div class="border-2 w-[40vw] p-[2.6vw] border-gray-400 rounded-3xl">

                <!-- title -->
                <div class="flex pb-[1.5vw] text-[0.8vw]">
                    <label for="title" class="w-[7vw] font-bold">Titolo:</label>
                    <textarea cols="60" rows="1" type="text" v-model="product.title" id="title" name="title"
                        placeholder="Inserisci il titolo"
                        class="border-2 border-gray-300 p-[0.25vw] rounded-2xl"></textarea>
                </div>

                <!-- description -->
                <div class="flex pb-[1.5vw] text-[0.8vw]">
                    <label for="descrizione" class="w-[7vw] font-bold">Descrizione:</label>
                    <textarea cols="60" rows="6" type="text" v-model="product.description" id="description"
                        name="descrizione" placeholder="Inserisci una descrizione"
                        class="border-2 border-gray-300 p-[0.25vw] rounded-2xl"></textarea>
                </div>

                <!-- img url -->
                <div class="flex pb-[1.5vw] text-[0.8vw]">
                    <label for="img" class="w-[7vw] font-bold">Img URL:</label>
                    <textarea cols="60" rows="2" type="text" v-model="product.img" id="img" name="img"
                        placeholder="Inserisci url immagine"
                        class="border-2 border-gray-300 p-[0.25vw] rounded-2xl"></textarea>
                </div>

                <!-- price -->
                <div class="flex text-[0.8vw]">
                    <label for="price" class="w-[7vw] font-bold">Prezzo:</label>
                    <input type="number" v-model="product.price" id="price" name="price"
                        placeholder="Inserisci il prezzo" class="border-2 border-gray-300 p-[0.25vw] rounded-2xl">
                </div>

            </div>


            <!-- button -->
            <div class="flex justify-center items-center scale-90 pt-[2.5vw]">
                <button type="submit" value="Invia"
                    class="text-orange-500 border-2 border-orange-500 font-bold text-[1.3vw] hover:scale-125 duration-500 px-[1vw] py-[0.25vw] rounded-xl">Salva!</button>
            </div>


        </form>

    </section>





    <!-- form MOBILE -->
    <section class="flex md:hidden justify-center items-center pb-[20vw]">

        <!-- form -->
        <form @submit.prevent="submitForm" class="">


            <!-- container -->
            <div class="border-2  p-[8vw] border-gray-400 rounded-3xl w-[86vw]">

                <!-- title -->
                <div class="flex flex-col pb-[6vw]">
                    <label for="title" class="w-[30vw] font-bold pb-[1.5vw] text-[4vw]">Titolo:</label>
                    <textarea cols="60" rows="1" type="text" v-model="product.title" id="title" name="title"
                        placeholder="Inserisci il titolo"
                        class="border-2 border-gray-300 p-[1.5vw] rounded-2xl text-[3vw]"></textarea>
                </div>

                <!-- description -->
                <div class="flex flex-col  pb-[6vw]">
                    <label for="descrizione" class="w-[30vw] font-bold pb-[1.5vw] text-[4vw]">Descrizione:</label>
                    <textarea cols="60" rows="6" type="text" v-model="product.description" id="description"
                        name="descrizione" placeholder="Inserisci una descrizione"
                        class="border-2 border-gray-300 p-[1.5vw] rounded-2xl text-[3vw]"></textarea>
                </div>

                <!-- img url -->
                <div class="flex flex-col  pb-[6vw]">
                    <label for="img" class="w-[30vw] font-bold pb-[1.5vw] text-[4vw]">Img URL:</label>
                    <textarea cols="60" rows="2" type="text" v-model="product.img" id="img" name="img"
                        placeholder="Inserisci url immagine"
                        class="border-2 border-gray-300 p-[1.5vw] rounded-2xl text-[3vw]"></textarea>
                </div>

                <!-- price -->
                <div class="flex flex-col pb-[2.5vw]">
                    <label for="price" class="w-[30vw] font-bold pb-[1.5vw] text-[4vw]">Prezzo:</label>
                    <input type="number" v-model="product.price" id="price" name="price"
                        placeholder="Inserisci il prezzo" class="border-2 border-gray-300 p-[1.5vw] rounded-2xl text-[3vw]">
                </div>

            </div>


            <!-- button -->
            <div class="flex justify-center items-center pt-[8vw]">
                <button type="submit" value="Invia"
                    class="text-orange-500 border-2 border-orange-500 font-bold text-[4vw] hover:scale-125 duration-500 px-[3.5vw] py-[3vw] rounded-xl">Salva!</button>
            </div>


        </form>

    </section>

</template>
