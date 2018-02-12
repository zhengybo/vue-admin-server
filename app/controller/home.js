'use strict';
// const path = require('path')
// path.resolve(__dirname, '../../');
// console.log(__dirname);

const Controller = require('egg').Controller;
// require('./../store/lib/nav/index.js');
class HomeController extends Controller {
  async index(nav) {

    const newsList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    console.log(this.ctx.nunjucks);
    await this.ctx.render('page/levelOne/index/index.html', {
      html : this.ctx.html,
      list: newsList.list ,
      hungry : true,
      food : {
        'ketchup': '5 tbsp',
        'mustard': '1 tbsp',
        'pickle': '0 tbsp'
      },
      points : [[0, 1, 2], [5, 6, 7], [12, 13, 14]],
      scripts : [
        '/public/js/lib/jquery-1.10.2.min.js',
        '/public/js/lib/jquery.SuperSlide.2.1.1.js',
        '/public/js/lib/jquery.lazyload.min.js',
        '/public/js/constr/news.js'
      ],
      css : [
        '/public/css/lib/style.css',
        '/public/css/lib/public.css',
        '/public/css/compoents/other.css',
        '/public/css/compoents/carousel.css',
        '/public/css/compoents/news.css',
        '/public/css/compoents/accordion.css',
        '/public/css/compoents/rollUp.css',
        '/public/css/compoents/picScroll.css',
        '/public/css/compoents/subTit.css',

      ],
      meta : {
        content : ''
      },
      rollUp : {
        title : '通知公告',
        children : [
          {name : '2012-12',content:'淘宝直送范德萨发xdsdss'},
          {name : '2012-12',content:'淘宝直送范德萨发'},
          {name : '2012-12',content:'淘宝直送范德萨发'},
          {name : '2012-12',content:'淘宝直送范德萨发'}
        ]
      },
      accordion : [
        {
          title : '保险业务',
          children : [
            {href : '',content:'平安人寿保单快速查询'},
            {href : '',content:'万能结算利率和投连价格公告123222222'},
            {href : '',content:'平安理财宝投资净值公告'},
            {href : '',content:'产险承保理赔信息客户自主查询'}
          ]
        },
        {
          title : '保险业务',
          children : [
            {href : '',content:'平安人寿保单快速查询'},
            {href : '',content:'万能结算利率和投连价格公告'},
            {href : '',content:'平安理财宝投资净值公告'},
            {href : '',content:'产险承保理赔信息客户自主查询'}
          ]
        },
        {
          title : '保险业务',
          children : [
            {href : '',content:'平安人寿保单快速查询'},
            {href : '',content:'万能结算利率和投连价格公告'},
            {href : '',content:'平安理财宝投资净值公告'},
            {href : '',content:'产险承保理赔信息客户自主查询'}
          ]
        }
      ],
      picScroll : [
        {href : '',src:'/public/images/public/pic1.jpg'},
        {href : '',src:'/public/images/public/pic2.jpg'},
        {href : '',src:'/public/images/public/pic3.jpg'},
        {href : '',src:'/public/images/public/pic4.jpg'},
        {href : '',src:'/public/images/public/pic5.jpg'},
        {href : '',src:'/public/images/public/pic6.jpg'},
        {href : '',src:'/public/images/public/pic7.jpg'},
        {href : '',src:'/public/images/public/pic8.jpg'},
        {href : '',src:'/public/images/public/pic9.jpg'}
      ],
      tabNews : [
        {
          name : 'saxasd',
          data : [
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
          ]
        },
        {
          name : 'saxasd',
          data : [
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
          ]
        },
        {
          name : 'saxasd',
          data : [
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
            {date : '2012-12',content:'淘宝直送范德萨发'},
          ]
        }
      ],
      footer : {
        address : [{
          name : '新疆',
          value : '',
          sub : [
            {name : '小大',href : 'www.baidu.com'},
            {name : '小大',href : 'www.baidu.com'},
            {name : '小大',href : 'www.baidu.com'}
          ]
        },
        {
          name : '新疆',
          value : '',
          sub : [
            {name : '小大',href : 'www.baidu.com'},
            {name : '小大',href : 'www.baidu.com'},
            {name : '小大',href : 'www.baidu.com'},
            {name : '小大',href : 'www.baidu.com'}
          ]
        }]
      }
     });
  }
}

module.exports = HomeController;
