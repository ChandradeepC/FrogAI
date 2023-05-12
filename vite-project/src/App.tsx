import { useState } from 'react';
import frogaiLogo from './assets/frogai.jpg';
import './App.css';
import DeviceAndBudgetForm from './DeviceAndBudget';
import AdvancedForm from './Advanced';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';
import RecommendationForm from './Recommendations';
import UseCasesForm from './UseCases';
import meLogo from './assets/test.png';

const App = () => {
    const [country, setCountry] = useState<string>('US');
    const [pcGpu, setPcGpu] = useState<string>('no');
    const [mac, setMac] = useState<string>('no');
    const [console, setConsole] = useState<string>('');
    const [budget, setBudget] = useState<number>(0);
    //-----------------------------------------------------------
    const [mode, setMode] = useState<string>('basic');
    //-----------------------------------------------------------
    const [persistence, setPersistence] = useState<string>('not');
    const [response, setResponse] = useState<string>('not');
    const [contrast, setContrast] = useState<string>('not');
    const [brightness, setBrightness] = useState<string>('not');
    const [volume, setVolume] = useState<string>('not');
    const [sharp, setSharp] = useState<string>('not');
    const [subpixel, setSubpixel] = useState<string>('not');
    //-----------------------------------------------------------
    const [casual, setCasual] = useState<string>('not');
    const [comp, setComp] = useState<string>('not');
    const [text, setText] = useState<string>('not');
    const [media, setMedia] = useState<string>('not');
    //-----------------------------------------------------------
    const [print, setPrint] = useState<string>('no');
    const [edit, setEdit] = useState<string>('no');
    const [grade, setGrade] = useState<string>('no');
    const [esports, setEsports] = useState<string>('no');
    //-----------------------------------------------------------
    const [aspect, setAspect] = useState<string>('nopref');
    const [curve, setCurve] = useState<string>('nopref');
    const [size, setSize] = useState<string>('nopref');
    const [res, setRes] = useState<string>('nopref');
    const [minRR, setMinRR] = useState<string>('nopref');
    const [panel, setPanel] = useState<string>('nopref');
    const [hdr, setHdr] = useState<string>('nopref');
    const [backlight, setBacklight] = useState<string>('nopref');
    const [finish, setFinish] = useState<string>('nopref');
    const [hub, setHub] = useState<string>('nopref');
    const [calibrated, setCalibrated] = useState<string>('nopref');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        switch (name) {
            case 'country':
                setCountry(value);
                break;
            case 'pc-gpu':
                setPcGpu(value);
                break;
            case 'mac':
                setMac(value);
                break;
            case 'console':
                setConsole(value);
                break;
            case 'budget':
                setBudget(parseInt(value));
                break;
            //-----------------------------------------
            case 'mode':
                setMode(value);
                break;
            //-----------------------------------------
            case 'casual':
                setCasual(value);
                if (value === 'only') {
                    setComp('not');
                    setText('not');
                    setMedia('not');
                }
                break;
            case 'comp':
                setComp(value);
                if (value === 'only') {
                    setCasual('not');
                    setText('not');
                    setMedia('not');
                }
                break;
            case 'text':
                setText(value);
                if (value === 'only') {
                    setComp('not');
                    setCasual('not');
                    setMedia('not');
                }
                break;
            case 'media':
                setMedia(value);
                if (value === 'only') {
                    setComp('not');
                    setText('not');
                    setCasual('not');
                }
                break;
            //----------------------------------------
            case 'persistence':
                setPersistence(value);
                if (value === 'only') {
                    setResponse('not');
                    setBrightness('not');
                    setContrast('not');
                    setVolume('not');
                    setSharp('not');
                    setSubpixel('not');
                }
                break;
            case 'response':
                setResponse(value);
                if (value === 'only') {
                    setPersistence('not');
                    setBrightness('not');
                    setContrast('not');
                    setVolume('not');
                    setSharp('not');
                    setSubpixel('not');
                }
                break;
            case 'contrast':
                setContrast(value);
                if (value === 'only') {
                    setResponse('not');
                    setBrightness('not');
                    setSharp('not');
                    setVolume('not');
                    setPersistence('not');
                    setSubpixel('not');
                }
                break;
            case 'brightness':
                setBrightness(value);
                if (value === 'only') {
                    setResponse('not');
                    setSharp('not');
                    setContrast('not');
                    setVolume('not');
                    setPersistence('not');
                    setSubpixel('not');
                }
                break;
            case 'volume':
                setVolume(value);
                if (value === 'only') {
                    setResponse('not');
                    setBrightness('not');
                    setContrast('not');
                    setSharp('not');
                    setPersistence('not');
                    setSubpixel('not');
                }
                break;

            case 'sharp':
                setSharp(value);
                if (value === 'only') {
                    setResponse('not');
                    setBrightness('not');
                    setContrast('not');
                    setVolume('not');
                    setPersistence('not');
                    setSubpixel('not');
                }
                break;
            case 'subpixel':
                setSubpixel(value);
                if (value === 'only') {
                    setResponse('not');
                    setBrightness('not');
                    setContrast('not');
                    setSharp('not');
                    setPersistence('not');
                    setVolume('not');
                }
                break;
            //--------------------------------------
            case 'print':
                setPrint(value);
                break;
            case 'edit':
                setEdit(value);
                break;
            case 'grade':
                setGrade(value);
                if (value === 'yes') {
                    setEsports('no');
                }
                break;
            case 'esports':
                setEsports(value);
                if (value === 'yes') {
                    setGrade('no');
                }
                break;
            //-------------------------------------
            case 'aspect':
                setAspect(value);
                break;
            case 'curve':
                setCurve(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'res':
                setRes(value);
                break;
            case 'minRR':
                setMinRR(value);
                break;
            case 'panel':
                setPanel(value);
                break;
            case 'backlight':
                setBacklight(value);
                break;
            case 'finish':
                setFinish(value);
                break;
            case 'hub':
                setHub(value);
                break;
            case 'calibrated':
                setCalibrated(value);
                break;
            case 'hdr':
                setHdr(value);
                break;
            default:
                break;
        }
    };

    const handleModeToggle = () => {
        setMode(mode === 'basic' ? 'advanced' : 'basic');
        setResponse('not');
        setBrightness('not');
        setContrast('not');
        setSharp('not');
        setPersistence('not');
        setVolume('not');
        setSubpixel('not');
        setCasual('not');
        setText('not');
        setMedia('not');
        setComp('not');
    };

    return (
        <div>
            <div className="wrapper">
                <a href="/" className="header-container">
                    <div>
                        <div className="color-bar"></div>
                        <div className="brand">
                            <img
                                src={frogaiLogo}
                                alt="FrogAI Logo"
                                className="frogai-logo"
                            />
                            <div className="logo-text">
                                <h1 className="header">FrogAI</h1>
                                <p className="tagline">
                                    Monitor recommendations v1.0.2
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="forms-container">
                    <div className="left-column">
                        {/* <h2>Form:</h2> */}
                        <DeviceAndBudgetForm
                            pcGpu={pcGpu}
                            mac={mac}
                            console={console}
                            budget={budget}
                            country={country}
                            handleInputChange={handleInputChange}
                        />
                        <div className="toggle-container">
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={mode === 'advanced'}
                                    onChange={handleModeToggle}
                                />
                                <span className="switch">
                                    <span className="knob"></span>
                                </span>
                                <span className="toggle-text">
                                    Enthusiast Mode (experimental)
                                </span>
                            </label>
                        </div>
                        {mode === 'basic' ? (
                            <UseCasesForm
                                casual={casual}
                                comp={comp}
                                text={text}
                                media={media}
                                handleInputChange={handleInputChange}
                            />
                        ) : (
                            <AdvancedForm
                                persistence={persistence}
                                response={response}
                                contrast={contrast}
                                brightness={brightness}
                                volume={volume}
                                sharp={sharp}
                                subpixel={subpixel}
                                handleInputChange={handleInputChange}
                            />
                        )}
                        <SpecialForm
                            print={print}
                            edit={edit}
                            grade={grade}
                            console={console}
                            mac={mac}
                            pcGpu={pcGpu}
                            esports={esports}
                            handleInputChange={handleInputChange}
                        />
                        <OptionalFilterForm
                            aspect={aspect}
                            curve={curve}
                            size={size}
                            res={res}
                            minRR={minRR}
                            panel={panel}
                            backlight={backlight}
                            hdr={hdr}
                            finish={finish}
                            calibrated={calibrated}
                            hub={hub}
                            handleInputChange={handleInputChange}
                        />
                        <div className="discord-link">
                            <p>
                                Want to learn more? Join{' '}
                                <a
                                    href="https://discord.gg/ultrawide"
                                    className="monitor-enthusiasts-link"
                                >
                                    Monitor Enthusiasts
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="right-column">
                        <RecommendationForm
                            country={country}
                            pcGpu={pcGpu}
                            mac={mac}
                            consoles={console}
                            budget={budget}
                            //---------------------
                            mode={mode}
                            //---------------------
                            casual={casual}
                            comp={comp}
                            text={text}
                            media={media}
                            //---------------------
                            persistence={persistence}
                            response={response}
                            contrast={contrast}
                            brightness={brightness}
                            volume={volume}
                            sharp={sharp}
                            subpixel={subpixel}
                            //---------------------
                            esports={esports}
                            print={print}
                            edit={edit}
                            grade={grade}
                            //---------------------
                            aspect={aspect}
                            curve={curve}
                            size={size}
                            res={res}
                            minRR={minRR}
                            panel={panel}
                            backlight={backlight}
                            hdr={hdr}
                            finish={finish}
                            calibrated={calibrated}
                            hub={hub}
                        />
                    </div>
                </div>
            </div>

            <div className="footer-container">
                <div className="bottom-text">
                    <p>© 2023 theNullCrown</p>
                </div>
            </div>
        </div>
    );
};

export default App;
