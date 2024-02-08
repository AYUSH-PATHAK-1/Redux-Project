export const depositeMoney=(amount)=>{
    return(disptch)=>{
        disptch({
            type:"deposit",
            payload:amount
        })
    }
}

export const withdrawMoney=(amount)=>{
    return(disptch)=>{
        disptch({
            type:"withdraw",
            payload:amount
        })
    }
}