function OrderDetailInfo() {
    var orderInfo = JSON.parse($('#hidOrderInfoJson').val(), function (key, value) { return value; });
    if (orderInfo != undefined) {
        $('#SOrderDetailID').text(orderInfo.OrderDetailID);
        $('#SOrderName').text(orderInfo.OrderName);
        $('#SPackageCode').text(orderInfo.PackageCode);
        $('#SAmount').text(orderInfo.Amount);
        $('#SPurchaseCount').text(orderInfo.PurchaseCount);
        $('#SPrice').text(orderInfo.Price);
        $('#SGooodsID').text(orderInfo.ProcureCatalogID);
        $('#SProductName').text(orderInfo.ProductName);
        $('#SCompanyName_SC').text(orderInfo.CompanyName_SC);
        $('#SOutlookc').text(orderInfo.Outlookc);
        $('#SFactor').text(orderInfo.Factor);
        $('#SUnit').text(orderInfo.Unit);
        $('#SMaterial').text(orderInfo.Material);
        $('#SMedicinemodelname').text(orderInfo.MedicineModelName);
        $('#SCompanyName_PS').text(orderInfo.CompanyName_PS == "" ? "未配送" : orderInfo.CompanyName_PS);
        $('#SCompanyName_PS1').text(orderInfo.CompanyName_PS) == "" ? "未配送" : orderInfo.CompanyName_PS;
        $('#SDisCount').text(orderInfo.DistributeCount == "" ? "未配送" : orderInfo.DistributeCount);
        $('#SWarCount').text(orderInfo.WarehouseCount == "" ? "未入库" : orderInfo.WarehouseCount);
        $('#SRetCount').text(orderInfo.ReturnCount == "" ? "未退货" : orderInfo.ReturnCount);
        $('#SOriginalCount').text(orderInfo.OriginalCount);
        $('#childcompanyname').text(orderInfo.childcompanyname);
        //0未提交;1已提交卫生局;2已提交中心;3已汇总发送企业;-1已分流给配送企业 4已配送;5已入库;
        //9已撤单(卫生局新建大订单则不可撤废);-2打回生产企业;-3撤单流程中;-4撤单成功;-5中心撤单;-6中心召回;
        switch (orderInfo.OrderDetailState) {
            case 0:
                $('#SOrderDetailState').text("医院未提交订单");
                $('#node1').removeClass('node wait').addClass('node doing');
                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                break;
            case 1:
                if (orderInfo.IsUsing == 0) {
                    $('#SOrderDetailState').text("卫生局已撤废");
                }
                else {
                    $('#SOrderDetailState').text("订单提交至卫生局");
                }
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                break;
            case 2:
                if (orderInfo.Emergencyflag == 1) {
                    $('#SOrderDetailState').text("配送企业无法配送");
                }
                else {
                    $('#SOrderDetailState').text("订单提交至中心");
                }
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                break;
            case 3:
                $('#SOrderDetailState').text("提交至生产企业");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                break;
            case 4:
                $('#SOrderDetailState').text("配送企业已配送");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                $('#node4 .tx1').text("生产企业分流订单");
                $('#node4 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                $('#proce4').removeClass('proce wait').addClass('proce ready');
                $('#node5').removeClass('node wait').addClass('node ready');
                $('#node5 .tx1').text("配送企业配送订单");
                $('#node5 .tx2').text(orderInfo.LastDistribution.toString().split('T')[0]);
                $('#proce5').removeClass('proce wait').addClass('proce doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 生产企业分流订单给配送企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.LastDistribution.toString().replace("T", " ") + " 配送企业填写完配送信息</li>");
                if (orderInfo.EXWAREHOUSETIME != null)
                    $('#Logistics ul').append("<li style='color: Red;'>" + orderInfo.EXWAREHOUSETIME.toString().replace("T", " ") + " 从配送企业出库</li>");
                $('#Logistics ul').append("<li style='color: Red;'>" + " " + orderInfo.DISTRIBUTIONMARKS.toString().replace("T", " ") + " </li>");
                //                $('#Logistics').append("<div style='margin: 8px; padding-left: 10px; color: Red;'>上述信息红色字体部分物流信息由配送企业:" + orderInfo.CompanyName_PS.toString().replace("T", " ") + "提供，如有疑问请与配送企业或平台联系！</div>");
                $('#Logistics div').css('display', 'block');

                if (orderInfo.arrivetime != null) {
                    $('#Logistics ul').append("<li style='color: Red;'>" + orderInfo.arrivetime.toString().replace("T", " ") + " 配送企业送达医院，且相关票据手续已齐全。</li>");
                    $('#proce5').removeClass('proce doing').addClass('proce ready');
                    $('#node6').removeClass('node wait').addClass('node ready');
                    $('#node6 .tx1').text("等待入库");
                }
                break;
            case 5:
                $('#SOrderDetailState').text("医院已入库");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                $('#node4 .tx1').text("生产企业分流订单");
                $('#node4 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                $('#proce4').removeClass('proce wait').addClass('proce ready');
                $('#node5').removeClass('node wait').addClass('node ready');
                $('#node5 .tx1').text("配送企业配送订单");
                $('#node5 .tx2').text(orderInfo.LastDistribution.toString().split('T')[0]);
                $('#proce5').removeClass('proce wait').addClass('proce ready');
                $('#node6').removeClass('node wait').addClass('node ready');
                $('#node6 .tx1').text("医院完成入库");
                if (orderInfo.warehousetime != null) {
                    $('#node6 .tx2').text(orderInfo.warehousetime.toString().split('T')[0]);
                }
                $('#proce6').removeClass('proce wait').addClass('proce ready');
                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 生产企业分流订单给配送企业</li>");
                $('#Logistics ul').append("<li >" + orderInfo.LastDistribution.toString().replace("T", " ") + " 配送企业填写完配送信息</li>");
                if (orderInfo.EXWAREHOUSETIME != null)
                    $('#Logistics ul').append("<li  style='color: Red;'>" + orderInfo.EXWAREHOUSETIME.toString().replace("T", " ") + " 从配送企业出库</li>");
                $('#Logistics ul').append("<li style='color: Red;'>" + " " + orderInfo.DISTRIBUTIONMARKS.toString().replace("T", " ") + " </li>");
                //                $('#Logistics').append("<div style='margin: 8px; padding-left: 10px; color: Red;'>上述信息红色字体部分物流信息由配送企业:" + orderInfo.CompanyName_PS.toString().replace("T", " ") + "提供，如有疑问请与配送企业或平台联系！</div>");
                $('#Logistics div').css('display', 'block');

                if (orderInfo.arrivetime != null)
                    $('#Logistics ul').append("<li  style='color: Red;'>" + orderInfo.arrivetime.toString().replace("T", " ") + " 配送企业送达医院，且相关票据手续已齐全。</li>");
                if (orderInfo.warehousetime != null) {
                    $('#Logistics ul').append("<li>" + orderInfo.warehousetime.toString().replace("T", " ") + " 医院完成入库</li>");
                }
                else {
                    $('#Logistics ul').append("<li>" + " 医院完成入库</li>");
                }
                break;
            case 9:
                $('#SOrderDetailState').text("医院已撤单(未提交订单)");
                break;
            case -1:
                $('#SOrderDetailState').text("分流至配送企业");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                $('#node4 .tx1').text("生产企业分流订单");
                $('#node4 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                $('#proce4').removeClass('proce wait').addClass('proce ready');
                $('#node5').removeClass('node wait').addClass('node doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 生产企业分流订单给配送企业</li>");
                if (orderInfo.RecycleFlag == 1) {
                    $('#Logistics ul').append("<li>" + orderInfo.Recycletime.toString().replace("T", " ") + " 订单被中心回收</li>");
                }
                break;
            case -2:
                $('#SOrderDetailState').text("拒绝配送待分流");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node doing');

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                break;
            case -3:
                $('#SOrderDetailState').text("医院撤单中");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                if (orderInfo.cancelstate == "-2" || orderInfo.cancelstate == "3") {
                    $('#node4 .tx1').text("生产企业收到订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                    //                    $('#proce4').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node5').removeClass('node wait').addClass('node ready');
                }
                if (orderInfo.cancelstate == "-1") {
                    $('#node5 .tx1').text("配送企业收到订单");
                    $('#node5 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                    //                    $('#proce5').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node6').removeClass('node wait').addClass('node ready');
                }

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.cancelsubmittime.toString().replace("T", " ") + " 医院撤单流程中</li>");


                break;
            case -4:
                if (orderInfo.submitperson == "系统自动生成") {
                    $('#SOrderDetailState').text("平台自动撤单");
                }
                else {
                    $('#SOrderDetailState').text("医院已撤单");
                }
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                //$('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                if (orderInfo.cancelstate == "-2" || orderInfo.cancelstate == "3") {
                    $('#node4 .tx1').text("生产企业收到订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                    //$('#proce4').removeClass('proce wait').addClass('proce ready');
                    //$('#node5').removeClass('node wait').addClass('node ready');
                }
                if (orderInfo.cancelstate == "-1") {
                   
                    $('#node4 .tx1').text("生产企业分流订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                    $('#proce4').removeClass('proce wait').addClass('proce ready');
                    $('#node5').removeClass('node wait').addClass('node ready');
                    $('#node5 .tx1').text("配送企业收到订单");
                    $('#node5 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                }
                if (orderInfo.cancelstate == "4") {
                    $('#node4 .tx1').text("生产企业分流订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                    $('#proce4').removeClass('proce wait').addClass('proce ready');
                    $('#node5').removeClass('node wait').addClass('node ready');
                    $('#node5 .tx1').text("配送企业配送订单");
                    $('#node5 .tx2').text(orderInfo.LastDistribution.toString().split('T')[0]);
                }
                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                if (orderInfo.submitperson == "系统自动生成" && (orderInfo.cancelstate == "-2" || orderInfo.cancelstate == "3")) {
                    $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 生产企业收到订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.cancelsubmittime.toString().replace("T", " ") + " 系统自动撤单</li>");
                }
                else if (orderInfo.submitperson == "系统自动生成" && orderInfo.cancelstate == -1) {
                    $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 生产企业分流订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 配送企业收到订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.cancelsubmittime.toString().replace("T", " ") + " 系统自动撤单</li>");

                }
                else if (orderInfo.submitperson == "系统自动生成" && orderInfo.cancelstate == 4) {
                    $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 生产企业分流订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompany_PSTime.toString().replace("T", " ") + " 配送企业收到订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.LastDistribution.toString().replace("T", " ") + " 配送企业配送订单</li>");
                    $('#Logistics ul').append("<li>" + orderInfo.cancelsubmittime.toString().replace("T", " ") + " 系统自动撤单</li>");
                }
                else {
                    $('#Logistics ul').append("<li>" + orderInfo.cancelsubmittime.toString().replace("T", " ") + " 医院已撤单</li>");
                }
                break;
            case -5:
                $('#SOrderDetailState').text("中心撤单");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                if (orderInfo.cancelstate == "-2" || orderInfo.cancelstate == "3") {
                    $('#node4 .tx1').text("生产企业收到订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                    //                    $('#proce4').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node5').removeClass('node wait').addClass('node ready');
                }
                if (orderInfo.cancelstate == "-1") {
                    $('#node5 .tx1').text("配送企业收到订单");
                    $('#node5 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                    //                    $('#proce5').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node6').removeClass('node wait').addClass('node ready');
                }

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.emergencytime.toString().replace("T", " ") + " 中心撤单</li>");
                break;
            case -6:
                $('#SOrderDetailState').text("中心召回待分流");
                $('#node1').removeClass('node wait').addClass('node ready');
                $('#node1 .tx1').text("医院提交订单");
                $('#node1 .tx2').text(orderInfo.SubmiTime.toString().split('T')[0]);
                $('#proce1').removeClass('proce wait').addClass('proce ready');
                $('#node2').removeClass('node wait').addClass('node ready');
                $('#node2 .tx1').text("卫生局提交订单");
                $('#node2 .tx2').text(orderInfo.SubmitToCenterTime.toString().split('T')[0]);
                $('#proce2').removeClass('proce wait').addClass('proce ready');
                $('#node3').removeClass('node wait').addClass('node ready');
                $('#node3 .tx1').text("平台分流订单");
                $('#node3 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#proce3').removeClass('proce wait').addClass('proce ready');
                $('#node4').removeClass('node wait').addClass('node ready');
                if (orderInfo.cancelstate == "-2" || orderInfo.cancelstate == "3") {
                    $('#node4 .tx1').text("生产企业分流订单");
                    $('#node4 .tx2').text(orderInfo.SubmitToCompanyTime.toString().split('T')[0]);
                    //                    $('#proce4').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node5').removeClass('node wait').addClass('node ready');
                }
                if (orderInfo.cancelstate == "-1") {
                    $('#node5 .tx1').text("配送企业配送订单");
                    $('#node5 .tx2').text(orderInfo.SubmitToCompany_PSTime.toString().split('T')[0]);
                    //                    $('#proce5').removeClass('proce wait').addClass('proce ready');
                    //                    $('#node6').removeClass('node wait').addClass('node ready');
                }

                $('#Logistics ul').append("<li>" + orderInfo.PlanTime.toString().replace("T", " ") + " 医疗机构新建采购单</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmiTime.toString().replace("T", " ") + " 医疗机构提交采购单至所属卫生局</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCenterTime.toString().replace("T", " ") + " 县卫生局提交采购单至平台</li>");
                $('#Logistics ul').append("<li>" + orderInfo.SubmitToCompanyTime.toString().replace("T", " ") + " 平台分流订单给生产企业</li>");
                $('#Logistics ul').append("<li>" + orderInfo.emergencytime.toString().replace("T", " ") + " 中心召回待分流</li>");
                break;
            default:
                $('#SOrderDetailState').text("未知");
                break;
        }
    }
}