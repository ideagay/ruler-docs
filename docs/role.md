# Role

    import {Role} from '@souche-f2e/ruler-tool';

## addRole

### 入参

    {
        name: String
        code: String
    }

### 出参

    {
        _id
        name
        code
    }

### 用法

    Role.addRole(name, code).then((res) => {
        console.log(res);
    });

## fetchAll

### 入参

    -

### 出参

    [{
        _id
        name
        code
    }]

### 用法

    Role.fetchAll().then(res => {
        console.log(res);
    });

## update

### 入参

    {
        _id
        name
        code
    }

### 出参

    {
        _id
        name
        code
    }

### 用法

    Role.update(_id, name, code).then(res => {
        console.log(res);
    });
