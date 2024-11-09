describe("", () => {
    it("test 1", () => {
    })
    it("test 2", () => {
    })
})

//npx cypress run --record --key 710f03b0-f8e2-4323-9d45-ba60db5b6a71 --spec cypress/integration/com.techproed/*.js  kodu ile hepsi  çalıştı 
//npx cypress run -- cypress/integration/com.techproed/day06_hooks.js --record --key 710f03b0-f8e2-4323-9d45-ba60db5b6a71 ile istediğin dosya çalıştı

// report için de npx cypress run --spec cypress/integration/com.techproed/day01_login.js

//npx cyress run + testin pathini run edince calisiyor.

//========================================

/* 

1- /// <reference types="Cypress" />
her sayfanın başına bunu yazrsak tamamlayıcı sozluk gibi (anımsama) alakalı dosyaları veya methodları getirir.

veya

2- support içinde jsconfig.json dosyası oluşturup içine {
  "include": ["./node_modules/cypress", / "cypress/**/ 
// }

// yazıyoruz. birincisi sacece dosya icinde calisirken  geneli kapsar.


/*


*** Scripts ekleme ***
npm run ...... => testleri terminalden run etmek icin kullanilir
*****************************************************************************
*****************************************************************************
Bir dosyayi headless (browsersiz) run etmek icin:
1) ./node_modules/.bin/cypress run --spec cypress/integration/com.techproed/day01_login_test.js
2) npx cypress run --spec cypress/integration/com.techproed/day01_login_test.js
3) ./node_modules/.bin/cypress run --spec cypress/integration/com.techproed/day01_login_test.js --browser chrome
4) npx cypress run --spec cypress/integration/com.techproed/day01_login_test.js --browser chrome
*****************************************************************************
*****************************************************************************
Tum testleri run etmek icin
./node_modules/.bin/cypress run
Run etmek icin kendi kodumuzu olusturma:
STEPS:
1.butun testleri run etmek icin script olustur
package.json > scripts
  “scripts”: {
    “test”: “./node_modules/.bin/cypress run”,
    “merge”: “mochawesome-merge cypress/reports/*.json > cypress/reports/output.json”,
    “generate_mochawesome_report”: “marge cypress/reports/output.json --reportDir ./ --inline”
  }
yukaridaki koddaki
    “test”: “echo \“Error: no test specified\” && exit 1",
bolumune
 “test”: “./node_modules/.bin/cypress run”,
 kodunu ekliyoruz.
 [(./node_modules/.bin/cypress run) -> test]
boylece
npm run test
komutunu olusturmus olduk.
( ./node_modules/.bin/cypress run )
2. headed mode ekleme
./node_modules/.bin/cypress run --headed
“test-headed”:“./node_modules/.bin/cypress run --headed”
Bu kodu package.json -> scripts in icine ekliyoruz
  “scripts”: {
    “test”: “./node_modules/.bin/cypress run”,
    “test-headed”:“./node_modules/.bin/cypress run --headed”,
    “merge”: “mochawesome-merge cypress/reports/*.json > cypress/reports/output.json”,
    “generate_mochawesome_report”: “marge cypress/reports/output.json --reportDir ./ --inline”
  }
boylece
npm run test -headed
kodunu olusturmus olduk
3. browser ekleme
./node_modules/.bin/cypress run --headed --browser=chrome
“test-chrome”:“./node_modules/.bin/cypress run --headed --browser=chrome”
Bu kodu package.json -> scripts in icine ekliyoruz
  “scripts”: {
    “test”: “./node_modules/.bin/cypress run”,
    “test-headed”:“./node_modules/.bin/cypress run --headed”,
    “test-chrome”:“./node_modules/.bin/cypress run --headed --browser=chrome”,
    “merge”: “mochawesome-merge cypress/reports/*.json > cypress/reports/output.json”,
    “generate_mochawesome_report”: “marge cypress/reports/output.json --reportDir ./ --inline”
  }
Boylece
npm run test-chrome
kodunu olusturmus olduk
4. dashboard run kodu ekleme
./node_modules/.bin/cypress run --record --key 992f69ba-ef7c-407b-a762-143ab7d21401
Add script:
“test-dashboard”:“./node_modules/.bin/cypress run --record --key 992f69ba-ef7c-407b-a762-143ab7d21401"
Bu kodu package.json -> scripts in icine ekliyoruz
  “scripts”: {
    “test”: “./node_modules/.bin/cypress run”,
    “test-headed”:“./node_modules/.bin/cypress run --headed”,
    “test-chrome”:“./node_modules/.bin/cypress run --headed --browser=chrome”,
    “test-dashboard”:“./node_modules/.bin/cypress run --record --key 992f69ba-ef7c-407b-a762-143ab7d21401”,
    “merge”: “mochawesome-merge cypress/reports/*.json > cypress/reports/output.json”,
    “generate_mochawesome_report”: “marge cypress/reports/output.json --reportDir ./ --inline”
  }
Boylece
npm run test-dashboard
kodunu olusturmus olduk

*/