import chroma from "chroma-js";

const getColorWithRandomLuminance = (hex: string): string => {
  const color = chroma(hex);
  const [luminance, chromaValue, hue] = color.oklch();

  const randomLuminance = luminance + (Math.random() - 0.5) * 0.1; // Adjust luminance slightly
  const randomChroma = chromaValue + (Math.random() - 0.5) * 0.1; // Adjust chroma (saturation) slightly
  const randomHue = hue + (Math.random() - 0.5) * 5; // Adjust hue (temperature) slightly

  const adjustedColor = chroma.oklch(randomLuminance, randomChroma, randomHue);
  return adjustedColor.hex();
};

export default getColorWithRandomLuminance;
