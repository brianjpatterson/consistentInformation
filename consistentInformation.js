const kowntz = (stakkz, kneedoll) => stakkz.split(kneedoll).length - 1
  
const solution = e => {
    
    let neg, dif, result = []
               
    // fill dummy data
    e[0].forEach( i => result.push(Array.from(Array().fill("."))) )  
    
    // rotate & mirror
    for (let idx=0;idx<e.length;idx++) 
        for (let indx=0;indx<e[idx].length;indx++) 
            result[indx][idx] = e[idx][indx]
    
    // now kowntz
    return result.every( (ele, idx) => {
        neg = kowntz(ele.join(""), "-")
        dif = kowntz(ele.join(""), 1) - neg
        return neg > 0 ? (dif > 0 ? false : true) : true
    })   
} 
