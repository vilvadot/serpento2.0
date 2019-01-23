# P5 ES6 Scaffolding

This is my best attempt at making a simple generic scaffolding for p5js projects that allows me to write them using all the features of javascript's ES6.

# How?

It uses [Parcel.js](https://github.com/parcel-bundler/parcel) as the bundler which automagically takes care of everything for us 🙏🏻.

I also tried to simplify the most the use of the library. So you don't have to inject it to any of your classes, functions etc... Its not by any means a good practice, but it makes life easier in this case.

Your linter might get crazy for undeclared names too.

# Getting started

Run:

  `npm run dev` 

and Parcel will take care of the rest. You can use ES6 in all of its glory.

# Building

Run:

  `npm run build`

A /dist folder will be generated with your project in it. You can serve that static index.html and your site should be up and runnning in minutes.