// @ts-check
import react from "@astrojs/react"
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightLlmsTxt from "starlight-llms-txt"

const base = '/compose-v3-docs'

export default defineConfig({
  site: "https://grlt-hub.github.io",
   base: base,
  integrations: [
    react(),
    starlight({
      title: "App-Compose",
      description: "App Compose - Compose modules into apps",
      social: [
        { icon: "open-book", label: "Learn", href: `${base}/learn/quick-start/` },
        { icon: "rocket", label: "Sandbox", href: `${base}/sandbox/` },
        { icon: "github", label: "GitHub", href: "https://github.com/grlt-hub/compose-v3-docs" },
      ],
      logo: { src: "./src/assets/logo.svg", replacesTitle: true },
      sidebar: [
        {
          label: "Learn",
          items: [
            { slug: `${base}/learn/quick-start `},
            { slug: `${base}/learn/installation` },
            { slug: `${base}/learn/linting` },
            { slug: `${base}/learn/typescript` },
          ],
          collapsed: true,
        },
        {
          label: "Guides",
          items: [
            { slug: `${base}/guides/coupling-practices` },
            { slug: `${base}/guides/getting-task-result` },
            { slug: `${base}/guides/handling-errors` },
            { slug: `${base}/guides/using-task-status` },
            { slug: `${base}/guides/inspecting-app-topology` },
          ],
          collapsed: true,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
        { slug: "sandbox" },
      ],
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightLlmsTxt({
          rawContent: false,
          promote: ["learn*"],
        }),
      ],
    }),
  ],
})
