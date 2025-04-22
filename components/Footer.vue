<template>
  <footer class="bg-black text-white px-6 py-20 border-t-6 border-yellow-300">
    <div
      class="w-full justify-center items-center flex md:flex-row flex-col px-6 md:px-20 gap-10 md:gap-40"
    >
      <div class="flex flex-col items-center md:items-start space-y-8">
        <a
          href="https://www.tuiasi.ro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/public/images/asachi_logo.png"
            alt="Logo Asachi"
            class="h-40"
          />
        </a>

        <div class="flex space-x-8">
          <a
            href="https://www.facebook.com/bestiasi"
            class="hover:text-yellow-300 text-4xl elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-6c0653b"
            aria-label="Facebook"
            target="_blank"
          >
            <i class="fab fa-facebook-f"></i
          ></a>
          <a
            class="hover:text-yellow-300 text-4xl elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-0bc3842"
            href="https://www.instagram.com/bestiasi/?hl=en"
            aria-label="Instagram"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="hover:text-yellow-300 text-4xl elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-f994126"
            href="https://www.linkedin.com/company/best-iasi/mycompany/"
            aria-label="Linkedin"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            class="hover:text-yellow-300 text-4xl elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-d83e693"
            href="https://www.youtube.com/channel/UC1DuRUKQkxWv7cgeihAm79w"
            aria-label="YouTube"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div class="space-y-4 px-10 text-xl">
        <h3 class="font-bold mb-2">Navigație</h3>
        <ul class="space-y-1">
          <li>
            <a href="https://bestis.ro" class="hover:text-yellow-300">ACASĂ</a>
          </li>
          <li>
            <a
              href="https://bestis.ro/despre-noi/"
              class="hover:text-yellow-300"
              >DESPRE NOI</a
            >
          </li>
          <li>
            <a href="https://bestis.ro/proiecte/" class="hover:text-yellow-300"
              >EVENIMENTE</a
            >
          </li>
          <li>
            <a href="https://bestis.ro/parteneri/" class="hover:text-yellow-300"
              >PARTENERI</a
            >
          </li>
          <li>
            <a href="https://bestis.ro/contact/" class="hover:text-yellow-300"
              >CONTACT</a
            >
          </li>
        </ul>
      </div>

      <div class="space-y-4 text-xl">
        <h3 class="font-bold mb-2">DATE DE CONTACT</h3>
        <p>
          <i
            aria-hidden="true"
            class="text-yellow-300 mr-2 text-2xl fas fa-map-marker-alt"
          ></i>
          Campus Tudor Vladimirescu<br />Cămin T11, parter cam. 3<br />Cod
          700305 – Iași – Romania
        </p>
        <p>
          <i
            aria-hidden="true"
            class="text-yellow-300 text-2xl fas fa-phone mr-3"
          ></i
          >0740 754 665
        </p>
        <p>
          <i
            aria-hidden="true"
            class="text-yellow-300 text-2xl fas fa-envelope mr-3"
          ></i
          >contact@bestis.ro
        </p>
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

<script setup lang="ts"></script>
