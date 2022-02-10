export const addCart=data=>{
    return{
        type:'ADDITEM',
        payload:data
    }
}

export const delCart=data=>{
    return{
        type:'DELITEM',
        payload:data
    }
}
