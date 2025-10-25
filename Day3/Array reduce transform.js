var reduce = function(nums, fn, init) {
    let val;
    if(nums.length==0)
    return init;
    else
    {
        for(let i=0;i<nums.length;i++)
    {
        if(i==0)
        {
            val=fn(init,nums[0]);
        }
        else
        {
            val=fn(val,nums[i]);
        }
    }
    return val;

    }
    
};