import React, { useState } from 'react';
import './Component.css';

interface Props {
    aspect: string;
    curve: string;
    size: string;
    res: string;
    minRR: string;
    panel: string;
    backlight: string;
    hdr: string;
    finish: string;
    calibrated: string;
    hub: string;
    module: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const OptionalFilterForm: React.FC<Props> = ({
    aspect,
    curve,
    size,
    res,
    minRR,
    panel,
    backlight,
    hdr,
    finish,
    calibrated,
    hub,
    module,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2>Optional filters</h2>

            <div className="field-grid">
                <div className="field">
                    <label htmlFor="res">Resolution: </label>
                    <select
                        id="res"
                        name="res"
                        value={res}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="1920x1080">1920x1080 (16:9)</option>
                        <option value="2560x1440">2560x1440 (16:9)</option>
                        <option value="3840x2160">3840x2160 (16:9)</option>
                        <option value="5120x2880">5120x2880 (16:9)</option>
                        <option value="6016x3384">6016x3384 (16:9)</option>
                        <option value="3440x1440">3440x1440 (21:9)</option>
                        <option value="3840x1600">3840x1600 (24:10)</option>
                        <option value="5120x1440">5120x1440 (32:9)</option>
                        <option value="2560x2880">2560x2880 (16:18) </option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="aspect">Aspect ratio: </label>
                    <select
                        id="aspect"
                        name="aspect"
                        value={aspect}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="Wide">Wide (16:9)</option>
                        <option value="Ultrawide">Ultrawide (21:9)</option>
                        <option value="Superultrawide">
                            SuperUltrawide (32:9)
                        </option>
                        <option value="Tall">Tall (16:18)</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="hdr">HDR: </label>
                    <select
                        id="hdr"
                        name="hdr"
                        value={hdr}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="curve">Curve: </label>
                    <select
                        id="curve"
                        name="curve"
                        value={curve}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="size">Size: </label>
                    <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="24">24" (16:9)</option>
                        <option value="25">25" (16:9)</option>
                        <option value="27">27" (16:9)</option>
                        <option value="32">32" (16:9)</option>
                        <option value="34">34" (21:9)</option>
                        <option value="38">38" (24:10)</option>
                        {/* <option value="49">49"</option> */}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="minRR">Minimum refresh rate: </label>
                    <select
                        id="minRR"
                        name="minRR"
                        value={minRR}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="60hz">60hz</option>
                        <option value="75hz">75hz</option>
                        <option value="120hz">120hz</option>
                        <option value="144hz">144hz</option>
                        <option value="240hz">240hz</option>
                        <option value="360hz">360hz</option>
                        <option value="500hz">500hz</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="panel">Panel type: </label>
                    <select
                        id="panel"
                        name="panel"
                        value={panel}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="IPS">IPS</option>
                        <option value="TN">TN</option>
                        <option value="VA">VA</option>
                        <option value="OLED">OLED</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="backlight">Backlight type: </label>
                    <select
                        id="backlight"
                        name="backlight"
                        value={backlight}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="MiniLED">MiniLED</option>
                        <option value="FALD">FALD</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="finish">Finish: </label>
                    <select
                        id="finish"
                        name="finish"
                        value={finish}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="glossy">Glossy</option>
                        <option value="matte">Matte</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="hub">Type-C Hub: </label>
                    <select
                        id="hub"
                        name="hub"
                        value={hub}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="calibrated">Factory calibration: </label>
                    <select
                        id="calibrated"
                        name="calibrated"
                        value={calibrated}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="module">G-sync module: </label>
                    <select
                        id="module"
                        name="module"
                        value={module}
                        onChange={handleInputChange}
                    >
                        <option value="nopref">No preference</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default OptionalFilterForm;
