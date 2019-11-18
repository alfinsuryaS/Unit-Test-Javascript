# NOTES:

- Unit Tests: 
  1. Testing of individual functions or classes by supplying input and making sure the output is as expected. A single piece of code (usually an object or a function) is tested
  2. Unit testing is the process through which units of source code are tested to verify if they work properly. Performing unit tests is a way to ensure that all functionalities of an application are working as they should. Unit tests inform the developer when a change in one unit interferes with the functionality of another
  

- npm init (
    Untuk membuat file package.json, dimana nantinya file ini digunakan untuk manifest project kamu, mulai dari
    informasi project, depedencies, dan beberapa kontrol seperti command untuk running project kita, dll
  )
-  Untuk runnernya menggunakan node / nodemon
-  TDD : Kode tes lebih dulu dibuat dari kode yang dites, 
   BDD: Kode yang akan dites dibuat lebih dulu, baru kode test  
- Install: npm install @babel/core @babel/node @babel/preset-env --save-dev  
- npm install nodemon -g  
- Add run script to package.json 
- Describe, it, toBe, expect => like "RSpec" style tests 
- For globally you can use webpacks loader: expose-loader