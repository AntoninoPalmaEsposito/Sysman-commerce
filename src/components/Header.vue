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



    <header class="h-[80px] text-[rgb(65,65,65)] bg-[rgb(213,234,238)] flex justify-between items-center px-[60px] shadow-md relative z-10 rounded-b-3xl duration-300">

        <!-- Logo -->
        <RouterLink to="/" class="text-[35px] text-[rgb(255,122,81)] font-extrabold mt-[-7px]">Sysman-C</RouterLink>



        <!-- Navbar -->
        <nav>
            <ul class="flex font-bold">


                <RouterLink to="/products" class="pr-[30px] text-[18px] font-semibold hover:underline underline-offset-8">
                    Tutti i prodotti
                </RouterLink>

                <RouterLink to="/AddProduct" class="pr-[30px] text-[18px] font-semibold hover:underline underline-offset-8">
                    Aggiungi prodotto
                </RouterLink>

                <RouterLink to="/cart" class="text-[20px] ">
                    <img src="/src/assets/cart.png" alt="" class="w-[30px] hover:scale-125 duration-500">
                </RouterLink>


            </ul>
        </nav>

    </header>
</template>
