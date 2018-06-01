 function moreNoMore(){
	 $("body").prepend("<div class='box box-primary' id='more' style='display:none;width:110px;height:35px;background-color:#222c32;position:absolute;z-index:9999;left:850px;top:100px;font-size:12px;border-top-color:#222c32;'> <div class='box-body home-message' id='moreOp' ></div></div>");
    	var listAll = [];
    	var listAll2 = [];
    	var moreNum = 0;//第几行更多，0是第一行
        $("#gridlist").setGridParam({gridComplete:function(){
        	//rowNum自适应宽度
       	 var page = $("#gridlist").jqGrid('getGridParam','page');
       		var rows = $('#gridlist').getGridParam("rowNum");
       		var maxnum = (rows*page).toString();
       		var len = (maxnum.length)*10;
       		$('.jqgfirstrow').find('td').eq(0).css('width',len+'px');
        	$('#gridlist_rn').css('width',len+'px'); 
        	
        	//
        	var rowIds = $("#gridlist").getDataIDs();
        	for (var i=0; i<rowIds.length; i++) {
				rowId = rowIds[i];
				var tdopes = $("#"+rowId).children("td[aria-describedby^='gridlist'][aria-describedby$='_operate']");//操作字段单元格元素
				var opes =tdopes.children();
				
				var opelist = [];
				var list = [];
				if(opes.length>3){
					for(var j=0;j<opes.length;j++){
						var ope = $(opes[j]);
						ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
						opelist.push($("#"+rowId+"wrap"+j).html());
						
					}
					
					opes.remove();
					tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
					
					if(Math.max($(opes[0]).html().length,$(opes[1]).html().length)>2){
						if($(opes[0]).html().length>$(opes[1]).html().length){
							list.push(opelist[0]);
							$("#moreOperate"+rowId).append($(opes[1]));
							$(opes[1]).addClass("setStyle");
							setStyle();
						}else{
							list.push(opelist[1]);
							$("#moreOperate"+rowId).append($(opes[0]));
							$(opes[0]).addClass("setStyle");
							setStyle();
						}
						
						$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px'><a>更多...</a></div></div>");
						
        				for(var j=2;j<opes.length;j++){
    						list.push(opelist[j]);
    					} 
    					listAll.push(list);
    					moreNum++;
					}else{
						$("#moreOperate"+rowId).append($(opes[0]));
						$("#moreOperate"+rowId).append($(opes[1]));
						$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
						$(opes[0]).addClass("setStyle");
						setStyle();
						$(opes[1]).addClass("setStyle");
						setStyle();
        				for(var j=2;j<opes.length;j++){
        					list.push(opelist[j]);
    					} 
    					listAll.push(list);
    					moreNum++;
					}
					var moreOperateWidth = 0;
					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
					}
					if(moreOperateWidth!=0){
						$("#moreOperate"+rowId).width(moreOperateWidth);
					}
					
				}else if(opes.length==3){
					
					
					if($(opes[0]).html().length>2&&$(opes[1]).html().length>2&&$(opes[2]).html().length>2){
						for(var j=0;j<opes.length;j++){
							var ope = $(opes[j]);
							ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
							opelist.push($("#"+rowId+"wrap"+j).html());
							
						}
						opes.remove();
						tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
						$("#moreOperate"+rowId).append($(opes[0]));
						$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px'><a>更多...</a></div></div>");
						$(opes[0]).addClass("setStyle");
						setStyle();
        				for(var j=1;j<opes.length;j++){
        					list.push(opelist[j]);
    					} 
    					listAll.push(list);
    					moreNum++;
    					var moreOperateWidth = 0;
    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
    					}
    					if(moreOperateWidth!=0){
    						$("#moreOperate"+rowId).width(moreOperateWidth);
    					}
					}else{
						if($(opes[0]).html().length>2){
							if($(opes[1]).html().length>2){
								if($(opes[2]).html().length<2){
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[2]));
									$(opes[2]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[0]);
									list.push(opelist[1]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}
							}else{
								if($(opes[2]).html().length>2){
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[1]));
									$(opes[1]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[0]);
									list.push(opelist[2]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}else{
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[1]));
									$("#moreOperate"+rowId).append($(opes[2]));
									$(opes[1]).addClass("setStyle");
									setStyle();
									$(opes[2]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[0]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}
							}
						}else{
							
							if($(opes[1]).html().length>2){
								if($(opes[2]).html().length>2){
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[0]));
									$(opes[0]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[1]);
									list.push(opelist[2]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}else{
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[0]));
									$(opes[0]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append($(opes[2]));
									$(opes[2]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[1]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}
							}else{
								if($(opes[2]).html().length>2){
									for(var j=0;j<opes.length;j++){
										var ope = $(opes[j]);
										ope.wrap("<div id='"+rowId+"wrap"+j+"'></div>");
										opelist.push($("#"+rowId+"wrap"+j).html());
										
									}
									opes.remove();
									tdopes.append("<div id='moreOperate"+rowId+"' style='margin:0 auto;width:"+tdopes.width()+"px;height:24px;'>");
									$("#moreOperate"+rowId).append($(opes[0]));
									$(opes[0]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append($(opes[1]));
									$(opes[1]).addClass("setStyle");
									setStyle();
									$("#moreOperate"+rowId).append("<div id='"+rowId+"d' onmouseover=\"over('"+rowId+"','"+moreNum+"');\"  style='height:24px;width:50px;margin:0 ;padding:0 ;float:left;line-height:24px;'><a>更多...</a></div></div>");
									list.push(opelist[2]);
			    					listAll.push(list);
			    					moreNum++;
			    					var moreOperateWidth = 0;
			    					for(var k=0;k<$("#moreOperate"+rowId).children().length;k++){
			    						moreOperateWidth += $($("#moreOperate"+rowId).children()[k]).width();
			    					}
			    					if(moreOperateWidth!=0){
			    						$("#moreOperate"+rowId).width(moreOperateWidth);
			    					}
								}
							}
						}
						
					}
					
				}
				
			}
        	listAll2 = listAll;
        	listAll = [];
        	moreNum = 0;
        }});
        
        setStyle = function(){
        	$(".setStyle").css("display","block");
        	$(".setStyle").height(24);
        	$(".setStyle").width(($(".setStyle").html().length)*12+16);
        	$(".setStyle").css("margin","0");
        	$(".setStyle").css("padding","0");
        	$(".setStyle").css("float","left");
        	$(".setStyle").css("line-height","24px");
        }
        over = function(id,rowNum){//鼠标移入
           	$("#moreOp").children().remove();
           	var coord=$("#"+id+"d").offset();
           	$("#more").css("top",coord.top-1);
           	$("#more").css("left",coord.left-$("#more").width());
           	$("#more").show(); 
       		for(var i=0;i<listAll2[rowNum].length;i++){
       			$("#moreOp").append(listAll2[rowNum][i]);
           	}
       		$("#moreOp").children().css("color","#fff");
       		$("#moreOp").children().css("margin-top","6px");
       		$("#moreOp").children().css("display","block");
       		$("#moreOp").children().height(19);
       		$("#more").css("height",($("#moreOp").children().length)*25+8);
       		
           }
        
        var mouseX=0;
	    var mouseY=0;
	    $(document).mousemove(function(e){
			  mouseX=e.pageX;
			  mouseY=e.pageY;
			  var coord=$("#more").offset();
	   		  if((mouseX<coord.left||mouseX>(coord.left+$("#more").width())||mouseY<coord.top||
	   				  mouseY>(coord.top+$("#more").height()))&&(mouseX<(coord.left+$("#more").width())||
	   						  mouseX>(coord.left+$("#more").width()+50)||mouseY<(coord.top+1)||mouseY>(coord.top+24+1))){
	   		  	  $("#more").hide();
	   		  } 
		});
    }