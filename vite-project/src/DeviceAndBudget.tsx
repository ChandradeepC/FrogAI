import React, { useState } from 'react';
import './Component.css';

interface Props {
    pcGpu: string;
    mac: string;
    console: string;
    budget: number;
    country: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const DeviceAndBudgetForm: React.FC<Props> = ({
    pcGpu,
    mac,
    console,
    budget,
    country,
    handleInputChange
}) => {
    let gpus: string[] = [
        '4090',
        '4080',
        '7900xtx',
        '7900xt',
        '3090ti',
        '6950xt',
        '4070ti',
        '6900xt',
        '3090',
        '3080ti',
        '3080_12gb',
        '6800xt',
        '3080_10gb',
        '6800',
        '3070ti',
        '6750xt',
        '3070',
        '6700xt',
        '2080ti',
        '3060ti',
        '2080super',
        '6700',
        '2080',
        'A770_16gb',
        '6650xt',
        '2070super',
        'A770_8gb',
        '6600xt',
        '5700xt',
        '3060',
        'VII',
        '2070',
        '6600',
        'A750',
        '1080ti',
        '2060super',
        '5700',
        '5600xt',
        'Vega64',
        '2060',
        '1080',
        '3050',
        '1070ti',
        'Vega56',
        '1660super',
        '1660ti',
        '1070',
        '1660',
        '5500xt_8gb',
        '590',
        '980ti',
        '580_8gb',
        '1650super',
        '5500xt',
        '1060_6gb',
        '6500xt',
        '980',
        '1650',
        'A380',
        '570_4gb',
        '1060_3gb',
        '1650',
        '970',
        '6400',
        '780',
        '1050ti',
        '1630',
        '1050',
        '560',
        '550',
        '1030'
    ];

    return (
        <div className="form-container">
            <h2>Platform and budget*</h2>
            <div className="field-grid">
                {/* <div className="field">
                    <label htmlFor="country">Location:</label>
                    <select
                        id="country"
                        name="country"
                        value={country}
                        onChange={handleInputChange}
                    >
                        <option value="US">US</option>
                    </select>
                </div> */}
                <div className="field">
                    <label htmlFor="pc-gpu">Do you have a PC?</label>
                    <select
                        id="pc-gpu"
                        name="pc-gpu"
                        value={pcGpu}
                        onChange={handleInputChange}
                    >
                        {/* <option value="">Select GPU</option>
                        {gpus.map((gpu) => (
                            <option key={gpu} value={gpu}>
                                {gpu}
                            </option>
                        ))} */}
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="mac">Do you have a Mac? </label>
                    <select
                        id="mac"
                        name="mac"
                        value={mac}
                        onChange={handleInputChange}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="console">Do you have a console?</label>
                    <select
                        id="console"
                        name="console"
                        value={console}
                        onChange={handleInputChange}
                    >
                        <option value="">Select console</option>
                        <option value="no">No</option>
                        <option value="xbox-series-s">Xbox Series S</option>
                        <option value="xbox-series-x">Xbox Series X</option>
                        <option value="ps5">PS5</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="budget">Budget: </label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={budget}
                        onChange={handleInputChange}
                        step="50"
                    />
                </div>
            </div>
        </div>
    );
};

export default DeviceAndBudgetForm;
