

Setup Project:
- Unit Tests: Testing of individual functions or classes by supplying input and making sure the output is as expected. A single piece of code (usually an object or a function) is tested
- npm init (
    Untuk membuat file package.json, dimana nantinya file ini digunakan untuk manifest project kamu, mulai dari
    informasi project, depedencies, dan beberapa kontrol seperti command untuk running project kita, dll
  )
-  Untuk runnernya menggunkan node 
-  TDD : Kode tes lebih dulu dibuat dari kode yang dites, 
  BDD: Kode yang akan dites dibuat lebih dulu, baru kode test  
- Install: npm install @babel/core @babel/node @babel/preset-env --save-dev  
- npm install nodemon -g  
- Add this package.json 
  "scripts": {
      "test": "nodemon --exec babel-node helloworld.test.js"
    },

  and .babelrc: 
  {
      "presets": [
          "@babel/preset-env"
      ]
  }
- Describe, it, toBe, expect => like "RSpec" style tests 
- 

EMPTY_ARGS(actual) ? ERROR_MESSAGE() : (actual !== expected) ? fail(expected, ' !== ', actual) : null;

if (!EMPTY_ARGS(actual)) {
            if (actual !== expected) {
                fail(expected, ' !== ', actual)
            }
        } else {
            ERROR_MESSAGE();
        }