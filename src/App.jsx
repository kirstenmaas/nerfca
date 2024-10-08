import './App.css'

import { FaGithub } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

import Latex from 'react-latex'

import overview from './assets/overview.png';
import comparison from './assets/comparison.png';

import Videos from './Videos';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <header>
          <h1 style={{ display: 'inline-block', margin: '0' }}>
            NeRF-CA<br/>
            <span style={{ fontSize: '0.7em', lineHeight: '1', marginTop: '1em', fontWeight: '400' }}>Dynamic Reconstruction of X-ray Coronary Angiography <br/> with Extremely Sparse-views</span>
          </h1>
        </header>
        <div className='authorcontainer'>
          <div><a href='https://kirstenmaas.github.io/'>Kirsten Maas</a><sup>1</sup></div>
          <div><a href='https://www.dannyruijters.nl/'>Danny Ruijters</a><sup>1, 2</sup></div>
          <div><a href='https://www.tue.nl/en/research/researchers/anna-vilanova/'>Anna Vilanova</a><sup>1</sup></div>
          <div><a href='https://nicola17.github.io/'>Nicola Pezzotti</a><sup>1, 2</sup></div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2vw', margin: '1em 0' }}>
          <div><sup>1</sup>Eindhoven University of Technology</div>
          <div><sup>2</sup>Philips Healthcare</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw', margin: '2rem 0 3rem 0' }}>
          <a className='nocolor' href='https://arxiv.org/abs/2408.16355'><FaFile size='2em'/> Paper</a>
          <a className='nocolor' href='https://github.com/kirstenmaas/NeRF-CA'><FaGithub size='2em'/> Code</a>
        </div>
      </div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img style={{ maxWidth: '100%', margin: '0 0 0.5em 0' }} src={comparison} alt='Comparison to Existing Methods' />
          <div style={{ fontSize: '0.8em' }}>Fig 1. Comparison to existing state-of-the-art NeRF-based 3D reconstruction methods for <span style={{ fontWeight: '600'}}>varying amounts of training projections</span> for two 4D phantom datasets 
           (a)<a href='https://cvit.duke.edu/resource/xcat-phantom-program/'> XCAT</a> and (b) <a href='https://www.osirix-viewer.com/resources/dicom-image-library/'> CCTA MAGIX</a>. 
            We compare <span style={{ color: '#FC8D62', fontWeight: '600' }}>Ours (full) </span> (see Fig 2. below) and 
            <span style={{ color: '#6A83BB', fontWeight: '600' }}> Ours (sparse) </span> (see the purple components in Fig 2.) to 
            <a href='https://arxiv.org/abs/2311.10959' style={{ color: '#FFD92F', fontWeight: '600' }}> SAX-NeRF</a>, 
            <a href='https://arxiv.org/abs/2209.14540' style={{ color: '#A6D854', fontWeight: '600' }}> NAF</a>, and 
            <a href='https://arxiv.org/abs/2003.08934' style={{ color: '#A6761D', fontWeight: '600' }}> NeRF</a>. 
            For more details, we refer to our paper.

          </div>
        </div>
        <div style={{ margin: '3rem 0'}}>
          <h2 style={{ borderBottom: '1px solid #dee2e6' }}>Abstract</h2>
          <div style={{ fontSize: '0.9em' }}>
            Dynamic three-dimensional (4D) reconstruction from two-dimensional X-ray coronary angiography (CA) remains a significant clinical problem.
            Challenges include sparse-view settings, intra-scan motion, and complex vessel morphology such as structure sparsity and background occlusion.
            Existing CA reconstruction methods often require extensive user interaction or large training datasets.
            On the other hand, Neural Radiance Field (NeRF), a promising deep learning technique, has successfully reconstructed high-fidelity static scenes for natural and medical scenes.
            Recent work, however, identified that sparse-views, background occlusion, and dynamics still pose a challenge when applying NeRF in the X-ray angiography context.
            Meanwhile, many successful works for natural scenes propose regularization for sparse-view reconstruction or scene decomposition to handle dynamics.
            However, these techniques do not directly translate to the CA context, where both challenges and background occlusion are significant.
            <br/><br/>This paper introduces NeRF-CA, the first step toward a 4D CA reconstruction method that achieves reconstructions from sparse coronary angiograms with cardiac motion.
            We leverage the motion of the coronary artery to decouple the scene into a dynamic coronary artery component and static background.
            We combine this scene decomposition with tailored regularization techniques.
            These techniques enforce the separation of the coronary artery from the background by enforcing dynamic structure sparsity and scene smoothness.
            By uniquely combining these approaches, we achieve 4D reconstructions from as few as four angiogram sequences.
            This setting aligns with clinical workflows while outperforming state-of-the-art X-ray sparse-view NeRF reconstruction techniques.
            We validate our approach quantitatively and qualitatively using 4D phantom datasets and ablation studies.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', margin: '3em 0'}}>
            <img src={overview} style={{ maxWidth: '100%' }} />
            <div style={{ fontSize: '0.8em' }}>Fig 2. Overview of NeRF-CA. We categorize the components of our method according to their function: 
              <span style={{ color: '#72c7ac', fontWeight: '600' }}> Dynamic reconstruction</span> and <span style={{ color: '#6a83bb', fontWeight: '600' }}>Sparse-view reconstruction</span>.
              We combine several loss functions in our work: 
              Photometric Loss <Latex>{`$\\mathcal{L}_p$`}</Latex>,
               Static vs. Dynamic Factorization loss <span style={{ color: '#72c7ac'}}><Latex>{`$\\mathcal{L}_b$`}</Latex></span>,
                Dynamic Entropy Loss <span style={{ color: '#72c7ac'}}><Latex>{`$\\mathcal{L}_e$`}</Latex></span>,
                 and Dynamic Occlusion Loss <span style={{ color: '#6a83bb'}}><Latex>{`$\\mathcal{L}_o$`}</Latex></span>.
            </div>
          </div>
        </div>
        <div style={{ margin: '3rem 0' }}>
          <h2 style={{ borderBottom: '1px solid #dee2e6' }}>Novel view synthesis results</h2>
          <div style={{ fontSize: '0.9em' }}>These results are obtained with <span style={{ fontWeight: '600' }}>4 training projections</span>. If the videos appear out of sync, please refresh the page.</div>
          <Videos />
        </div>
        <div style={{ margin: '3rem 0'}}>
          <h2 style={{ borderBottom: '1px solid #dee2e6' }}>Citation</h2>
          <div style={{ margin: '0 0 1em 0', fontSize: '0.9em' }}>If you want to cite our work, please use:</div>
          <code>
            <div>{"@article{maas2024nerfca,"}</div>
            <div style={{ margin: '0 0 0 1em'}}> {"title={NeRF-CA: Dynamic Reconstruction of X-ray Coronary Angiography with Extremely Sparse-views},"}</div>
            <div style={{ margin: '0 0 0 1em'}}>{"author={Kirsten W. H. Maas and Danny Ruijters and Anna Vilanova and Nicola Pezzotti},"}</div>
            <div style={{ margin: '0 0 0 1em'}}>{"journal={arXiv preprint arXiv:2408.16355},"}</div>
            <div style={{ margin: '0 0 0 1em'}}>{"year={2024},"}</div>
            <div>{"}"}</div>
          </code>
        </div>
      </div>
      <div style={{ fontSize: '0.8rem'}}>This site is hosted on Github Pages.</div>
    </div>
  )
}

export default App
