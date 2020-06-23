<template>
    <div class="masthead"
        :style="backgroundStyle">
        <div class="overlay"></div>
        <div class="container">
            <div class="site-heading">
                <h1>YB 94</h1>
                <span class="subheading">간은 40대, 얼굴은 30대, 나이는 20대, 마음만은 10대</span>
            </div>
        </div>
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

    computed: {
        backgroundStyle: function () {
            const randNum = Math.floor(Math.random() * 9) + 1

            return {
                "background-image": `url("${this.items[randNum].src}")`,
                "background-size": `100% 100%`,
                "background-repeat": "no-repeat"
            }
        }
    }
}
</script>

<style scoped>
    .container {
        position: relative;
        padding: 0px;
    }

    .masthead {
        margin-bottom: 50px;
        background: no-repeat center center;
        background-color: #868e96;
        background-attachment: scroll;
        position: relative;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .masthead .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #212529;
        opacity: 0.5;
    }

    .masthead .site-heading {
        padding: 200px 0 150px;
        color: white;
    }

    @media only screen and (min-width: 768px) {
        .masthead .site-heading {
            padding: 200px 0;
        }
    }

    .masthead .site-heading {
        text-align: center;
    }

    .masthead .site-heading h1 {
        font-size: 50px;
        margin-top: 0;
    }

    .masthead .site-heading .subheading {
        font-size: 24px;
        font-weight: 300;
        line-height: 1.1;
        display: block;
        margin: 10px 0 0;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
</style>