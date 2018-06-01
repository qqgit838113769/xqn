﻿/*!HNapp.js
 * ================
 * 
 * @Author  
 * @Support 
 * @Email   
 * @version 
 * @license 
 */

'use strict';
//判断是否引用Jquery
if (typeof jQuery === "undefined") {
    throw new Error("AdminLTE requires jQuery");
}

$.HN = {};

$(function () {
    _initHN();
    //窗口大小改变时重新计算jqgrid的宽度
    $.HN.layout();
    $(':input,select', '.form-table').each(function () {
        if ($(this).attr('type') != "button" && $(this).attr('type') != "submit"
            && $(this).attr('type') != "reset" && $(this).attr('type') != "image" &&
            $(this).attr("disabled") != 'disabled') {
            if ($(this).val() == "") {
                $(this).css('background-color', '#dbeadd');
            } else {
                $(this).attr('data-oldvalue', $(this).val())
            }
            $(this).bind('blur', function () {
                if ($(this).val() != "" && $(this).val() != $(this).data("oldvalue")) {
                    $(this).css('background-color', '#dbeadd');
                }
                else if ($(this).val() != "" && $(this).val() == $(this).data("oldvalue")) {
                    $(this).css('background-color', '#fff');
                }
            })
        }
    });
})

function _initHN() {
    /*
     * HN
     * @type Object
     * @description $.HN 为自定义js的主要命名空间
     */
    $.HN = {
    		
        /* 测试方法
         * @method Test
         * @type function 
         * @description  测试方法
         * @param  
         * @example $.HN.Test()
         */
        Test: function () {
            alert("Hello！");
        },
        /* 测试对象
         * @type object 
         * @description  测试方法
         */
        TestObject: {
            /* 测试对象内方法
             * @method Hello
             * @type function 
             * @description  测试对象内方法
             * @param  {string} msg 消息内容
             * @example $.HN.TestObject.Hello('hello!')
             */
            Hello: function (msg) {
                alert(msg);
            }
        },
        /* 页面布局及重绘对象
         * @method resize_jqgrid
         * @type function 
         * @description  页面布局及重绘对象
         * @example $.HN.layout()
         */
        layout: function () {
            //if ($('.jqgrid', '.content').length > 0) {
            //    $('.jqgrid').jqGrid('setGridWidth', $('.content').width() - 2)
            //}
            $(window, '.content').resize(function () {
                if ($('.jqgrid', '.content').length > 0) {
	                /*jqgrid自适应*/
                	$(".null-line").css("height",$(".modal-footer").height() + 14);
                	var gPrevLen = $(".ui-jqgrid").prevAll().length;
					var jHeight = 0;
					if(gPrevLen > 1){
						for (var i = 0; i < gPrevLen; i++) {
							var j = $(".ui-jqgrid").prevAll().eq(i).height() +13;
							jHeight += j;
						};
					}else{
						jHeight=$(".ui-jqgrid").prevAll().height() + 13;
					};
                	var tableHeight = $(window).height() - $(".content-header").height() - jHeight - $(".ui-jqgrid-titlebar").height() - $(".ui-jqgrid-hdiv").height()-$(".null-line").height();
					if($(".ui-jqgrid").parent(".content").length > 0){
                    	if($(".ui-jqgrid + div.bottongroup").length > 0){
	                		$(".ui-jqgrid-bdiv").css("height",tableHeight - $(".ui-jqgrid").nextAll().height()  - 66.6);
	                	}
	                	else{
	            	 		$(".ui-jqgrid-bdiv").css("height",tableHeight - 52.6);
	            	 		if($(".ui-jqgrid").parent("section").prev("section.content").length > 0){
								$(".ui-jqgrid-bdiv").css("height",tableHeight - ( $(".ui-jqgrid").parent("section").prev("section.content").height() + 10 ) - ($(".content-header").height() * 2 ) - 38.6);
							}
	                	};
                	 	$(".jqgrid").jqGrid("setGridWidth", $(".content").width() - 2);
                	 }
					else if($(".ui-jqgrid").parent(".box-body").length > 0){
	            	 	$(".ui-jqgrid-bdiv").css("height",tableHeight - $(".ui-jqgrid-bdiv").parents(".box").prev().height() - ($(".content-header").height() * 2 ) - 86.6);
                	 	$(".jqgrid").jqGrid("setGridWidth", $(".box-body:first").width() - 2);
                	};
                }
            });
            if (typeof $.fn.slimScroll != 'undefined') {
                $(".modal-body").slimScroll({
                    alwaysVisible: false,
                    height: "260px",
                    size: "3px"
                });
            }
        },
        
        /* 页面布局及重绘对象
         * @type object 
         * @description  页面布局及重绘对象
         */
        message: {
        	
            /* 弹窗消息
             * @method alert
             * @type function 
             * @description  在页面内弹出消息
             * @param {string} message 消息内容
             * @param {string} title 弹窗题头
             * @param {string} classify 弹窗类型，类型有info(i)，warn(w)，error(e)，success(s)
             * @example $.HN.message.alert()
             */
            alert: function (message, title, classify, callback) {
            	$.alert(message, classify, callback);
            	/*
                var modalcontent = $("<div class='modal-content'></div>")
                var modalheader = $("<div class='modal-header'></div>")
                    .append($('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">关闭</span></button>'));
                if (classify == "info" || classify == "i") {
                    title = (title == "" || title == NaN) ? "系统消息" : title;
                    $('<h4 class="modal-title text-info"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                }
                else if (classify == "warn" || classify == "w") {
                    title = (title == "" || title == NaN) ? "警告信息" : title;
                    $('<h4 class="modal-title text-warning"><i class="fa fa-exclamation-triangle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                }
                else if (classify == "error" || classify == "e") {
                    title = (title == "" || title == NaN) ? "错误信息" : title;
                    $('<h4 class="modal-title text-danger"><i class="fa fa-times-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                }
                else if (classify == "success" || classify == "s") {
                    title = (title == "" || title == NaN) ? "系统信息" : title;
                    $('<h4 class="modal-title text-success"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                }
                else {
                    title = (title == "" || title == NaN) ? "系统消息" : title;
                    $('<h4 class="modal-title text-info"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                }
                modalheader.appendTo(modalcontent);
                $('<div class="modal-body"> <p>' + message + '</p> </div>').appendTo(modalcontent);
                var modal = top.$("<div class='modal fade'></div>").append($("<div class='modal-dialog modal-sm'></div>").append(modalcontent));
                modal.modal({ keyboard: true }).on('hidden.bs.modal', function (e) {
                    $(this).detach();
                    if (callback instanceof Function) {
                    	callback();
                    }
                });
                */
            },
            /* confirm弹窗
             * @method confirm
             * @type function 
             * @description  在页面内弹出确认信息
             * @param  {string} message 消息内容
             * @param {string} title 弹窗题头
             * @param {string} oktext 确认按钮文本，默认为“确认”
             * @example $.HN.message.confirm("确认吗？","","").on(function(e){ 取消：e为false,确认：e为true})
             */
            confirm: function (message, title, oktext) {
            	if(parent.$(".modal-content").length>0){
            		return;
				}
                var modalcontent = $("<div class='modal-content'></div>")
                var modalheader = $("<div class='modal-header'></div>")
                    .append($('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">关闭</span></button>'));

                title = (title == "" || title == NaN) ? "提示信息" : title;
                oktext = (oktext == "" || oktext == NaN) ? "确定" : oktext;

                $('<h4 class="modal-title text-info"><i class="fa fa-question-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                modalheader.appendTo(modalcontent);
                $('<div class="modal-body"> <p>' + message + '</p> </div>').appendTo(modalcontent);

                var modelfooter = $("<div class='modal-footer'></div>")
                .append($('<button type="button" class="btn btn-primary btn-ok btn-sm" data-dismiss="modal">' + oktext + '</button>'))
                .append($('<button type="button" class="btn btn-default btn-cancel btn-sm" data-dismiss="modal">取消</button>'));
                    
                modelfooter.appendTo(modalcontent);
				/*
            	if(typeof(top.$('.modal.fade.confirm').html()) != "undefined"){
					return {
	                    on: function () {}
	                };
				}
				*/
                var modal = top.$("<div class='modal fade confirm'></div>").append($("<div class='modal-dialog modal-sm'></div>").append(modalcontent));
                modal.modal({ keyboard: true }).on('hidden.bs.modal', function (e) {
                    $(this).detach();
                });
                return {
                    on: function (callback) {
                        if (callback && callback instanceof Function) {
                            modal.find('.btn-ok').one("click",function () {
                                modal.detach();
                            	 callback(true);
                            });
                            modal.find('.btn-cancel').click(function () { callback(false) });
                        }
                    }
                };
            },
            
            withoutConfirm: function (message, title, oktext) {
                var modalcontent = $("<div class='modal-content'></div>")
                var modalheader = $("<div class='modal-header'></div>")
                    .append($('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">关闭</span></button>'));

                title = (title == "" || title == NaN) ? "提示信息" : title;
                oktext = (oktext == "" || oktext == NaN) ? "确定" : oktext;

                $('<h4 class="modal-title text-info"><i class="fa fa-question-circle"></i>&nbsp;&nbsp;' + title + '</h4>').appendTo(modalheader);
                modalheader.appendTo(modalcontent);
                $('<div class="modal-body"> <p>' + message + '</p> <input id="tags" type="checkbox" value="1" /><label for="tags"><span style="color:red">不再弹出提示框<span></label></div>').appendTo(modalcontent);

                var modelfooter = $("<div class='modal-footer'></div>")
                    .append($('<button type="button" class="btn btn-default btn-cancel btn-sm" data-dismiss="modal">取消</button>'))
                    .append($('<button type="button" class="btn btn-primary btn-ok btn-sm" data-dismiss="modal">' + oktext + '</button>'));
                modelfooter.appendTo(modalcontent);

                var modal = top.$("<div class='modal fade '></div>").append($("<div class='modal-dialog modal-sm'></div>").append(modalcontent));
                modal.modal({ keyboard: true }).on('hidden.bs.modal', function (e) {
                    $(this).detach();
                });

                return {
                    on: function (callback) {
                        if (callback && callback instanceof Function) {
                            modal.find('.btn-ok').click(function () {  
                            	if(modal.find('#tags').is(":checked")){
                            		$('#myTags').val(modal.find('#tags').val());
                            	}
                            	callback(true) });
                            modal.find('.btn-cancel').click(function () { callback(false) });
                        }
                    }
                };
            }
            
            
        },
      
        /* confirm弹窗
         * @method confirm
         * @type function 
         * @description  在页面内弹出确认信息
         */
        dialog:{
        	/* 
             * @method open
             * @type function 
             * @description  弹出页面
             * @param  {json} opt 页面参数
             * //$.HN.dialog.open({url:"",title:"",style:""});
             */
        	open:function(opt){
        		 /*
        	     *opt.url:弹出页请求的Url
        	     *opt.title:弹出页标题
        	     *opt.width:弹出页宽度
        	     *opt.height:弹出页高度
        	     *opt.top:弹出页上边距
        	     *opt.left:弹出页左边距
        	    */
        		
//        		window.open(opt.url,opt.title,'height='+opt.style.height+',width='+opt.style.width+',top='+opt.style.top+',left='+opt.style.left+',toolbar=0,menubar=0,scrollbars=0, resizable=0,location=0, status=0');
        		//window.open ('../../jsp/price/priceChangeExeDetailGrid.jsp','newwindow','height=300,width=620,top=200,left=500,toolbar=0,menubar=0,scrollbars=0, resizable=0,location=0, status=0'); 
        		top.dialog({
                    id: opt.id,
                    title: opt.title,
                    url: opt.url,
                    data: opt.data,
                    width: opt.width,
                    height: opt.height,
                    padding: "2px",
                    onclose: function () {
                        if (opt.closefunc != "" && typeof (opt.closefunc) == "function") {
                        	opt.closefunc(this.returnValue);
                        }
                        if(opt.autoClose){
                        	dialog({id:opt.id}).remove();
                    	}
                    }
                }).showModal();
        	},
        	/* 
             * @method opendialog
             * @type function 
             * @description  弹出页面
             * @param  {string} opt 页面参数
             * //$.dialog.opendialog('test-dialog','测试','example/list1.html','800px','400px',"");
             */
        	opendialog: function (id,title, url, width, height,closefunc) {
        		// 固定物流信息弹框宽度以便展示, 后期重构时重写每个物流信息的弹框调用
        		width = '800px';
                top.dialog({
                    id: id,
                    title: title,
                    url: url,
                    width: width,
                    height: height,
                    onclose:function () {
                    	if(closefunc!=""&&typeof(closefunc)=="function"){
                    	closefunc(this.returnValue);
                    	}
                    /*var strs = new Array();
                    strs = this.returnValue.split("|$");
                    
                    	if (this.returnValue.length>0) {
                    		//$('#'+id).val('');
        					$('#'+id).val(strs[0]);
        				}
        				if (this.returnValue.length>0) {
        					//$('#'+name).html('');
        					$('#'+name).html(strs[1]);
        				}
        				console.log('onclose');*/
        			},
                    padding: "2px"
                }).showModal();
            }
        },
        //	弹窗口
        window : {
        	open : function(opts) {
            	if (opts) {
            		var id = opts.id || "";
            		var title = opts.title || "";
            		var url = opts.url || "";
            		var callback = opts.callback || null;
            		var $window = $("<div class='ccl-window'></div>");
                	var $header = $("<div class='ccl-header'><span class='ccl-title'>" + title + "</span></div>");
                	var $close = $("<button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>关闭</span></button>");
                	var $iframe = $("<iframe class='ccl-iframe' src='" + url + "'></iframe>");
                	$header.append($close);
                	$window.append($header).append($iframe);
                	var modal = top.$("<div id='" + id + "' class='modal fade'></div>").append($window);
                	modal.data("callback", callback);
                    modal.modal({ keyboard: true }).on('hidden.bs.modal', function (e) {
                        $(this).detach();
                    });
                    $close.click(function() {
                    	if (callback instanceof Function) {
                        	callback();
                        }
                    });
            	}
            },
            close : function(id, args) {
            	top.window.$("div.modal-backdrop.fade.in").remove();
            	var $modal = top.$("#" + id);
            	var callback = $modal.data("callback");
            	$modal.detach();
            	if (callback instanceof Function) {
                	callback(args);
                }
            }
        }
    }
}

(function ($) {

	 $.fn.HNSelect = function (v) {
	        /*
	     *v.parent_selector:父级select
	     *v.url:请求的Url
	     *v.data:请求Url时传的data,父级select未指定时必须传data
	     *v.dataid:传参时参数名称,参数值为父级select选定的值
	     *v.func():执行Ajax请求获取select数据成功后执行的函数
	     *v.defaultselect:默认选中选
	     *v.defaultText:默认加载项
	    */
	        /* 保存当前对象 */
	        var self = this;
	        v.isFirstSelect = v.isFirstSelect||0;
	        
	        var backup = $(self).clone();
	        /* 判断父级select是否为空*/
	        if (v.parent_selector == "" || v.parent_selector == undefined) {
	            return this.each(function () {
	                $.ajax({
	                    url: v.url,//action地址
	                    data: v.data,//传值
	                    type: "post",//执行方式get or post 默认以post方式执行
	                    dataType: "json",
	                    success: function (json, textStatus) {
	                        /* 清空当前select */
	                        $("option", self).remove();
	                        if (v.defaultText != undefined)
	                            $(self).append(v.defaultText);
	                        //alert(json);
	                        $.map(json, function (item) {
	                            //alert(item.Value + item.Text);
	                            $(self).append("<option value='" + item.value + "'>" + item.text + "</option>");
	                        });

	                        if (1 === $("option", this).size() && $(this).val() === "") {
	                            $(self).attr("disabled", "disabled");
	                        } else {
	                            $(self).removeAttr("disabled");
	                        }
	                        if (v.defaultselect != undefined)
	                        	//alert(JSON.stringify(v.defaultselect));
	                            $(self).val(v.defaultselect);
	                        if (v.func != undefined)
	                            v.func();
	                    }
	                });
	            });
	        }
	        else {
	            return this.each(function () {
	                $(v.parent_selector).each(function () {
	                    $(this).bind("change", function () {
                    		if (v.isFirstSelect > 1) {
                        	    v.defaultselect = "";
                    		}
	                        var data = {};
	                        if ($(":selected", v.parent_selector).val() != "") {
	                            var id = $(v.parent_selector).attr("id");
	                            if (v.dataid != undefined)
	                                id = v.dataid;
	                            var value = $(":selected", v.parent_selector).val();
	                            data[id] = value;
	                            $.ajax({
	                                url: v.url,//action地址
	                                data: data,//传值
	                                type: "post",//执行方式get or post 默认以post方式执行
	                                dataType: "json",
	                                success: function (json, textStatus) {
	                                    var selected_key = $(':selected', self).val();
	                                    $("option", self).remove();
	                                    if (v.defaultText != undefined)
	                                        $(self).append(v.defaultText);
	                                    $.map(json, function (item) {
	                                        $(self).append("<option value='" + item.value + "'>" + item.text + "</option>");
	                                    });

	                                    if (1 === $("option", self).size() && $(self).val() === "") {
	                                        $(self).attr("disabled", "disabled");
	                                    } else {
	                                        $(self).removeAttr("disabled");
	                                    }
	                                    $(self).trigger("change");
	                                    var isContain=false;
	                                    $.map(json, function (item) {
	                                    	if(item.value === v.defaultselect){
	                                    		isContain=true;
	                                    		return;
	                                    	}
	                                    });
	                                    
	                                    if (v.defaultselect != undefined)
	                                    	if(!isContain){
	                                    		 v.defaultselect = "";
	                                    	 }else{
	                                    		 $(self).val(v.defaultselect);
	                                    	 }
	                                    if (v.func != undefined)
	                                        v.func();
	                                }
	                            });
	                        }
	                        else {
	                            $("option", self).remove();
	                            if (v.defaultText != undefined)
	                                $(self).append(v.defaultText);
	                        }
	                    });
	                    $(this).trigger("change");
	                });
	            });
	        }
	    };


    /**
	 * 为了解决查看页面依然可以点击的bug,所以复制了一份代码，去除了  $(self).removeAttr("disabled");
     * @param v
     */
    $.fn.thridChange = function (v) {

        /* 保存当前对象 */
        var self = this;
        v.isFirstSelect = v.isFirstSelect||0;

        var backup = $(self).clone();
        /* 判断父级select是否为空*/
        if (v.parent_selector == "" || v.parent_selector == undefined) {
            return this.each(function () {
                $.ajax({
                    url: v.url,//action地址
                    data: v.data,//传值
                    type: "post",//执行方式get or post 默认以post方式执行
                    dataType: "json",
                    success: function (json, textStatus) {
                        /* 清空当前select */
                        $("option", self).remove();
                        if (v.defaultText != undefined)
                            $(self).append(v.defaultText);
                        //alert(json);
                        $.map(json, function (item) {
                            //alert(item.Value + item.Text);
                            $(self).append("<option value='" + item.value + "'>" + item.text + "</option>");
                        });

                        if (v.defaultselect != undefined)
                        //alert(JSON.stringify(v.defaultselect));
                            $(self).val(v.defaultselect);
                        if (v.func != undefined)
                            v.func();
                    }
                });
            });
        }
        else {
            return this.each(function () {
                $(v.parent_selector).each(function () {
                    $(this).bind("change", function () {
                        if (v.isFirstSelect > 1) {
                            v.defaultselect = "";
                        }
                        var data = {};
                        if ($(":selected", v.parent_selector).val() != "") {
                            var id = $(v.parent_selector).attr("id");
                            if (v.dataid != undefined)
                                id = v.dataid;
                            var value = $(":selected", v.parent_selector).val();
                            data[id] = value;
                            $.ajax({
                                url: v.url,//action地址
                                data: data,//传值
                                type: "post",//执行方式get or post 默认以post方式执行
                                dataType: "json",
                                success: function (json, textStatus) {
                                    var selected_key = $(':selected', self).val();
                                    $("option", self).remove();
                                    if (v.defaultText != undefined)
                                        $(self).append(v.defaultText);
                                    $.map(json, function (item) {
                                        $(self).append("<option value='" + item.value + "'>" + item.text + "</option>");
                                    });

                                    $(self).trigger("change");
                                    var isContain=false;
                                    $.map(json, function (item) {
                                        if(item.value === v.defaultselect){
                                            isContain=true;
                                            return;
                                        }
                                    });

                                    if (v.defaultselect != undefined)
                                        if(!isContain){
                                            v.defaultselect = "";
                                        }else{
                                            $(self).val(v.defaultselect);
                                        }
                                    if (v.func != undefined)
                                        v.func();
                                }
                            });
                        }
                        else {
                            $("option", self).remove();
                            if (v.defaultText != undefined)
                                $(self).append(v.defaultText);
                        }
                    });
                    $(this).trigger("change");
                });
            });
        }
    };

	    /*
    $.fn.HNSelect = function (v) {
    	v.p = 0;
    	var select = $.fn.HNSelects(v); 
    };
    */
    $.extend({
    	alert : function(msg, type, callback, delayTime) {
    		top.$.topAlert(msg, type, callback, delayTime);
    	},
    	topAlert : function(msg, type, callback, delayTime) {
    		if(delayTime) {
    		} else {
    			delayTime = 2000;
    		}
    		var $div = top.$("div.msg-div");
    		if ($div == null || $div.length == 0) {
    			$div = $("<div class='msg-div'></div>");
    			top.$("body").append($div);
    		}
    		var $text = $("<div class='msg-div-text'></div>");
    		if (type == "success") {
    			$text.append("<i class='fa fa-check-circle' style='margin-right:8px;'></i>");
    			$text.css("background-color", "#00c0ef");
    		} else if (type == "error") {
    			alert(msg);
    			if (typeof callback == "function") {
					callback();
				}
    			return;
    			//$text.append("<i class='fa fa-times-circle' style='margin-right:8px;'></i>");
    			//$text.css("background-color", "#dd4b39");
    		} else if (type == "warn") {
    			$text.append("<i class='fa fa-exclamation-triangle' style='margin-right:8px;'></i>");
    			$text.css("background-color", "#f39c12");
    		}
    		$text.append(msg || "");
    		$div.append($text);
    		$div.show();
    		$text.animate({"margin-left":"0px"});
    		$text.delay(2000).animate({"margin-left":"250px"}, function() {
				$text.remove();
    			if ($div.children().length == 0) {
    				$div.hide();
    				if (typeof callback == "function") {
    					callback();
    				}
    			}
			});
    	}
    });
    
    $.fn.extend({
    	//	模糊搜索企业
    	fuzzySearchComp : function(callback) {
    		var selfList = this;
    		return this.each(function(i, obj) {
    			var $panel = $('<ul class="fuzzy-search-ul"></ul>');
    			var left = $(this).offset().left;
            	var top = $(this).offset().top + 23;
            	$panel.css("left", left + "px");
            	$panel.css("top", top + "px");
            	$("body").append($panel);
    			
    			var fuzzyTimer = null;
    			$(this).bind("keydown", function() {
    				clearTimeout(fuzzyTimer);
    			});
    			$(this).bind("keyup focus click", function(event) {
    				clearTimeout(fuzzyTimer);
    				(function(self, $panel) {
    					fuzzyTimer = setTimeout(function() {
    						var oldName = self.data("oldName") || "";
    						var compName = $.trim(self.val()).toUpperCase();
    						if (compName == null || compName == "") {
    							$panel.hide();
    							return;
    						}
    						if (oldName == compName && $panel.is(":visible")) {
    							return;
    						}
    						self.data("oldName", compName);
    						if (event.which == 37 || event.which == 38
    								|| event.which == 39 || event.which == 40
    								|| event.which == 13) {
    							return;
    						}
    						$.post(getRootPath() + "/stdCompinfo/searchCompByName.html", {
    							"compName" : compName
    						}, function(result) {
    							if (result.success) {
    								var list = result.rows || [];
    								$panel.children().remove();
    								if (list.length > 0) {
    									for (var i=0; i<list.length; i++) {
    										var comp = list[i] || {};
    										var py = comp.py || "";
    										var name = comp.name || "";
    										var pi = comp.py.indexOf(compName);
    										var ni = comp.name.indexOf(compName);
    										if (pi >= 0) {
    											var before = py.substring(0, pi);
    											var after = py.substr(pi + compName.length);
    											py = before + "<span class='keyword'>" + compName + "</span>" + after;
    										} else if (ni >= 0) {
    											var before = name.substring(0, ni);
    											var after = name.substr(ni + compName.length);
    											name = before + "<span class='keyword'>" + compName + "</span>" + after;
    										}
    										var left = '<span class="left">' + py + '</span>';
    										var right = '<span class="right">' + name + '</span>';
    										var $li = $('<li title="' + comp.name + '">' + left + right + '</li>');
    										$li.data("comp", comp);
    										$panel.append($li);
    									}
    									$panel.children("li:first").addClass("fuzzy-search-focus");
    									$panel.children("li:last").css("border-bottom", "0px none");
    									$panel.children("li").hover(function() {
    										$panel.children("li").removeClass("fuzzy-search-focus");
    										$(this).addClass("fuzzy-search-focus");
    									});
    									$panel.children("li").click(function() {
    										var comp = $(this).data("comp");
    										var compCode = comp.code;
    										var compName = comp.name;
    										self.val(compName);
    										$panel.hide();
    										if (callback instanceof Function) {
    											callback(compCode);
    										}
    									});
    								} else {
    									$panel.append('<li><span class="left red" style="border-bottom:0px none;font-weight:bold;">没有符合条件的记录！</span></li>');
    								}
    								if ($panel.is(":not(:visible)")) {
										$panel.show();
									}
    							}
    						}, "json");
        				}, 500);
    				})($(this), $panel);
    				event.stopPropagation();
    			});
    			$(this).keyup(function(event) {
    				if (event.which == 37 || event.which == 38
							|| event.which == 39 || event.which == 40
							|| event.which == 13) {
						var $lis = $panel.children("li");
						if ($panel.is(":visible") && $lis.length > 0) {
							var $curLi = $lis.filter(".fuzzy-search-focus");
							var $nextLi = null;
							switch (event.which) {
							case 38:
								$nextLi = $curLi.prev();
								if ($nextLi.length <= 0) {
									$nextLi = $lis.filter(":last");
								}
								break;
							case 40:
								$nextLi = $curLi.next();
								if ($nextLi.length <= 0) {
									$nextLi = $lis.filter(":first");
								}
								break;
							case 13:
								var comp = $curLi.data("comp");
								var compCode = comp.code;
								var compName = comp.name;
								$(this).val(compName);
								$panel.hide();
								if (callback instanceof Function) {
									callback(compCode);
								}
								return;
							}
							if ($nextLi.length > 0) {
								$curLi.removeClass("fuzzy-search-focus");
								$nextLi.addClass("fuzzy-search-focus");
							}
						}
					}
    			});
    			$(this).blur(function() {
    				var $curLi = $panel.children("li.fuzzy-search-focus");
    				var comp = $curLi.data("comp") || {};
					var compCode = comp.code || "";
					var compName = comp.name || "";
					$(this).val(compName);
					$panel.hide();
					if (callback instanceof Function) {
						callback(compCode);
					}
    			});
    		});
    	}
    });
    
    $(window).bind("click", function(){
		$("ul.fuzzy-search-ul").hide();
	});
    
})(jQuery);


//json util
var json = {
    //------json深拷贝------
    "clone" : function(param) {
        var jsonObject = null;
        if (param instanceof Array) {
            jsonObject = [];
            for (var i=0; i<param.length; i++) {
                jsonObject[i] = json.clone(param[i]);
            }
        } else if (typeof param == "object") {
            jsonObject = {};
            for (var k in param) {
                jsonObject[k] = json.clone(param[k]);
            }
        } else {
            jsonObject = param;
        }
        return jsonObject;
    },
    //------json转字符串------
    "jsonToString" : function(param) {
        var str = '', empty = true;
        if (param instanceof Array) {//数组
            var len = param.length;
            str = '[';
            for (var i=0; i<len; i++) {
                str += json.jsonToString(param[i]);
                i < len - 1 ? str += ',' : null;
            }
            str += ']';
        } else if (typeof param == "object") {//对象
            str = '{';
            for (var k in param) {
                str += '"' + k + '":' + json.jsonToString(param[k]) + ',';
                empty = false;
            }
            !empty ? str = str.substring(0, str.length - 1) : null;
            str += '}';
        } else if (typeof param == "number") {   //  数字
            str =  param;
        } else {//字符串或其它
            str = '"' + param + '"';
        }
        return str;
    }
};

//日期格式化
Date.prototype.format = function(format) {
    var o = { 
        "M+" : this.getMonth()+1, //month 
        "d+" : this.getDate(), //day 
        "H+" : this.getHours(), //hour 
        "m+" : this.getMinutes(), //minute 
        "s+" : this.getSeconds(), //second 
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
        "S"  : this.getMilliseconds() //millisecond 
    };

    if (/(y+)/.test(format)) { 
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }

    for (var k in o) { 
        if(new RegExp("("+ k +")").test(format)) { 
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
        }
    }
    return format;
}

//form表单转成json对象
function formatForm(formid){
	var fields = $("#"+formid).serialize();
	var dataResult = decodeURIComponent(fields,true);//字符串转编码
	var tmp = dataResult.replace(/&/g, "\",");
	tmp = tmp.replace(/=/g, ":\"");
	var jsonValue ="{" + tmp + "\"}";
	var obj = eval("(" + jsonValue + ")");
	return obj ;
}

function CurentTime(now)
{       	         
    var year = now.getFullYear();   
    var month = now.getMonth() + 1; 
    var day = now.getDate();     
    var hh = now.getHours();       
    var mm = now.getMinutes(); 
    var ss=now.getSeconds(); 
    var clock = year + "-"; 
    if(month < 10) clock += "0";         
    clock += month + "-";  
    if(day < 10) clock += "0";   
    clock += day + " "; 		
    return(clock);   
}

function formatAmount(cellvalue, options, row) {
	var f_x = Math.round(cellvalue * 100) / 100;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	
	if (pos_decimal < 0) {
		pos_decimal = s_x.length;
		s_x += '.';
	}
	
	while (s_x.length <= pos_decimal + 2) {
		s_x += '0';
	}
	return s_x;
}

function formatSelect(select,data) {
	var self = $(select);
	self.append("<option value=''>请选择</option>");
	data = uniqueArray(data);
	console.log("格式化后："+data.length);
	for(var i in data){
		var name = typeof(data[i].name)=="undefined"?data[i].projName:data[i].name;
		self.append("<option value='" + data[i].projId + "'>" +name+ "</option>");
	}
	self.trigger("change");
}

function uniqueArray(data){
		for ( var i = 1; i < data.length; i++ ) { 
	        if ( data[i].projId === data[ i - 1 ].projId ) {  
	        	data.splice( i--, 1 );  
	        }
	    }
	    return data;  
}

//js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPath() {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}

//	根据企业code展示企业信息
function showCompInfo(compCode, compName) {
	$.HN.dialog.opendialog(
		compCode,
		"企业详情",
		getRootPath() + '/stdCompinfo/toCompInfoByCode.html?compCode=' + compCode,
		'800px',
		'510px'
	);
}

//根据企业code展示企业信息
function showDrugInfo(drugCode, drugName) {
	$.HN.dialog.opendialog(
		drugCode,
		"药品详情",
		getRootPath() + '/stdProdDrugInfo/toDrugInfoByCode.html?drugCode=' + drugCode,
		'800px',
		'550px'
	);
}

//根据医疗机构code展示医疗机构信息
function showHospInfo(hospCode) {
	$.HN.dialog.opendialog(
		hospCode,
		"医疗机构详情",
		getRootPath() + '/stdHospInfo/toHospInfoByCode.html?hospCode=' + hospCode,
		'800px',
		'510px'
	);
}

//	药品弹窗信息链接
function drugInfoLink(drugCode, drugName, type) {
	var str = "";
	if (type == 1 && drugCode && drugName) {	// 药品名称上加链接[type == 1]
		str = "<a href=\"javascript:showDrugInfo('" + drugCode + "');\">" + drugName + "</a>";
	} else if (drugCode) {	// 默认药品编码上加链接[type == 0]
		str = "<a href=\"javascript:showDrugInfo('" + drugCode + "');\">" + drugCode + "</a>";
	}
	return str
}

//	企业弹窗信息链接
function compInfoLink(compCode, compName, type) {
	var str = "";
	if (type == 1 && compCode && compName) {	//	企业名称上加链接[type == 1]
		str = "<a href=\"javascript:showCompInfo('" + compCode + "');\">" + compName + "</a>";
	} else if (compCode) {	//	默认企业编码上加链接[type == 0]
		str = "<a href=\"javascript:showCompInfo('" + compCode + "');\">" + compCode + "</a>";
	}
	return str;
}

//医院弹窗信息链接
function hospInfoLink(hospCode, hospName, type) {
	var str = "";
	if (type == 1 && hospCode && hospName) {	//	医院名称上加链接[type == 1]
		str = "<a href=\"javascript:showHospInfo('" + hospCode + "');\">" + hospName + "</a>";
	} else if (hospCode) {	//	默认医院编码上加链接[type == 0]
		str = "<a href=\"javascript:showHospInfo('" + hospCode + "');\">" + hospCode + "</a>";
	}
	return str;
}




function create(){//jqGrid高度自适应
	var heightAll = $(window).height();//获取整个页面window的高度
	var heightSearch = $('.box').height();//获取查询条件的高度
	var heightButt = $('.bottongroup').height();//获取jqgrid下方操作按钮的高度
	var heightHeard = $('.jqgrid', '.content').offset();//获取页面题头的高度
	var heightTable = 255;//默认jqGrid的高度
	if (heightHeard != undefined){//判断题头
		heightTable = heightAll - heightHeard.top - heightSearch - 10 -20;
		if(heightButt != null){
			heightTable = heightAll - heightHeard.top - heightSearch - 10 -20 - heightButt;
		}
	}
	if (heightTable > 600){//jqGrid的高度不能大于600，大于的固定600
		heightTable = 600;
	}
	return heightTable;
}
function changeSelectChecked(gridlist,num,value,event){
	 var ids = $(gridlist).jqGrid('getDataIDs');
 	  if(!$('#jqg_gridlist_'+num).is(':checked')){
 		  if(event.which==13 || (event.which==8)){
    		  return;
    	  }
 		  $(gridlist).setSelection(ids[--num],true);
 	  } if(value.length==0 && $('#jqg_gridlist_'+num).is(':checked')){
		  $(gridlist).setSelection(ids[--num],true);
 	  }
  }

$.extend({
    StandardPost:function(url,args){
    	var form = document.createElement("form");
    	form.method = "post";
    	form.action = url;
    	form.style.display = "none";
        var input;
        $.each(args,function(key,value){
            input = document.createElement("textarea");
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });
    	document.body.appendChild(form);
    	form.submit();
    	return form;
    /*    var form = $("<form method='post'></form>"),
            input;
        form.attr({"action":url});
        $.each(args,function(key,value){
            input = $("<input type='hidden'>");
            input.attr({"name":key});
            input.val(value);
            form.append(input);
        });
        form[0].submit();*/
    }
});