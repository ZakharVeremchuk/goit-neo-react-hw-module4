import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({handleClick}) => {
    return (
        <div className={css.loadMoreBtn}>
            <button onClick={handleClick}>Load More</button>
        </div>
    )
}

export default LoadMoreBtn;