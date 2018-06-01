package com.xinqingnian.dao;

import com.xinqingnian.model.SysUser;

/**
 * 用户登陆及用户管理
 * @author:zhangmaodong
 * @date:2018-2-12
 */
public interface LoginDao {


    SysUser getUser(SysUser loginUser);
}
