// ES6 module = file that contains reusable code that can be imported into other JS files.
//            Write reusable code for many different apps.
//            Can contain variables, classes, functions ... and more
//            Introduced as part of ECMAScript 2015 update
//            For HTML when including js file you have to specify the type="module"

// import keyword for importing
import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(getArea(2));
console.log(PI);
console.log(getCircumference(2));
console.log(getVolume(2));