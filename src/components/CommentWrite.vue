<template>
    <div class="comment-row">
        <div class="mx_auto_comment">
            <div id="comments_form_">
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <div class="input text optional notice_comment_body">
                            <textarea rows="5" class="text optional" placeholder="Message" name="notice_comment[body]" id="notice_comment_body">
                            </textarea>
                        </div>
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <br>
                <div id="success"></div>
                <div class="form-group"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .cmt_write {
        position: relative;
        margin: 0 -20px;
    }
    .write_cmt {
        padding: 12px 20px 20px;
        border: 1px solid #DADDE0;
        border-width: 1px 0;
        background-color: #F1F4F8;
    }
    .write_cmt .box_write {
        position: relative;
        margin-top: 8px;
    }
    .write_cmt .write_area {
        position: relative;
        min-height: 125px;
        padding-top: 13px;
    }
    .write_area {
        border: 1px solid #DBDFE5;
        background-color: #FFF;
    }
    .mx_auto_comment {
        margin-right: auto !important;
        margin-left: auto !important;
        width:80%;
    }

    .floating-label-form-group {
        font-size: 14px;
        position: relative;
        margin-bottom: 0;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #dee2e6;
    }

    .floating-label-form-group input,
    .floating-label-form-group textarea {
        font-size: 16px;
        position: relative;
        z-index: 1;
        padding: 0;
        resize: none;
        border: none;
        border-radius: 0;
        background: none;
        box-shadow: none !important;

    }

    .floating-label-form-group input::-webkit-input-placeholder,
    .floating-label-form-group textarea::-webkit-input-placeholder {
        color: #868e96;
        font-family: 'Lora', 'Times New Roman', serif;
    }
        .floating-label-form-group label {
        font-size: 0.85em;
        line-height: 1.764705882em;
        position: relative;
        z-index: 0;
        top: 2em;
        display: block;
        margin: 0;
        -webkit-transition: top 0.3s ease, opacity 0.3s ease;
        -moz-transition: top 0.3s ease, opacity 0.3s ease;
        -ms-transition: top 0.3s ease, opacity 0.3s ease;
        transition: top 0.3s ease, opacity 0.3s ease;
        vertical-align: middle;
        vertical-align: baseline;
        opacity: 0;
    }
</style>