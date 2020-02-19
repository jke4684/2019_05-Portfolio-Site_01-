const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post("/nodemailerTest", function(req, res, next){
  let email = req.body.field1; //발신자 
  let name = req.body.field2;// 성명
  let text = req.body.field-style; //내용
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aktkrl0@gmail.com',  // gmail 계정 아이디를 입력
      pass: '1qaz2wsxE!'          // gmail 계정의 비밀번호를 입력
    }
  });

  let mailOptions = {
    from: 'aktkrl0@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email ,                     // 수신 메일 주소
    subject: name,   // 제목
    text: text  // 내용
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect("/");
})

module.exports = router;