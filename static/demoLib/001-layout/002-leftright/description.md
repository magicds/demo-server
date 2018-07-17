# 说明

`div.fui-left`为左侧容器，`div.fui-right`为右侧容器。

## 左侧部分

`div[role="head"]`为左侧头部，`title`属性为左侧标题。

如果左侧头部除了标题，想追加其他个性化元素，直接写在`div[role="head"]`中即可。

`div[role="body"]`为左侧内容容器。

如左侧不需要头部标题，可删除`div[role="head"]`和`div[role="body"]`，直接在`div.fui-left`中书写内容即可。

## 右侧部分

`div.fui-right`中一般有以下2中情况：

- 使用[contentPage布局](?file=005-基础布局/003-ContentPage布局)书写内容。

- 放一个宽高撑满容器的`iframe`，左侧则往往是tree或者menu，对iframe中显示的页面进行切换。