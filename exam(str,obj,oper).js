console.log("STRING METHODS");

var a="        India is";                                             // 1st 
var b="my Country       ";                        
var strconct=a.concat(" ",b);
var strtrim=strconct.trim();
upcase=strtrim.toUpperCase();
console.log(upcase);

var b="Hope EvryOne is fine";                                          //2nd
var exstr=b.slice(5,13);                               
var exchar=exstr.indexOf("e");
console.log(exchar);
console.log(exstr.toLowerCase());

var c="I";                                                            //3rd
var str="am Bindu";
var conc=c.concat(" ",str);                            
var upcase=conc.toUpperCase();
exchar=upcase[upcase.length-2];
console.log(exchar);

var d="vennela";                                                      //4th
var e="Binela";
var exchar1=d.slice(0,3);                                       
var exchar2=e.slice(-3);
var conct=exchar1.concat(exchar2);
var upcase=conct.charAt(0).toUpperCase() + conct.slice(1,length-1) + conct.charAt(5).toUpperCase();
console.log(upcase);

var f="   everyone   ";                                               //5th
var ftrim=f.trim();
var upcase=ftrim.charAt(0).toUpperCase() + ftrim.slice(1,length-1) + ftrim.charAt(7).toUpperCase();            
var extstr=upcase.slice(5);
var str="Life";
var conct = extstr.concat(" ",str);
console.log(conct);

var g="hello there , how are you";
h=g.split(" ");                                                    //6th
console.log(h);
console.log(h.indexOf("are"));

console.log("-------------------OBJECTS--------------------------------------------");

var Smartpho={                                                      //7th
    brand:"Samsung",
    model:"iphone",
    price: 80000
};
console.log(Smartpho);
Object.seal(Smartpho);
Smartpho.price=60000;
console.log(Object.isSealed(Smartpho));
console.log(Smartpho);

var book={                                                             //8th
    title:"Pride and Prejudice",
    author:"Jane",
    publishyear: 1813
};
console.log(book);
Object.freeze(book);
book.publishyear=1850;
console.log(Object.isFrozen(book));
console.log(book);

let person={                                                          //9th
    firstname:"hima",
    lastname:"bindu",
    age:100
};
let keys=Object.keys(person);
console.log(Object.keys(person));
let values=Object.values(person);
console.log(Object.values(person));

var course={                                                            //10th
    title:"Full stack",
    instructor:"Vamsi Sir",
    duration: "6 mnths"
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);

var employee={                                                            //11th
    name:"Vennela",
    position:"Doctor",
    salary:40000
};
Object.seal(employee);
employee.position="Civil Engineer";
console.log(employee);
console.log(Object.keys(employee));
console.log(Object.isSealed(employee));

console.log("-----------------------STRINGS---------------------------------");

var i="Good morning everyone";                                            //12
exstr=i.slice(5,12);
console.log(exstr.toUpperCase());

var j="hii this is vennela";                                              //13
var upcase=j.toUpperCase();
console.log(upcase);
console.log(upcase.length);

var k="Bindu";                                                            //14
var exchar=k.charAt(0);
console.log(exchar.charCodeAt());

var str="    Hello everyone    ";                                           //15
var strtrim=str.trim();
var strslice=strtrim.slice(2,5);
console.log(strslice);

var str1="Hima";                                                              //16
var str2="Bindu";
var str2lowcase=str2.toLowerCase();
console.log(str1.concat(" ",str2lowcase));

var l="      iiIndia is my Country       ";                                     //17
var ltrim=l.trim();
var ltrimslice=ltrim.slice(2);
console.log(ltrimslice);

var m="Mahathma Gandhi";                                                           //18
var exchar=m.charAt(2);
console.log(exchar.toUpperCase());

console.log("-----------------------OPERATORS--------------------------");

var a=5;                                                                              //19
var b=10;
var c=20;
var d=a*b+c;
console.log(d==100);
console.log(d<=100);
console.log(d>100);
console.log(d!=100);

var x=8;                                                                              //20
var y=12;
var z=y>x;
console.log(x>5 && y<20);  
console.log(x>5 || y<20);  
console.log(!z); 

var num1=25;                                                                          //21
var num2=35;
var greater=  num1>num2?"num1 is greater than num2":"num2 is greater than num1";
console.log(greater);

var m=15;                                                                               //22
var n=10;                                                                                
var sub=m-n;
var div=m/n;
var even1=  sub == "sub%2==0";
var even2=  div != "div%2==0";
console.log(even1);
console.log(even2);

var age=18;                                                                           //23
var agestatus1= age == 18;
var agestatus2= age === age>18;
console.log(agestatus1);
console.log(agestatus2);
