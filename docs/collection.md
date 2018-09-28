# Collection

    import {Collection} from '@souche-f2e/ruler-tool';

## createCollection

### 入参

    {
        name: String
        desc: String
        appId: String
    }

### 出参

    {
        _id
        name
        desc
        appName
        created
        updated
        fields {
          _id
          name
          type
          created
          updated
          index
          defaultValue
          desc
        }
    }

### 用法

    Collection.createCollection(args).then((res) => {
        console.log(res);
    });

## fetchCollections

### 入参

    {
        _id: String
    }

### 出参

    [{
        _id
        name
        desc
        appName
        created
        updated
        fields {
          _id
          name
          defaultValue
          index
          created
          updated
        }
    }]

### 用法

    Collection.fetchCollections().then(res => {
        console.log(res);
    });
    
## collectionById

### 入参

    {
        _id
    }

### 出参

    {
        _id
        name
        desc
        appName
        created
        updated
        fields {
          _id
          name
          defaultValue
          index
          created
          updated
        }
    }

### 用法

    Collection.collectionById(args).then(res => {
        console.log(res);
    });
    

## addField

### 入参

    {
        _id
        name
        type
        defaultValue
        index
        desc
    }

### 出参

    {
      _id
      name
      desc
      appName
      created
      updated
      fields {
        _id
        name
        type
        created
        updated
        index
        defaultValue
        desc
      }
    }

### 用法

    Collection.addField(args).then(res => {
        console.log(res);
    });
    
## updateField

### 入参

    {
        _id
        fieldId
        name
        type
        defaultValue
        index
        desc
    }

### 出参

    {
      _id
      name
      desc
      appName
      created
      updated
      fields {
        _id
        name
        type
        created
        updated
        index
        defaultValue
        desc
      }
    }

### 用法

    Collection.updateField(args).then(res => {
        console.log(res);
    });  

## deleteField

### 入参

    {
        _id
        fieldId
    }

### 出参

    {
      _id
      name
      desc
      appName
      created
      updated
      fields {
        _id
        name
        type
        created
        updated
        index
        defaultValue
        desc
      }
    }

### 用法

    Collection.deleteField(args).then(res => {
        console.log(res);
    }); 
      
## deleteCollection

### 入参

    {
        _id
    }

### 出参

    {
      _id
      name
      desc
      appName
      created
      updated
      fields {
        _id
        name
        type
        created
        updated
        index
        defaultValue
        desc
      }
    }

### 用法

    Collection.deleteCollection(args).then(res => {
        console.log(res);
    });      

## updateCollection

### 入参

    {
        _id
        name
        desc
    }

### 出参

    {
      _id
      name
      desc
      appName
      created
      updated
      fields {
        _id
        name
        type
        created
        updated
        index
        defaultValue
        desc
      }
    }

### 用法

    Collection.updateCollection(args).then(res => {
        console.log(res);
    }); 
