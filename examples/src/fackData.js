/**
 * Created by elly on 16/9/19.
 */
export const noKeyData = [{
    "a": 0,
    "b": 0,
    "c": 3,
    "d": 4,
    "list": [{
        "a": 11,
        "b": 21,
        "c": 31,
        "d": 41,
        "list": [{
            "a": 111,
            "b": 222,
            "c": 333,
            "d": 444,
            "list": [{
                "a": 1111,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }, {
                "a": 1112,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }]
        }]
    }, {
        "a": 12,
        "b": 22,
        "c": 32,
        "d": 42
    }]
}, {
    "a": 2,
    "b": 3,
    "c": 4,
    "d": 5,
    "list": [{
        "a": 22,
        "b": 32,
        "c": 42,
        "d": 52,
        "list": []
    }]
}, {
    "a": 3,
    "b": 2,
    "c": 3,
    "d": 4,
    "list": [{
        "a": 31,
        "b": 21,
        "c": 31,
        "d": 41,
        "list": [{
            "a": 311,
            "b": 222,
            "c": 333,
            "d": 444,
            "list": [{
                "a": 3111,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }, {
                "a": 3112,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }]
        }]
    }, {
        "a": 32,
        "b": 22,
        "c": 32,
        "d": 42
    }]
}, {
    "a": 4,
    "b": 3,
    "c": 4,
    "d": 5,
    "list": [{
        "a": 42,
        "b": 32,
        "c": 42,
        "d": 52,
        "list": []
    }]
}, {
    "a": 0,
    "b": 0,
    "c": 3,
    "d": 4,
    "list": [{
        "a": 11,
        "b": 21,
        "c": 31,
        "d": 41,
        "list": [{
            "a": 111,
            "b": 222,
            "c": 333,
            "d": 444,
            "list": [{
                "a": 1111,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }, {
                "a": 1112,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }]
        }]
    }, {
        "a": 12,
        "b": 22,
        "c": 32,
        "d": 42
    }]
}, {
    "a": 2,
    "b": 3,
    "c": 4,
    "d": 5,
    "list": [{
        "a": 22,
        "b": 32,
        "c": 42,
        "d": 52,
        "list": []
    }]
}, {
    "a": 3,
    "b": 2,
    "c": 3,
    "d": 4,
    "list": [{
        "a": 31,
        "b": 21,
        "c": 31,
        "d": 41,
        "list": [{
            "a": 311,
            "b": 222,
            "c": 333,
            "d": 444,
            "list": [{
                "a": 3111,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }, {
                "a": 3112,
                "b": 2222,
                "c": 3333,
                "d": 4444
            }]
        }]
    }, {
        "a": 32,
        "b": 22,
        "c": 32,
        "d": 42
    }]
}, {
    "a": 4,
    "b": 3,
    "c": 4,
    "d": 5,
    "list": [{
        "a": 42,
        "b": 32,
        "c": 42,
        "d": 52,
        "list": []
    }]
}];
export const dataing = [
    {
        "caller": "com.letvpicture.backend.act.api.controller.ActSmsAPIController#serverTime",
        list: [
            {
                "caller": "com.letvpicture.common.bean.RspBean$Builder#create",
                list: [],
                "elapsedTime": 0 // 这个是耗时
            },
            {
                "caller": "com.letvpicture.common.bean.RspBean$Builder#ret",
                list: [],
                "elapsedTime": 0
            },
            {
                "caller": "com.letvpicture.common.bean.RspBean$Builder#body",
                list: [],
                "elapsedTime": 0
            },
            {
                "caller": "com.letvpicture.common.bean.RspBean$Builder#msg",
                list: [],
                "elapsedTime": 0
            },
            {
                "caller": "com.letvpicture.common.bean.RspBean$Builder#build",
                list: [],
                "elapsedTime": 0
            }
        ],
        "elapsedTime": 0
    }
]


