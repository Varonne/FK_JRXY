define(function() {
    return {
        getStudentLeaveRecords: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/getStudentLeaveRecords.do',
        getStudentLeaveRecordDetails: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/getStudentLeaveRecordDetails.do',
        checkWhetherStudentCanApply: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/checkWhetherStudentCanApply.do',
        saveStudentLeaveRecord: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/saveStudentLeaveRecord.do',
        getDictionaryOfLeaveType: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/getDictionaryOfLeaveType.do',
        queryDetailApplyInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/queryDetailApplyInfo.do',
        recallApplyInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/recallApplyInfo.do',

        getStudentApplyRecords: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/getStudentApplyRecords.do',
        queryCurrentState: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/queryCurrentState.do',
        getStudentApplyDetail: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/getStudentApplyDetail.do',
        getDictionaryOfShzt: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/getDictionaryOfShzt.do',
        getDictionaryOfXjzt: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/getDictionaryOfXjzt.do',
        auditSubmit: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/auditSubmit.do',
        removeLeaveSubmit: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/removeLeaveSubmit.do',
        queryStudentInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/queryStudentInfo.do',
        saveStudentApply: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/saveStudentApply.do',
        getDictionaryOfFrontState: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/getDictionaryOfFrontState.do',
        querySfbz: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/querySfbz.do',
        recallAuditInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceTeacherAudit/recallAuditInfo.do',
        getDWZXInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/getDWZXInfo.do',
        setDWXJ: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/setDWXJ.do',
        checkDWXJSwitch: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/MobileServiceStudentApply/checkDWXJSwitch.do',
        
        /** 查询统计 **/
        getMxbDataInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/getMxbDataInfo.do',
        getAdvancedQuery: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/getAdvancedQuery.do',
        queryAllZy: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/queryAllZy.do',
        queryAllBj: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/queryAllBj.do',
        getMxbXq: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/getMxbXq.do',
        cxdqxn: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/cxdqxn.do',
        getTjbDataInfo: WIS_CONFIG.ROOT_PATH + '/sys/swmxsqjapp/teacherCxtj/getTjbDataInfo.do'
    };
});