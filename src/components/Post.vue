<template>
    <div>
        <div class="blogview_tit">
            <h2 class="post_heading">{{ post.title }}</h2>
            <cite class="by_blog">
                <span class="txt_by">{{ post.display_name }}</span>
            </cite>
        </div>
        <div class="blogview_info">
            <time class="txt_date">{{ post.created_at }}</time>
            <span class="sympathy_wrap">
                <div class="info_sym">
                    <span class="icom_comm ico_comment"></span>
                    <span class="count_comment"></span>
                </div>
                <div class="info_sym">
                    <span class="icom_comm ico_heart"></span>
                    <span class="count_heart"></span>
                </div>
            </span>
        </div>
        <div class="blogview_content">
            <p v-html="splitContext" class="blog_p">
            </p>
            <p 
                v-for="attachment in post.attachments"
                :key="attachment.id"
                class="blog_p">
                <img :src="attachment.url" class="context_image">
            </p>
            <div class="container_postbtn">
                <div class="postbtn_like">
                    <div class="like_btn">
                    <label class="uoc-icon" style="margin-bottom: 0px">
                        <span class="ico_postbtn" style="background-position: -20px 0;"></span>
                        <span class="txt_like uoc-text"></span>
                        <span class="txt_like uoc-count" style="display: none;"></span>
                    </label>
                    </div>
                </div>
            </div>
            <v-btn
                dark
                middle
                fixed
                right
                bottom
                fab
                >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data: () => ({
        
    }),

    computed: {
        splitContext: function () {
            return this.post.context.replace(/(?:\r\n|\r|\n)/g, '<br />')
        }
    }
}
</script>

<style>
    @import '../assets/scss/post.scss'
</style>
