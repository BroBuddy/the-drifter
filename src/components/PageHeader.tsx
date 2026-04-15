import styles from './PageHeader.module.scss'

type PageHeaderProps = {
    tag?: string
    title: string
    time?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ tag, title, time }) => (
    <div className={styles.pageHeader}>
        {tag && <span className={styles.tag}>{tag.toUpperCase()}</span>}

        <h1 className={styles.title}>{title}</h1>

        {time && <span className={styles.time}>{time}</span>}
    </div>
)

export default PageHeader
