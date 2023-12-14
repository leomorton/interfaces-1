import React from "react";

type GlowButtonProps = {
    text: string;
    time1: string;
    delay1: string;
    time2: string;
    delay2: string;
};

export default function GlowButton(props: GlowButtonProps) {
    return (
        <div className="glowButton w-32 h-10">
            <div className="buttonBlurWrapper">
                <div className={`buttonBlur ${props.delay1} ${props.time1}`}>
                    <p className={`buttonText ${props.delay2} ${props.time2}`}>{props.text}</p>
                </div>
                {/* <div className="buttonBlurGradient"></div> */}
            </div>
            <div className="buttonBorderWrapper">
                <div className={`buttonBorder ${props.delay1} ${props.time1}`}>
                    <p className={`buttonText ${props.delay2} ${props.time2}`}>{props.text}</p>
                </div>
                {/* <div className="buttonBorderGradient"></div> */}
            </div>
        </div>
    );
}
