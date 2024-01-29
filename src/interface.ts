interface articleListType {
    id: string,
    title: string,
    desc: string,
    path: string,
    tag: string | string[]
    projectState?: string
}

type projectStatusType = "cloesd" | "open"