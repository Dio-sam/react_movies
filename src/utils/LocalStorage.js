class LocalStorage{
  save(key,value){
    const storageStr = localStorage.getItem(key);
    let myList = [];
    if (storageStr !== null) {
      myList = JSON.parse(storageStr);
    }
    if (myList.includes(value) === false) {
      myList.push(value);
    }    
  
    localStorage.setItem(key, JSON.stringify(myList));
    console.log("value",value)
   console.log("myList",myList)
  }
  get(key){
    const my_list=localStorage.getItem(key)
    return JSON.parse(my_list)  
  }
}
export default new LocalStorage();