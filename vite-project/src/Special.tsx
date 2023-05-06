import React, { HTMLInputTypeAttribute, useState } from 'react';
import './Component.css';

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
        <div className="form-container">
            <h2> Special uses</h2>
            {console !== 'no' &&
                console !== '' &&
                mac === 'no' &&
                pcGpu === '' && (
                    <div className="warning">
                        You cannot use a console for professional work or
                        professional esports. Select a mac or pc if you want to
                        do professional work and a pc if you want to play
                        professional esports.
                    </div>
                )}
            <div className="field-grid">
                <div className="field">
                    <label htmlFor="esports">Esports:</label>
                    <select
                        id="esports"
                        name="esports"
                        value={esports}
                        onChange={handleInputChange}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="print">Print photo editing:</label>
                    <select
                        id="print"
                        name="print"
                        value={print}
                        onChange={handleInputChange}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="edit">Photo / video editing:</label>
                    <select
                        id="edit"
                        name="edit"
                        value={edit}
                        onChange={handleInputChange}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="grade">Color grading:</label>
                    <select
                        id="grade"
                        name="grade"
                        value={grade}
                        onChange={handleInputChange}
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
