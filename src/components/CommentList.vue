<template>
    <div>
        <div class="section_comment">
            <div>
                <h3 class="tit_comment">
                    <span class="inner_comment">
                        <span class="img_comm ico_comment"></span>댓글
                        <span class="num_comment"></span>
                    </span>
                </h3>
            </div>
            <ul class="list_cmt">
                <li 
                    v-for="comment in commentList"
                    :key="comment.imdbID">
                    <div class="item_cmt reply_cmt">
                        <a class="thumb_img">
                        <img src="//img1.daumcdn.net/thumb/C30x30/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_03.png" class="img_thumg" alt="프로필 이미지">
                        </a>
                        <div class="cmt_info">
                        <strong class="info_append">
                            <a class="link_author">{{ comment.imdbID }}</a>
                            <span class="txt_date">
                            <span>{{ comment.Year }}</span>
                            </span>
                        </strong>
                        <span class="txt_cmt">
                            {{ comment.Title }}
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
    created () {
        this.$store.dispatch('comment/loadComments')
    },

    data: () => ({

    }),

    computed: {
        commentList: function () {
            return this.$store.state.comment.comments
        }
    }
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

.section_comment {
  position: relative;
  border-bottom: 1px solid #e2e5e9;
  background-color: #fff;
}
.tit_comment {
  margin-top: 3px;
  padding-top: 36px;
  border-top: 1px solid #e2e5e9;
  box-shadow: 0 -0.05em 0 rgba(0,0,0,0.03);
  font-weight: normal;
  font-size: 15px;
}
.inner_comment {
  display: block;
  margin: 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #9199a4;
}
.section_comment .tit_comment .ico_comment {
  float: left;
  width: 18px;
  height: 16px;
  margin: 3px 6px 0 0;
  background-position: -40px -46px;
}
.img_comm, .list_cmt .thumb_img {
  background: url(//t1.daumcdn.net/tistory_admin/static/mobile/m320/ico_comm2.png) no-repeat 0 0;
  vertical-align: top;
}
.num_comment {
  font-size: 14px;
  color: #EC5621;
}
.list_cmt {
  margin: 0 20px;
  padding: 0;
}

.ico_comm, .img_comm, .list_cmt .thumb_img {
  background-image: url(//t1.daumcdn.net/tistory_admin/static/mobile/m640/ico_comm2.png);
  -webkit-background-size: 400px 400px;
  background-size: 400px 400px;
}
.thumb_img {
  position: absolute;
  left: 0;
  top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  vertical-align: top;
}
.img_thumg {
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
img {
  vertical-align: top;
  border: 0 none;
}
.list_cmt .cmt_info .info_append {
  display: block;
  overflow: hidden;
  margin-right: 20px;
  padding-top: 1px;
  font-weight: normal;
}
.list_cmt .info_append .link_author {
  overflow: hidden;
  float: left;
  max-width: 119px;
  font-size: 13px;
  color: #9199a4;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list_cmt .info_append .txt_date {
  float: left;
  position: relative;
  padding: 3px 0 0 14px;
  font-size: 12px;
  line-height: 13px;
  color: #9199A4;
}
.list_cmt .item_cmt {
  position: relative;
  padding: 19px 0 16px 40px;
}
.list_cmt .cmt_info .txt_cmt {
  display: block;
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #404040;
  word-break: break-word;
}
.list_cmt .txt_cmt .ico_secret {
  display: inline-block;
  width: 10px;
  height: 13px;
  margin: 4px 0 0 5px;
  background-position: -152px -46px;
  vertical-align: top;
}
.control_cmt {
  position: absolute;
  right: -15px;
  top: 14px;
}
.item_cmt .control_cmt .btn_control {
  padding: 9px 14px 8px 13px;
  font-size: 0;
  line-height: 0;
}
button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.item_cmt .control_cmt .inner_btn {
  width: 3px;
  height: 13px;
  background-position: -184px -8px;
}
.item_cmt .control_cmt .control_layer {
  display: none;
  position: absolute;
  right: 12px;
  top: 30px;
  z-index: 10;
  width: 68px;
  padding: 9px 0;
  font-size: 14px;
  color: #000;
  border: 1px solid #BEC5D0;
  background-color: #FFF;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.08);
}
.item_cmt .control_layer .btn_ctr {
  display: block;
  line-height: 32px;
  text-align: center;
}
.show {display: block;}
</style>