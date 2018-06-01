<%@ include file="/WEB-INF/component/commonTagLib.jsp" %>

<c:if test="${menuList != null}">
	<c:forEach items="${menuList}" var="menu">
		<li class="treeview">
			<a href="${ctx}${menu.resourceUrl}" target="mainframe">
	            <i class="fa ${menu.icon}"></i> <span style="font-size:14px">${menu.menuName}</span>
	            <c:if test="${menu.children != null and menu.children.size() > 0}">
	            	<i class="fa fa-angle-left pull-right"></i>
	            </c:if>
	        </a>
	        <c:if test="${menu.children != null and menu.children.size() > 0}">
	        	<c:set var="menuList" value="${menu.children}" scope="request" />
	        	<ul class="treeview-menu">
	            	<c:import url="menu.jsp" />
	           	</ul>
			</c:if>
		</li>
	</c:forEach>
</c:if>