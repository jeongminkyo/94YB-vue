<template>
    <div class="container">
        <div class="omb_login">
            <h3 class="omb_authTitle">Login or <a href="/users/sign_up">Sign up</a></h3>
            
            <div class="card-header text-center">
                <div class="logo-container">
                  <img src="https://lh3.googleusercontent.com/proxy/E73TRL8dGLMrpD5286y3A42tn0pfm5Bo0HKaeNGae-v_JjjJu94L2G31QJDh3_XAt0R_Z-QPrwx4pLmW9m_3rQ" alt="">
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-6">
            </div>

            <div class="row omb_row-sm-offset-3">
                <div class="col-xs-12 col-sm-6 omb_socialButtons">
                    <div class="input-group">
                        <span class="input-group-addon"></span>
                        <input type="email" placeholder="email address" class="form-control" />
                    </div>
                    <span class="help-block"></span>
                    <div class="input-group">
                        <span class="input-group-addon"></span>
                        <input type="pawssowrd" placeholder="Password" class="form-control password" />
                    </div>
                    
                    <div style="margin-top:30px"></div>

                    <button class="btn btn-md btn-primary btn-block login" type="submit">Login</button>
                    
                    <div style="margin-top:30px">
                    <a href="/users/auth/facebook" class="btn btn-md btn-block omb_btn-facebook">
                        <span>Facebook 계정으로 로그인</span>
                    </a>
                    <a href="/users/auth/naver" class="btn btn-md btn-block omb_btn-naver">
                        <span>Naver 계정으로 로그인</span>
                    </a>
                    <a href="/users/auth/google_oauth2" class="btn btn-md btn-block omb_btn-google">
                        <span>Google+ 계정으로 로그인</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$white: white;
$color_azure_approx: #3b5998;
$color_malachite_approx: #00c73c;
$color_thunderbird_approx: #c32f10;
$color_silver_chalice_approx: #aaa;
$color_celeste_approx: #cdcdcd;
$red: red;

.password {
    margin-top: 10px;
}

.logo-container {
    width: 65px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid transparent;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
}

.logo-container img {
    width: 100%;
}

.card-header {
    background-color: transparent;
    border-bottom: 0;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
}

.btn-primary {
    color: #fff;
}

@media(min-width: 768px) {
    .omb_row-sm-offset-3 div:first-child[class*="col-"] {
        margin-left: 25%;
    }
    .omb_login .omb_forgotPwd {
        text-align: right;
        margin-top: 10px;
    }
}
.omb_login {
.omb_authTitle {
    text-align: center;
    line-height: 300%;
}
.omb_socialButtons {
a {
    color: $white;
// In yourUse @body-bgopacity: 0.9;
&:hover {
     color: $white;
     opacity: 1;
 }
}
.omb_btn-facebook {
    background: $color_azure_approx;
    margin-top: 10px;
}
.omb_btn-naver {
    background: $color_malachite_approx;
    margin-top: 10px;
}
.omb_btn-google {
    background: $color_thunderbird_approx;
    margin-top: 10px;
}
}
.omb_loginOr {
    position: relative;
    font-size: 1.5em;
    color: $color_silver_chalice_approx;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
.omb_hrOr {
    background-color: $color_celeste_approx;
    height: 1px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
.omb_spanOr {
    display: block;
    position: absolute;
    left: 50%;
    top: -0.6em;
    margin-left: -1.5em;
    background-color: $white;
    width: 3em;
    text-align: center;
}
}
.omb_loginForm {
.help-block {
    color: $red;
}
.input-group.i {
    width: 2em;
}
}
}
.login {
    margin-bottom: 5px;
}
.omb_forgotPwd {
    margin-top: 12px;
}

</style>