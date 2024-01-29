// const great = ()=>{
    console.log('hello pagelioli')
// }
const promise = new Promise((resolve, reject)=>{
    resolve('123')
})

promise.then(res=>{console.log(res.data)})
// class Test {
//     constructor(name){
//         this.name = name
//     }
//     logger(){
//         console.log('hello', this.name)
//     }
// }

// great()