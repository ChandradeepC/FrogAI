import React, { useState } from 'react';

interface Props {
    casual: string;
    comp: string;
    text: string;
    media: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const UseCasesForm: React.FC<Props> = ({
    casual,
    comp,
    text,
    media,
    handleInputChange
}) => {
    return (
        <div className="bg-gray-100 rounded-xl p-5 my-5">
            <h2 className="text-xl font-semibold mb-4">Use cases*</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label
                        htmlFor="casual"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Casual gaming:
                    </label>
                    <select
                        id="casual"
                        name="casual"
                        value={casual}
                        onChange={handleInputChange}
                        disabled={
                            comp === 'only' ||
                            media === 'only' ||
                            text === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="comp"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Competitive gaming:
                    </label>
                    <select
                        id="comp"
                        name="comp"
                        value={comp}
                        onChange={handleInputChange}
                        disabled={
                            casual === 'only' ||
                            media === 'only' ||
                            text === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="text"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Productivity:
                    </label>
                    <select
                        id="text"
                        name="text"
                        value={text}
                        onChange={handleInputChange}
                        disabled={
                            casual === 'only' ||
                            comp === 'only' ||
                            media === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="media"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Media consumption:
                    </label>
                    <select
                        id="media"
                        name="media"
                        value={media}
                        onChange={handleInputChange}
                        disabled={
                            comp === 'only' ||
                            casual === 'only' ||
                            text === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default UseCasesForm;
