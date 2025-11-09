/**
 * Default configuration for Hero section Beams component
 */
export const HERO_BEAMS_CONFIG = {
  beamWidth: 2.5,
  beamHeight: 30,
  beamNumber: 20,
  lightColor: "#ffffff",
  speed: 2,
  noiseIntensity: 3.85,
  scale: 0.18,
  rotation: 30,
} as const;

/**
 * Hero section layout constants
 */
export const HERO_LAYOUT = {
  minHeight: 1200,
  gradientStart: "0%",
  gradientMid1: "30%",
  gradientMid2: "70%",
  gradientEnd: "100%",
} as const;
