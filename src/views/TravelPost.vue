<template>
    <div>
        <div
            v-for="post in postList"
            :key="post.id">
            <post :post="post" />
            <comment-list :comments="post.comments" />
            <comment-write />
        </div>
        <div>
            <v-pagination
                v-model="page"
                :length="totalPage"
                :total-visible="visiblePage"
                @input="loadTravelList"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post'
import CommentList from '@/components/CommentList'
import CommentWrite from '@/components/CommentWrite'

export default {
    components: {
        Post,
        CommentList,
        CommentWrite
    },

    created () {
        this.$store.dispatch('travelPost/loadTravelPosts', 1)
    },

    data: function () {
      return {
          page: 1
      }  
    },

    computed: {
        postList: function () {
            return this.$store.state.travelPost.travelPosts
        },

        totalPage: function () {
            return this.$store.state.notice.totalPage
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
        loadTravelList: function (page) {
            this.$store.dispatch('notice/loadTravelPosts', page)
        },
    }
    
}
</script>