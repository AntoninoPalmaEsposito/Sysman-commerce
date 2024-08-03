<script>

export default {
    data() {
        return {

        }
    },

    mounted() {

    },

}

</script>






<template>


    <!-- DEKSTOP -->
    <header
        class="hidden md:flex h-[4vw] bg-[rgb(213,234,238)] justify-between items-center px-[3vw] shadow-md relative z-10 rounded-b-3xl duration-300">

        <!-- Logo -->
        <RouterLink to="/" class="text-[1.8vw] text-[rgb(255,122,81)] font-extrabold mt-[-0.4vw]">Sysman-C</RouterLink>



        <!-- Navbar -->
        <nav>
            <ul class="flex font-bold">


                <RouterLink to="/products"
                    class="pr-[2vw] text-[1vw] font-semibold hover:underline underline-offset-8">
                    Tutti i prodotti
                </RouterLink>

                <RouterLink to="/AddProduct"
                    class="pr-[2vw] text-[1vw] font-semibold hover:underline underline-offset-8">
                    Aggiungi prodotto
                </RouterLink>

                <RouterLink to="/cart" class="mt-[-0.15vw]">
                    <img src="/src/assets/cart.png" alt="" class="w-[2vw] hover:scale-125 duration-500">
                </RouterLink>


            </ul>
        </nav>

    </header>



    <!-- MOBILE -->
    <header
        class="flex md:hidden h-[13vw] bg-[rgb(211,231,235)] justify-between items-center px-[3vw] shadow-md relative z-10 rounded-b-[4vw] duration-300">

        <!-- Logo -->
        <RouterLink to="/" class="text-[4.5vw] text-[rgb(255,122,81)] font-extrabold mt-[-1vw]">Sysman-C</RouterLink>



        <!-- Navbar -->
        <nav>
            <ul class="flex font-bold">


                <RouterLink to="/products"
                    class="pr-[3vw] text-[3vw] font-semibold hover:underline underline-offset-8">
                    Tutti i prodotti
                </RouterLink>

                <RouterLink to="/AddProduct"
                    class="pr-[3vw] text-[3vw] font-semibold hover:underline underline-offset-8">
                    Aggiungi prodotto
                </RouterLink>

                <RouterLink to="/cart" class=" ">
                    <img src="/src/assets/cart.png" alt="" class="w-[5vw] hover:scale-125 duration-500">
                </RouterLink>



            </ul>
        </nav>

    </header>
</template>
