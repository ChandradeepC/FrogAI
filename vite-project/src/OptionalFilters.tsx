import React, { useState } from 'react';

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
        <div className="bg-gray-100 rounded-xl p-5 my-5">
            <h2 className="text-xl font-semibold mb-4">Optional filters</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Resolution */}
                <div className="mb-4">
                    <label
                        htmlFor="res"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Resolution:
                    </label>
                    <select
                        id="res"
                        name="res"
                        value={res}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
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

                {/* Aspect Ratio */}
                <div className="mb-4">
                    <label
                        htmlFor="aspect"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Aspect ratio:
                    </label>
                    <select
                        id="aspect"
                        name="aspect"
                        value={aspect}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
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

                {/* HDR */}
                <div className="mb-4">
                    <label
                        htmlFor="hdr"
                        className="block text-sm font-medium text-gray-700"
                    >
                        HDR:
                    </label>
                    <select
                        id="hdr"
                        name="hdr"
                        value={hdr}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                {/* Curve */}
                <div className="mb-4">
                    <label
                        htmlFor="curve"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Curve:
                    </label>
                    <select
                        id="curve"
                        name="curve"
                        value={curve}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                {/* Size */}
                <div className="mb-4">
                    <label
                        htmlFor="size"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Size:
                    </label>
                    <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
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

                {/* Min Refresh Rate */}
                <div className="mb-4">
                    <label
                        htmlFor="minRR"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Minimum refresh rate:
                    </label>
                    <select
                        id="minRR"
                        name="minRR"
                        value={minRR}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
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

                {/* Panel Type */}
                <div className="mb-4">
                    <label
                        htmlFor="panel"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Panel type:
                    </label>
                    <select
                        id="panel"
                        name="panel"
                        value={panel}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="IPS">IPS</option>
                        <option value="TN">TN</option>
                        <option value="VA">VA</option>
                        <option value="OLED">OLED</option>
                    </select>
                </div>

                {/* Backlight Type */}
                <div className="mb-4">
                    <label
                        htmlFor="backlight"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Backlight type:
                    </label>
                    <select
                        id="backlight"
                        name="backlight"
                        value={backlight}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="MiniLED">MiniLED</option>
                        <option value="FALD">FALD</option>
                    </select>
                </div>

                {/* Finish */}
                <div className="mb-4">
                    <label
                        htmlFor="finish"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Finish:
                    </label>
                    <select
                        id="finish"
                        name="finish"
                        value={finish}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="glossy">Glossy</option>
                        <option value="matte">Matte</option>
                    </select>
                </div>

                {/* Type-C Hub */}
                <div className="mb-4">
                    <label
                        htmlFor="hub"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Type-C Hub:
                    </label>
                    <select
                        id="hub"
                        name="hub"
                        value={hub}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                {/* Factory Calibration */}
                <div className="mb-4">
                    <label
                        htmlFor="calibrated"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Factory calibration:
                    </label>
                    <select
                        id="calibrated"
                        name="calibrated"
                        value={calibrated}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="nopref">No preference</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                {/* G-sync Module */}
                <div className="mb-4">
                    <label
                        htmlFor="module"
                        className="block text-sm font-medium text-gray-700"
                    >
                        G-sync module:
                    </label>
                    <select
                        id="module"
                        name="module"
                        value={module}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
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
