# Responsive Design Guide

This document outlines the responsive design implementation for the Meridian XYZ landing page.

## Breakpoint Strategy

The design follows a mobile-first approach using Tailwind CSS breakpoints:

- **Base (Mobile)**: Default styles for screens < 768px
- **md (Tablet)**: Styles for screens ≥ 768px
- **lg (Desktop)**: Styles for screens ≥ 1024px

## Layout Variations

### Mobile (< 768px)

**Container Padding:**

```
px-[44px] py-[50px]
```

**Content Positioning:**

- Hero content: `left-0, top-[165px]`
- Max width: `287px`

**Typography:**

- Heading: `text-[32px]`
- Body text: `text-[14px]`

**Layout Structure:**

- Footer button and tagline are stacked vertically (`flex-col`)
- Footer has fixed height of `107px`
- Button appears below the tagline

### Tablet (768px - 1023px)

**Container Padding:**

```
p-[50px]
```

**Content Positioning:**

- Hero content: `left-0, top-[200px]`
- Width: `~470px` for heading, `~368px` for body

**Typography:**

- Heading: `text-[40px]`
- Body text: `text-[16px]`

**Layout Structure:**

- Footer button and tagline are inline (`flex-row`)
- Button appears to the right of tagline
- No fixed height on footer

### Desktop (≥ 1024px)

**Container Padding:**

```
p-[50px]
```

**Content Positioning:**

- Hero content: `left-[129.5px], top-[200px]`
- Max width: `500px` for heading, `370px` for body
- Content is indented from the left edge

**Typography:**

- Heading: `text-[40px]`
- Body text: `text-[16px]`

**Layout Structure:**

- Footer button and tagline are inline (`flex-row`)
- Button appears to the right of tagline
- Content has center justification

## Component Order

An important responsive feature is the reordering of components:

**Mobile:**

```
<Header />
<Frame3 /> (tagline + button)
<Frame4 /> (hero content)
```

**Tablet & Desktop:**

```
<Header />
<Frame4 /> (hero content)
<Frame3 /> (tagline + button)
```

This is achieved using Tailwind's responsive display utilities:

```tsx
<div className="md:hidden"><Frame3 /></div>
<Frame4 />
<div className="hidden md:block"><Frame3 /></div>
```

## Key Responsive Classes

### Frame4 (Hero Content)

```tsx
className="absolute left-0 lg:left-[129.5px]
           top-[165px] md:top-[200px]
           max-w-[287px] md:max-w-none lg:max-w-[500px]"
```

### Heading Text

```tsx
className="text-[32px] md:text-[40px]
           w-[287px] md:w-[470.702px] lg:w-[500px]"
```

### Body Text

```tsx
className="text-[14px] md:text-[16px]
           w-[287px] md:w-[368.43px] lg:w-[370px]"
```

### Frame3 (Footer)

```tsx
className="flex-col md:flex-row
           h-[107px] md:h-auto"
```

### Container

```tsx
className = "px-[44px] py-[50px] md:p-[50px]";
```

## Testing Responsive Design

### Using Browser DevTools

1. Open the site in your browser
2. Open DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
4. Test common breakpoints:
   - Mobile: 375px (iPhone)
   - Mobile: 414px (iPhone Plus)
   - Tablet: 768px (iPad Portrait)
   - Tablet: 1024px (iPad Landscape)
   - Desktop: 1440px (Laptop)
   - Desktop: 1920px (Desktop)

### Key Things to Verify

✅ Text sizes change appropriately at breakpoints  
✅ Content widths adjust correctly  
✅ Footer layout switches from stacked to inline  
✅ Hero content position shifts on desktop  
✅ Padding adjusts on mobile  
✅ Component order changes between mobile and tablet/desktop  
✅ Modal remains centered and responsive

## Modal Responsiveness

The email collection modal is already responsive with:

- `max-w-md` - maximum width on larger screens
- `mx-4` - horizontal margin on smaller screens
- Responsive padding and font sizes

## Design Fidelity

All responsive variations match the Figma designs:

- `src/figma/phone.html` - Mobile design reference
- `src/figma/tablet.html` - Tablet design reference
- `src/figma/desktop.html` - Desktop design reference

## Browser Compatibility

The responsive design uses:

- Tailwind CSS utility classes (widely supported)
- Flexbox (IE11+, all modern browsers)
- CSS custom properties for gradients (IE11+, all modern browsers)
- Modern viewport units (all modern browsers)

For best results, target modern browsers (Chrome, Firefox, Safari, Edge).
