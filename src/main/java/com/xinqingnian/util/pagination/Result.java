package com.xinqingnian.util.pagination;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @category 校验信息
 * @author 韩守松
 * @date 2015年7月13日
 */
public class Result {
	private boolean isSuccess = true;// 存储校验结果
	private Map<String,List<String>> failCauseMap = new HashMap<String, List<String>>();// 存储校验结果

	public boolean isSuccess() {
		return isSuccess;
	}

	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

	public Map<String, List<String>> getFailCauseMap() {
		return failCauseMap;
	}

	public void setFailCauseMap(Map<String, List<String>> failCauseMap) {
		this.failCauseMap = failCauseMap;
	}

	
}
