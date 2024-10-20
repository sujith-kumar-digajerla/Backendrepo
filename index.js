const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/check-number', (req, res) => {
  let num = parseFloat(req.query.num);
  let reslt;
  if (num >= 0) {
    reslt = 'positive';
  } else {
    reslt = 'negative';
  }
  res.send('num is ' + reslt);
});

app.get('/check-even-odd', (req, res) => {
  let num = parseFloat(req.query.num);
  let reslt;
  if (num % 2 === 0) {
    reslt = 'even';
  } else {
    reslt = 'odd';
  }
  res.send('num is ' + reslt);
});

app.get('/check-login', (req, res) => {
  let isLogin = req.query.isLogin === 'true';
  let reslt;
  if (isLogin) {
    reslt = 'user is loged in';
  } else 'not';
  res.send(reslt);
});

app.get('/checkdiscount', (req, res) => {
  let age = req.query.age;
  let reslt;
  if (age > 65) {
    reslt = 'eligible';
  } else {
    reslt = 'not eligible';
  }
  res.send(reslt);
});

function welcomeMsg() {
  return 'welcome to page';
}

app.get('/welcome', (req, res) => {
  res.send(welcomeMsg());
});

app.get('/greet', (req, res) => {
  let uname = req.query.uname;
  res.send(greetUser(uname));
});

function greetUser(user_) {
  return 'Hello ' + user_;
}

function getSum(a, b) {
  let tot = a + b;
  return tot.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(getSum(num1, num2));
});

function DiscPrice(p, d, t) {
  let dp = p * (1 - d / 100) * (1 + t / 100);
  return dp.toString();
}

app.get('/discprice', (req, res) => {
  let price = parseFloat(req.query.price);
  let disc = parseFloat(req.query.disc);
  let tax = parseFloat(req.query.tax);

  res.send(DiscPrice(price, disc, tax));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
