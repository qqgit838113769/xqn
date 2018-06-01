/**
 * Created by Administrator on 2017/12/4.
 */
/*页面返回时，返回到原有的页面*/
function parameterRecovery(queryData){
    if (! $.isEmptyObject(queryData)) {
        $.each(queryData, function(key, value) {
            queryData[key] = value;
        });
    }
}
