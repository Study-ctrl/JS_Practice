
class BasicRecursion{
    constructor(name, year, n){
        this.name ="Suryateja";
        this.year = "2022";
        this.value=0;
    }

    printval_n_to_1(n)
    {
        if(n===1)
        {
            console.log(n+" ");
            return;
        }
        console.log(n+" ");
        this.printval_n_to_1(n-1);
    }

    printval_1_to_n(n)
    {
        if(n===1)
        {
            console.log(n+" ");
            return;
        }
        this.printval_1_to_n(n-1);
        console.log(n+" ");
    }
    
    factorial(n)
    {
        if(n==1)
        {
            return 1;
        }
       return n*this.factorial(n-1);
        
    }

    sum(n)
    {
        if(n==1)
        {
            return 1;
        }
       return n+this.sum(n-1);
        
    }
    
    sum_of_digits(n)
    {
        if(n<10)
        {
            return n;
        }
        return Math.floor(n%10)+this.sum_of_digits(Math.floor(n/10));
    }

    product_of_digits(n)
    {
        if(n<10)
        {
            return n;
        }
        return Math.floor(n%10)*this.product_of_digits(Math.floor(n/10));
    }

    reverse_number(n){ 
        if(n<10)
        {
            return this.value;
        }
        this.value = Math.floor(n%10)+10*this.value;
        return this.reverse_number(Math.floor(n/10));
    }
}

let printx = new BasicRecursion("test","2012", 11);
printx.printval_n_to_1(10);
printx.printval_1_to_n(10);
console.log(printx.factorial(7)); 
console.log(printx.sum(5)); 
console.log(printx.sum_of_digits(34));
console.log(printx.product_of_digits(34));
console.log(printx.reverse_number(34090));