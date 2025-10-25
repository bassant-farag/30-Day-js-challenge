var createCounter=function(init)
{
    let org_value=init;
    
    return{
        increment:function()
        {
            return ++init;
            
        },
        decrement:function()
        {
            return --init;
        },
        reset:function(){
            init=org_value;
            return org_value;

        }
    }
}