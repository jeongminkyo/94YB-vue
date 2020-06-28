<template>
    <div>
        <div class="section_comment">
            <div>
                <h3 class="tit_comment">
                    <span class="inner_comment">
                        <span class="img_comm ico_comment"></span>댓글
                        <span class="num_comment">{{ totalCommentCount }}</span>
                    </span>
                </h3>
            </div>
            <ul class="list_cmt">
                <li 
                    v-for="comment in comments"
                    :key="comment.id">
                    <div class="item_cmt reply_cmt">
                        <a class="thumb_img">
                        <img src="//img1.daumcdn.net/thumb/C30x30/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_03.png" class="img_thumg" alt="프로필 이미지">
                        </a>
                        <div class="cmt_info">
                        <strong class="info_append">
                            <a class="link_author">{{ comment.display_name }}</a>
                            <span class="txt_date">
                            <span>{{ comment.created_at }}</span>
                            </span>
                        </strong>
                        <span class="txt_cmt">
                            {{ comment.content }}
                        </span>
                        </div>
                        <div class="control_cmt">
                        <button type="button" class="btn_control" onclick="myFunction(<%=notice_comment.id %>)">
                            <span class="ico_comm inner_btn">댓글 컨트롤 레이어 펼침</span>
                        </button>
                        <div class="control_layer control_layer_<%=notice_comment.id %>">
                            
                        </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['comments'],
    
    data: function() {
      return {
        totalCommentCount: this.comments.length
      }
    },
    
    compupted: {
      
    }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/comment.scss'
</style>