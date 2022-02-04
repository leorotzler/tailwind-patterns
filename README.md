# Tailwind Background Patterns

### This plugin allows you to create utility classes for (SVG) background patterns. The patterns can be colored with color combinations of your choice.

## Installation

```bash
npm install -D @everec/tailwind-patterns
```

or

```bash
yarn add @everec/tailwind-patterns -dev
```

Then add the plugin to your **tailwind.config.js** file:

```JavaScript
// tailwind.config.js
const tailwindPatterns = require("@everec/tailwind-patterns");

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    tailwindPatterns({
        // ...
    })
    // ...
  ],
}

```

## Configuration

```JavaScript
tailwindPatterns({
  patterns: {
      "my-pattern":
          "url(\"data:image/svg+xml,<svg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%25' height='100%25' fill='BACKGROUND_FILL'/><path d='M0 0h10v20H0zM30 0v10H10V0zM10 10h10v20H10zM40 10v10H20V10zM20 20h10v20H20zM50 20v10H30V20zM30 30h10v20H30zM20 30v10H0V30zM10 20v10h-20V20zM30-10h10v20H30z'  stroke-width='1' stroke='PATTERN_FILL' fill='none'/></pattern></defs><rect width='800%25' height='800%25' transform='translate(-18,-6)' fill='url(%23a)'/></svg>\")",
  },
  colorCombinations: {
      'green-devil': '#a1fc03|#6ca803',
      'simply-red': 'red',
  },
  patternNameSpace: 'patterns', // optional, default: patterns
})
```

This configuration will then create utility classes for the 'my-pattern' with all the color combinations:

```css
.pattern-my-pattern-green-devil {
    background-image: url("data:image/svg+xml,<svg width='70' height='40' viewBox='0 0 70 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0_971_236792)'><rect width='69.141' height='40' fill='%23a1fc03'/><path d='M69.2118 40H46.1178L34.5698 20L46.1178 0H69.2118L80.7588 20L69.2118 40ZM57.6648 60H34.5698L23.0228 40L34.5698 20H57.6648L69.2118 40L57.6648 60ZM57.6648 20H34.5698L23.0228 0L34.5698 -20H57.6648L69.2118 0L57.6648 20ZM34.5698 60H11.4758L-0.0701876 40L11.4768 20H34.5718L46.1188 40L34.5698 60ZM34.5698 20H11.4758L-0.0701876 0L11.4768 -20H34.5718L46.1178 0L34.5698 20ZM23.0228 40H-0.0701876L-11.6172 20L-0.0701876 0H23.0238L34.5698 20L23.0228 40Z' stroke='%236ca803'/></g><defs><clipPath id='clip0_971_236792'><rect width='69.141' height='40' fill='PATTERN_FILL'/></clipPath></defs></svg>")'><rect width='69.141' height='40' fill='%23a1fc03'/><path d='M69.2118 40H46.1178L34.5698 20L46.1178 0H69.2118L80.7588 20L69.2118 40ZM57.6648 60H34.5698L23.0228 40L34.5698 20H57.6648L69.2118 40L57.6648 60ZM57.6648 20H34.5698L23.0228 0L34.5698 -20H57.6648L69.2118 0L57.6648 20ZM34.5698 60H11.4758L-0.0701876 40L11.4768 20H34.5718L46.1188 40L34.5698 60ZM34.5698 20H11.4758L-0.0701876 0L11.4768 -20H34.5718L46.1178 0L34.5698 20ZM23.0228 40H-0.0701876L-11.6172 20L-0.0701876 0H23.0238L34.5698 20L23.0228 40Z' stroke='%236ca803'/></g><defs><clipPath id='clip0_971_236792'><rect width='69.141' height='40' fill='PATTERN_FILL'/></clipPath></defs></svg>);
    background-color: #a1fc03;
}
.pattern-my-pattern-simply-red {
    background-image: url("data:image/svg+xml,<svg width='70' height='40' viewBox='0 0 70 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0_971_236792)'><rect width='69.141' height='40' fill='red'/><path d='M69.2118 40H46.1178L34.5698 20L46.1178 0H69.2118L80.7588 20L69.2118 40ZM57.6648 60H34.5698L23.0228 40L34.5698 20H57.6648L69.2118 40L57.6648 60ZM57.6648 20H34.5698L23.0228 0L34.5698 -20H57.6648L69.2118 0L57.6648 20ZM34.5698 60H11.4758L-0.0701876 40L11.4768 20H34.5718L46.1188 40L34.5698 60ZM34.5698 20H11.4758L-0.0701876 0L11.4768 -20H34.5718L46.1178 0L34.5698 20ZM23.0228 40H-0.0701876L-11.6172 20L-0.0701876 0H23.0238L34.5698 20L23.0228 40Z' stroke='red'/></g><defs><clipPath id='clip0_971_236792'><rect width='69.141' height='40' fill='PATTERN_FILL'/></clipPath></defs></svg>")'><rect width='69.141' height='40' fill='red'/><path d='M69.2118 40H46.1178L34.5698 20L46.1178 0H69.2118L80.7588 20L69.2118 40ZM57.6648 60H34.5698L23.0228 40L34.5698 20H57.6648L69.2118 40L57.6648 60ZM57.6648 20H34.5698L23.0228 0L34.5698 -20H57.6648L69.2118 0L57.6648 20ZM34.5698 60H11.4758L-0.0701876 40L11.4768 20H34.5718L46.1188 40L34.5698 60ZM34.5698 20H11.4758L-0.0701876 0L11.4768 -20H34.5718L46.1178 0L34.5698 20ZM23.0228 40H-0.0701876L-11.6172 20L-0.0701876 0H23.0238L34.5698 20L23.0228 40Z' stroke='red'/></g><defs><clipPath id='clip0_971_236792'><rect width='69.141' height='40' fill='PATTERN_FILL'/></clipPath></defs></svg>);
    background-color: red;
}
```

## Known issues
- SVG URI needs to be manually escaped. Even special characters like "%" or "#" can cause problems, depending on Webpack settings.