package com.xinqingnian.controller;

/**
 * 用户登陆和管理
 * @author:zhangmaodong
 * @date:2018-2-12
 */

import com.xinqingnian.model.SysUser;
import com.xinqingnian.service.LoginManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

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
    public ModelAndView toHomePage(SysUser loginUser){
        ModelAndView model = new ModelAndView();
        SysUser user = loginManager.getUser(loginUser);

        if (user != null){
            model.setViewName("views/base/main");
        }else {
            model.addObject("prompt",1);
            model.setViewName("views/login");
        }
        return  model;
    }
}
