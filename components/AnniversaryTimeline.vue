<template>
  <section id="aniversari" class="px-8 md:px-20 py-0">
    <div class="flex flex-col gap-10">
      <AnniversaryCard
        v-for="card in anniversaryCards"
        :key="card.year"
        v-bind="card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const anniversaryCards = ref<AnniversaryCard[]>([
  {
    year: "2024",
    title: "Aniversare 2024",
    description: "Un nou început plin de energie și idei fresh!",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d1b037ab7b0e6b11efc07e3c06623fc2d7c023a",
    imageAlt: "Anniversary 2024",
  },
  {
    year: "2023",
    title: "Aniversare 2023",
    description: "Am crescut, am râs, am făcut magie împreună!",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b05416ca5c7e8bf50d31fe8e5a1f77bb597b70a",
    imageAlt: "Anniversary 2023",
    reverse: true,
  },
  {
    year: "2022",
    title: "Aniversare 2022",
    description: "Un an de provocări, zâmbete și reușite!",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2801c76c821b64cd6473c0c248e0d185f6248902",
    imageAlt: "Anniversary 2022",
  },
  {
    year: "2021",
    title: "Aniversare 2021",
    description: "Am pus bazele pentru tot ce avea să urmeze!",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fbd39ad89a44839d390b1dd81b94cf6ddcb58432",
    imageAlt: "Anniversary 2021",
    reverse: true,
  },
  {
    year: "2020",
    title: "Aniversare 2020",
    description: "Totul a început cu pasiune și prietenie!",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6aba445b3c3b25cda09c94fbd3cc75601a36b5f0",
    imageAlt: "Anniversary 2020",
  },
]);
</script>
