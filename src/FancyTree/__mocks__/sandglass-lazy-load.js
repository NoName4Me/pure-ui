export default {
  children: [
    {
      bizData: {
        title: '这个公司名字超级超级超级长哦'
      },
      getChildren(node) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
              {
                bizData: {
                  title: '异步请求到的公司1'
                }
              },
              {
                bizData: {
                  title: '异步请求到的公司2',
                  desc: '看我厉害吧'
                }
              }
            ]);
          }, 400);
        });
      }
    },
    {
      children: [
        {
          bizData: {
            title: '小公司'
          }
        },
        {
          bizData: {
            title: '小公司2'
          }
        }
      ],
      bizData: {
        title: '拼刀刀2333'
      }
    },
    {
      bizData: {
        title: '拼刀刀2222'
      }
    }
  ],
  parents: [
    {
      children: [
        {
          children: [
            {
              bizData: {
                title: '123',
                desc: '780万元'
              }
            }
          ],
          bizData: {
            title: '发发委'
          }
        },
        {
          children: [
            {
              bizData: {
                desc: '780万元',
                title: '123'
              }
            }
          ],
          bizData: {
            title: '123发发委'
          }
        }
      ],
      bizData: {
        title: '大公司'
      }
    },
    {
      children: [
        {
          money: '780万元',
          bizData: {
            title: '王林'
          }
        },
        {
          money: '780万元',
          bizData: {
            title: '张峰'
          }
        },
        {
          money: '780万元',
          bizData: {
            title: '侯明'
          }
        }
      ],
      bizData: {
        title: '投了个资的'
      }
    }
  ],
  bizData: {
    title: '超级大公司'
  }
};
