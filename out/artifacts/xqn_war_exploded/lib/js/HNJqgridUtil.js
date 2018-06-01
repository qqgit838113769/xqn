/**
 * 序号列宽度自适应
 * @param gridId jqgridID
 */
function autoRNWidth(gridId){
    var page = $("#"+gridId).jqGrid('getGridParam','page');
    var rows = $('#'+gridId).getGridParam("rowNum");
    var maxnum = (rows*page).toString();
    var len = (maxnum.length)*10;
    $('.jqgfirstrow').find('td').eq(0).css('width',len+'px');
    $('#'+gridId+'_rn').css('width',len+'px');
	/*jqgrid自适应*/
    $(".null-line").css("height",$(".modal-footer").height() + 14);
    var gPrevLen = $(".ui-jqgrid").prevAll().length;
    var jHeight = 0;
    if(gPrevLen > 1){
        for (var i = 0; i < gPrevLen; i++) {
            var j = $(".ui-jqgrid").prevAll().eq(i).height() + 13;
            jHeight += j;
        }
    }else{
        jHeight=$(".ui-jqgrid").prevAll().height()+13;
    };
    var tableHeight = $(window).height() - $(".content-header").height() - jHeight - $(".ui-jqgrid-titlebar").height() - $(".ui-jqgrid-hdiv").height() - $(".null-line").height();
    if($(".ui-jqgrid").parent(".content").length > 0){
        if($(".ui-jqgrid + div.bottongroup").length > 0){
            $(".ui-jqgrid-bdiv").css("height",tableHeight - $(".ui-jqgrid").nextAll().height()  - 66.6);
        }
        else{
            $(".ui-jqgrid-bdiv").css("height",tableHeight - 52.6);
            if($(".ui-jqgrid").parent("section").prev("section.content").length > 0){
                $(".ui-jqgrid-bdiv").css("height",tableHeight - ( $(".ui-jqgrid").parent("section").prev("section.content").height() + 10 ) - ($(".content-header").height() * 2 ) - 38.6);
            }
        };
    }
    else if($(".ui-jqgrid").parent(".box-body").length > 0){
        $(".ui-jqgrid-bdiv").css("height",tableHeight - $(".ui-jqgrid-bdiv").parents(".box").prev().height() - ($(".content-header").height() * 2 ) - 86.6);
    }
    else if($(".ui-jqgrid").parent("section").length > 0){
        $(".ui-jqgrid-bdiv").css("height",tableHeight - ( $(".ui-jqgrid").parent("section").prev("section").height() + 10) - ($(".content-header").height() * 2 ) - 88.6);
        $(".jqgrid").jqGrid("setGridWidth", $(".box-body:first").width() - 2);
    };
}
/**
 * 当数据只有一条时默认选中
 * @param gridId
 */
function selectByOneData(gridId){
    var num = $("#"+gridId).jqGrid('getGridParam', 'records');
    if (num == 1){
        var ids = jQuery("#"+gridId).jqGrid('getDataIDs');
        $("#jqg_"+gridId+"_"+ids[0]).attr('checked',true);
        $("#"+gridId).jqGrid('setSelection',ids[0]);
    }
}


function getGridColumValue(gridId,columName){
    var rowIds = $("#"+gridId).jqGrid('getGridParam', 'selarrrow');
    if (rowIds.length < 1){
        return "";
    }
    var str = "";
    for (var i = 0;i < rowIds.length; i++){
        var rowdata = $("#"+gridId).jqGrid('getRowData', rowIds[i]);
        str += rowdata[columName]+",";
    }
    if (str != ""){
        str = str.substring(0,str.length-1)
    }
    return str;
}

function batchSwitchStatus(gridId, nameColum, statusColum, status, info){
    var rowIds = $("#"+gridId).jqGrid('getGridParam', 'selarrrow');
    if (rowIds.length < 1){
        top.$.HN.message.alert("请选择要"+status+"的" + info, "","warn");
        return;
    }
    var str = "";
    var names = "";
    var infos = new Array();
    var j=0;
    for (var i = 0; i < rowIds.length; i++) {

        var rowdata = $("#"+gridId).jqGrid('getRowData', rowIds[i]);
        var temp = rowdata[statusColum].replace(/<.*?>/ig,"");
        if (status != temp){
            if(j<3){
                names += rowdata[nameColum]+"<br/>";
                if(j==2){
                    names += "...";
                }
            }
            str += rowIds[i]+",";
            j++;
        }
    }
    if (names != ""){
        names = names.substring(0,names.length-1);
        str = str.substring(0,str.length-1)
    } else {
        top.$.HN.message.alert("您选择的" + info + "已经是" + status + "状态","", "warn");
        return;
    }
    infos[0] = str;
    infos[1] = names;
    return infos;
}


$(function(){
    $("input[type=text]").attr('onkeydown','if(event.keyCode==13)return false;');
    $(document).keydown(function() {
        if (event.keyCode == "13") {//keyCode=13是回车键

            $("#search").click();
        }
    })
    $.extend($.jgrid.defaults,{
        mtype:"post",
        datatype:"json",
        autowidth: true,
        height: 270,
        rowNum: 20,
        rowList: [10, 20, 50, 100],
        rownumbers: true,
        pager: "#gridpage",
        viewrecords: true,
        gridComplete:function(){
            var gridId = $(this).jqGrid("getGridParam","id");
            autoRNWidth(gridId);
            selectByOneData(gridId);

            $(".ui-jqgrid-bdiv table,.ui-jqgrid-htable").css("width",$(".ui-jqgrid-bdiv table").width()-1);
        },
        onPaging:function() {
            var gridId = $(this).jqGrid("getGridParam","id");
            var records = $(this).jqGrid("getGridParam","records");
            var rowNum = $(this).jqGrid("getGridParam","rowNum");
            var page = $("#gridpage td[dir=ltr] input[class=ui-pg-input]").val();
            var pn = records % rowNum == 0 ? records/rowNum : parseInt(records/rowNum) + 1;
            if(page > pn) {// 当跳页值大于总页码查询最后一页
                $("#" + gridId).setGridParam({page:pn}).trigger("reloadGrid");
            }
        }
    });
});

//jqgrid 列合并
function Merger(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    //当前显示多少条
    var length = mya.length;
    for (var i = 0; i < length; i++) {
        //从上到下获取一条信息
        var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);
        //定义合并行数
        var rowSpanTaxCount = 1;
        for (j = i + 1; j <= length; j++) {
            //和上边的信息对比 如果值一样就合并行数+1 然后设置rowspan 让当前单元格隐藏
            var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);
            if (before[CellName] == end[CellName]) {
                rowSpanTaxCount++;
                $("#" + gridName + "").setCell(mya[j], CellName, '', { display: 'none' });
            } else {
                rowSpanTaxCount = 1;
                break;
            }
            $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
        }
    }
}