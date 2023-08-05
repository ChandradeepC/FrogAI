import { useState } from 'react';
import frogaiLogo from './assets/frogai.jpg';
import DeviceAndBudgetForm from './DeviceAndBudget';
import AdvancedForm from './Advanced';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';
import RecommendationForm from './Recommendations';
import UseCasesForm from './UseCases';

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
    const [module, setModule] = useState<string>('nopref');

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
            case 'module':
                setModule(value);
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
            <div className="flex flex-col min-h-screen max-w-full">
                <header className="bg-gray-900 text-white py-2 mb-16">
                    <div className="container mx-auto p-1 flex items-center max-w-screen-xl">
                        <a href="/">
                            <img
                                src={frogaiLogo}
                                alt="FrogAI Logo"
                                className="h-10 mr-5 rounded-full ring-4 ring-gray-700"
                            />
                        </a>
                        <a href="/" className="flex items-center">
                            <h1 className="text-pink-500 text-3xl font-bold  mr-2">
                                FrogAI
                            </h1>
                            <p className="text-sm text-gray-400">
                                Monitor recommendations v1.0.3
                            </p>
                        </a>
                    </div>
                </header>
                <div className="container max-w-screen-xl flex flex-col md:flex-row md:space-x-10 md:px-5 items-start justify-start mx-auto">
                    <div className="md:w-2/5 mx-5">
                        <DeviceAndBudgetForm
                            pcGpu={pcGpu}
                            mac={mac}
                            console={console}
                            budget={budget}
                            country={country}
                            handleInputChange={handleInputChange}
                        />
                        <div className="flex items-center mt-4 ml-4">
                            <label className="relative inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={mode === 'advanced'}
                                    onChange={handleModeToggle}
                                    className="form-checkbox h-4 w-4 text-pink-500 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-gray-">
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
                            module={module}
                            handleInputChange={handleInputChange}
                        />
                        <div className="my-4">
                            <p>
                                New to monitors? Try the{' '}
                                <a
                                    href="/crash-course"
                                    className="text-pink-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Monitors 101
                                </a>{' '}
                                15-min course
                            </p>
                        </div>
                        <div className="my-4">
                            <p>
                                Need more specialized recommendations? Join{' '}
                                <a
                                    href="https://discord.gg/ultrawide"
                                    className="text-pink-500 hover:underline"
                                >
                                    Monitor Enthusiasts
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-3/5 mt-5 md:mt-5 mx-5">
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
                            module={module}
                        />
                    </div>
                </div>
                <footer className="container max-w-screen-xl mx-auto border-t border-gray-300 py-4 mt-20">
                    <div className="container max-w-screen-xl mx-auto">
                        <p className="text-left px-2 text-sm">
                            © 2023 theNullCrown
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;
