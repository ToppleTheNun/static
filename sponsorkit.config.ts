import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  // Providers configs
  github: {
    login: "ToppleTheNun",
  },

  // Rendering configs
  width: 800,
  formats: ["json", "svg", "png"],
  tiers: [
    {
      title: "Backers",
      preset: presets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: presets.medium,
    },
  ],
});
