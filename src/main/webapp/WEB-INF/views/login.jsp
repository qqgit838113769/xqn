<%--
  Created by IntelliJ IDEA.
  User: zhangmaodong
  Date: 2018/2/12
  Time: 9:19
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false"%>
<%@ include file="base/conTextPath.jsp"%>
<html>
<!DOCTYPE html>
<!-- Head -->
<head>
    <link rel="stylesheet" href="${ctx}/css/style.css" type="text/css" media="all">
    <script src="${ctx}/js/jquery-1.11.0.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <title>新青年门店管理系统</title>

    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
            }, false);
        function hideURLbar(){
            window.scrollTo(0,1);
        }

        //提交处理
        function submit(index) {

            var user = $("#user").val();
            var passWord = $("#passWord").val();

            if (user == null || user ==  "" ){
                alert("请输入用户名");
                return;
            }

            if (passWord == null || passWord == ""){
                alert("请输入密码");
                return;
            }

            if (index > 0){
                alert("正在登陆请稍后");
            }else {
                index++;
                $("#loginForm").submit();
            }


        }

        $(function () {
            var index = 0;
            var pro = $("#prompt").val();

            if (pro == 1 ){
                alert("你的用户名或密码错误");
            }

            $("#submitInpt").click(function () {
                submit(index);
            })

        })

    </script>

</head>
<!-- //Head -->

<!-- Body -->
<body>

<h1>新青年门店管理系统</h1>

<div class="container w3layouts agileits">
    <div class="login w3layouts agileits">
        <h2>登 录</h2>
        <form id="loginForm" action="${ctx}/tologin" enctype="multipart/form-data" method="post">
            <input id="user" type="text" Name="user" placeholder="用户名" required="">
            <input id="passWord" type="password" Name="passWord" placeholder="密码" required="">
        </form>
        <ul class="tick w3layouts agileits">
            <li>
                <input type="checkbox" id="brand1" value="">
            </li>
        </ul>
        <div class="send-button w3layouts agileits">
            <form>
                <input id="submitInpt" class="submitButten" value="登 录" style="text-align: center">
            </form>
        </div>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
</div>
  <input type="hidden" id="prompt"  value="${prompt}">
<div class="footer w3layouts agileits">
<p>天行健，君子以自强不息</p><br />
    <p>地势坤，君子以厚德载物</p>
</div>

</body>
<!-- //Body -->

</html>