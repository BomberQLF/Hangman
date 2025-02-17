interface RetryProps {
    onclick: () => void;
}

const Retry = ({ onclick }: RetryProps): JSX.Element => {
    return (
        <button className="text-white border border-white border-solid rounded-xl px-8 w-24 mx-auto" id="retry" onClick={onclick}>Retry</button>
    );
}

export default Retry;