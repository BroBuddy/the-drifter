import styles from './Card.module.scss'

type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>{children}</div>
        </div>
    )
}

export default Card
