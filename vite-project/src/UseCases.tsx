import React, { useState } from 'react';
import './Component.css';

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
        <div className="form-container">
            <h2>Use cases*</h2>
            <div className="field-grid">
                <div className="field">
                    <label htmlFor="casual">Casual gaming:</label>
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
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="comp">Competitive gaming:</label>
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
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="text">Productivity:</label>
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
                    >
                        <option value="not">Never</option>
                        <option value="some">Occasionally</option>
                        <option value="imp">Regularly</option>
                        <option value="very">Frequently</option>
                        <option value="only">Exclusively</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="media">Media consumption:</label>
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
