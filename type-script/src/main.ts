
// // infers ,implicity
// let infers = 'high';


// // exlicit type
// let str: string = 'string';

//                  // Arrays AND OBJECTS

// let stringArr = ['Hell', 'is', 'hot'];

// let guitars = ['how', 1, 'Are']

// let mixedData = ['EVH', 1992, true]

// console.log(guitars.unshift('HIX'));
// console.log(guitars)

// //  tuple

// let myTuple: [string, number, boolean] = ['Dave', 22, true]



// /// type casting

// type One = string;
// type Two = string | number;
// type Three = 'hello'

// //conver to more or less specific
// const a: One = 'lll'
// const b = a as Two //less specific
// const c = a as Three

// console.log(c);



// // TS solution Type Assertions
// const year = document.getElementById("year") as HTMLElement
// // const thisYear = (new Date().getFullYear() as unknown) as string;
// const thisYear = new Date().getFullYear.toString()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear





// ///////////       Classes             /////////////


class Coder {
    // name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript"
    ){
        this.name = name
        this.music = music;
        this.age = age
        this.lang = lang
    }
    getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Tock', 55)
console.log(Dave.getAge());


class WebDev extends Coder{


    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name, music ,age)
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }


}

const Sara = new WebDev('Mac','Sarah', 'LOFI', 23)
console.log(Sara.getLang())



// // ///////     //        ///////////        //

interface Musician{
    name: string,
    instrument: string,
    play(action:string):string,
}