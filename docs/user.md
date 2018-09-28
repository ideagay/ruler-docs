# User

    import {User} from '@souche-f2e/ruler-tool';
    
## fetchCurrentRole

### 入参

      
         appId: String
         needAppRole: Boolean
         
      

### 出参

    {
        roleCode
        roleName
        appKey
        appKey
        appRoles {
          roleCode
          roleName
          mobileAppId
          mobileAppName
        }
    }

### 用法

    User.fetchCurrentRole('1', true).then(res => {
        console.log(res);
    });

## fetchAll

### 入参

    {
        page: Number
        number: Number
        keyword: String
        appId: String
    }

### 出参

    {
        totalPage
        currentPage
        totalNumber
        perPageNumber
        data {
            _id
            name
            nickname
            gitlab
            enable
            created
            updated
            roleCode
            roleName
            otherRoles {
              roleCode
              roleName
              appId
            }
            appRoles {
              roleCode
              roleName
              mobileAppId
              mobileAppName
            }
            tags
        }
    }

### 用法

    User.fetchAll().then(res => {
        console.log(res);
    });

## fetchById

### 入参

    {
        _id: String
    }

### 出参

    {
        _id
        name
        nickname
        gitlab
        enable
        created
        updated
        roleCode
        roleName
        otherRoles {
            roleCode
            roleName
            appId
        }
    }

### 用法

    User.fetchById(_id).then(res => {
        console.log(res);
    });

## update

### 入参

    {
        _id: String
        nickname: String
        enable: Boolean
    }

### 出参

    {
        _id
        name
        nickname
        gitlab
        enable
        created
        updated
    }

### 用法

    User.update(_id, nickname, enable).then(res => {
        console.log(res);
    });

## updatePermission

### 入参

    {
        userId: String
        roleId: String
        appId: String
    }

### 出参

    {
        roleCode
        roleName
    }

### 用法

    User.updatePermission(userId, roleId, appId).then(res => {
        console.log(res);
    });


## search

### 入参

    {
        page: Number
        number: Number
        keyword: String
    }

### 出参

    {
        totalPage
        currentPage
        totalNumber
        perPageNumber
        data {
            _id
            name
            nickname
            gitlab
            enable
            created
            updated
            roleCode
            roleName
            otherRoles {
              roleCode
              roleName
              appId
            }
        }
    }

### 用法

    User.search(args).then(res => {
        console.log(res);
    });

## deleteUser

### 入参

    {
        _id: String
    }

### 出参

    {
        _id
        name
        psw
        nickname
        gitlab
        enable
        created
        updated
    }

### 用法

    User.deleteUser(args).then(res => {
        console.log(res);
    });

## fetchUserByToken

### 入参

    {
        token: String   // 非必传
    }

### 出参

    {
        _id
        token
        name
        nickname
        gitlab
        enable
        created
        updated
        roleCode
        roleName
        otherRoles {
            roleCode
            roleName
            appId
        }
    }

### 用法

    User.fetchUserByToken({token: ''}).then(res => {
        console.log(res);
    });
