
function getChangerPost(url){
    var formObject = document.createElement('form');
    document.body.appendChild(formObject);
    formObject.setAttribute('method', 'post');
    var uri = '';
    var i = url.indexOf('?');

    if (i == -1) {
        formObject.action = url;
    } else {
        formObject.action = url.substring(0, i);
    }

    if (i >= 0 && url.length >= i + 1) {
        uri = url.substring(i + 1, url.length);
    }

    var sa = uri.split('&');

    for (var i = 0; i < sa.length; i++) {
        var isa = sa[i].split('=');
        var inputObject = document.createElement('input');
        inputObject.setAttribute('type', 'hidden');
        inputObject.setAttribute('name', isa[0]);
        inputObject.setAttribute('value', isa[1]);
        formObject.appendChild(inputObject);
    }

    formObject.submit();

    return false;

    /*var queryString="";//检索条件
    if(url.indexOf('?')!=-1){ //判断是否携带参数
        actionurl=url.substring(0,url.indexOf('?')); //基础地址
        queryString=url.substring(url.indexOf('?')+1,url.length);//携带参数
    }else{
        actionurl=url;
    }
    document.write("<form action='"+actionurl+"' method='post' name='form11'  style='display:none'>");

    if(!!queryString){

        var arr =queryString.split("&");

        if(arr.length>0){

            for(var i=0;i<arr.length;i++){

                var tem=arr[i].split("=");

                if(tem.length>0){

                    var name=tem[0];

                    var value=tem[1];

                    document.write("<input type='hidden' name='"+name+"' value='"+value+"' />");

                }

            }

        }

    }

    document.write("</form>");

    document.form11.submit();*/

}