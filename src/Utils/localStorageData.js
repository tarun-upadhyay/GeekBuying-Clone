export const getLocalData = (key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data
    }catch(e){
        return null
    }
}
export const saveData = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
}