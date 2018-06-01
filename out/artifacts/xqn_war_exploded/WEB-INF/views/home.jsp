<%--
  Created by IntelliJ IDEA.
  User: zhangmaodong
  Date: 2018/2/12
  Time: 15:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false"%>
<%@ include file="base/conTextPath.jsp"%>
<html>
<head>
    <title>新青年门店管理系统</title>

    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link href="${ctx}/assets/css/bootstrap.css" type="text/css" rel="stylesheet" />
    <link href="${ctx}/assets/css/font-awesome.css" type="text/css" rel="stylesheet" />
    <link href="${ctx}/assets/css/basic.css" type="text/css" rel="stylesheet" />
    <link href="${ctx}/assets/css/custom.css" type="text/css" rel="stylesheet" />

    <script src="${ctx}/assets/js/jquery-1.10.2.js"></script>
    <script src="${ctx}/assets/js/bootstrap.js"></script>
    <script src="${ctx}/assets/js/jquery.metisMenu.js"></script>
    <script src="${ctx}/assets/js/custom.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />


</head>
<body>
<!--头部-->
<div id="wrapper">
    <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" >新青年门店管理</a>
        </div>

        <div class="header-right">
            <a href="login.html" class="btn btn-danger" title="退出"><i class="fa fa-exclamation-circle fa-2x"></i></a>
        </div>
    </nav>
    <!-- /. NAV TOP  -->
    <nav class="navbar-default navbar-side" role="navigation">
        <br />
        <div class="sidebar-collapse">
            <ul class="nav" id="main-menu">
                <li>
                    <a class="active-menu" href="index.html"><i class="fa fa-dashboard "></i>员工管理</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-desktop "></i>客户管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="panel-tabs.html"><i class="fa fa-toggle-on"></i>普通客户管理</a>
                        </li>
                        <li>
                            <a href="notification.html"><i class="fa fa-bell "></i>会员管理</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-yelp "></i>项目管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="component.html"><i class="fa fa-key "></i>新建项目</a>
                        </li>

                        <li>
                            <a href="invoice.html"><i class="fa fa-coffee"></i>项目查看</a>
                        </li>

                        <li>
                            <a href="pricing.html"><i class="fa fa-flash "></i>项目追踪</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-sitemap "></i>资金管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="#"><i class="fa fa-bicycle "></i>Second Level Link</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-flask "></i>Second Level Link</a>
                        </li>
                        <li>
                            <a href="#">工资发放<span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li>
                                    <a href="#"><i class="fa fa-plus "></i>已发工资</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-comments-o "></i>未发工资</a>
                                </li>

                            </ul>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- /. NAV SIDE  -->
    <div id="mainDiv" class="content-wrapper">
        <iframe class="main-frame embed-responsive-item" id="mainframe" name="mainframe"
                width="100%" height="500px" src="${ctx}/home.jsp"></iframe>
    </div>
<!-- /. WRAPPER  -->
<div id="footer-sec" style="text-align: center">
    Copyright &copy; 2018.New youth store management system <a href="#" target="_blank" title="新青年门店管理系统">新青年门店管理系统</a> - Collect from <a href="#" title="新青年门店管理系统" target="_blank">新青年门店管理系统</a>
</div>
</div>

</body>
<script type="text/javascript">
    $(function () {

    })
</script>
</html>
