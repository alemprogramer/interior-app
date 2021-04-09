import React, {Component} from 'react';
import Item from "./item";

export class Difference extends Component {
    render() {
        let k = 0; //key value, please make it random and unique
        const item = {
            a: {
                icon: '/vendor/images/user.png',
                title: 'Professional Home Stagers',
                text: 'We specialize in transfcascasorming photos of vacant properties into beautiful, virtua' +
                        'lly staged homes that sells faster and for top dollar.'
            },
            b: {
                icon: '/vendor/images/user.png',
                title: 'Professasascional Home Stagers',
                text: 'We specialize in trascascansforming photos of vacant properties into beautiful, virtua' +
                        'lly staged homes that sells faster and for top dollar.'
            },
            c: {
                icon: '/vendor/images/user.png',
                title: 'Professional Hocasme Stagers',
                text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                        'lly staged homes that sells faster and for top dollar.'
            },
            d: {
                icon: '/vendor/images/user.png',
                title: 'Professional Home Staascgers',
                text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                        'lly staged homes that sells faster and for top dollar.'
            },
            e: {
                icon: '/vendor/images/user.png',
                title: 'Professional Home Stagers',
                text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                        'lly staged homescbf that sells faster and for top dollar.'
            },
            f: {
                icon: '/vendor/images/user.png',
                title: 'Profesgfdsional Home Stagers',
                text: 'We specialnfgnfgize in transforming photos of vacant properties into beautiful, virtua' +
                        'lly staged homes that sells faster and for top dollar.'
            }
        }
        return (
            <section className="difference">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="cmn_heading text-center">
                                <h3>
                                    What set us apart from other virtual staging companies
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="context">
                        <div className="row">
                            {Object
                                .keys(item)
                                .map(a => <div key={k++/*key value, please make it random and unique*/} className="col-md-4 col-sm-6 col-12" > <Item text={item[a].text} title={item[a].title} icon={item[a].icon}/> </div>)}

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Difference
