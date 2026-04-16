import styles from './PageHeader.module.scss'

type PageHeaderProps = {
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => (
    <div className={styles.pageHeader}>
        <h1 className={styles.title}>{title}</h1>
    </div>
)

export default PageHeader
