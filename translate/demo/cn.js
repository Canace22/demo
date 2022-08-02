'use strict';

module.exports =  {
    common: {
        noLogin: '您尚未登录或登录超时，请重新登录！',
        attachmentText:
            '请输入内容，示例：参数名=关键字[换行]参数名=关键字。请注意使用英文的=号',
        attachmentPlaceholder: '示例：参数名=关键字[换行]参数名=关键字',
        save: '保存',
        saveSuccess: '保存成功',
        pleaseFill: '请填写',
        pleaseChoose: '请选择',
        pleaseInput: '请输入',
        createMenu: '新建功能项',
        loading: '正在加载数据中',
        ok: '确定',
        cancel: '取消',
        saveSucc: '保存成功',
        close: '关闭',
        edit: '编辑',
        remove: '删除',
        chkAll: '全选',
        editMenu: '菜单排序',
        saveMenu: '保存排序',
        handle: '操作',
        keyWord: '关键字',
        refresh: '刷新',
        add: '新增',
        sureDel: '确定要删除吗？',
        create: '新建',
        importConf: '导入系统默认配置',
        inputName: '请输入名称',
        systemNotices: '系统公告',
        importFile: '导入文件',
        beginUpload: '开始上传',
        selectFile: '选择文件'
    },
    request: {
        netError: '请求数据失败出现未知错误，请重新刷新页面',
        timeOutErr: '数据请求超时,请确认网络连接是否正常！'
    },
    component: {
        firstNo: '首项未选择，不允许新增子项',
        pleaseSelect: '请选择',
        pleaseKey: '输入模糊查询关键字'
    },
    login: {
        title: '西山居运维平台-GM管理系统',
        username: '用户名',
        pwd: '密码',
        userText: '请填写用户名',
        pwdText: '请填写密码',
        selectLang: '选择语言',
        cn: '中文',
        vietnam: 'Tiếng Việt',
        en: 'English',
        kr: '한국어',
        withDSP: '使用 DSP 账号登录',
        btnName: '登录'
    },
    index: {
        title: '西山居运维平台',
        gmTitle: 'GM管理系统',
        indexLink: '管理首页',
        timeStandard: '当前时间标准',
        configLink: '系统配置',
        confGame: '游戏配置',
        goTranslation: '查询翻译',
        goServerConfig: '区服配置',
        goWayConfig: '渠道配置',
        goAttachmentManager: '列表管理',
        userLink: '用户相关',
        goUserManger: '用户管理',
        goUserPwd: '修改密码',
        logout: '退出登录',
        translationTitle: '查询翻译',
        wayTitle: '渠道配置',
        attachmentTitle: '列表管理',
        zoneTitle: '区服配置',
        zoneCreate: '创建新的区服',
        zondDelete: '删除选择区服',
        serverConfig: '服务器配置内容',
        addZoneServer: '新增区服',
        zoneIdLabel: '请输入区服ID',
        zoneIdPlaceholder: '示例：10002',
        zoneNameLabel: '请输入区服名称',
        zoneNamePlaceholder: '示例：小米',
        zoneAttachmentLabel:
            '请输入服务器配置内容，示例：1000201=S1_龙飞九天[换行]1000202=S2_三分天下。请注意使用英文的=号',
        zoneAttachmentText:
            '示例：1000201=S1_龙飞九天[换行]1000202=S2_三分天下',
        enumCreate: '创建一个新的列表',
        enumNameLabel: '列表名称',
        enumAttachmentLabel: '列表内容',
        attachDelete: '删除当前选择列表',
        enumNameText: '请输入列表名称',
        enumAreaText: '请输入列表内容',
        invalidUrl: '非法 url',
        applyProjectPermission: '申请项目权限',
        auditProjectPermission: '审核项目权限',
        accessDoc: '接入文档',
        operateDoc: '操作文档',
        sustainInstruction: '扶持功能说明',
        gmIMDoc: 'GM 在线对话接口说明',
        confirmImport:
            '此操作将从文件导入项目配置。\n\n除“菜单配置”外的内容将被清除并导入文件中的配置。\n\n“菜单配置”中的同名菜单配置将被覆盖, 新菜单直接导入。\n\n确认导入操作吗?',
        editListName: '编辑列表内容',
        getByUrl: '通过 url 获取'
    },
    app: {
        users: '用户管理',
        userpassword: '修改密码',
        translation: '查询翻译',
        serverConfig: '区服配置',
        wayConfig: '渠道配置',
        attachmentManager: '列表(原附件)管理',
        gameManagement: '游戏管理',
        multiLangManagement: '多语言翻译',
        im: '在线对话',
        switchToNewDomain:
            '因接入dsp实现统一登录，以后内网gm系统访问地址改为 internal.gm.xsjom.com ，点击确定跳转',
        tips: '温馨提示'
    },
    config: {
        currentTitle: '当前配置',
        directive: '指令',
        configType: '类型',
        configTypeSend: '操作类',
        configTypeQuery: '查询类',
        supportConf: '扶持配置类',
        supportSend: '扶持发送类',
        configTest: '测试接口',
        configLocal: '线上接口',
        saveConfig: '保存配置',
        success: '配置成功',
        timeout: '超时时间(s)',
        check: '审批人',
        checkmemo: '填写审批人用户名, 无需审批请留空',
        urlmemo: '不填时默认继承全局接口配置',
        execuser: '执行者',
        cross_review: '保存指令者与执行者不能为同一个人',
        delsurplusmenu: '删除导入文件中不存在的菜单'
    },
    editor: {
        title: '自定义表单',
        test: '测试发送',
        save: '保存表单',
        debug: '调试',
        testApi: '测试接口',
        testResult: '数据',
        result: '返回结果',
        ctrlText: '文本框',
        ctrlDatetime: '日期选择',
        ctrlTextarea: '大文本框',
        ctrlDropdown: '下拉框',
        ctrlRadio: '单选项',
        ctrlCheckbox: '多选项',
        ctrlServers: '区服',
        ctrlAttachment: '附件',
        ctrlway: '渠道',
        ctrlsplit: '分隔线',
        ctrlMailAttachment: '组合附件',
        ctrlCalendar: '日历',
        ctrlBool: '布尔值',
        ctrlAttachment2: '附件2',
        ctrlCrontab: '定时任务',
        ctrlTextareaRich: 'Unity富文本'
    },
    handler: {
        saveDirective: '保存指令',
        fastQuery: '快速查询',
        downAll: '下载全部',
        saveConf: '保持配置',
        reset: '重置',
        search: '搜索'
    },
    defaultIndex: {
        // as index.vue
        GMUserIntro: 'GM系统使用说明',
        GMUserInfo:
            '请从左侧相应的菜单项，进入到相应的功能界面。或者您可以通过点击',
        customMenu: '自定义新的功能菜单项',
        normalConfig: '通用配置',
        GameID: '游戏ID',
        XGSDK: '西瓜SDK',
        testApi: '测试接口',
        localApi: '线上接口',
        zoneApi: '区服接口',
        wayApi: '渠道接口',
        IMHttpApi: 'IM Server(注册接口 http)',
        IMWsApi: 'IM Server(对话接口 ws)',
        AttachApi: '列表获取接口',
        releaseEditorLock: '解除编辑锁定',
        updateALL: '更新配置',
        updateConfigSucc: '更新配置成功',
        overlayAll: '覆盖所有子菜单的接口配置',
        overlayConfirm:
            '您已勾选了覆盖更新所有菜单接口，此操作不可逆，确认更新到所有配置吗？',
        exportconfig: '导出配置',
        importconfig: '导入配置'
    },
    main: {
        handler: '操作',
        config: '配置',
        edit: '编辑',
        condition: '条件'
    },
    sidebar: {
        createSubMenu: '创建子菜单',
        editMenu: '编辑菜单',
        copyMenu: '复制菜单',
        deleteMenu: '删除菜单',
        operateSuccess: '操作成功',
        confirmDelete: '确认要删除该菜单',
        noCancel: '此项操作不可逆',
        createMenu: '创建菜单',
        menuname: '菜单名',
        syncMenu: '同步菜单至其他项目'
    },
    userpassword: {
        curpwd: '当前密码',
        changePwd: '修改密码',
        oldpassword: '原密码',
        newpassword: '新密码',
        enterpassword: '确认密码',
        oldPwdText: '请填写原密码',
        newPwdText: '请填写新密码',
        enterPwdText: '请填写确认密码',
        pwdDifferent: '新密码与确认密码不一致',
        changeSucc: '修改成功',
        passwordChangingWarning:
            '注：此处只能修改外部用户的密码（yw_开头的用户），DSP用户如需修改密码请到DSP首页修改'
    },
    users: {
        userList: '用户列表',
        createUser: '创建用户',
        changeUser: '修改用户',
        deleteUser: '删除用户',
        allSelect: '全选/反选',
        chkAll: '全选',
        loginName: '登录名',
        name: '真实姓名',
        department: '部门',
        role: '用户权限',
        phone: '手机',
        email: '邮箱',
        memo: '备注',
        lastlogin: '最后登录时间',
        handler: '操作',
        edit: '编辑',
        authorize: '授权',
        zonePermissions: '区服权限',
        roleAssign: '分配角色',
        sysConfAuth: '系统配置权限',
        returnUserList: '返回用户列表',
        create: '创建',
        selectPermissions: '选择指定权限',
        noAuthorize: '无授权',
        directiveHandler: '查询权限',
        directiveSend: '执行权限',
        editManage: '编辑管理',
        normalUser: '普通用户',
        advancedUsers: '高级用户',
        admin: '管理员',
        userAuthorize: '用户授权',
        createSucc: '创建成功',
        userText: '请填写用户名',
        chinaUserText: '请填写中文名',
        pwdText: '请填写密码',
        enterPwdText: '请填写确认密码',
        pwdDifferent: '用户密码与确认密码不一致',
        pleaseDelete: '请您选择需要删除的用户！',
        confirmDelete: '请确认您是否要删除选中的用户！',
        selectAuthorizeItem: '请选择授权项',
        authorizeSucc: '授权成功！',
        gameAll: '所有游戏',
        noAuthorization: '非当前游戏用户不能授权',
        belongRoles: '所属角色',
        elevatePrivilege: '提升为项目管理员',
        warningMsg:
            '注：内部用户请直接使用DSP帐号密码登录，此处创建的均为外部用户，登录名会自动加上yw_前缀',
        importantMsg:
            '重要：对创建的外部用户请项目管理员做好管理，如有人员离职等情况请及时对外部用户帐号做处理'
    },
    role: {
        management: '角色管理',
        create: '创建角色',
        createSuccess: '创建成功',
        add: '添加角色',
        save: '保存角色及授权',
        saveSuccess: '保存成功',
        list: '角色列表',
        edit: '编辑角色及授权',
        delete: '删除',
        deleteSuccess: '删除成功',
        name: '角色名称',
        operate: '角色操作',
        forUserTable: '角色',
        confirm: '确认',
        fail: '操作失败',
        needFill: '尚有选项未选',
        nameDumplicate: '重复的角色名称',
        notAllowDelete: '发现存在拥有该角色的用户，不允许删除此角色！',
        userAssign: '分配给用户',
        sysAuth: '系统配置权限'
    },
    game: {
        chooseDefaultGame: '选择默认游戏项目',
        title: '游戏管理',
        list: '游戏列表',
        create: '创建游戏',
        name: '游戏名称',
        operate: '游戏操作',
        clone: '克隆游戏',
        choose: '选择游戏',
        choosePermission: '选择游戏权限',
        createSuccess: '游戏创建成功',
        cloneSuccess: '游戏克隆成功',
        fail: '操作失败',
        none: '无',
        selectTemplate: '选择模板',
        gameNamePlaceholder: '请输入游戏名称',
        user: {
            admin: '管理员',
            op: '普通用户',
            authorizeManagement: '用户游戏权限管理',
            inGame: '所属游戏',
            permission: '游戏权限',
            addPerm: '添加游戏权限',
            changePerm: '修改游戏权限',
            handle: '操作',
            delete: '删除',
            saveSucc: '保存成功',
            needFill: '尚有选项未选'
        }
    },
    permission: {
        apply: '申请权限',
        choosePrj: '选择项目',
        choosePerm: '选择权限',
        applicant: '申请人',
        applicationList: '申请列表',
        game: '游戏',
        permission: '权限',
        updateTime: '更新时间',
        createTime: '创建时间',
        status: {
            name: '状态',
            pending: '等待审核',
            approve: '通过',
            deny: '拒绝'
        }
    },
    editorMethods: {
        sameParameter: '已存在相同的参数名',
        confirmDelete: '确定要删除该控件吗？'
    },
    popup: {
        sysInfo: '系统信息',
        sysErr: '系统错误'
    },
    postServer: {
        menuIDErr: '菜单ID错误'
    },
    serverConfig: {
        zoneIDText: '请输入区服ID',
        zoneNameText: '请输入区服名称',
        deleteSucc: '删除成功',
        confirmDelete: '您确认删除该区服吗？该操作不可逆'
    },
    translation: {
        pleaseContent: '请输入查询翻译内容！'
    },
    wayConfig: {
        pleaseContent: '请输入渠道内容！'
    },
    attachmentManager: {
        confirmDelete: '确认要删除吗？该操作不可逆',
        deleteSucc: '删除成功',
        referenceAttachment: '引用已有列表',
        addByUrl: '通过 url 获取',
        addByUrlPlaceholder: '非完整url自动拼接“列表获取接口”地址',
        addByUrlFail: '通过 url 返回的数据无效',
        pleaseClickFetch: '请点击 ✓ 验证 url 数据无误后再保存'
    },
    queryTable: {
        queryResult: '查询结果',
        advancedMode: '高级模式',
        advancedModeIntro: '高级模式说明',
        exitHistory: '退出历史',
        viewHistory: '查看操作历史',
        rearray: '重排',
        remove: '删除',
        down: '下载',
        retur: '返回',
        pageFirst: '首页',
        prevPage: '上页',
        nextPage: '下页',
        lastPage: '尾页',
        currPages: '当前页数',
        currPagesNum: '当前页条数',
        totalPage: '总页数',
        perPage: '每页数',
        label: '标签',
        states: '状态',
        handler: '操作者',
        config: '配置',
        result: '结果',
        times: '时间',
        noExec: '未执行',
        succ: '成功',
        fail: '失败',
        advancedModeIntroAlert: `本高级模式主要是对游戏内的滚动公告重排顺序及删除提供一个相对友好直观的方式，主要说明如下：\n\n1、本菜单查询返回游戏内所有滚动公告，必须包含id字段，id字段代表游戏中滚动公告的显示顺序 \n\n 2、进入高级模式后可拖拽公告进行顺序重新排列，排列完成后点击“重排”按钮，将向游戏接口发送如下参数（假设本菜单action为boardcast）：\n {"action": "sort_boardcast", "id": "2,3,1,4,5"} \n 参数说明：action为sort_ + 当前查询菜单的action，id为拖拽后的重排顺序 \n\n 3、进入高级模式后可勾选公告并点击“删除”按钮进行删除公告操作，将对游戏接口发送如下参数：\n {"action": "delete_boardcast", "id": "1,2"} \n 参数说明：action为delete_ + 当前查询菜单的action，id为需要删除的公告顺序id \n 注：游戏内需提供相对应的接口功能，解析执行sort/delete对应的操作`,
        confirmReArray: '您确定要重排数据吗？',
        confirmDelete: '您确定要删除选中的数据吗？',
        pleaseDelete: '请您选择要删除的数据',
        pagenum: '跳转至第',
        pagenum2: '页'
    },
    directiveTable: {
        planfilter: '查询',
        selectOperate: '操作人',
        directiveList: '指令数据列表',
        autoFill: '自动重填',
        sendData: '执行指令',
        cancelDirective: '撤消指令',
        down: '下载',
        pleaseKey: '输入模糊查询结果',
        queryMore: '点击查看',
        pageFirst: '首页',
        prevPage: '上页',
        nextPage: '下页',
        lastPage: '尾页',
        currPages: '当前页数',
        totalPage: '总页数',
        perPage: '每页数',
        label: '标签',
        states: '状态',
        handler: '操作者',
        config: '配置',
        sendConfig: '参数预览',
        result: '返回结果',
        times: '操作时间',
        detailConfig: '详细配置',
        noExec: '未执行',
        succ: '执行成功',
        fail: '执行失败',
        partialFail: '部分失败',
        working: '执行中',
        timing: '已定时',
        waitAudit: '待审核',
        auditApproved: '审核通过',
        auditReject: '审核失败',
        makeNews: '指令补发',
        collect: '收藏指令',
        cancelCollect: '取消收藏',
        history: '指令历史',
        pleasePlan: '请您先选择需要操作的记录',
        confirmExecPlan: '确认执行选中的计划吗？',
        cancelCollectPlan: '确认取消收藏当前勾选的指令？',
        pleaseSelectDown: '请选择您要下载的计划！',
        confirmCancelPlan:
            '此功能对不同状态的指令记录将执行不同的操作，说明如下：\n 1、对“未执行”状态的指令记录将直接从列表中删除 \n 2、对“成功”状态的指令将向服务器发送“撤销”指令，指令参数不变，action为当前action加_delete后缀，需要游戏端提供相应接口支持 \n 3、对“失败”、“部分失败”、“已撤销”状态的指令记录不做操作\n确认需要撤销选中的指令吗？',
        pleasePartialFail: '此操作只针对部分失败的指令记录',
        confirmPartialFail:
            '此操作将针对勾选的指令记录中部分失败的服务器重新生成新的指令记录，请在生成指令并核对无误后发送!',
        cancelSucc: '撤消成功！',
        canceled: '已撤销',
        makeSucc: '操作成功！',
        pleaseSelectFill:
            '请选择一个您要自动自动填充的对象，或者双击下方需要填充的数据！',
        FillOnlyOne: '只允许选择一条数据填充',
        check: '审批'
    },
    enumerate: {
        saveCurr: '保存新的选项组',
        overlayCurr: '覆盖当前选项',
        pleaseContent: '请输入上方的选项列表组合！',
        pleaseOverlay: '请选择覆盖的选项',
        pleaseName: '请输入选项组名称'
    },
    custormBase: {
        custom: '自定义',
        label: '标签名',
        parameter: '参数名',
        required: '必填项',
        oneLine: '独占一行',
        insertForm: '插入表单',
        updateForm: '更新至表单',
        setTab: '设置标签',
        twoCol: '占比1/2',
        threeCol: '占比1/3',
        twoThirdCol: '占比2/3',
        fourCol: '占比1/4',
        threeFourthCol: '占比3/4',
        hide: '隐藏',
        hideButOccupy: '隐藏并占位'
    },
    custormAttac: {
        label: '选项列表组合',
        placeholder: 'text=value; 示例：飞刀=1[换行]屠龙刀=2[换行]倚天剑=2',
        outputInfo: '输出JSON格式（请输入标准的JSON格式，否则报错）'
    },
    custormDateTime: {
        label: '注释',
        allowTime: '允许选择时间',
        allowTimestamp: '发送指令时间戳'
    },
    custormDropDown: {
        multiple: '多选',
        valueisnum: '值为数字'
    },
    custormText: {
        label: '默认值',
        text: '注释',
        numberOnly: '只允许数字',
        maxLen: '最大长度',
        lenRange: '文本长度限制：'
    },
    customServer: {
        district: '区',
        districtNecessary: '区必填',
        server: '服',
        serverNecessary: '服必填',
        serverSingle: '服单选'
    },
    customTextarea: {
        richText: '富文本',
        valToJson: '值为数组',
        invalidJsonWarning: '请输入 json 格式文本'
    },
    customBool: {
        true: '是',
        false: '否'
    },
    mail: {
        noServer: '未选择服务器',
        noReceiverId: '未填写收件人 FamilyID',
        noReceiverCondition: '未填写收件人条件',
        noTitle: '未填写邮件标题',
        noSender: '未填写发件人',
        noContent: '未填写邮件正文',
        noSendTime: '未填写计划发送时间',
        noStopTime: '未填写停止发送时间',
        incompletedProp: '道具设置不完整',
        maxLine: '最多行',
        noGoodTemplate: '未选择物品',
        noGoodTimeoutType: '未填写物品有效期类型',
        noGoodTime: '未填写时间'
    },
    crontab: {
        timingExecution: '定时执行',
        executionTime: '执行时间',
        executionCount: '执行次数',
        executionInterval: '执行间隔(分钟)',
        executionTimeMemo: '指令开始执行时间',
        executionCountMemo: '指令循环执行次数',
        executionIntervalMemo: '指令循环执行间隔',
        singleExecution: '单次执行',
        singleTimingExecution: '单次定时执行',
        repeatedExecution: '重复执行'
    },
    multiLangManagement: {
        new: '新的',
        zh: '中文',
        en: '英文',
        vn: '越南语',
        kr: '韩语',
        linesNotEqual: '翻译文本行数与源文本不对称',
        newlistMsg: `有新的文本需要翻译`,
        export: '导出',
        import: '导入'
    },
    sustain: {
        audit: '审核指令',
        execute: '执行指令',
        filterCondition: '筛选条件',
        name: '扶持名称',
        attach: '附件',
        sendPerm: '直发权限',
        configMan: '配置人',
        type: '类型',
        status: '状态',
        operate: '操作',
        operator: '操作人',
        query: '查询',
        chooseResult: '请选择审核结果',
        otherReason: '其他理由',
        reason: '理由',
        ctime: '操作时间',
        detail: '详细配置',
        executeResult: '执行结果',
        approved: '审核通过',
        reject: '审核失败',
        repeatedlySend: '重复发放',
        overloadAmount: '道具发放数量过多',
        configError: '配置错误',
        pleaseChooseDrt: '请选择指令',
        pleaseChooseValidDrt: '请选择待审核的指令',
        executeSuccess: '执行成功',
        pleaseEnterRejectReason: '请填写不通过理由',
        auditSuccess: '审核成功',
        copy: '复制',
        normalUser: '普通用户',
        admin: '管理员',
        superAdmin: '超级管理员',
        removeSuccess: '删除成功',
        switchSustainTip:
            '此操作将自动生成“扶持配置发放”功能菜单，扶持功能详细说明请参考“扶持功能说明”，确认开启吗？',
        turnOn: '开启扶持功能',
        instruction: '扶持功能说明',
        cleanCondition: '清空条件'
    },
    systemNotices: {
        noticesType: '公告类型',
        noticeStatus: '发布状态',
        noticeTypeManage: '公告类型管理',
        title: '标题',
        lang: '语言',
        contentType: '内容类型',
        startTime: '开始时间',
        endTime: '结束时间',
        weight: '权重',
        showTime: '显示频率',
        syncToGame: '同步到游戏',
        addNotice: '新增公告',
        detail: '详情',
        post: '发布',
        all: '全部',
        startUp: '启动',
        draft: '草稿',
        internalTest: '内部测试'
    },
    table: {
        index: '序号',
        zoneId: '区编号',
        zoneName: '区名称',
        handle: '操作',
        total: '共',
        item: '条'
    },
    a:'我'
};
