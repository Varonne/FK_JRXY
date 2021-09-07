define(function(require, exports, module) {
    var tpl = require('text!modules/qjsq/qjsqTpl.html');
    var api = require('api');
    var util = require('util');

    return function() {
        var page = {
            template: tpl,
            data: function() {
                return {
                    //用于控制是否展示空页面
                    hasDatas: true,

                    //学生请假信息
                    applyDatas: []

                };
            },
            filters: {
                autoClass: function(shzt) {
                    var className = '';
                    if (shzt == '99') {
                        className = 'bh-bg-color-green';

                    } else if (Number(shzt) < 0) {
                        className = 'bh-bg-color-red';

                    } else if (Number(shzt) >= 0) {
                        className = 'bh-bg-color-blue';
                    }
                    return className;
                }
            },
            created: function() {
                SDK.setTitleText("请假");
                var self = this;
                //获取已申请的请假信息
                MAPUTIL.getCurrentPosition();
                self.getStudentLeaveRecords();
            },
            methods: {
                //获取已申请的请假信息
                getStudentLeaveRecords: function() {
                    var self = this;
                    MOB_UTIL.doPost({ url: api.getStudentLeaveRecords, params: {} }).done(function(result) {
                        self.applyDatas = result.data;
                        if (result.data && result.data.length > 0) {
                            self.hasDatas = true;
                        } else {
                            self.hasDatas = false;
                            Vue.nextTick(function() {
                                window.bhFillStyle(self.$refs.main.$el);
                            });
                        }
                    });
                },
                //展示学生请假申请详情
                showDetail: function(sqbh) {
                    var param = {
                        SQBH: sqbh
                    };
                    this.$router.push({ name: 'xsqjsqxq', query: param });
                },
                // 新增学生申请请假
                newApply: function() {
                    //学生请假校验
                    var self = this;
                    MOB_UTIL.doPost({ url: api.checkWhetherStudentCanApply, params: {} }).done(function(result) {
                        if (result.data.applicable) {
                            var param = {
                                IS_NEW: true
                            };
                            self.$router.push({ name: 'xzqjsq', query: param });
                        } else {
                            mintUI.MessageBox('提示', result.data.reason);
                        }
                    });
                }
            }
        };
        return page;
    };

});