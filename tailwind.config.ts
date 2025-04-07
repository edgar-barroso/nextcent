import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: "var(--color-neutral-black)",
          d_grey: "var(--color-neutral-d-grey)",
          l_grey: "var(--color-neutral-l-grey)",
          grey: "var(--color-neutral-grey)",
          grey_blue: "var(--color-neutral-grey-blue)",
          silver: "var(--color-neutral-silver)",
          white: "var(--color-neutral-white)",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        colorShade: {
          shade1: "var(--color-shade-1)",
          shade2: "var(--color-shade-2)",
          shade3: "var(--color-shade-3)",
          shade4: "var(--color-shade-4)",
          shade5: "var(--color-shade-5)",
        },
        colorTint: {
          tint1: "var(--color-tint-1)",
          tint2: "var(--color-tint-2)",
          tint3: "var(--color-tint-3)",
          tint4: "var(--color-tint-4)",
          tint5: "var(--color-tint-5)",
        },
        action: {
          success: "var(--color-action-success)",
          error: "var(--color-action-error)",
          warning: "var(--color-action-warning)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
