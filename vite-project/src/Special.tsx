import React, { HTMLInputTypeAttribute, useState } from 'react';

interface Props {
    print: string;
    edit: string;
    grade: string;
    console: string;
    mac: string;
    pcGpu: string;
    esports: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const SpecialForm: React.FC<Props> = ({
    print,
    edit,
    grade,
    console,
    mac,
    pcGpu,
    esports,
    handleInputChange
}) => {
    return (
        <div className="bg-gray-100 rounded-xl p-5 my-5">
            <h2 className="text-xl font-semibold mb-4">Special uses</h2>
            {console !== 'no' &&
                console !== '' &&
                mac === 'no' &&
                pcGpu === '' && (
                    <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4">
                        You cannot use a console for professional work or
                        professional esports. Select a mac or pc if you want to
                        do professional work and a pc if you want to play
                        professional esports.
                    </div>
                )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label
                        htmlFor="esports"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Professional Esports:
                    </label>
                    <select
                        id="esports"
                        name="esports"
                        value={esports}
                        onChange={handleInputChange}
                        disabled={grade === 'yes'}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="print"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Print photo editing:
                    </label>
                    <select
                        id="print"
                        name="print"
                        value={print}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="edit"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Photo / video editing:
                    </label>
                    <select
                        id="edit"
                        name="edit"
                        value={edit}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="grade"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Color grading:
                    </label>
                    <select
                        id="grade"
                        name="grade"
                        value={grade}
                        onChange={handleInputChange}
                        disabled={esports === 'yes'}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SpecialForm;
