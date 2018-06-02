package com.xinqingnian.controller;

/**
 * 用户登陆和管理
 * @author:zhangmaodong
 * @date:2018-2-12
 */

import com.xinqingnian.Constants;
import com.xinqingnian.controller.std.GenericController;
import com.xinqingnian.model.SysUser;
import com.xinqingnian.service.LoginManager;
import com.xinqingnian.util.pagination.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController extends GenericController {

    @Autowired
    private LoginManager loginManager;

    /**
     * 主页跳转
     * @author:zhangmaodong
     * @date:2018-2-13
     */
    @RequestMapping({"/","/login"})
    @ResponseBody
    public ModelAndView login(){
        return new ModelAndView("/login");
    }

    /**
     * 用户登陆
     * @author:zhangmaodong
     * @date:2018-2-12
     */
    @RequestMapping("/tologin")
    @ResponseBody
    public Pagination getLoginData(HttpServletRequest request, SysUser loginUser){
        Pagination pagination = new Pagination(this.getRequest());
        HttpSession session = request.getSession();
       if (session.getAttribute(Constants.USERINFO) != null) {
           pagination.setMsg("请退出当前用户");
           return pagination;
       }
        SysUser user = loginManager.getUser(loginUser);
        if (user != null){
            session.setAttribute(Constants.USERINFO,user);
            pagination.setSuccess(true);
        }else {
            pagination.setMsg("用户名或密码错误");
            pagination.setSuccess(false);
        }
        return  pagination;
    }

    @RequestMapping("/toHomePage")
    public String toHomePage(){
        SysUser sysUser = this.getSysUser();
        if (sysUser != null){
            return "views/base/main";
        } else {
            return "/login";
        }

    }
}
