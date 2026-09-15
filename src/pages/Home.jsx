import PixelBlast from '../components/backround';
import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection , TeachingSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
export const Home = () => {
  const [themeColors, setThemeColors] = useState({ background: '#efbfd7', pixel: '#070607' });
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      document.documentElement.classList.toggle('dark', mq.matches);
    };
    applyTheme();
    mq.addEventListener('change', applyTheme);
    return () => mq.removeEventListener('change', applyTheme);
  }, []);
  useEffect(() => {
    const updateColors = () => {
      const styles = getComputedStyle(document.documentElement);
      setThemeColors({
        background: styles.getPropertyValue('--background').trim(),
        pixel: styles.getPropertyValue('--pixel').trim(),
      });
    };
    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div style={{ position: 'fixed', inset: 0  }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color={themeColors.pixel}
          backgroundColor={themeColors.background}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent={false}
        />
      </div>
      {/* navbar */}
      <Navbar style={{ zIndex: 1 }}>
      </Navbar>
      {/* main content */}
      <main style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <HeroSection style={{ zIndex: 1 }} />
        <AboutSection style={{ zIndex: 1 }} />
        <SkillsSection style={{ zIndex: 1 }} />
        <ProjectsSection style={{ zIndex: 1 }} />
        <TeachingSection style={{ zIndex: 1 }} />
        <ContactSection style={{ zIndex: 1 }} />
      </main>
        {/* footer */}
    <Footer style={{ zIndex: 1 }} />
    </div>
  );
};