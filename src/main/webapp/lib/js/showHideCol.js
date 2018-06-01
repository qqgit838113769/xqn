/**
 * 显示/隐藏列
 */
function showHideCol(gridlistId,advanceSearchId) {
	$("#"+advanceSearchId)[0].style.display = "none";
	var cols = $("#"+gridlistId).jqGrid("getGridParam", "colModel");
	var colsNames = $("#"+gridlistId).jqGrid("getGridParam", "colNames");
	if (cols.length >= 1) {
		var advanceSearchHtml = "隐藏列：&nbsp;";
		var hideClick = "";
		for (var i = 1; i <= cols.length; i++) {
			if (cols[i] && !cols[i].hidden && cols[i].name != "cb") {
				hideClick = "javascript:hideColClick(this, '"+gridlistId+"', '"+cols[i].name+"')";
				advanceSearchHtml += '<input type="checkbox" class="hideCol" value="'+cols[i].name+'" onclick="'+hideClick+'">&nbsp;'+colsNames[i]+'&nbsp;&nbsp;';
			}
		}
		$("#"+advanceSearchId).html(advanceSearchHtml);
	}
}

function hideColClick(obj, gridlistId, cols) {
	if (obj.checked) {
		$("#"+gridlistId).jqGrid('hideCol',"['"+cols+"']");
	} else {
		$("#"+gridlistId).jqGrid('showCol',"['"+cols+"']");
	}
	$(window).trigger("resize");
}

/**
 * 简单搜索/高级搜索
 */
var simpleSearch = "隐藏筛选";
var advanceSearch = "结果列筛选";

function initAdvanceSearch(buttonId, hiddenId) {
	$("#"+buttonId).text(advanceSearch);
	$("#"+hiddenId).val("1");
}

function changeSearch(obj, hiddenId, advanceSearchId) {
	var searchType = $("#"+hiddenId).val();
	if (parseInt(searchType) == 1) {
		$(obj).text(simpleSearch);
		$("#"+advanceSearchId)[0].style.display = "block";
		$("#"+hiddenId).val("2");
	} else if (parseInt(searchType) == 2) {
		$(obj).text(advanceSearch);
		$("#"+advanceSearchId)[0].style.display = "none";
		$("#"+hiddenId).val("1");
	}
}