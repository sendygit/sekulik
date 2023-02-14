<script setup>
import daftarIsi from "@/data/daftarIsi.json";
</script>

<template>
  <header class="">
    <div class="hero-container">
      <img class="w-full h-screen bg-cover" src="@/assets/image-sekolah.png" alt="" />
      <div class="absolute z-50 logo grid justify-items-center">
        <img src="@/assets/logo-sekolah.png" alt="" />
        <h1 class="text-white font-bold text-48px font-roboto mt-10">SMK Negeri 26 Jakarta</h1>
        <q class="text-white text-32px font-roboto mt-5">Belajar, Bekerja, Membangun</q>
        <a href="#address">
          <button
            class="px-45px py-11px text-white font-roboto font-bold text-base bg-primary rounded-xl mt-8"
          >
            JELAJAHI
          </button>
        </a>
      </div>
    </div>
  </header>

  <main id="main" class="px-146px m-auto">
    <section id="address">
      <div class="bg-address w-1148px pl-52px py-58px font-montserrat mt-100px grid grid-cols-2">
        <div class="text-white">
          <h1 class="text-32px font-bold">SMKN 26 JAKARTA</h1>
          <p class="w-428px text-xl mt-4">
            JL. BALAI PUSTAKA BARU 1, Rawamangun, Pulo Gadung, Kota Jakarta Timur, Prov. D.K.I.
            Jakarta, 13220
          </p>
        </div>
        <div class="-mt-90px ml-6">
          <img src="@/assets/image-address.png" alt="" />
        </div>
      </div>
    </section>

    <div class="container grid grid-cols-3 gap-20 relative">
      <div class="p-9 rounded-10px border border-2 sticky top-4 h-min overflow-auto">
        <h1 class="font-bold">Daftar Isi</h1>
        <ul>
          <li v-for="list in daftarIsi" :key="list.no" class="font-roboto italic text-sm mt-14px">
            <a href="">{{ list.no }}. {{ list.name }}</a>
          </li>
        </ul>
      </div>

      <div class="col-span-2">
        <div class="p-9 rounded-10px border">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eligendi
            consequatur, molestiae veritatis porro laborum praesentium esse. Natus, dolorum
            doloribus recusandae ullam corporis, enim iste facere doloremque officia quae distinctio
            inventore suscipit atque aliquam sapiente facilis sed ratione tempora nam! Quam ratione
            harum enim? Itaque fugiat deleniti animi, sapiente vel, quaerat quo dolore laboriosam
            tempore dignissimos quibusdam cum labore molestiae alias enim voluptatibus repudiandae
            hic ullam veniam sed aperiam eos aliquid! Enim eligendi fugit ratione hic porro sed
            adipisci ad nobis quae reiciendis minima aliquam vitae, sint voluptatibus illum deserunt
            odit quisquam a et? Tempore reprehenderit deleniti officia exercitationem?
          </p>
        </div>
        <div class="p-9 rounded-10px border">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eligendi
            consequatur, molestiae veritatis porro laborum praesentium esse. Natus, dolorum
            doloribus recusandae ullam corporis, enim iste facere doloremque officia quae distinctio
            inventore suscipit atque aliquam sapiente facilis sed ratione tempora nam! Quam ratione
            harum enim? Itaque fugiat deleniti animi, sapiente vel, quaerat quo dolore laboriosam
            tempore dignissimos quibusdam cum labore molestiae alias enim voluptatibus repudiandae
            hic ullam veniam sed aperiam eos aliquid! Enim eligendi fugit ratione hic porro sed
            adipisci ad nobis quae reiciendis minima aliquam vitae, sint voluptatibus illum deserunt
            odit quisquam a et? Tempore reprehenderit deleniti officia exercitationem?
          </p>
        </div>
        <div class="p-9 rounded-10px border">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eligendi
            consequatur, molestiae veritatis porro laborum praesentium esse. Natus, dolorum
            doloribus recusandae ullam corporis, enim iste facere doloremque officia quae distinctio
            inventore suscipit atque aliquam sapiente facilis sed ratione tempora nam! Quam ratione
            harum enim? Itaque fugiat deleniti animi, sapiente vel, quaerat quo dolore laboriosam
            tempore dignissimos quibusdam cum labore molestiae alias enim voluptatibus repudiandae
            hic ullam veniam sed aperiam eos aliquid! Enim eligendi fugit ratione hic porro sed
            adipisci ad nobis quae reiciendis minima aliquam vitae, sint voluptatibus illum deserunt
            odit quisquam a et? Tempore reprehenderit deleniti officia exercitationem?
          </p>
        </div>
        <div class="p-9 rounded-10px border">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eligendi
            consequatur, molestiae veritatis porro laborum praesentium esse. Natus, dolorum
            doloribus recusandae ullam corporis, enim iste facere doloremque officia quae distinctio
            inventore suscipit atque aliquam sapiente facilis sed ratione tempora nam! Quam ratione
            harum enim? Itaque fugiat deleniti animi, sapiente vel, quaerat quo dolore laboriosam
            tempore dignissimos quibusdam cum labore molestiae alias enim voluptatibus repudiandae
            hic ullam veniam sed aperiam eos aliquid! Enim eligendi fugit ratione hic porro sed
            adipisci ad nobis quae reiciendis minima aliquam vitae, sint voluptatibus illum deserunt
            odit quisquam a et? Tempore reprehenderit deleniti officia exercitationem?
          </p>
        </div>
        <div class="p-9 rounded-10px border">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eligendi
            consequatur, molestiae veritatis porro laborum praesentium esse. Natus, dolorum
            doloribus recusandae ullam corporis, enim iste facere doloremque officia quae distinctio
            inventore suscipit atque aliquam sapiente facilis sed ratione tempora nam! Quam ratione
            harum enim? Itaque fugiat deleniti animi, sapiente vel, quaerat quo dolore laboriosam
            tempore dignissimos quibusdam cum labore molestiae alias enim voluptatibus repudiandae
            hic ullam veniam sed aperiam eos aliquid! Enim eligendi fugit ratione hic porro sed
            adipisci ad nobis quae reiciendis minima aliquam vitae, sint voluptatibus illum deserunt
            odit quisquam a et? Tempore reprehenderit deleniti officia exercitationem?
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: auto;
}

.hero-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-blur: 4px;
  backdrop-filter: blur(4px);
}

.logo {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  animation: pulse 1s ease-in-out infinite;
}

.bg-address {
  background-image: url("@/assets/bg-address.png");
  background-repeat: no-repeat;
}

@keyframes pulse {
  /* 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  } */
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0px, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
