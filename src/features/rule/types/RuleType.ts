export interface Rule {
    tag: string
    title: string
    desc?: string[]
    image?: boolean
    tables?: TableType[]
    note?: string[]
}

export type RuleItem = Pick<Rule, 'tag' | 'title'>

export type TableType = {
    cols?: string[]
    rows: string[][]
}
