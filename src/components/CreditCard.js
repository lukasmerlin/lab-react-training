const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const ccCompany = (type === "Visa" 
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png")

    return (
        <div className="cc-card">
            <div className="brandpic">
                <img src={ccCompany} alt="brand"/>
            </div>
            <div className="cc-number">
                •••• •••• •••• { number.slice(12) }
            </div>
            <div className="cc-details">
                Expires { `${expirationMonth}`.padStart(2, '0') }/{`${expirationYear}`.slice(2)} {bank} <br /> {owner}
            </div>
        </div>
    )

}

export default CreditCard