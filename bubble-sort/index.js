function bblSort(array){
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < ( array.length - i -1 ); j++){
        if(array[j] > array[j+1]){
          let tmp = array[j]
          array[j] = array[j + 1]
          array[j+1] = tmp
        }
      }
    }
    return array
   }
        
   let array = [234, 43, 55, 63,  5, 6, 235, 547];
    
   console.log(`before: [${array}] \nafter: [${bblSort(array)}]`);