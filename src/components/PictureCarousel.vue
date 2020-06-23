<template>
  <div>
    <v-carousel
      height="auto" 
      cycle
      hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
      return {
        items: [
          {
            src: require('@/assets/1.jpg'),
          },
          {
            src: require('@/assets/2.jpg'),
          },
          {
            src: require('@/assets/3.jpg'),
          },
          {
            src: require('@/assets/4.jpg'),
          },
          {
            src: require('@/assets/5.jpg'),
          },
          {
            src: require('@/assets/6.jpeg'),
          },
          {
            src: require('@/assets/7.jpeg'),
          },
          {
            src: require('@/assets/8.jpeg'),
          },
          {
            src: require('@/assets/9.jpeg'),
          }
        ],
      }
    },
}
</script>
