
/**
 * 复写jquery的ajax方法,使得在调用 ajax 之前调用 loading 层，防止重复提交。
 * ajax 回调成功或失败后都取消 loading 层。
 * 注意，此 loading 层依赖 layer.js (和 layer.css 以及一个 loading.gif)详情见 layer 官网
 * @author Chenglong
 * @date 2017年3月2日, PM 08:49:06
 */
$(function () {
    (function ($) {
        //首先备份下jquery的ajax方法
        var _ajax = $.ajax;

        // 调用 ajax 前后 loading 层遮罩，防止数据重复提交
        $.loading_ajax = function (opt) {
            var fn = {
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                },
                success: function (data, textStatus) {
                }
            }
            if (opt.error) {
                fn.error = opt.error;
            }
            if (opt.success) {
                fn.success = opt.success;
            }

            //扩展增强处理
            var _opt = $.extend(opt, {
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //错误方法增强处理
                    fn.error(XMLHttpRequest, textStatus, errorThrown);
                },
                success: function (data, textStatus) {
                    //成功回调方法增强处理
                    fn.success(data, textStatus);
                },
                beforeSend: function (XHR) {
                    //提交前回调方法 loading层
                    layer.msg('加载中...', {
						icon: 16
						,shade: 0.01
							});
                },
                complete: function (XHR, TS) {
                    //请求完成后回调函数 (请求成功或失败之后均调用)。
                    layer.closeAll(); 
                }
            });
            return _ajax(_opt);
        };
    })(jQuery);
});

