function fibonacciSeries(numbers){
    let n = []
    if (numbers === 1){
        n[0] = 0
        return n
    } else if (numbers === 2){
        n = [0, 1]
        return n
    } else{
        n = [0, 1]
        let i = 1
        while(n.length <= numbers){
                let a = n[i-1] + n[i]
                n.push(a)
                i++
        }
        return n
    }
}
n = fibonacciSeries(10)
console.log(n)