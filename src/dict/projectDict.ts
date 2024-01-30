import { CANVAS_TAG, JS_TAG, NODEJS_TAG, PYTHON_TAG } from "@/global";

export const projectlist = [{
    id: "pj-js",
    title: "javascript",
    list: [
        {
            id: "pj-js-1",
            title: "canvasGame",
            desc: "使用canvas做的一些小游戏",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [JS_TAG, CANVAS_TAG],
            projectState: "open"
        },
        {
            id: "pj-js-2",
            title: "algorithm-diagram-javascript",
            desc: "将算法图解中的python代码转换为javascript代码",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [JS_TAG, PYTHON_TAG],
            projectState: "closed"
        },
        {
            id: "pj-js-3",
            title: "vue3-fastify-sql-connection-tool",
            desc: "基于vue3和fastify的数据库连接工具",
            path: "https://gitee.com/oDen7/canvas-game",
            tag: [JS_TAG, NODEJS_TAG],
            projectState: "open"
        },
        {
            id: "pj-js-4",
            title: "gitee-oss",
            desc: "想用gitee提供对象存储的能力",
            path: "https://gitee.com/oDen7/gitee-oss",
            tag: [JS_TAG, NODEJS_TAG],
            projectState: "open"
        },
        {
            id: "pj-js-5",
            title: "gitee-password-oauth",
            desc: "获取码云gitee的验证token.",
            path: "https://gitee.com/oDen7/gitee-password-oauth",
            tag: [JS_TAG, NODEJS_TAG],
            projectState: "closed",

        }
    ] as articleListType[]
}]