---
name: AARC Boutique Financial
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4e4637'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#807666'
  outline-variant: '#d2c5b2'
  surface-tint: '#7a5904'
  primary: '#7a5904'
  on-primary: '#ffffff'
  primary-container: '#cfa550'
  on-primary-container: '#543b00'
  inverse-primary: '#edc068'
  secondary: '#186964'
  on-secondary: '#ffffff'
  secondary-container: '#a6f0e9'
  on-secondary-container: '#216f6a'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#adabaa'
  on-tertiary-container: '#403f3f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea4'
  primary-fixed-dim: '#edc068'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4200'
  secondary-fixed: '#a6f0e9'
  secondary-fixed-dim: '#8bd3cd'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504c'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to evoke the exclusivity of a private wealth management firm while maintaining the precision of modern bookkeeping. The brand personality is **Established, Sophisticated, and Meticulous**. 

The aesthetic blends **Minimalism** with **Luxury Editorial** influences. It relies on generous whitespace (macro-typography) to signal confidence and calm. The visual language avoids trendy gimmicks in favor of timeless proportions, high-contrast serif typography, and a tactile sense of depth achieved through soft, diffused shadows and light-catching metallic accents.

## Colors
This design system utilizes a palette rooted in traditional prestige. 

- **Signature Gold (#CFA550):** Used strategically for interactive elements and primary brand markers. It should be treated as a "light source" in the UI.
- **Deep Black (#0D0D0D):** Provides the ultimate contrast for headings and navigation, ensuring a grounded, authoritative feel.
- **Deep Teal (#146762):** Reserved for secondary call-outs, specialized data visualization, or as a sophisticated background for high-impact sections.
- **Warm Cream (#F5EFE0):** Used to soften the interface in content-heavy areas, preventing the "clinical" feel of pure white.
- **Slate Gray (#595959):** Optimized for long-form legibility in body copy, providing enough contrast for accessibility without the harshness of pure black.

## Typography
The typographic hierarchy creates a rhythmic dialogue between the "Classical" and the "Modern." 

**Playfair Display** is used for all headlines to establish a literary, high-end editorial feel. It should be set with tighter letter-spacing in larger sizes. **Montserrat** provides a clean, geometric counterpoint for functional text, ensuring that financial data and UI controls remain legible and objective. Use the `label-caps` style for small descriptors or eyebrow headlines to add a layer of structured sophistication.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain "golden ratio" proportions. 

- **Desktop:** 12-column grid with wide 32px gutters to allow elements "room to breathe."
- **Sectioning:** Large vertical gaps (120px+) are used to separate distinct service offerings, mirroring the experience of turning pages in a luxury magazine.
- **Alignment:** Headlines are often center-aligned for landing experiences but left-aligned for data-heavy dashboard views.
- **Mobile:** Transitions to a 4-column fluid layout with reduced margins (20px) but maintains generous vertical padding to preserve the premium feel.

## Elevation & Depth
Depth is signaled through **Ambient Shadows** rather than physical borders.

- **Level 1 (Base):** Flat surfaces using Pure White or Warm Cream.
- **Level 2 (Cards/Modules):** Soft, extra-diffused shadows (e.g., `0px 10px 40px rgba(0,0,0,0.04)`). These surfaces should appear to float just above the canvas.
- **Interactions:** On hover, cards should slightly lift (Y-axis translation) and the shadow should become more diffused, simulating a physical object being picked up.
- **Navigation:** The sticky header uses a backdrop blur when transitioning to solid Deep Black to maintain a sense of layered glass.

## Shapes
This design system utilizes **Soft** roundedness (0.25rem / 4px). This subtle rounding moves away from the clinical feel of sharp corners while avoiding the overly "bubbly" or consumer-grade appearance of large radii or pill shapes. This precision reflects the "AARC" commitment to accuracy and structured financial order.

## Components

### Buttons
- **Primary:** Solid Signature Gold (#CFA550) with Deep Black text. Bold weight. On hover, the button scales up by 3% (`scale(1.03)`) with a smooth 300ms transition.
- **Secondary:** Transparent background with a 1px Signature Gold border and gold text. 

### Cards
- White background, 4px border radius, and the Level 2 ambient shadow. No visible border. Content should have generous internal padding (min 32px).

### Navigation
- **Sticky Behavior:** Starts transparent with Gold or White text. Upon scrolling 50px, it transitions to a solid Deep Black background with a subtle shadow. 
- **Links:** Montserrat Bold, uppercase, with a tracking-in hover effect.

### Input Fields
- Underline-only or very light neutral borders. Use the Warm Cream background for input areas to distinguish them from the main page surface.

### Animations
- **Reveal:** All major sections and card groups use a "Fade + Slide" entrance. Elements should opacity-fade from 0 to 1 while sliding upward by 20px over 600ms.
- **Micro-interactions:** Icons should have a subtle gold glow or slight Y-offset when hovered.