import Video from "./Video";

import xcatpred from './assets/xcat/pred.mp4';
import xcattemp from './assets/xcat/temp.mp4';
import xcatgt from './assets/xcat/gt.mp4';
import xcatsax from './assets/xcat/saxnerf.png';

import magixpred from './assets/magix/pred.mp4';
import magixtemp from './assets/magix/temp.mp4';
import magixgt from './assets/magix/gt.mp4';
import magixsax from './assets/magix/saxnerf.png';

export default function Videos(props) {
    const videoSize = 15;

    return (
        <div style={{ fontSize: '0.9em' }}>
            <div style={{ margin: '1rem 0', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '5rem'}}>
                <div style={{ width: '8rem' }}>XCAT dataset</div>
                <Video
                    videoSize={videoSize}
                    title='Ours'
                    text1='Dynamic'
                    text2='Composite'
                    src1={xcatpred} 
                    src2={xcattemp}
                />
                <div>
                    <div style={{ textAlign: 'center', height: `${videoSize}rem` }}>
                        <img src={xcatsax} style={{ width: `${videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top right' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>SAX-NeRF (static)</div>
                </div>
                <div>
                    <div style={{ textAlign: 'center', height: `${videoSize}rem` }}>
                        <video style={{ width: `${videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top right' }} autoPlay={true} loop muted>
                            <source src={xcatgt} type="video/mp4"/>
                        </video>
                    </div>
                    <div style={{ textAlign: 'center' }}>Ground truth</div>
                </div>
            </div>
            <div style={{ margin: '1rem 0', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '5rem' }}>
                <div style={{ width: '8rem' }}>MAGIX dataset</div>
                <Video
                    videoSize={videoSize}
                    title='Ours'
                    text1='Dynamic'
                    text2='Composite'
                    src1={magixpred} 
                    src2={magixtemp}
                />
                <div>
                    <div style={{ textAlign: 'center', height: `${videoSize}rem` }}>
                        <img src={magixsax} style={{ width: `${videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top right' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>SAX-NeRF (static)</div>
                </div>
                <div>
                    <div style={{ textAlign: 'center', height: `${videoSize}rem` }}>
                        <video style={{ width: `${videoSize}rem`, height: `${videoSize}rem`, objectFit: 'cover', objectPosition: 'top right' }} autoPlay={true} loop muted>
                            <source src={magixgt} type="video/mp4"/>
                        </video>
                    </div>
                    <div style={{ textAlign: 'center' }}>Ground truth</div>
                </div>
            </div>
        </div>
    )
}