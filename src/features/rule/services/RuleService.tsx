import ruleData from '../data/ruleData'
import type { Rule, RuleItem } from '../types/RuleType'

export function useRuleService() {
    const getRuleData = (): RuleItem[] => {
        if (!ruleData) return []

        return ruleData
            .filter(({ tag }) => /^r\d+$/.test(tag))
            .map(({ tag, title }) => ({ tag, title }))
    }

    const getRuleDataByTag = (tag: string): Rule | undefined => {
        return ruleData.find((item: Rule) => item.tag === tag) as Rule
    }

    const getRuleCount = (): number => ruleData.length

    return { getRuleData, getRuleDataByTag, getRuleCount }
}
