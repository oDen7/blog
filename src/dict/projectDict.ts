import { canvasTag, jsTag, nodejsTag, pythonTag } from "@/global";

export const projectlist = [{
    id: "pj-js",
    title: "javascript",
    list: [
        {
            id: "",
            title: "canvasGame",
            desc: "使用canvas做的一些小游戏",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [jsTag, canvasTag],
            projectState: "open"
        },
        {
            id: "",
            title: "algorithm-diagram-javascript",
            desc: "将算法图解中的python代码转换为javascript代码",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [jsTag, pythonTag],
            projectState: "closed"
        },
        {
            id: "",
            title: "vue3-fastify-sql-connection-tool",
            desc: "基于vue3和fastify的数据库连接工具",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [jsTag, nodejsTag],
            projectState: "open"
        },
        {
            id: "",
            title: "gitee-oss",
            desc: "想用gitee提供对象存储的能力",
            path: "https://gitee.com/oDen7/gitee-oss",
            tag: [jsTag, nodejsTag],
            projectState: "open"
        },
        {
            id: "",
            title: "gitee-password-oauth",
            desc: "获取码云gitee的验证token.",
            path: "https://gitee.com/oDen7/gitee-password-oauth",
            tag: [jsTag, nodejsTag],
            projectState: "open",

        }
    ] as articleListType[]
}]