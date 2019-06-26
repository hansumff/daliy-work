function transformStr (str) {
    if (str.split('_').length === 1) return;
    str.split('').reduce((a,b)=>{
        return a + b.substr(0,1).toUpperCase + b.substr(1)
    })
}