//完整的data
export const data=[
    {
        "caller" : "com.letvpicture.backend.act.api.controller.UserInfoController#userInfo",
        list : [
            {
                "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI$Dictionary$Terminal#parse",
                list : [
                    {
                        "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI$Dictionary$Terminal#values",
                        list : [ ],// 这个是方法名
                        "elapsedTime" : 0 // 这个是消耗的时间
                    }
                ],
                "elapsedTime" : 0
            },
            {
                "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI#queryMembership",
                list : [
                    {
                        "caller" : "com.letvpicture.common.utils.BeanValidationUtils#validate",
                        list : [ ],
                        "elapsedTime" : 1
                    },
                    {
                        "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI$Dictionary$Terminal#toString",
                        list : [ ],
                        "elapsedTime" : 0
                    },
                    {
                        "caller" : "com.letvpicture.common.client.HttpClient#create",
                        list : [
                            {
                                "caller" : "com.letvpicture.common.client.HttpClient#init",
                                list : [ ],
                                "elapsedTime" : 0
                            }
                        ],
                        "elapsedTime" : 0
                    },
                    {
                        "caller" : "com.letvpicture.common.client.HttpClient#doRequest",
                        list : [ ],
                        "elapsedTime" : 10
                    },
                    {
                        "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI$Dictionary$MemberShipType#parse",
                        list : [
                            {
                                "caller" : "com.letvpicture.common.thirdparty.LetvYuanxianAPI$Dictionary$MemberShipType#values",
                                list : [ ],
                                "elapsedTime" : 0
                            }
                        ],
                        "elapsedTime" : 0
                    }
                ],
                "elapsedTime" : 12
            },
            {
                "caller" : "com.letvpicture.common.bean.RspBean$Builder#create",
                list : [ ],
                "elapsedTime" : 0
            },
            {
                "caller" : "com.letvpicture.common.bean.RspBean$Builder#ret",
                list : [ ],
                "elapsedTime" : 0
            },
            {
                "caller" : "com.letvpicture.common.bean.RspBean$Builder#msg",
                list : [ ],
                "elapsedTime" : 0
            },
            {
                "caller" : "com.letvpicture.common.bean.RspBean$Builder#body",
                list : [ ],
                "elapsedTime" : 0
            },
            {
                "caller" : "com.letvpicture.common.bean.RspBean$Builder#build",
                list : [ ],
                "elapsedTime" : 0
            }
        ],
        "elapsedTime" : 12
    },
]





export const dataim = [{
    a: 'ycd',
    b: 'zhx',
    c: 3,
    d: 4,
    list: [{
        a: '前面的a是定值',
        b: 21,
        c: 31,
        d: 41,
        list: [{
            a: 111,
            b: 222,
            c: 333,
            d: 444,
            list: [{
                a: 1111,
                b: 2222,
                c: 3333,
                d: 4444
            }, {
                a: 1112,
                b: 2222,
                c: 3333,
                d: 4444
            }]
        }]
    }, {
        a: 12,
        b: 22,
        c: 32,
        d: 42
    }]
}, {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
    list: [{
        a: 22,
        b: 32,
        c: 42,
        d: 52,
        list: []
    }]
}, {
    a: 3,
    b: 3,
    c: 4,
    d: 5,
    list: [{
        a: 32,
        b: 32,
        c: 42,
        d: 52,
        list: []
    }]
}, {
    a: 4,
    b: 3,
    c: 4,
    d: 5,
    list: [{
        a: 31,
        b: 32,
        c: 42,
        d: 52,
        list: []
    }]
}, {
    a: 5,
    b: 3,
    c: 4,
    d: 5,
    list: [{
        a: 42,
        b: 32,
        c: 42,
        d: 52,
        list: []
    }]
}, {
    a: 6,
    b: 3,
    c: 4,
    d: 5,
    list: [{
        a: 62,
        b: 32,
        c: 42,
        d: 52,
        list: []
    }]
}];

