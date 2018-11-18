/*** 写个简单的爬虫, 抓取最新的招聘信息... ***/

const Crawler = require("crawler");
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();  
rule.hour = 10;



const db = [];
const getNowFormatDate = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    var currentdate = year + '-' + month + '-' + strDate;
    return currentdate;
}

const nowDay = getNowFormatDate();

const nowTime = new Date();

//发送邮件
const sendMail = function (href) {
    const nodemailer = require("nodemailer");
    const smtpTransport = nodemailer.createTransport({
        service: '163',
        auth: {
            user: '********@163.com',
            pass: '**********'//注：此处为授权码，并非邮箱密码
        }
    });
    smtpTransport.sendMail({
        from: '**********@163.com',//发件人邮箱
        to: '*********@qq.com, *********@qq.com',//收件人邮箱，多个邮箱地址间用','隔开
        subject: 'hi, 你有新的招聘信息哦',//邮件主题
        text: href.join("\n"),//text和html两者只支持一种
    }, function (err, res) {
        console.log(err, res);
    });
};

const handleDom = function (dom, $) {
    const baseUrl = "http://job.xxxx.cn";
    urlArr = [];
    for (son in dom) {
        if (typeof dom[son] == "object" && dom[son].type == "tag") {
            let url = $(dom[son]).attr("href");
            if (url !== undefined) {
                urlArr.push("打开网址：" + baseUrl + url);
            }
        }
    }
    sendMail(urlArr);
}

let crawler = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            let dom = res.body;
            if (dom) {
                //获得今天以后的招聘信息
                let dom = $("td").find("a").filter(function () {
                    return new Date(Date.parse($(this).text().replace(/-/g, "/"))) >= nowTime;
                });

                //处理招聘信息
                handleDom(dom, $);
                // console.debug(dom, 123);
            }
        }
        done();
    }
});

var j = schedule.scheduleJob(rule, function(){  
    console.log('The answer to life, the universe, and everything!');
    crawler.queue({
        rateLimit: 2000, // `maxConnections` will be forced to 1
        uri: 'http://job.XXXXXX.cn/cms/employment/list/1?page=1',
        // parameter1: "value1",
        // filename: 'myImage.jpg',
        // encoding: null,
        jQuery: true
    });
});


