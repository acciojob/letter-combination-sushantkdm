function letterCombinations(input_digit) {
  //Complete the function
	const phone={
        '0':"0",
        '1':'1',
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }

    let n=input_digit.length
    let arr=[];

    if(!n) return arr;

    const bfs=(pos, str)=>{
        if(pos===n){
            arr.push(str)
        }
        else{
            let letter=phone[num[pos]]

            for(let i=0; i<letter.length; i++){
                bfs(pos+1, str+letter[i] )
            }
        }
    }

    bfs(0,"")
    return arr;
}

module.exports = letterCombinations;
