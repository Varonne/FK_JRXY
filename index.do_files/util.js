define(function() {
    var util = {
        //两个时间对比
        compareDate: function(date1, date2) {
            var oDate1 = new Date(date1);
            var oDate2 = new Date(date2);
            if (oDate1.getTime() > oDate2.getTime()) {
                // console.log('第一个大' + date1);
                return true;
            } else {
                // console.log('第二个大' + date2);
                return false;
            }
        },
        //获取d1-d2的相差天数
        getResidueDay: function(sDate1, sDate2) {
            var aDate;
            var oDate1;
            var oDate2;
            var iDays;
            aDate = sDate1.split("-");
            oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]); //转换为12/18/2002格式
            aDate = sDate2.split("-");
            oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
            iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
            return iDays;
        },
        //弹出提示
        showTip: function(msg) {
            mintUI.Toast({
                message: msg,
                position: 'bottom',
                duration: 2000
            });
        },
        getDate: function(datestr) {
            var temp = datestr.split("-");
            var date = new Date(temp[0], temp[1] - 1, temp[2]);
            return date;
        },
        //获取俩个日期间的所有日期
        getDateArray: function(start, end) {
            var startTime = this.getDate(start);
            var endTime = this.getDate(end);
            var date_all = [];
            var i = 0;
            while ((endTime.getTime() - startTime.getTime()) >= 0) {
                var year = startTime.getFullYear();
                var month = (startTime.getMonth() + 1).toString().length == 1 ? "0" + (startTime.getMonth() + 1).toString() : (startTime.getMonth() + 1).toString();
                var day = startTime.getDate().toString().length == 1 ? "0" + startTime.getDate() : startTime.getDate();
                date_all[i] = year + "-" + month + "-" + day;
                startTime.setDate(startTime.getDate() + 1);
                i += 1;
            }
            return date_all;
        },
        //校验是否存在重复的请假日期
        validateRepeatDate: function(curDaysArray, selectDaysArray) {
            for (var i = 0; i < curDaysArray.length; i++) {
                for (var j = 0; j < selectDaysArray.length; j++) {
                    if (curDaysArray[i] == selectDaysArray[j]) {
                        return true;
                    }
                }
            }
            return false;
        },
        //删除无效的请假日期
        deleteUselessDate: function(curDaysArray, selectDaysArray) {
            for (var i = 0; i < curDaysArray.length; i++) {
                for (var j = 0; j < selectDaysArray.length; j++) {
                    if (curDaysArray[i] == selectDaysArray[j]) {
                        selectDaysArray.splice(j, 1);
                    }
                }
            }
            return selectDaysArray;
        },
        //格式化日期字符串
        parseDateToString: function(data) {
            var year = data.getFullYear();
            var month = (data.getMonth() + 1).toString().length == 1 ? "0" + (data.getMonth() + 1).toString() : (data.getMonth() + 1).toString();
            var day = data.getDate().toString().length == 1 ? "0" + data.getDate() : data.getDate();
            return year + "-" + month + "-" + day;
        },
        //判断日期是否连续
        checkDateSeries: function(dateArr) {
            //判断是否连续
            var sequent = true;
            var ONE_DAY = 24 * 60 * 60 * 1000;
            for (var i = 1; i < dateArr.length; ++i) {
                if (dateArr[i]) {
                    var diff = dateArr[i].getTime() - dateArr[i - 1].getTime();
                    //如果相邻的两个日期时间戳之差不等于一天，则证明日期不连续
                    if (diff != ONE_DAY) {
                        sequent = false;
                        break;
                    }
                }
            }
            return sequent;
        },
        //将日期按照连续不连续分组，例如：[1,2,3,5,6,8,9]分组为[1,2,3],[5,6],[8,9]
        parseDaysArray: function(qjrqArr) {
            var dateArr = [];
            $.each(qjrqArr, function(i, obj) {
                dateArr.push(new Date(obj.replace(/-/g, '/').replace(/\./g, '/') + ' 00:00:00'));
            });
            //日期升序排序
            dateArr = dateArr.sort(function(a, b) {
                return a.getTime() - b.getTime();
            });
            if (dateArr.length == 1) {
                return [
                    [this.parseDateToString(dateArr[0])]
                ];
            }
            //初始化对象
            var rtnArr = [];
            var temp = [this.parseDateToString(dateArr[0])];
            var ONE_DAY = 24 * 60 * 60 * 1000;
            for (var i = 1; i < dateArr.length; ++i) {
                var diff = dateArr[i].getTime() - dateArr[i - 1].getTime();
                //如果相邻的两个日期时间戳之差不等于一天，则证明日期不连续
                if (diff != ONE_DAY) {
                    rtnArr.push(temp);
                    temp = [];
                    temp.push(this.parseDateToString(dateArr[i]));
                } else {
                    temp.push(this.parseDateToString(dateArr[i]));
                }
                //最后一组数据返回
                if (i == dateArr.length - 1) {
                    rtnArr.push(temp);
                }
            }
            return rtnArr;
        },
        //将分组后的日期包装成日期组件需要的格式
        formatDaysArray: function(dateArray) {
            var daysArray = [];
            for (var i = 0; i < dateArray.length; i++) {
                var tempObj = { 'rowIndex': '', 'startDate': '', 'endDate': '', 'score': 0, curSelectDayArray: [] };
                var tempArr = dateArray[i];
                //序号
                if (i == 0) {
                    tempObj.rowIndex = '';
                } else {
                    tempObj.rowIndex = i + 1;
                }
                //如果分组只有一个日期，则开始日期跟结束日期都为它
                if (tempArr.length == 1) {
                    tempObj.startDate = tempArr[0];
                    tempObj.endDate = tempArr[0];
                } else {
                    tempObj.startDate = tempArr[0];
                    tempObj.endDate = tempArr[tempArr.length - 1];
                }
                tempObj.score = tempArr.length;
                //遍历
                $.each(tempArr, function(i, obj) {
                    tempObj.curSelectDayArray.push(obj);
                });
                daysArray.push(tempObj);
            }
            return daysArray;
        }
    };

    return util;
});