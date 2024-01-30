import { BOX, JS_TAG, PYTHON_TAG, REACT_TAG } from "@/global";

export const boxList = [
    {
        id: "box1",
        title: "python的简单计时任务",
        desc: "因为邻居精力旺盛,给邻居做了一个计时任务,可以自定义时间让邻居起来劳动",
        path: "https://gitee.com/oDen7/fuck_neighbors",
        tag: [PYTHON_TAG],
        target: true,
    },
    {
        id: "box2",
        title: "记录一个MDXRemote的报错",
        desc: "最近玩nextjs使用了MDXRemote做md文件的动态解析遇到了一个时有定位到代码片段报错有时又没有的提醒的报错",
        path: `${BOX}记录一个MDXRemote的报错`,
        tag: [JS_TAG, REACT_TAG],
        target: false,
    },
    // blog/src/content/box/记录一个MDXRemote的报错.md
]