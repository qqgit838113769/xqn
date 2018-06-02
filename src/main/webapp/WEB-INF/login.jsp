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
        <input type="text" id="user" name="user" class="username" placeholder="Username">
        <input type="password" id="passWord" name="passWord" class="password" placeholder="Password">
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
<%@ include file="/WEB-INF/component/commonJS.jsp" %>
<script type="application/x-javascript">
    addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
    }, false);
    function hideURLbar(){
        window.scrollTo(0,1);
    }

    //提交处理
    function submit() {

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
        alert("11")

        $("#addFrom").ajaxSubmit({
            type:'post',
            url:'${ctx}/tologin.html',
            data:{},
            datatype:'ajax',
            success:function (result) {
                if (result.success){
                    var url = "${ctx}/toHomePage";
                    getChangerPost(url);
                } else {
                    $.alert(result.msg || "登录失败", "warn", function () {
                    });
                }
            },
            beforeSend:function () {
                    //获取浏览器页面可见高度和宽度
                    var _PageHeight = document.documentElement.clientHeight,
                        _PageWidth = document.documentElement.clientWidth;
                    //计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
                    var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
                        _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
                    //在页面未加载完毕之前显示的loading Html自定义内容
                    var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;z-index:10000;"><div style="position: absolute; cursor: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(../lib/img/ajax-loader.gif) no-repeat scroll center left 4px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待<span class="dotting"></span></div></div>';
                    //呈现loading效果
                    $('body').append(_LoadingHtml)
                },
            complete:function(){
                $('#loadingDiv').remove();
            }
            });
    }

    $(function () {
        $("#submitInpt").click(function () {
            submit();
        })

    })

</script>
</html>

