/**
 * 导航栏数据
 */
module.exports = (current) => ({
  current : current || 'index',
  value : [
    {
      name  : '首页',
      value : 'index',
      href  : './index',
      subItem : {
        data : [
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
        ]
      }
    },
    {
      name  : '新闻头条',
      value : 'news',
      href  : './news',
      subItem : {
        data : [
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
        ]
      }
    },
    {
      name  : '活动关注',
      value : 'activity',
      href  : './activity',
      subItem : {
        data : [
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
        ]
      }
    },
    {
      name  : '产品建议',
      value : 'proposal',
      href  : './proposal',
      subItem : {
        data : [
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
        ]
      }
    },
    {
      name  : '联系我们',
      value : 'contact',
      href  : './contact',
      subItem : {
        data : [
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
          { name  : '首页' , href : './index.html'},
        ]
      }
    }
  ]
})
