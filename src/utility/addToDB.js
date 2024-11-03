import { toast } from "react-toastify";

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
            // ideally trigger the tost from the component 
            toast(`This book is added to your ${key}  list`)
      }
}
export {setData,getLocalStr}




