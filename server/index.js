const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser')
// const cp = require('child_process');
const next = require('next');
const router = require('./router');
const { parse } = require('url')
const dev =  process.env.NODE_ENV !== 'production';
const PORT = dev ? 5555 : 80
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const getQuery = (url, needQuery=[]) => {
  const parsedUrl = parse(url, true)
  const { pathname, query } = parsedUrl
  /*let tQuery = {};
  needQuery.forEach(it => {
    query[it] && (tQuery[it] = query[it])
  })*/
  return query;
}

const routerMap = {
  feedback: { url: '/feedback' },
  standard: { url: '/standard' },
  catalogmng: { url: '/catalogmng' },
  noticemng: { url: '/noticemng' },
  collect: { url: '/collect' },
  portrait: { url: '/account/portrait' },
  tag: { url: '/tag' },
  sitedetail: { url: '/sitedetail' },
  replyme: { url: '/replyme' },
  system: { url: '/system', query: ['pageIndex', 'status', 'catalog', 'search'] },
  index: { url: '/', query: ['pageIndex', 'status', 'catalog', 'search'] }
}

nextApp.prepare()
  .then(() => {
    const app = express();
    app.use(session({
      name: 'machineCookie',
      secret:"MIIEpAIBAAKCAQEAs4nNSQfaORLb4yL49jcPI+LN+UshKX+gWcqBATwKepN2BvG+",    //设置签名秘钥  内容可以任意填写
      // cookie:{maxAge:30 * 1000 * 60},    //设置cookie的过期时间，例：30minutes后session和相应的cookie失效过期
      // cookie:{maxAge: 20 * 1000},    // 测试用
      resave:false,      //强制保存，如果session没有被修改也要重新保存
      saveUninitialized: false    //如果原先没有session那么久设置，否则不设置
    }))

    app.use(cookieParser());
    app.use(bodyParser.json({limit: '2mb'}));
    app.use(bodyParser.urlencoded({limit: '2mb', extended:false}));
    // app.use(express.static('./public'));
    app.use('/img', express.static('./upload'));
    // 路由中间件
    app.use('/api', router); // 添加router中间件
    // 路由
    // 
    // 反馈
    app.get(routerMap.feedback.url, (req, res) => {
      return nextApp.render(req, res, routerMap.feedback.url, getQuery(req.url, routerMap.feedback.query));
    });
    // 收录标准
    app.get(routerMap.standard.url, (req, res) => {
      return nextApp.render(req, res, routerMap.standard.url, getQuery(req.url, routerMap.standard.query));
    });
    // 分类管理
    app.get(routerMap.catalogmng.url, (req, res) => {
      return nextApp.render(req, res, routerMap.catalogmng.url, getQuery(req.url, routerMap.catalogmng.query));
    });
    // 消息管理
    app.get(routerMap.noticemng.url, (req, res) => {
      return nextApp.render(req, res, routerMap.noticemng.url, getQuery(req.url, routerMap.noticemng.query));
    });
     // 我的收藏
    app.get(routerMap.collect.url, (req, res) => {
      return nextApp.render(req, res, routerMap.collect.url, getQuery(req.url, routerMap.collect.query));
    });
     // 头像修改
    app.get(routerMap.portrait.url, (req, res) => {
      return nextApp.render(req, res, routerMap.portrait.url, getQuery(req.url, routerMap.portrait.query));
    });
    // 标签
    app.get(routerMap.tag.url, (req, res) => {
      return nextApp.render(req, res, routerMap.tag.url, getQuery(req.url, routerMap.tag.query));
    });
    // 详情
    app.get(routerMap.sitedetail.url, (req, res) => {
      return nextApp.render(req, res, routerMap.sitedetail.url, getQuery(req.url, routerMap.sitedetail.query));
    });
    // 我的收藏
    app.get(routerMap.replyme.url, (req, res) => {
      return nextApp.render(req, res, routerMap.replyme.url, getQuery(req.url, routerMap.replyme.query));
    });
    
    // 后台管理
    app.get(routerMap.system.url, (req, res) => {
      return nextApp.render(req, res, routerMap.system.url, getQuery(req.url, routerMap.system.query));
    });
    // 首页
    app.get(routerMap.index.url, (req, res) => {
      return nextApp.render(req, res, routerMap.index.url, getQuery(req.url, routerMap.index.query));
    });


    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(PORT, '0.0.0.0', (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  });

