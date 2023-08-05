import React, { useState } from 'react';

interface Props {
    persistence: string;
    response: string;
    contrast: string;
    brightness: string;
    volume: string;
    sharp: string;
    subpixel: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const AdvancedForm: React.FC<Props> = ({
    persistence,
    response,
    contrast,
    brightness,
    volume,
    sharp,
    subpixel,
    handleInputChange
}) => {
    return (
        <div className="bg-gray-100 rounded-xl p-5 my-5">
            <h2 className="text-xl font-semibold mb-4">
                Performance requirements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label
                        htmlFor="persistence"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Persistence blur:
                    </label>
                    <select
                        id="persistence"
                        name="persistence"
                        value={persistence}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            sharp === 'only' ||
                            subpixel === 'only' ||
                            contrast === 'only' ||
                            brightness === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="response"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Response time:
                    </label>
                    <select
                        id="response"
                        name="response"
                        value={response}
                        onChange={handleInputChange}
                        disabled={
                            persistence === 'only' ||
                            sharp === 'only' ||
                            subpixel === 'only' ||
                            contrast === 'only' ||
                            brightness === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="contrast"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Contrast ratio:
                    </label>
                    <select
                        id="contrast"
                        name="contrast"
                        value={contrast}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            sharp === 'only' ||
                            subpixel === 'only' ||
                            persistence === 'only' ||
                            brightness === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="brightness"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Brightness:
                    </label>
                    <select
                        id="birghtness"
                        name="brightness"
                        value={brightness}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            sharp === 'only' ||
                            subpixel === 'only' ||
                            contrast === 'only' ||
                            persistence === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="volume"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Color volume:
                    </label>
                    <select
                        id="volume"
                        name="volume"
                        value={volume}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            sharp === 'only' ||
                            subpixel === 'only' ||
                            contrast === 'only' ||
                            brightness === 'only' ||
                            persistence === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="sharp"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image resolution:
                    </label>
                    <select
                        id="sharp"
                        name="sharp"
                        value={sharp}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            persistence === 'only' ||
                            subpixel === 'only' ||
                            contrast === 'only' ||
                            brightness === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="subpixel"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Text quality:
                    </label>
                    <select
                        id="subpixel"
                        name="subpixel"
                        value={subpixel}
                        onChange={handleInputChange}
                        disabled={
                            response === 'only' ||
                            sharp === 'only' ||
                            persistence === 'only' ||
                            contrast === 'only' ||
                            brightness === 'only' ||
                            volume === 'only'
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AdvancedForm;
