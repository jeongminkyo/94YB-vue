<template>
    <div>
        <v-app-bar
            color="white"
            dense
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
        >
          <v-app-bar-nav-icon class="navbar-toggler" @click="toggleDrawer()"></v-app-bar-nav-icon>
          <router-link to="/">
              <v-toolbar-title class="navbar-brand">YB94 술친게이들</v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        > 
            <v-list
            nav
            dense
            >
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => ({
    //
    drawer: false,
    items: [
        {
        icon: 'mdi-home',
        text: '홈',
        link: '/',
      },
      {
        icon: 'mdi-clipboard-check-outline',
        text: '공지사항',
        link: '/notices',
      },
      {
        icon: 'mdi-cash-usd',
        text: '회비관리',
        link: '/cashes',
      },
      {
        icon: 'mdi-airplane',
        text: '여행게시판',
        link: '/travel_posts',
      },
      {
        icon: 'mdi-calendar-multiple-check',
        text: '일정관리',
        link: '/calendars',
      },
      {
        icon: 'mdi-account',
        text: '로그인',
        link: '/users/sign_in',
      },
    ]
  }),

  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
};
</script>