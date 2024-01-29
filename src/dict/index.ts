import { ALGLIST, JAVASCRIPTLIST, NODEJSLIST, algTag, jsTag, nodejsTag } from "@/global"
import { nodeJsList } from "./nodejsDict";
import { jsList } from "./jsDict";
import { projectlist } from "./projectDict";
import { algList } from "./algDict";

export { nodeJsList, jsList, projectlist, algList };

export const sortList: articleListType[] = [
    {
        id: "blogtitle1",
        title: "javascript",
        desc: "学习整理javaScript",
        path: `${JAVASCRIPTLIST}`,
        tag: jsTag as string
    }, {
        id: "blogtitle2",
        title: "nodejs",
        desc: "学习整理nodeJS",
        path: `${NODEJSLIST}`,
        tag: [jsTag, nodejsTag] as string[]
    },
    {
        id: "blogtitle3",
        title: "算法",
        desc: "常用算法以及leetcode题",
        path: `${ALGLIST}`,
        tag: [jsTag, algTag] as string[]
    }
]

