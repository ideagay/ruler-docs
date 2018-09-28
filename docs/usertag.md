# UserTag

    import {UserTag} from '@souche-f2e/ruler-tool';

## fetchTags

### 入参

    -

### 出参

    allTags {
      name
      created
      creator
      appName
    }

### 用法

    UserTag.fetchTags().then((res) => {
        console.log(res);
    });

## addTag

### 入参

    {
        userId
        tag
    }

### 出参

    [{
        name
        created
        creator
        appName
    }]

### 用法

    UserTag.addTag({userId, tag}).then(res => {
        console.log(res);
    });

## deleteTag

### 入参

    {
        userId
        tag
    }

### 出参

    [{
        name
        created
        creator
        appName
    }]

### 用法

    UserTag.deleteTag({userId, tag}).then(res => {
        console.log(res);
    });
