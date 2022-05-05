function smallerNumbersThanCurrent(nums: number[]): number[] {
    const oldNums = [...nums];

    nums.sort((a:number,b:number)=>{
        return a - b;
    });
    
    const map = new Map<number,number>();
    for(let i = nums.length -1; i > -1; i--){
        map.set(nums[i],i);
    }

    return oldNums.map((value:number)=>{
        return map.get(value) as number;
    });
};

const res = smallerNumbersThanCurrent([8,1,2,2,3]);
console.log(res);