const getLocalStr = (key)=>{
const getData = localStorage.getItem(key)
if(getData){
     return JSON.parse(getData)
}
else{
return []
}
};

const setData = (key,id) =>{
      let setValue = getLocalStr(key)
      if(setValue.includes(id)){
            return
      }
      else{
            setValue.push(id)
            localStorage.setItem(key,JSON.stringify(setValue))
      }
}
export {setData}




