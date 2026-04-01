import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particleConfig from './config';

function ParticleBackground() {
  const Particlesinit = async (main) => {
    await loadFull(main);
  };
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Particles init={Particlesinit} options={particleConfig} />
    </div>
  );
}
export default ParticleBackground;
