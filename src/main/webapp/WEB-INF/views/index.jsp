<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/component/commonTagLib.jsp" %>
	
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><c:out value="${systemTitle}"></c:out></title>
    <%@ include file="/WEB-INF/component/commonCSS.jsp" %>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <style type="text/css">
        div.sys-menubar { color: #fff; font-family: "微软雅黑"; max-height:50px; position:absolute; left: 0px; top: 0px; }
    	span.sys-menu { padding:14px 16px 15px 16px; display:block; float: left; cursor: pointer; font-size:15px; letter-spacing:3px;}
    	span.sys-focus { color:#000; background-color: #ecf0f5 !important; }
    	span.sys-menu:hover { background-color: #077fb1; }
    	ul.sys-left-menu { display: none; }
    	iframe { margin: 0px; padding-top: 5px; border: 0px; }
    	p.headtitle {
			padding:0px;
			margin:0px;
			margin-left:10px;
			color:white;
			font-size:20px;
			font-family:"黑体";
			line-height:50px;
			float: left;
			width:200px;
		}
		.navbar-nav > li > a {
		    color: #fff; 
		    padding-bottom: 7px;
		    padding-top: 8px;
		}
		/*.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {
		    color: #fff !important;
            background-color: #23272a !important;
		}*/
		.navbar-nav > li > a:hover, .navbar-nav > li > a:focus {
		   /*  color: #077fb1 ;
		    background-color: #23272a !important; */
		}
		span.lineDiv {
            width: 2px;
            height: 35px;
            position: relative;
            display: block;
            float: left;
            background: url("${ctx}/lib/img/mainMenuLine.png") no-repeat;
		}
		.main-header .logo {
		    width: 250px;
		}
		.main-header > .navbar {
		    margin-left: 250px;
		}
		.navbar-custom-menu .navbar-nav > li > a {
		    line-height: 43px;
		    padding-bottom: 0px;
		    padding-top: 0px;
		    color: #fff;
		}
		.main-sidebar, .left-side {
		    padding-top:70px;
		    width:210px;
		}
		.fixed .content-wrapper, .fixed .right-side {
		    padding-top: 44px;
		}
		.content-wrapper, .right-side, .main-footer {
		    margin-left: 210px;
		}
		span.hidden-xs {
		    display:inline-block !important;
		}
		.navbar-nav > .user-menu .user-image {
		    border-radius: 50% !important;
		    float: left !important;
		    height: 25px !important;
		    margin-right: 10px !important;
		    margin-top: 8px !important;
		    width: 25px !important;
		}
		@media (max-width: 767px) {
		    nav#menuNav { 
		        margin-top: -35px;
		    }
		}
    </style>
</head>
<body class="skin-blue sidebar-mini fixed">
    <div class="wrapper">
        <header class="main-header" style="max-height: 70px; overflow: hidden;" >
            <div style="background-color: #222d32;height:0px;overflow:hidden;"> 
                <span style="clear:both;"></span>
	        </div>
            <a href="#" class="logo" style="height:50px;padding:0px;" id="headLeft">
               <p class="headtitle tag1">新青年门店管理系统</p>
            </a>
            <nav id="menuNav" class="navbar navbar-static-top" role="navigation" style="height:50px;min-height:50px;">
                  <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav" style="margin-top: 7px;">
                        
                        <li class="dropdown user user-menu">
                              <a  class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa fa-user" style="background-color:#3c8dbc;padding:1px 4px;border-radius:2px;"></i>&nbsp;
                                <span class="hidden-xs">新青年门店管理服务中心</span>
                          </a>
                        </li>
                        <li>
                            <a href="#" class="" target="mainframe"><i class="fa fa fa-lock" style="background-color:#00a65a;padding:1px 4px;border-radius:2px;"></i>&nbsp;修改密码</a>
                        </li>
                        <li>
                            <a href="javascript:logout();" class=""><i class="fa fa fa-ban" style="background-color:#dd4b39;padding:1px 4px;border-radius:2px;"></i>&nbsp;退出</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <span style="clear:both;"></span>
        </header>
        <aside class="main-sidebar" style="padding-top: 50px;">
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel" style="padding-left:15px;padding-top:1px;padding-bottom:15px">
                    <div class="pull-left image">
                        <img src="lib/img/center.png" class="img-circle" alt="User Image" />
                    </div>
                    <div class="pull-left info" style="padding-left:18px;margin-top:6px">
                        <p style="font-size:14px">${user.name}</p>
                        <a href="#" id="projNameTags"><i class="fa fa-circle text-success" ></i>在线</a>
                    </div>
                </div>

               			<ul class="sidebar-menu sys-left-menu" id="sys-1" style="font-size:13px">
                            <li class="treeview">
                                <a href="#" target="mainframe">
                                    <i class="fa fa cus-arrow"></i> <span style="font-size:14px">员工管理</span>
                                </a>
                            </li>

                            <li class="treeview">
                                <a href="#" target="mainframe">
                                    <i class="fa fa cus-arrow"></i> <span style="font-size:14px">客户管理</span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">普通客户管理</span>
                                    </a>
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">会员管理</span>
                                    </a>
                                </ul>
                            </li>

                            <li class="treeview">
                                <a href="#" target="mainframe">
                                    <i class="fa fa cus-arrow"></i> <span style="font-size:14px">项目管理</span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">新建项目</span>
                                    </a>
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">项目查看</span>
                                    </a>
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">项目追踪</span>
                                    </a>
                                </ul>
                            </li>


                            <li class="treeview">
                                <a href="#" target="mainframe">
                                    <i class="fa fa cus-arrow"></i> <span style="font-size:14px">资金管理</span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                    <a href="#" target="mainframe">
                                        <i class="fa fa cus-arrow"></i> <span style="font-size:14px">工资发放</span>
                                        <i class="fa fa-angle-left pull-right"></i>
                                        <ul class="treeview-menu">
                                            <a href="#" target="mainframe">
                                                <i class="fa fa cus-arrow"></i> <span style="font-size:14px">已发工资</span>
                                            </a>
                                            <a href="#" target="mainframe">
                                                <i class="fa fa cus-arrow"></i> <span style="font-size:14px">未发工资</span>
                                            </a>
                                        </ul>
                                    </a>
                                </ul>
                            </li>
               			</ul>

            </section>
        </aside>

        <div id="mainDiv" class="content-wrapper">
            <iframe class="main-frame embed-responsive-item" id="mainframe" name="mainframe" 
            		width="100%" height="500px" src="${ctx}/home.jsp"></iframe>
        </div>
        <%-- 
        <footer class="main-footer" style="height:20px;padding: 2px 10px;">
            <div class="pull-right hidden-xs">
                <b>Version</b> 2.0
            </div>
            <div style="font-family:Arial;font-size:11px"><strong>Copyright &copy; 2014-2015 <a href="#">HSNN</a>.</strong> All rights reserved.</div>
        </footer>
 --%>
    </div>
    
    <%@ include file="/WEB-INF/component/commonJS.jsp" %>
    
    <script type="text/javascript">

    	function changeMenuList(obj, id) {
    		$("span.sys-menu").removeClass("sys-focus");
    		$(obj).addClass("sys-focus");
    		if (id) {
    			$("ul.sys-left-menu").hide();
        		$("#" + id).show();
    		}
    	}
    	
    	function changeBidProject(projName) {
    		$("#projNameTags").html(projName);
    	}
    	
    	$("span.sys-menu:first").click();
        $(document).ready(function() {
    		var type = 0;
    		$("#toggleButton").click(function() {
    			var time=400;
    			$(".tag1").fadeToggle(time); 
				$(".tag2").fadeToggle(time);
    		});
    	});
        //刷新指定模块
        $("#${parentMenu}").click();


    	function logout() {
    		$.HN.message.confirm('确定要退出吗？', '', '').on(function (e) {
    			if (e) {
    				document.location.href="${ctx}/logout.html";
    			}
    		});
    	};
    	/*菜单栏切换*/
        $(".skin-blue .treeview-menu > li > a").on('click',function(){
            $(".skin-blue .treeview-menu > li > a.active").removeClass('active');
            $(this).addClass('active');
        });
    </script>
    
</body>
</html>