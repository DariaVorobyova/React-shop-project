import React from 'react';

export default function CartColumns(){
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="uppercase">total</p>
                    </div>
                </div>
            </div>
        );
    }

