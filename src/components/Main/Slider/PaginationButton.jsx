export default function PaginationButton(props) {
    const _className = props.id == props.currentSlide  ? "pagination-button is-active" : "pagination-button";

    const nextSlide = props.id;
    const onClickButtonHandler = () => {
        props.OnClickPagination(nextSlide);
    }

    return (
        <button onClick = {onClickButtonHandler} className={_className}></button>
    )
}