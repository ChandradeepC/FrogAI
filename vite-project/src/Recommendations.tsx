import React, { useState, useEffect } from 'react';
import './Recommendations.css';

interface Props {
    country: string;
    pcGpu: string;
    mac: string;
    consoles: string;
    budget: number;
    persistence: string;
    response: string;
    contrast: string;
    brightness: string;
    volume: string;
    sharp: string;
    subpixel: string;
    esports: string;
    print: string;
    edit: string;
    grade: string;
    aspect: string;
    curve: string;
    size: string;
    res: string;
    minRR: string;
    panel: string;
    backlight: string;
    casual: string;
    comp: string;
    text: string;
    media: string;
    mode: string;
    hdr: string;
    finish: string;
    calibrated: string;
    hub: string;
}

interface Monitor {
    name: string;
    persistence: string;
    response: string;
    contrast: string;
    brightness: string;
    volume: string;
    sharp: string;
    subpixel: string;
    resolution: string;
    refreshRate: number;
    panel: string;
    size: number;
    cost: number;
    minGpu: string;
    specialFeatures: string;
    curve: boolean;
    aspectRatio: string;
    adobeRgb: string;
    hdr: string;
    reviews: string[][];
}

const RecommendationForm: React.FC<Props> = ({
    country,
    pcGpu,
    mac,
    consoles,
    budget,
    persistence,
    response,
    contrast,
    brightness,
    volume,
    sharp,
    subpixel,
    esports,
    print,
    edit,
    grade,
    aspect,
    curve,
    size,
    res,
    minRR,
    panel,
    backlight,
    casual,
    comp,
    text,
    media,
    mode,
    hdr,
    finish,
    calibrated,
    hub
}) => {
    const [monitorRecommendations, setMonitorRecommendations] = useState<
        Monitor[]
    >([]);

    useEffect(() => {
        const data = {
            country,
            pcGpu,
            mac,
            consoles,
            budget,
            persistence,
            response,
            contrast,
            brightness,
            volume,
            sharp,
            subpixel,
            esports,
            print,
            edit,
            grade,
            aspect,
            curve,
            size,
            res,
            minRR,
            panel,
            backlight,
            casual,
            comp,
            media,
            text,
            mode,
            hdr,
            finish,
            calibrated,
            hub
        };

        fetch('http://127.0.0.1:8000/api/monitor-recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                setMonitorRecommendations(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [
        country,
        pcGpu,
        mac,
        consoles,
        budget,
        persistence,
        response,
        contrast,
        brightness,
        volume,
        sharp,
        subpixel,
        esports,
        print,
        edit,
        grade,
        aspect,
        curve,
        size,
        res,
        minRR,
        panel,
        backlight,
        mode,
        casual,
        comp,
        text,
        media,
        hdr,
        finish,
        calibrated,
        hub
    ]);

    return (
        <div className="right-wrapper">
            {print === 'yes' || edit === 'yes' || grade === 'yes' ? (
                <div>
                    <div className="monitor-box colorimeter">
                        <h3>
                            <span>Calibrite ColorChecker</span>
                            <span className="cost"> $170-320</span>
                        </h3>
                        <div className="meters">
                            <div className="warning">
                                <p>
                                    <i>
                                        Your use case requires a colorimeter!
                                        Enter your budget after subtracting the
                                        cost of the colorimeter.
                                    </i>
                                </p>
                            </div>
                            <p>
                                <label>Display:</label> Slower; upto 1000nits
                                <span></span>
                            </p>
                            <p>
                                <label>Display Pro Retail:</label> Faster; upto
                                1000nits
                                <span></span>
                            </p>
                            <p>
                                <label>Display Plus/Pro OEM:</label> upto 2000
                                nits
                                <span></span>
                            </p>
                        </div>
                        <p>
                            <label></label>{' '}
                            <a
                                href={
                                    'https://www.youtube.com/watch?v=f2nVNxx1IHo'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Calibration guide
                            </a>
                        </p>
                    </div>
                    {/* <div className="medium-plus">+</div> */}
                </div>
            ) : null}
            {monitorRecommendations.length > 0 ? (
                monitorRecommendations.map((monitor) => (
                    <div key={monitor.name} className="monitor-box">
                        <h3>
                            <span>{monitor.name}</span>
                            <span className="cost">
                                ${monitor.cost.toFixed(0)}
                            </span>
                        </h3>
                        {monitor.specialFeatures !== 'no' && (
                            <p>
                                <label></label>{' '}
                                <span style={{ fontStyle: 'italic' }}>
                                    {monitor.specialFeatures}
                                </span>
                            </p>
                        )}
                        <div className="spec-grid">
                            <div className="grid-item">
                                <div className={`${monitor.persistence}`}>
                                    <p>
                                        <span>
                                            {monitor.persistence} motion
                                        </span>
                                    </p>
                                </div>
                                <div className={`${monitor.contrast}`}>
                                    <p>
                                        <span>
                                            {monitor.contrast} picture quality
                                        </span>
                                    </p>
                                </div>
                                <div className={`${monitor.subpixel}`}>
                                    <p>
                                        <span>
                                            {monitor.subpixel} text quality
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <p>
                                    <label>Resolution:</label>{' '}
                                    <span>{monitor.resolution}</span>
                                </p>
                                <p>
                                    <label>Refresh rate:</label>{' '}
                                    <span>{monitor.refreshRate} Hz</span>
                                </p>
                                <p>
                                    <label>Panel:</label>{' '}
                                    <span>{monitor.panel}</span>
                                </p>
                            </div>
                            <div className="grid-item">
                                <p>
                                    <label>Size:</label>{' '}
                                    <span>{monitor.size}"</span>
                                </p>

                                {/* <p>Minimum GPU: {monitor.minGpu}</p> */}
                                <p>
                                    <label>Curved:</label>{' '}
                                    <span>{monitor.curve}</span>
                                </p>
                                <p>
                                    <label>Aspect ratio:</label>{' '}
                                    <span>{monitor.aspectRatio}</span>
                                </p>
                            </div>
                            <div className="grid-item">
                                <p>
                                    <label>Adobe RGB:</label>{' '}
                                    <span>{monitor.adobeRgb}</span>
                                </p>
                                <p>
                                    <label>HDR:</label>{' '}
                                    <span>{monitor.hdr}</span>
                                </p>
                            </div>
                        </div>
                        {monitor.reviews[0][0] !== 'no' && (
                            <p>
                                <label></label>{' '}
                                {monitor.reviews.map((reviewUrl) => (
                                    // <div key={reviewUrl[0]}>
                                    <a
                                        href={reviewUrl[1]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {reviewUrl[0]}&nbsp;&nbsp;
                                    </a>
                                    // {</div> }
                                ))}
                            </p>
                        )}
                    </div>
                ))
            ) : (
                <div className="premessage-container">
                    <div className="premessage">
                        No such monitors exist or are worth recommending. Try
                        removing some filters or increasing your budget.
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecommendationForm;
