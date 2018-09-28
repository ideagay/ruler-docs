# File

    import { File } from '@souche-f2e/ruler-tool';

## fetchAll

### 入参

    {
        *apps: <<String>> 关联的应用
        *pageSize: <<Number>> 分页，一页获取多少条
        *page: <<Number>> 分页，获取哪一页的数据
        search: <<String>> 模糊查找符合文件名所的文件
    }

### 出参

    {
        totalPage: <<Number>> 总页数
        currentPage: <<Number>> 当前请求页码
        totalNumber: <<Number>> 总记录条数
        data: [{
            _id
            apps
            path: <<String>> 文件的url
            filename: <<String>> 文件的原始名称
            mimetype: <<String>> 文件的 mimetype 类型
        }]
    }

### 用法

    File
    .fetchAll({
        apps: '5b19ec2a3aaa1900073cebde',
        // search: 'file',
        page: 1,
        pageSize: 20
    })
    .then((d) => {
        console.log(d);
    })

## fetchById

### 入参

    {
        _id: <<String>> 切记 _id 和 path 两者至少有一个用于查找文件
        path: <<String>>
    }

### 出参

    {
        _id
        apps
        path
        filename
        mimetype
    }

### 用法

    File
    .fetchById({
        // path: 'test2.png',
        _id: '5b4f2801bc480e4e73f41c89'
    })
    .then((d) => {
        console.log(d);
    })


## create

### 入参

    {
        *file: <<File>> multipart-form的文件部分
        *apps: <<String>> 该应用的id
    }

### 出参

    {
        _id
        apps
        path
        filename
        mimetype
    }

### 用法

    // 如果是node调用

    File
    .create({
        file: fs.createReadStream(__dirname + '/file-demo.js'),
        apps: '5b19ec2a3aaa1900073cebde'
    })
    .then((d) => {
        console.log(d);
    })

    // 如果是前端，xhr设置如下，第二句具体上传的文件可以获取

    <input type="file" id="upload" on-change="changed">

    var upload = document.getElementById('upload');
    upload.addEventListener('change', function (e) {
        let theFile = upload.files[0]

        File
        .create({
            file: theFile,
            apps: '5b19ec2a3aaa1900073cebde'
        })
        .then((d) => {
            console.log(d);
        })
    })

## update

### 入参

    {
        *_id: <<String>>
        *filename: <<String>> 欲要改成的文件名
    }

### 出参

    {
        _id
        apps
        path
        filename
        mimetype
    }

### 用法

    File
    .update({
        _id: '5b4f2801bc480e4e73f41c89',
        filename: 'demo.js'
    })
    .then((d) => {
        console.log(d);
    })


## delete

### 入参

    {
        _id: <<String>> _id和path必有一项，用于找到这个文件
        path: <<String>>
    }

### 出参

    {
        _id
        apps
        path
        filename
        mimetype
    }

### 用法

    File
    .delete({
        // path: 'test3.png',
        _id: '5b4f2801bc480e4e73f41c89'
    })
    .then((d) => {
        console.log(d);
    })
