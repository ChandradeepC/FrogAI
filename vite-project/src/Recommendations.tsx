import React, { useState, useEffect } from 'react';

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
    module: string;
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
    hub,
    module
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
            hub,
            module
        };

        fetch('/api/monitor-recommendations', {
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
        hub,
        module
    ]);

    type CurrencySymbols = {
        [key: string]: string;
    };

    const currencySymbols: CurrencySymbols = {
        EU: '\u20AC', // Euro symbol
        US: '$' // Dollar symbol
        // more countries to be added
    };

    const getColorClass = (value: string): string => {
        switch (value) {
            case 'Good':
                return 'text-green-500';
            case 'Excellent':
                return 'text-green-800';
            case 'Mediocre':
                return 'text-yellow-500';
            case 'Bad':
                return 'text-red-700';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {print === 'yes' || edit === 'yes' || grade === 'yes' ? (
                <div className="col-span-2 bg-slate-200 p-5 rounded-xl transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700">
                    <h3 className="flex justify-between font-bold text-lg mb-4">
                        <span>Calibrite ColorChecker</span>
                        <span> $170-320</span>
                    </h3>
                    <div className="text-base sm:text-sm mb-2">
                        <div className="text-red-600 mb-2">
                            <p>
                                <i>
                                    Your use case requires a colorimeter! Enter
                                    your budget after subtracting the cost of
                                    the colorimeter.
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
                            <label>Display Plus/Pro OEM:</label> upto 2000 nits
                            <span></span>
                        </p>
                    </div>
                    <p>
                        <label></label>{' '}
                        <a
                            className="text-pink-600 text-base sm:text-sm"
                            href={'https://www.youtube.com/watch?v=f2nVNxx1IHo'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Calibration guide
                        </a>
                    </p>
                </div>
            ) : null}
            {monitorRecommendations.length > 0 ? (
                monitorRecommendations.map((monitor) => (
                    <div
                        key={monitor.name}
                        className="bg-gray-200 p-5 rounded-xl transition-shadow ease-in duration-50 hover:shadow-md hover:shadow-pink-700"
                    >
                        <h3 className="flex justify-between font-bold text-lg mb-4">
                            <span>{monitor.name}</span>
                            <span>
                                {currencySymbols[country]}
                                {monitor.cost.toFixed(0)}
                            </span>
                        </h3>
                        {monitor.specialFeatures !== 'no' && (
                            <p>
                                <label></label>{' '}
                                <span className="italic sm:text-sm">
                                    {monitor.specialFeatures}
                                </span>
                            </p>
                        )}
                        <div className="spec-grid">
                            <div className="grid grid-cols-3 gap-4 sm:text-sm font-semibold my-4">
                                <div
                                    className={`${getColorClass(
                                        monitor.persistence
                                    )}`}
                                >
                                    <p>
                                        <span>
                                            {monitor.persistence} motion
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className={`${getColorClass(
                                        monitor.contrast
                                    )}`}
                                >
                                    <p>
                                        <span>
                                            {monitor.contrast} picture quality
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className={`${getColorClass(
                                        monitor.subpixel
                                    )}`}
                                >
                                    <p>
                                        <span>
                                            {monitor.subpixel} text quality
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 sm:text-sm mb-4">
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
                            <p className="sm:text-sm text-pink-600 font-semibold">
                                <label></label>
                                {monitor.reviews.map((reviewUrl, index) => (
                                    <span key={index}>
                                        <a
                                            className="hover:underline"
                                            href={reviewUrl[1]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {reviewUrl[0]}
                                        </a>
                                        {index !==
                                            monitor.reviews.length - 1 && (
                                            <span>&nbsp;&nbsp;&nbsp;</span>
                                        )}
                                    </span>
                                ))}
                            </p>
                        )}
                    </div>
                ))
            ) : (
                <div className="flex col-span-2 justify-center items-center border-gray-200 border-2 p-5 rounded-lg">
                    <div className="premessage">
                        <ul className="list-disc ml-4 mb-4">
                            <li>
                                You need to select atleast one use case, one
                                platform and set a budget.
                            </li>
                            <li>
                                For print and digital photo or video editing,
                                please select atleast one other use case.
                            </li>
                            <li>
                                Try removing some filters or increasing your
                                budget.
                            </li>
                        </ul>
                        <p>
                            If none of the above work, no such monitors exist or
                            are worth recommending.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecommendationForm;
