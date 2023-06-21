function threeSum(arr, target) {
// write your code here
	let ans = 0;
        let diff = Number.MAX_VALUE;
        for(let i=0; i<arr.length; i++)
            {
                for(let j=i+1; j<arr.length; j++)
                    {
                        for(let k=j+1; k<arr.length; k++)
                            {
                                sum = arr[i]+arr[j]+arr[k];
                                let newDiff = Math.abs(sum - target);
                                if(newDiff<diff)
                                {
                                    ans = sum;
                                    diff = newDiff
                                }
                            }
                    }
            }
	return ans;
  
}

module.exports = threeSum;
