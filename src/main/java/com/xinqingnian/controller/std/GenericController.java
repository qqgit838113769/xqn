package com.xinqingnian.controller.std;

import com.xinqingnian.Constants;
import com.xinqingnian.model.SysUser;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 通用的 控制器，方便获取一些对象
 * @author ZXL
 *
 */
public class GenericController {
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private HttpSession session;
	
	public HttpServletRequest getRequest() {
		return request;
	}

	public HttpSession getSession() {
		return session;
	}


	public SysUser getSysUser() {
		return (SysUser) this.getSession().getAttribute(Constants.USERINFO);
	}
	
	public void modelToForm(Object model, Object form){
		BeanUtils.copyProperties(model, form);
	}
	
	public void formToModel(Object form, Object model){
		BeanUtils.copyProperties(form, model);
	}
}
