<template>
    <div class="section_differ">
        <div class="section_differ_inner" style="display: block;">
            <h3 class="sectionview_tit">
                <span class="tit_sectionview">회비 관리</span>
            </h3>
            <ul class="list_post">
                <li>
                    <div class="link_post tit_line2">
                        <span class="desc_post">
                        <strong class="tit_post" style="display: inline-block">총 회비</strong>
                        <strong class="tit_post" style="display: inline-block; float:right; margin-right:20px">{{ this.totalCash | currency }}</strong>
                        </span>
                    <span class="data_info">
                        <span class="txt_category">업데이트</span>
                        <span class="txt_date">{{ this.updatedAt }}
                            
                        </span>
                        </span>
                    </div>
                </li>
                <li 
                    v-for="cash in cashList"
                    :key="cash.id">
                    <template v-if="cash.status === INCOME">
                        <div class="link_post tit_line2">
                            <span class="desc_post">
                                <strong class="tit_post" style="display: inline-block">{{ cash.display_name }} {{ cash.description }}</strong>
                                <strong class="tit_post" style="display: inline-block; float:right; margin-right:20px">{{ cash.money | currency }}</strong>
                            </span>
                            <span class="data_info">
                                <span class="txt_category">입금</span>
                                <span class="txt_date">{{ cash.date }}</span>
                            </span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="link_post tit_line2">
                            <span class="desc_post">
                                <strong class="tit_post" style="display: inline-block">{{ cash.description }}</strong>
                                <strong class="tit_post" style="display: inline-block; float:right; margin-right:20px">{{ cash.money | currency }}</strong>
                            </span>
                            <span class="data_info">
                                <span class="txt_category">출금</span>
                                <span class="txt_date">{{ cash.date }}</span>
                            </span>
                        </div>
                    </template>
                </li>
            </ul>
            <v-btn
                dark
                middle
                fixed
                right
                bottom
                fab
                @click="dialog = !dialog"
                >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <div class="link_more">
                <template>
                    <div class="text-center">
                        <v-pagination
                        v-model="page"
                        :length="totalPage"
                        :total-visible="visiblePage"
                        @input="loadCashList"
                        ></v-pagination>
                    </div>
                </template>
            </div>
        </div>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text class="pa-5">
                <v-radio-group v-model="status" row>
                    <v-radio label="수입" :value="0"></v-radio>
                    <v-radio label="지출" :value="1"></v-radio>
                </v-radio-group>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field 
                        label="날짜" 
                        prepend-icon="mdi-calendar-multiple-check"
                        slot="activator"
                        v-model="date"
                        v-bind="attrs"
                        v-on="on"
                        readonly></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
              <v-text-field label="설명" prepend-icon="mdi-comment-multiple-outline" v-model="description"></v-text-field>
              <v-text-field label="금액" prepend-icon="mdi-cash-usd" suffix="₩" v-model="money"></v-text-field>
              <template v-if="status === INCOME">
                    <v-select
                        :items="items"
                        item-text="display_name"
                        item-value="id"
                        label="이름"
                        prepend-icon="mdi-account"
                        single-line
                        v-model="cashUserId"
                    ></v-select>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('cash/loadCashes', 1)
    },

    data () {
      return {
        INCOME: 0,
        EXPENDITURE: 1,
        dialog: false,
        date: '',
        menu2: false,
        status: -1,
        description: '',
        money: 0,
        items: this.$store.state.cash.userList,
        cashUserId: '',
        page: 1
      }
    },

    watch: {
        status: function () {
            if (this.status === this.INCOME) {
                this.$store.dispatch('cash/loadUserList')
            }
        }
    },

    filters: {
        currency: function (value) {
            var num = new Number(value)
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        }
    },

    computed: {
        cashList: function () {
            return this.$store.state.cash.cashes
        },
        totalCash: function () {
            return this.$store.state.cash.totalCash
        },
        updatedAt: function () {
            return this.$store.state.cash.updatedAt
        },
        totalPage: function () {
            return this.$store.state.cash.totalPage
        },

        visiblePage: function () {
            if(this.totalPage > 10) {
                return this.totalPage / 2 + 1
            } else{
                return this.totalPage
            }
        }
    },

    methods: {
        loadCashList: function (page) {
            this.$store.dispatch('cash/loadCashes', page)
        },

        submit: function () {
            this.$store.dispatch('cash/createCash', { date: this.date, status: this.status, description: this.description, money: this.money, user_id: this.cashUserId })
            this.loadCashList(this.page)
            this.initData()
        },

        initData: function () {
            this.dialog = !this.dialog
            this.date = ''
            this.status = -1
            this.description = ''
            this.money = 0
            this.cashUserId = ''
        },
    }
}
</script>

<style scoped>
    @import '../assets/scss/cash.scss'
</style>