(function () {
  let body = document.querySelector('body')
  if (!body) return;
  let div = document.createElement('div')
  div.style.cssText = 'color: #333;font-family: -apple-system, BlinkMacSystemFont, " Segoe UI", Roboto, Helvetica, Arial,sans-serif, "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" ;'
  div.innerHTML = `<div style="color: #333;font-size:16px;font-family: -apple-system, BlinkMacSystemFont, " Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" ;">
  <div id="Content1" style="width: 520px;margin: 0 auto">
    <div class="logo_img"><img src="https://ntcebm5.neea.edu.cn/apply/imagesxxc/logl.jpg"></div>

    <table border="0" style="width:670px;height:400px;">
      <tr>
        <td class="td1" style="color: #0F598C;
        text-align: left;
        vertical-align: top;
        font-size:16px;
        font-weight: bold;">
          <br><span
            style="font-size:16px;">注意事项：</span><br>1、笔试报名所有考生需要重新进行注册、填报个人信息和上传个人照片。<br>2、重新注册不影响考生已获得的笔试和面试成绩。
        </td>
      </tr>
      <tr>
        <td class="td2" style="text-align: left;">
          <form action="/apply/memapp/doLogin" method="post" name="aForm" id="aForm">
            <table border="0" style="width:100%">
              <tr>
                <td style="width: 82px;font-size:16px;"><span>身份证号：</span></td>
                <td style="text-align:left"><input id="idCard" name="idCard" class="input" size="20"
                    placeholder="请输入身份证号码" maxlength="18" style="    width: 200px;
                    height: 34px;
                    line-height: 34px;
                    border: 1px solid #a7bccf;
                    font-size: 14px;"></td>
              </tr>
              <tr>
                <td style="width: 82px;font-size:16px;"><span>登录密码：</span></td>
                <td style="text-align:left"><input id="password" name="password" class="input" type="password"
                    size="20" placeholder="请输入密码" maxlength="20" style="    width: 200px;
                    height: 34px;
                    line-height: 34px;
                    border: 1px solid #a7bccf;
                    font-size: 14px;"></td>
              </tr>
              <tr>
                <td style="width: 82px;font-size:16px;"><span>验证码：</span></td>
                <td style="text-align:left"><input maxlength="6" id="verifycode" name="verifycode" class="textc2"
                    style="    width: 200px;
                    height: 34px;
                    line-height: 34px;
                    border: 1px solid #a7bccf;
                    font-size: 14px;
                    background:url(https://ntcebm5.neea.edu.cn/apply/common/verifycode) no-repeat right #FFF;
                    ">
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <span class="reg-a"><a href="memReg" class="red1"
                      style="color:#ef4444;text-underline-offset: 4px;font-size: 16px;margin-top: 8px;">点击注册</a>
                  </span>
                  <span class="reg-a"><a href="forgetFront" class="red1"
                      style="margin-left:30px;color:#ef4444;text-underline-offset: 4px;font-size: 16px;">忘记密码</a>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <input name="button2" type="button" value="登录" class="btns" onclick="loginDo()" style="cursor:pointer;    width: 294px;
                    height: 40px;
                    background-color: #0ea5e9;
                    border: none;
                    font-size: 16px;
                    margin-top: 8px;
                    color: #fff;">
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="font-size:16px">
          <img src="https://ntcebm5.neea.edu.cn/apply/imagesxxc/znkf1.png" width="40px" height="40px"
            style="vertical-align:middle;">
          <a href="https://aics.neea.cn/customerchat/index?projectcode=CADBB1EC804640CAA245A14B2B01B597"
            target="_blank" title="点击打开在线客服咨询网站（考生咨询版" style="text-underline-offset: 4px;">在线客服</a>
        </td>
      </tr>

    </table>
  </div>
</div>`
  body.appendChild(div)
  function loginDo() {
    if (checkForm()) {
      aForm.submit();
    }
  }
  function checkForm() {
    document.getElementById("idCard").value = trim(document.getElementById("idCard").value)
    if (document.getElementById("idCard").value == "") {
      alert('证件号码不能为空');
      return false;
    }
    document.getElementById("password").value = trim(document.getElementById("password").value)
    if (document.getElementById("password").value == "") {
      alert('登录密码不能为空');
      return false;
    }
    if ('' != '' || 'ga6d' != '') {
      if (document.getElementById("verifycode").value == "") {
        alert('验证码不能为空');
        return false;
      }
    }
    return true;
  }
  function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
  window.loginDo = loginDo;
})()