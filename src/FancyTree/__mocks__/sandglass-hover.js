export default {
  children: [
    {
      bizData: {
        title: '这个公司名字超级超级超级长哦',
      },
      hoverCallback(event, node) {
        const rect = event.target.getBoundingClientRect();
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.left = rect.right + 'px';
        div.style.top = rect.bottom + 'px';
        div.style.width = '320px';
        div.style.height = '200px';
        div.style.border = '1px solid gray';
        div.style.zIndex = '9';
        div.style.background = '#fff';
        div.innerHTML = `
        <div>
          <h3>悬浮时自定义渲染一个弹层</h3>
          <h4>${node.data.bizData.title}</h4>
          <p>${node.data.bizData.desc||''}</p>
        </div>`;
        document.body.append(div);
        return ()=>document.body.removeChild(div);
      }
    },
    {
      children: [
        {
          children: [
            {
              children: [
                {
                  bizData: {
                    title: '小小公司'
                  }
                }
              ],
              bizData: {
                title: '小小公司'
              }
            }
          ],
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
        title: '打酱油的公司',
        desc: '快黄了'
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
      money: '780万元',
      children: [
        {
          money: '780万元',
          bizData: {
            title: '发哈哈'
          }
        }
      ],
      bizData: {
        title: '多多网'
      }
    },
    {
      money: '780万元',
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
