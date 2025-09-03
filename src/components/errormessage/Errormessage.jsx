import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (
        <p className={css.message}>
            Some unpredictable issue. Reload the page right now!
        </p>
    )
}
export default ErrorMessage;