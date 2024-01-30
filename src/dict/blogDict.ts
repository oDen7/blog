import { ALG_LIST, JAVASCRIPT_LIST, NODEJS_LIST, ALG_TAG, JS_TAG, NODEJS_TAG, LEETCODE_TAG, CCP_LIST, CCP_TAG, CS_TAG, CNT_LIST, CNT_TAG, DS_LIST, DS_TAG } from "@/global"

export const blogList: articleListType[] = [
    {
        id: "blogtitle1",
        title: "javascript",
        desc: "学习整理javaScript",
        path: `${JAVASCRIPT_LIST}`,
        tag: JS_TAG as string
    }, {
        id: "blogtitle2",
        title: "nodejs",
        desc: "学习整理nodeJS",
        path: `${NODEJS_LIST}`,
        tag: [JS_TAG, NODEJS_TAG] as string[]
    },
    {
        id: "blogtitle3",
        title: "算法",
        desc: "常用算法以及leetcode题",
        path: `${ALG_LIST}`,
        tag: [JS_TAG, ALG_TAG, LEETCODE_TAG] as string[]
    },
    {
        id: "blogtitle4",
        title: "计算机组成",
        desc: "计算机组成",
        path: `${CCP_LIST}`,
        tag: [CS_TAG, CCP_TAG] as string[]
    },
    {
        id: "blogtitle5",
        title: "计算机网络",
        desc: "计算机网络",
        path: `${CNT_LIST}`,
        tag: [CS_TAG, CNT_TAG] as string[]
    }, {
        id: "blogtitle6",
        title: "数据结构",
        desc: "数据结构",
        path: `${DS_LIST}`,
        tag: [CS_TAG, DS_TAG] as string[]
    }
]