interface RetryProps {
    onclick: () => void;
}

const Retry = ({ onclick }: RetryProps): JSX.Element => {
    return (
        <button className="rty text-white absolute right-[40px] top-[63px]" id="retry" onClick={onclick}>Retry</button>
    );
}

export default Retry;