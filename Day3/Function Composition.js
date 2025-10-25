var compose = function(functions) {
    
    return function(x) {
        let result =x;
        for(let i = functions.length -1 ; i>=0;i--)
        {
            let fun=functions[i];
            result=fun(result);
        }
        return result;
    }
};