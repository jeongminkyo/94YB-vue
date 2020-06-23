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
                    <template v-if="cash.status === 0">
                        <div class="link_post tit_line2">
                            <span class="desc_post">
                                <strong class="tit_post" style="display: inline-block">{{ cash.display_name }} {{ cash.description }}</strong>
                                <strong class="tit_post" style="display: inline-block; float:right; margin-right:20px">{{ cash.money | currency }}</strong>
                            </span>
                            <span class="data_info">
                                <span class="txt_category">입금</span>
                                <span class="txt_date">{{ cash.created_at }}</span>
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
                                <span class="txt_date">{{ cash.created_at }}</span>
                            </span>
                        </div>
                    </template>
                </li>
            </ul>
            <div class="link_more">
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('cash/loadCashes')
    },

    data: () => ({
    }),

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
        }
    }
}
</script>

<style scoped lang="scss">
    li {
        list-style: none;
    }
    .btn-sm {
        background-color: transparent;
        border: 1px solid lightgray;
        padding: 8px 10px;

        border-radius: 0.25rem;
    }
    .section_differ {
        padding: 40px 0 29px;
        margin-top: 3px;
        border-top: 1px solid #e2e5e9;
        box-shadow: 0 -0.05em 0 rgba(0,0,0,0.03);
        background-color: #fff;
    }
    .sectionview_tit {
        position: relative;
        height: 23px;
        margin: 0 20px;
        font-weight: normal;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
    }
    .sectionview_tit .tit_sectionview {
        position: relative;
        padding: 0 8px;
        background-color: #fff;
    }
    .sectionview_tit:before {
        position: absolute;
        left: 0;
        top: 11px;
        width: 100%;
        height: 1px;
        background-color: #BEC5D0;
        content: '';
    }

    .sectionview_tit {
        position: relative;
        height: 23px;
        margin: 0 20px;
        font-weight: normal;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
    }
    .section_differ .list_post {
        margin-top: 5px;
    }
    .list_post {
        margin: 0 auto;
        max-width: 800px;
        padding: 0;
    }
    .list_post .link_post {
        display: block;
        position: relative;
        padding-bottom: 25px;
    }
    .list_post .desc_post {
        display: block;
        max-height: 82px;
    }
    .list_post .tit_post {
        display: block;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        white-space: normal;
        -webkit-line-clamp: 2;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        word-break: break-word;
        max-height: 42px;
    }
    .list_post .data_info {
        overflow: hidden;
        position: absolute;
        left: 0;
        right: -2px;
        bottom: -5px;
        z-index: 1;
    }
    .list_post .data_info .txt_date {
        float: left;
        font-size: 12px;
        line-height: 20px;
        color: #9199a4;
        padding-left: 6px;
    }
    .list_post .data_info .txt_date:before {
        float: left;
        width: 2px;
        height: 2px;
        border-radius: 2px;
        margin: 9px 6px 0 0;
        background-color: #9199a4;
        vertical-align: top;
        content: '';
    }
    .sympathy_wrap {
        float: right;
        height: 16px;
        padding: 3px 1px 0 0;
    }
    .sympathy_wrap .info_sym {
        padding: 0;
        float: left;
        margin-left: 10px;
        font-size: 12px;
        line-height: 15px;
        color: #9199a4;
        vertical-align: top;
    }
    .sympathy_wrap .ico_comment {
        width: 13px;
        height: 12px;
        margin: 1px 3px 0 0;
        background-position: -112px -46px;
    }
    .ico_comm {
        display: inline-block;
        overflow: hidden;
        background: url(//t1.daumcdn.net/tistory_admin/static/mobile/m320/ico_comm2.png) no-repeat 0 0;
        text-indent: -9999px;
        vertical-align: top;
    }
    .list_post li {
        margin: 0 20px;
        padding: 17px 0 20px;
        border-top: 1px solid #ecf0f5;
    }
    .section_differ .list_post li {
        border-top: 0 none;
        border-bottom: 1px solid #ecf0f5;
    }
    .list_post .data_info .txt_category {
        overflow: hidden;
        float: left;
        max-width: 40%;
        font-size: 12px;
        line-height: 21px;
        color: #ec5621;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .sympathy_wrap .ico_heart {
        width: 13px;
        height: 11px;
        margin: 1px 3px 0 0;
        background-position: -84px -46px;
    }
    .section_differ .link_more {
        display: block;
        height: 16px;
        padding: 11px 0;
        margin: 0 20px;
        font-size: 12px;
        line-height: 16px;
        color: #9199A4;
        text-align: center;
    }
    .link_more {
        display: block;
        height: 16px;
        padding: 11px 0;
        margin: 0 20px;
        font-size: 12px;
        line-height: 16px;
        color: #9199A4;
        text-align: center;
    }

    .pagination {
        display:block;
        font-size: 1.2em;
        margin-top: 15px;
    }
    .page {
        margin: 0 10px;
    }

</style>