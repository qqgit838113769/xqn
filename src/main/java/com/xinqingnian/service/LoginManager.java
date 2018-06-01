package com.xinqingnian.service;

import com.xinqingnian.model.SysUser;

public interface LoginManager {
    SysUser getUser(SysUser loginUser);
}
