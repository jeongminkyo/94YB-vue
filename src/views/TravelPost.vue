<template>
    <div>
        <div
            v-for="post in postList"
            :key="post.imdbID">
            <post :post="post" />
            <comment-list />
            <comment-write />
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
        this.$store.dispatch('travelPost/loadTravelPosts')
    },

    data: () => ({

    }),

    computed: {
        postList: function () {
            return this.$store.state.travelPost.travelPosts
        }
    }
    
}
</script>