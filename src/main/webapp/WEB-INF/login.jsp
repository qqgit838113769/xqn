<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false"%>
<%@ include file="/WEB-INF/component/commonTagLib.jsp" %>
<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <title>新青年门店管理系统</title>
    <%@ include file="/WEB-INF/component/commonCSS.jsp" %>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- CSS -->
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
    <link rel="stylesheet" href="${ctx}/base/assets/css/reset.css">
    <link rel="stylesheet" href="${ctx}/base/assets/css/supersized.css">
    <link rel="stylesheet" href="${ctx}/base/assets/css/style.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>

<body>

<div class="page-container">
    <h1>新青年门店管理系统</h1>
    <form id="addFrom">
        <input type="text" name="user" class="username" placeholder="Username">
        <input type="password" name="passWord" class="password" placeholder="Password">
        <button type="submit" id="submitInpt">登录</button>
        <div class="error"><span>+</span></div>
    </form>
</div>
<br />
<br />
<div class="footer w3layouts agileits" style="color: #0f0f0f">
    <p>天行健，君子以自强不息</p><br />
    <p>地势坤，君子以厚德载物</p>
</div>

<!-- Javascript -->
<script src="${ctx}/base/assets/js/jquery-1.8.2.min.js"></script>
<script src="${ctx}/base/assets/js/supersized.3.2.7.min.js"></script>
<script src="${ctx}/base/assets/js/supersized-init.js"></script>
<script src="${ctx}/base/assets/js/scripts.js"></script>

</body>

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
            $("#addFrom").ajaxSubmit({
                url:"${ctx}/",
                type:"post",
                data:{},
                datatype:"ajax",
                success:function (result) {

            }
            })
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
</html>

