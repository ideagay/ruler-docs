# Data

    import {Data} from '@souche-f2e/ruler-tool';
    
    accessKey 是你操作其他应用数据时所必需的参数,如果是自己应用的数据,则不用传

## search

### 入参

    {
        * name <<String>> 表名
        limit <<Object>> 分页数据 默认{page: 1, pageSize: 20} 
        condition <<Object>> 查询条件 默认 {}
        accessKey <<String>> 权限key值
    }

### 出参

    {
        totalPage
        currentPage
        totalNumber
        perPageNumber
        data :     [{
                       _id
                       name
                       desc
                       type
                       protected
                       index
                       defaultValue
                       updated
                       created
                   }]
    }

### 用法
> mongodb的操作符都以`$`来标记

- 基础用法

```
let params = {
    limit: {page: 1, pageSize: 20},
    name: 'apps',
    condition: {'name': 'tangeche'},
    accessKey: 'xxxx'
}
Data.search(params).then((res) => {
    console.log(res);
});

运算符
- $nor
- $gt
- $gte
- $lt
- $lte
- $ne
- $in
- $nin
```

- 模糊查询($regex)

```
condition: {'name': {$regex: 'test'}} //可以是某个字符串模糊匹配， 也可以是一个正则表达式
``` 

- 复合查询(and | or)

```
condition: [{name: '张三'}, {age: '18'}] //default is $and 相当于{$and: [xxx, xxx, ...]}
condition: {$or: [{name: '张三'}, {age: '18'}]}
```
## aggregateQuery

### 入参

```
{
    * name <<String>> 表名
    limit <<Object>> 分页数据 默认{page: 1, pageSize: 20} 
    condition <<Object>> 查询条件 默认 {}
    accessKey <<String>> 权限key值
}
```

### 出参

```
{
    totalPage
    currentPage
    totalNumber
    perPageNumber
    data: [{
        _id
        name
        desc
        type
        protected
        index
        defaultValue
        updated
        created
    }]
}
```

### 用法

- 基础用法

```
let params = {
    limit: {page: 1, pageSize: 20},
    name: 'apps',
    condition: {
        $unwind: '$fields'
    },{
        $match: {'fields.name': 'userId'}
    },
    accessKey: 'xxxx'
}
Data.aggregateQuery()
```

- 多级嵌套查询($unwind)

    > 当一个对象有一个属性是Oject类型的数组的时候， 可以使用$unwind对数组字段进行拆分，然后再使用$match进行查询

```
例：
{
    {
        fields: [{
            name: 'userId'
        }, {
            name: 'roleId'
        }, {
            name: 'roleCode'
        }, {
            name: 'roleName'
        }]
   }, 
   {
       fields: [{
           name: 'appName'
       }, {
           name: 'version'
       }, {
           name: 'createDate'
       }, {
           name: 'updateDate'
       }]
   },...
}
```

```
condition: {
    $unwind: '$fields'
},{
    $match: {'fields.name': 'userId'}
}
```

- 聚合查询($lookup)

```
condition: [{
    $lookup: {
        from: 'test-blogs',//lowerCase`${appName}-${name}s`  这里appName是Test
        localField: 'userid',
        foreignField: 'uid',
        as: 'blogs'
    }
}, {
    $match: {
        name: '用户3'
    }
}]

from // 要关联的表 由于动态创建的表名是以Collection表里appName-names生成的
localField // 主键
foreignField // 外键
as //  对应的外键集合的数据，default "inventory_docs" 
```  

## insert

### 入参

    {
        * name <<String>> 表名
        data  <<Object|Array(Object)>> 插入数据,必须是你在表结构中定义好的字段
        accessKey <<String>> 权限key值
    }

### 出参

    [{
        _id
        name
        desc
        type
        protected
        index
        defaultValue
        updated
        created
    }]

### 用法
    let params = {
        name: 'apps',
        data: {'name': 'tangeche'},
        accessKey: 'xxxx'
    }
    Data.insert(params).then(res => {
        console.log(res);
    });
    

## update

### 入参

    {
        * name <<String>> 表名
        * data  <<Object|Array(Object)>> 更新数据,必须是你在表结构中定义好的字段
        * ids  <<Array(String)>> 记录的_id 如果传了ids,则会忽略condition,
        * condition <<Object>> 查询条件 默认 {} 有ids时可不传
        accessKey <<String>> 权限key值
    }

### 出参

    {
        _id
        name
        desc
        type
        protected
        index
        defaultValue
        updated
        created
    }

### 用法
    let params = {
        name: 'apps',
        data: {'name': 'tangeche'},
        ids: ['1', '2'],
        condition: {'age': 20},
        accessKey: 'xxxx'
    }
    Data.update(params).then(res => {
        console.log(res);
    });
    
    
## insertAndUpdate

### 入参

    {
        * name <<String>> 表名
        * data  <<Object|Array(Object)>> 更新数据,必须是你在表结构中定义好的字段
        accessKey <<String>> 权限key值
    }

### 出参

    [{
        _id
        name
        desc
        type
        protected
        index
        defaultValue
        updated
        created
    }]

### 用法
    let params = {
        name: 'apps',
        data: {'name': 'tangeche'},
        accessKey: 'xxxx'
    }
    Data.insertAndUpdate(params).then(res => {
        console.log(res);
    });
    

## delete

### 入参

    {
        * name <<String>> 表名
        * ids  <<Array(String)>> 记录的_id 如果传了ids,则会忽略condition,
        * condition <<Object>> 查询条件 默认 {} 有ids时可不传
        accessKey <<String>> 权限key值
    }

### 出参

    {
        _id
        name
        desc
        type
        protected
        index
        defaultValue
        updated
        created
    }

### 用法
    let params = {
        name: 'apps',
        ids: ['1', '2'],
        condition: {'name': 'tangeche'},
        accessKey: 'xxxx'
    }
    
    Data.delete(params).then(res => {
        console.log(res);
    });
