﻿(function ($) {
    var hos = window.hos = window.hos || {};

    var Control = function () { }

    Control.prototype.gridView = function (target, options) {
        var defaults = {
            dataType: "json",
            toolbar: null, //工具按钮用哪个容器
            striped: true,//是否显示行间隔色
            singleSelect: false,
            pagination: true, //分页
            pageNumber: 1, //初始化加载第一页，默认第一页
            pageSize: 15, //每页的记录行数（*）
            pageList: [10, 20, 50], //可供选择的每页的行数（*）
            search: false, //显示搜索框
            queryParams: function (params) {
                $("#serch-form .form-control")
                    .each(function (index, item) {
                        params[item.id] = item.value;
                    });
                return params;
            },
            sidePagination: "server"
        }
        $.extend(defaults, options);
        var grid = $('#' + target).bootstrapTable(defaults);
        grid.reload = function (params) {
            this.bootstrapTable("refresh", params);
        }
        return grid;
    }

    hos.ui = hos.ui || {};
    $.extend(hos.ui, {
        ctrl: new Control()
    });
})(jQuery);