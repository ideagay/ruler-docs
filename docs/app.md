# App

    import {App} from '@souche-f2e/ruler-tool';
    
## newApp

### 入参

    {
        name
        desc
    }

### 出参

    {
      _id
      name
      appKey
      desc
      createrId
      createrName
      enable
      created
      updated
    } 

### 用法
    
    App.newApp(name, desc).then(res => {
        console.log(res);
    });    

## apps

### 入参

    -

### 出参

    {
        _id
        name
        appKey
        desc
        createrId
        createrName
        enable
        created
        updated
    } 

### 用法
    
    App.apps().then(res => {
        console.log(res);
    });

## appById

### 入参

    {
        _id
    }

### 出参

    {
        _id
        name
        appKey
        desc
        createrId
        createrName
        enable
        created
        updated
    } 

### 用法

    App.appById({_id: this.$route.query.appId}).then(res => {
        this.app = Object.assign({}, this.app, res);
    });
    
## updateApp

### 入参

    {
        _id
        name
        appKey
        desc
        createrId
        createrName
        enable
        created
        updated
    }

### 出参

    {
        _id
        name
        appKey
        desc
        createrId
        createrName
        enable
        created
        updated
    } 

### 用法

    App.updateApp(args).then(res => {
        this.app = res;
    });
    
## deleteApp

### 入参

    {
        appKey
        _id
    }

### 出参

    {
        _id
        name
        appKey
        desc
        createrId
        createrName
        enable
        created
        updated
    } 

### 用法
    
    App.deleteApp(appKey, _id).then(res => {
        console.log(res);
    }); 


