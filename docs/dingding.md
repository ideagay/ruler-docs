# DingDing

    import {Ding} from '@souche-f2e/ruler-tool';

## searchdduser

### 入参

    {
        * mobile: String 手机号码
    }

### 出参

    { 
        code: '200',
        data:{ 
            shopCode: 'IN000000',
            iid: 2497543,
            dingId: 'xxxxxxxx',
            sex: '1',
            dingDepartment: '杭州总部-无线开发中心-无线业务开发部',
            dateCreate: '2018-05-28 14:20:42',
            lastLoginIp: '172.17.11.79',
            phone: 'xxxxxxxx',
            ssoDingId: '$:LWCP_v1:$XO4ebuJ/XPKeVOcY6EgAjg==',
            dateUpdate: '2018-07-25 14:31:33',
            organization: 'souche',
            nickname: 'xxxxx',
            id: '9teaPjaK2z',
            account: 'xxxxxxxxx',
            email: 'xxxxxxxxx',
            status: '0' 
        },
        msg: '',
        success: true,
        traceId: 'nnUCWy' 
    }

### 用法
    async function getDingId() {
        let result = await Ding.searchDDUser(1358830xxxx);
        console.log(result);
    }
    
## pushddmessage

### 入参

    {
        * msgtype: String 消息类型，可选: text, image, link等;更多可参钉钉消息格式文档（https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.KNUvPX&treeId=374&articleId=104972&docType=1）
        * msgcontent: Object 消息体，可从钉钉文档查看具体对应格式体
        robotToken: String 机器人token
        atMobiles: Array 群机器人发送消息at人的手机号数组
        isAtAll: boolean 群机器人发送消息是否at群所有人，默认false
        mobileList: Array 接收者手机号码，最长20个
        userIdList: Array 接收者的userid列表，最长20个
        deptIdList: Array 接收者部门id列表，最长20个
        toAllUser: boolean 是否发送给企业全部用户，默认false
        callBack: function 发送消息完毕，进行回调函数
        preBack: function 发送消息前，消息回调；函数参数为msgcontent 对象，可以在发送前对消息体进行二次编辑；如果函数返回true，则会暂停发送消息，并调用callBack函数返回
    }

    注意：
    1.robotToken 不为空，则优先发送机器人消息
    2.atMobiles 被@人的手机号(在text内容里要有@手机号)，具体可查看下面用法
    3.robotToken, atMobiles, isAtAll 为发送群机器人参数
    4.mobileList，userIdList，deptIdList，toAllUser只准同时传递一组数据，如果同时传入多个参数，则发送信息优先级为mobileList>userIdList>deptIdList>toAllUser

### 出参

    { 
        success: true,
        code: 200,
        msg: 'success',
        data:{ 
            dingding:{ dingtalk_corp_message_corpconversation_asyncsend_response: [Object] } } 
    }

### 用法
    async function sendDDMessage() {
        let params = {
            msgtype: 'text',
            msgcontent: {
                "content": "测试信息， 测试test11111 @15267854001"
            },
            atMobiles: ['15267854001'],
            robotToken: '3f0b5af0729c2f87f5e8c37decd04080355e5a915f7d5686a78e22de45fbed3b',
            mobileList: ['15267854001'],
            preBack: function(msgcontent) {
                msgcontent['content'] = '这是测试信息1';
            }
        }
        Ding.pushDDMessage(params);
    }