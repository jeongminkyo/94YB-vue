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
            <p class="blog_p">
                {{ post.context }}
            </p>
            <p 
                v-for="attachment in post.notice_attachments"
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
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data: () => ({
        
    })
}
</script>
<style scoped lang="scss">
    .context_image {
        width:100%
    }
    
    .button {
        background: white;
        border: 1px solid lightgray;
        margin-top: 10px;
    }
    
    .post_heading {
        display: block;
        white-space: normal;
        padding-top: 4px;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: -1px;
        word-break: break-word;
    }
    .blogview_tit {
        padding-top: 23px;
        margin: 0 32px;
        text-align: center;
    }
    .by_blog {
        display: block;
        height: 18px;
        position: static;
        padding-top: 8px;
        font-style: normal;
        font-weight: normal;
    }
    .txt_by {
        display: inline-block;
        overflow: hidden;
        position: relative;
        height: 18px;
        padding: 0 26px;
        font-size: 12px;
        color: #9199A4;
    }

    .blogview_info {
        height: 37px;
        border-top: 1px solid #9199a4;
        border-bottom: 1px solid #ecf0f5;
        margin: 29px 20px 0;
    }

    .txt_date {
        font-size: 12px;
        line-height: 38px;
        color: #9199A4;
    }
    .blogview_info .sympathy_wrap {
        height: auto;
        padding: 0;
    }
    .sympathy_wrap {
        float: right;
        height: 16px;
        padding: 3px 1px 0 0;
    }
    .info_sym {
        padding: 10px 0;
        margin-left: 14px;
        line-height: 18px;
        float: left;
        font-size: 12px;
        color: #9199a4;
        vertical-align: top;
    }

    .ico_comm {
        display: inline-block;
        overflow: hidden;
        background: url(//t1.daumcdn.net/tistory_admin/static/mobile/m320/ico_comm2.png) no-repeat 0 0;
        text-indent: -9999px;
        vertical-align: top;
    }
    .ico_comment {
        width: 18px;
        height: 16px;
        margin: 1px 4px 0 0;
        background-position: -40px -46px;
    }
    .ico_heart {
        width: 18px;
        height: 15px;
        margin: 1px 2px 0 0;
        background-position: 0 -46px;
    }

    .blogview_content {
        padding: 0 20px 30px;
        margin: 34px auto 0;
        max-width: 800px;
        font-size: 16px;
        line-height: 27px;
        color: #303030;
        word-break: break-word;
        overflow: hidden;
    }
    .blog_p {
        box-sizing: border-box;
        margin: 0px 0px 9px;
        color: rgb(92, 92, 92);
        font-family: "Malgun Gothic", NanumBarunGothic, NanumGothic, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 15px;
        text-align: justify;
        line-height: 1.5;
    }
    .container_postbtn {
        padding: 35px 0;
        position: relative;
        overflow: hidden;
    }
    .container_postbtn .postbtn_like {
        float: left;
        border-radius: 1px;
        border: 1px solid #959595;
        border-color: rgba(149,149,149,0.25);
    }
    .like_btn {
        float: left;
    }
    .container_postbtn .postbtn_like .ico_postbtn {
        width: 16px;
        height: 16px;
        margin-top: 11px;
    }
    .txt_like {
        font-size: 14px;
        color: #333;
    }
    .ico_like {
        background-position: 0 0;
    }

    .container_postbtn .ico_postbtn {
        display: inline-block;
        overflow: hidden;
        background: url(//t1.daumcdn.net/tistory_admin/static/mobile/m320/ico_postbtn.png) no-repeat;
        vertical-align: top;
        text-indent: -9999px;
        width: 16px;
        height: 16px;
        margin-top: 11px;
    }
    .container_postbtn .postbtn_like label {
        float: left;
        overflow: hidden;
        height: 38px;
        padding: 0 14px;
        line-height: 38px;
        cursor: pointer;
    }
    .container_postbtn .postbtn_like .inp_btn {
        position: absolute;
        top: -20px;
        left: -20px;
        width: 1px;
        height: 1px;
    }
</style>