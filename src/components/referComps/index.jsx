import React from 'react'

function Referd(props) {
    let k = 0;
    const {Contact, Referrer} = props;
    const obj = {
        ...Contact,
        ...Referrer
    };
    return (
        <div className="row">
            {Object
                .keys(obj)
                .map(b => <div
                    className={Referrer
                    ? 'col-md-4 col-12 col-sm-4'
                    : Contact
                        ? 'col-md-4 col-12 col-sm-8 offset-sm-2 offset-md-0 offset-lg-0 offset-0 offset-xl-' +
                            '0'
                        : ''}>
                    <div key={k++} className="adress_bars">
                        <div className="image float-left"><img src={obj[b].image} className="img-fluid" alt="email.png"/></div>
                        <div className="text">
                            {Contact
                                ? <h5>{obj[b].text}</h5>
                                : Referrer
                                    ? <h6>{obj[b].text}</h6>
                                    : ''}
                        </div>
                    </div>
                </div>)}
        </div>

    )
}

export default Referd
