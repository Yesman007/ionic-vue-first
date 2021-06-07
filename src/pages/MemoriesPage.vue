<template>
  <!-- Can write regurlar HTML here -->
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :key="memory.title"
        :router-link="`/memories/${memory.id}`"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.id"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>
<script>
// Always use the - words instead of camel case (camel case does not always load)
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
import baseLayout from "../components/base/BaseLayout";

export default {
  components: {
    IonList,
    IonItem,
    baseLayout,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
