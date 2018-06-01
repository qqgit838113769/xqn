package com.xinqingnian.service.impl;

import com.xinqingnian.dao.LoginDao;
import com.xinqingnian.model.SysUser;
import com.xinqingnian.service.LoginManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginManagerImpl implements LoginManager {

    @Autowired
    private LoginDao loginDao;

    @Override
    public SysUser getUser(SysUser loginUser) {
        SysUser user = loginDao.getUser(loginUser);
        return user;
    }
}
