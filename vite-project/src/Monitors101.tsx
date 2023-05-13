import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Monitors101.css';
import frogaiLogo from './assets/frogai.jpg';

const Monitors101: React.FC = () => {
    return (
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
            <div className="CrashCourse">
                <h2>Basic terminology</h2>
                <ul>
                    <li>
                        Panel: The part of the monitor or the 'screen' that
                        displays the image.
                    </li>
                    <li>
                        On screen display (OSD): A menu that appears on the
                        monitor screen, independent of the computer connected to
                        it, that lets you adjust various settings.
                    </li>
                    <li>
                        Pixel: The smallest unit of the panel that can be
                        controlled by a computer.
                    </li>
                </ul>
                <h2>Performance Characteristics</h2>
                <h3>Motion</h3>
                <ul>
                    <li>
                        Sample and hold: In a sample and hold system, the image
                        is refreshed at a constant rate and the pixels on the
                        screen are held until the next refresh cycle.
                    </li>
                    <li>
                        Strobing: Strobing works by briefly flashing the image
                        on the screen and then turning it off completely during
                        the time that it takes for the next image to be drawn.
                        This causes a reduction in the time an image is held on
                        the screens resulting in less perceived motion blur.
                    </li>
                    <li>
                        Refresh rate and persistence: Refresh rate is the number
                        of times the image refreshes per second and is measured
                        in Hz.
                    </li>
                    <li>
                        Persistence: Image persistence refers to how long a
                        frame is held on the screen for. Lower image persistence
                        leads to lower motion blur. In sample and hold displays,
                        refresh rate is directly related to image persistence,
                        for non sample and hold displays (or displays using
                        strobing), image persistence does not depend on refresh
                        rate.
                    </li>
                    <li>
                        Response time: The time it takes for a pixel to change
                        from one color to another. Lower response times lead to
                        clearer motion. Most reviewers only measure gray to gray
                        response times and ignore other colors.
                    </li>
                    <li>
                        Pixel Overshoot: Overshoot occurs when pixels overshoot
                        their intended color value briefly before settling into
                        their correct value during a transition. Lower overshoot
                        leads to clearer motion.
                    </li>
                    <li>
                        Total Response time = response time + overshoot; However
                        note that sensitivity to overshoot varies between users.
                    </li>
                </ul>
                The overall quality of motion depends on all of the above
                factors but we cannot directly compare them. The best way to
                determine the motion quality is by looking at UFO shots or Frog
                pursuit shots as these capture all aspects of motion
                performance.
                <h3>Image</h3>
                <ul>
                    <li>
                        Luminance: The intensity of light emitted by the panel
                        per unit area, measured in candelas per square meter
                        (cd/m²) or nits. Colloquially knows as brightness but
                        that term actually means something else.
                    </li>
                    <li>
                        Resolution: The number of pixels in the panel, typically
                        expressed as width x height (e.g. 1920 x 1080).
                    </li>
                    <li>
                        (Static) Contrast ratio: The ratio of the peak potential
                        luminance and lowest potential luminance of pixels
                        (called black level) at the same point in time.
                    </li>
                    <li>
                        Color Gamut: The range of colors a display can produce
                        at a fixed luminance. Typically expressed as a
                        percentage of some predefined color space like sRGB, P3
                        or AdobeRGB.
                    </li>
                    <li>
                        Color volume: The range of colors a display can produce
                        at varying levels of luminance. It's a 3-dimensional
                        representation of a display's color capabilities. Also
                        expressed as a percentage of some predefined color
                        space.
                    </li>
                    <li>
                        Dynamic range: The range of brightness levels a display
                        can produce for each color.
                        <ul>
                            <li>
                                Standard Dynamic Range (SDR): The range of
                                luminance from 0 to around 100 nits.
                            </li>
                            <li>
                                High Dynamic Range (HDR:) The range of luminance
                                from 0 to 10000 nits.{' '}
                            </li>
                        </ul>
                    </li>
                </ul>
                The overall SDR image quality is determined by the resolution,
                contrast ratio and color gamut. The luminance does not matter in
                this case since all modern displays are capable of SDR
                luminance. The overall HDR image quality is determined by the
                luminance, resolution, contrast ratio and color volume.{' '}
                <p>
                    {' '}
                    To learn more about this topic, check out this article by{' '}
                    <a
                        href="https://tftcentral.co.uk/articles/pointers_gamut"
                        className="monitor-enthusiasts-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TFTCentral
                    </a>
                </p>
                <h3>Text</h3>
                <ul>
                    <li>
                        Pixels-per-inch (PPI): PPI is a measurement of the pixel
                        density of a display. It is calculated by dividing the
                        number of pixels on the diagonal by the corresponding
                        length in inches. A higher PPI leads to sharper and more
                        detailed images and text on the display.
                    </li>
                    <li>
                        Subpixel: A subpixel is a single component of a pixel
                        that displays one color of light. Subpixels can be
                        arranged in various ways.
                    </li>
                    <li>
                        Subpixel anti-aliasing: Subpixel AA works by adjusting
                        the intensity of subpixels to create the appearance of
                        smoother, more well-defined edges for text. This can
                        improve the readability of text, especially at smaller
                        font sizes.
                    </li>
                    <li>
                        Coating: Layer of material applied to a surface, often
                        for protection, enhancement, or aesthetic purposes
                        <ul>
                            <li>
                                Anti-glare (AG/Matte): AG is a rough surface
                                treatment that diffuses incoming light, reducing
                                the amount of glare reflected from the display.
                                This coating sacrifices image quality and text
                                quality.{' '}
                            </li>
                            <li>
                                Anti-reflective (AR): AR is a thin layer of
                                material applied to the surface of the display
                                that reduces the amount of light reflected back
                                to the viewer. This coating preserves image and
                                text quality but the reflections remain well
                                defined despite being dimmer.
                            </li>
                        </ul>
                    </li>
                </ul>
                Overall text quality depends on PPI, subpixel layout, subpixel
                AA and choice of coating.
                <h2>Panel types</h2>
                <h3>Liquid Crystal Display (LCD)</h3>
                LCD displays primarily consist of a light emitting diode (LED)
                layer (backlight) with a liquid crystal layer (cell) that
                creates color by blocking parts of the incoming light. There are
                other optional layers like polarizers, quantum dot layers etc.
                <ul>
                    <li>
                        Cell types:
                        <ul>
                            <li>
                                In-Plane Switching (IPS): IPS cells offer great
                                viewing angles and fast response times but have
                                poor contrast ratio. IPS has many variants like
                                LG's Nano IPS, AUO's Fast IPS etc.
                            </li>
                            <li>
                                Vertical Alignment (VA): VA cells have slightly
                                better contrast than IPS but have narrower
                                viewing angles and slower response times
                                especially for dark colors (dark smearing)
                            </li>
                            <li>
                                Twisted Nematic (TN): TN cells have the fastest
                                response times among LCDs but have bad viewing
                                angles and contrast.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Backlight types:
                        <ul>
                            <li>
                                Edge lit: Edge-lit backlights use LEDs placed
                                along the edges of the screen to provide
                                backlighting.
                            </li>
                            <li>
                                Direct lit: Direct-lit backlights use LEDs
                                placed directly behind the screen to provide
                                backlighting.
                            </li>
                            <ul>
                                <li>
                                    Standard: Standard direct-lit backlights
                                    have LEDs cannot be individually controlled.
                                </li>
                                <li>
                                    Full-Array Local Dimming (FALD): FALD
                                    backlights have LEDs grouped into zones that
                                    can be dimmed independently for better
                                    contrast and black levels.
                                </li>
                                <li>
                                    MiniLED: FALD backlights with higher density
                                    of smaller LEDs which can be grouped into
                                    more zones for more contrast.
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li>
                        Quantum Dot: A layer that can be used to increase the
                        range of colors that can be output by the display.
                    </li>
                </ul>
                <h3>Organic Light Emitting Diode (OLED)</h3>
                <p>
                    OLED panels are self-emissive panels that use organic
                    hydrocarbon that emits light by burning when an electric
                    current is applied.
                </p>{' '}
                <p>
                    The organic nature leads to burn-in or permanent image
                    retention, a phenomenon where a persistent image or pattern
                    on an OLED screen can leave a faint ghost-like trace of that
                    image, even when the content on the screen has changed. This
                    can happen when a particular image or pattern is displayed
                    on the screen for an extended period, causing the organic
                    material in the OLED pixels to degrade unevenly.
                </p>{' '}
                <p>
                    OLED panels are generally dimmer than LCDs since the organic
                    material decomposes at an exponentially faster rate at
                    higher brightness. OLED panels can turn off pixels and as a
                    result have perfect black levels and nearly infinite
                    contrast. They also have the fastest response times and best
                    viewing angles.
                </p>
                <ul>
                    <li>
                        White OLED (W-OLED): OLED panel from LG Display that
                        uses a RWBG (red-white-blue-green) or WBGR
                        (white-blue-green-red) layout. The additional white
                        subpixel boosts white brightness however other colors
                        are not enhanced. The unusual subpixel layout leads to
                        poor text quality.
                    </li>
                    <li>
                        Quantum Dot OLED (QD-OLED): OLED panel from Samsung
                        Display that uses a quantum dot layer. The panel has
                        standard RGB subpixels but in a triangle layout leading
                        to poor text quality. Current QD-OLEDS also exhibit
                        raised blacks if a light source directly hits the panel.
                    </li>
                    <li>
                        Inkjet OLED: Inkjet OLED panels use inkjet printing
                        technology to create OLED layers. These are only
                        available in professional displays with low refresh
                        rate. They use a standard RGB layout so have better text
                        compared to other OLED types.
                    </li>
                </ul>
                <h2>Quality control</h2>
                The manufacturing process for monitors involves a lot of
                variables and this creates variance even among the panels used
                in the same monitor (panel variance). Quality control refers to
                the processes and measures taken to ensure that monitors are
                manufactured to meet certain standards and specifications. This
                can include testing panels for defects such as dead pixels,
                backlight bleeding, and color accuracy, as well as ensuring that
                they meet performance and safety standards. Manufacturers may
                also implement quality control measures such as visual
                inspections, automated testing, and sample testing to ensure
                that their monitors meet the required standards. Quality control
                is important to ensure that monitors are reliable, safe, and
                perform as expected.
                <h2>Calibration</h2>
                Due to panel variance and the cost of individually calibrating
                each panel at the factory, most monitors are not color accurate
                out of the box. Calibration is the process of adjusting a
                monitor's settings to achieve accurate and consistent colors and
                brightness levels. A properly calibrated monitor can ensure that
                colors are displayed as they were intended, which is especially
                important for tasks such as photo and video editing, photo
                editing, graphic design and color grading.
            </div>
            <div className="pad"></div>
            <div className="course-link">
                <p>
                    Return to{' '}
                    <a href="/recommender" className="monitor-enthusiasts-link">
                        recommender
                    </a>
                </p>
            </div>
            <div className="footer-container">
                <div className="bottom-text">
                    <p>© 2023 theNullCrown</p>
                </div>
            </div>
        </div>
    );
};

export default Monitors101;
