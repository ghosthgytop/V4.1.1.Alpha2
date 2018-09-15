var J = {};

J.instanceOf = function(obj, clazz){
    return java.lang.Class.forName(clazz).isAssignableFrom(obj.getClass());
}

function typeToClass(type) {
    if (typeof(type) != 'string') {
        return type;
    }
    var types = {
        "int": "Integer",
        "long": "Long",
        "string": "String",
        "double": "Double",
        "char": "Character",
        "byte": "Byte",
        "float": "Float"
    };
    if (types[type]) {
        return Packages["java.lang." + types[type]].TYPE;
    }
    return Packages[type];
}

function array(type) {
    var clazz = typeToClass(type);
    var args = arguments;
    args[0] = clazz;
    return java.lang.reflect.Array.newInstance.apply(null, args);
}

J.array = array;

J.toJsArray = function(list, nullListToEmptyArray){
    if(list == null || list == undefined){
        if(nullListToEmptyArray){
            return [];
        }
        return null;
    }
    let arr = Array(list.size());
    for(let i = 0; i < list.size(); i++){
        arr[i] = list.get(i);
    }
    return arr;
}

module.exports = J;