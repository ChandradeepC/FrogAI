import React, { useState } from 'react';
import './Component.css';

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
        <div className="form-container">
            <h2>Performance requirements</h2>
            <div className="field-grid">
                <div className="field">
                    <label htmlFor="persistence">Persistence blur:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="response">Response time:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="contrast">Contrast ratio:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="brightness">Brightness:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="volume">Color volume:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="sharp">Image resolution:</label>
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
                    >
                        <option value="not">Don't care</option>
                        <option value="some">Nice to have</option>
                        <option value="imp">Important</option>
                        <option value="very">Very important</option>
                        <option value="only">Sole focus</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="subpixel">Text quality:</label>
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
