console.log(1)
for(let i =0;i<100000000;i++){}
console.log(2)
console.log(3)


//console waits untill for loop executed and prints 3rd line 


setTimeout(()=>console.log(1),5000)
setTimeout(()=>console.log(2),1000) 

// in async both starts executeing and  2prints first because of 1000sec