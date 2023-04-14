const NumbersTable = (props) => {
    let limit = props.limit;
    let numbers = [];

    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    return (
        <div className="numbers-table">
            {numbers.map((number) => {
                return (
                    <div
                        key={number}
                        className={
                            number % 2 === 0 ? "even" : "odd"
                        }
                    >
                        {number}
                    </div>
                );
            })}
        </div>
    );
};

export default NumbersTable;