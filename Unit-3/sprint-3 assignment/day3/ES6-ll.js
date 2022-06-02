// CUSTOM ARRAY



class Array{
    constructor(){
        this.size=0;
        this.arr=[];
    }

    push(el){
        this.arr[this.size]=el;
        this.size++;
    }
    pop(){
        this.arr.pop();
        this.size--;
    }
    top(){
        console.log(this.arr[this.size-1])
    }
    print(){
        console.log(this.arr);
    }
    printReverse(){
        var bag='';
        for(var i=this.size-1; i>=0;i--){
            bag+=this.arr[i]+" ";
        }
        console.log(bag);
    }
    Size(){
        console.log(this.size)
    }
}

let arr1= new Array()

arr1.push(5)
arr1.push(6)
arr1.top();
arr1.pop();
arr1.push(9)
arr1.push(3);
arr1.print();
arr1.printReverse();
arr1.Size()
