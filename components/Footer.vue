<template>
  <footer class="bg-black text-white px-6 py-12 border-t-6 border-yellow-300">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo section -->
      <div class="flex flex-col items-center md:items-start space-y-4">
        <img src="/public/favicon.ico" alt="Logo 1" class="h-16" />
        <img src="/public/favicon.ico" alt="Logo 2" class="h-16" />
        <div class="flex space-x-4">
          <a href="#" aria-label="Facebook"
            ><i class="fab fa-facebook text-xl"></i
          ></a>
          <a href="#" aria-label="Instagram"
            ><i class="fab fa-instagram text-xl"></i
          ></a>
          <a href="#" aria-label="LinkedIn"
            ><i class="fab fa-linkedin text-xl"></i
          ></a>
          <a href="#" aria-label="YouTube"
            ><i class="fab fa-youtube text-xl"></i
          ></a>
        </div>
      </div>

      <!-- Linkuri navigație -->
      <div class="space-y-2">
        <h3 class="font-bold mb-2">Navigație</h3>
        <ul class="space-y-1">
          <li><a href="#" class="hover:underline">ACASĂ</a></li>
          <li><a href="#" class="hover:underline">DESPRE NOI</a></li>
          <li><a href="#" class="hover:underline">EVENIMENTE</a></li>
          <li><a href="#" class="hover:underline">PARTENERI</a></li>
          <li><a href="#" class="hover:underline">CONTACT</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="space-y-2">
        <h3 class="font-bold mb-2">DATE DE CONTACT</h3>
        <p>
          Campus Tudor Vladimirescu<br />Cămin T11, parter cam. 3<br />Cod
          700305 – Iași – Romania
        </p>
        <p><i class="fas fa-phone mr-2"></i>0740 754 665</p>
        <p><i class="fas fa-envelope mr-2"></i>contact@bestis.ro</p>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-bold mb-2">ABONEAZĂ-TE LA NEWSLETTER</h3>
        <form class="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="email*"
            class="p-2 rounded border border-gray-300 text-black"
          />
          <button
            type="submit"
            class="bg-yellow-300 text-black font-bold py-2 rounded-full hover:bg-yellow-300"
          >
            TRIMITE
          </button>
          <label class="flex items-center space-x-2 text-sm">
            <input type="checkbox" class="form-checkbox" />
            <span>Sunt de acord cu termenii și condițiile</span>
          </label>
        </form>
        <p class="mt-2 text-sm underline cursor-pointer">POLITICA GDPR</p>
      </div>
    </div>

    <!-- Footer bottom -->
    <div
      class="border-t border-gray-700 mt-8 pt-4 text-center text-sm relative"
    >
      <p>Copyright © 2024 BEST Iași. Toate drepturile rezervate.</p>
    
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
