import { useState } from "react";

export default function Video(props) {
    const { videoSize } = props;

    const [ barFrac, setBarFrac ] = useState(0.5);

    const onMouseMove = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let width = rect.width;
        let x = e.clientX - rect.left;

        if (x <= width) {
            setBarFrac(x/width);
        }
    }

    return (
        <div style={{ width: `${videoSize}rem`, height: `${videoSize}rem` }} onMouseMove={onMouseMove}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div style={{ position: 'absolute', width: '100%', left: `${barFrac*videoSize}rem`, top: 0 }}>
                    <video style={{ width: `${videoSize - barFrac*videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top right' }} autoPlay={true} loop muted>
                        <source src={props.src2} type="video/mp4"/>
                    </video>
                </div>
                
                <div style={{ position: 'absolute', width: '100%', left: 0, top: 0,  }}>
                    <video style={{ width: `${barFrac*videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top left' }} autoPlay={true} loop muted>
                        <source src={props.src1} type="video/mp4"/>
                    </video>
                </div>
                <div 
                    style={{ position: 'absolute', width: '0.5rem', height:`${videoSize}rem`, left: `${barFrac*videoSize}rem`, top: 0, backgroundColor: 'black', opacity: 0.3 }} 
                />
                {barFrac > 0.2 && <div style={{ position: 'absolute', top: '2px', left: '5px', fontSize: '0.9em', color: 'white' }}>
                    {props.text2}<br/> output
                </div>}
                {barFrac < 0.8 && <div style={{ position: 'absolute', top: '2px', right: '5px', fontSize: '0.9em', color: 'black' }}>
                    {props.text1}<br/> output
                </div>}
            </div>
            <div style={{ textAlign: 'center' }}>{props.title}</div>
        </div>
    )
}