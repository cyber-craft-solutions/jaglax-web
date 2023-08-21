import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Home from "./sanity/schemas/home.schema";
import Concepts from "./sanity/schemas/concepts.schema";
import MainPage from "./sanity/schemas/mainPage.schema";

const config = defineConfig({
  projectId: "wx0q3a19",
  dataset: "production",
  title: "Koala by Jaglax Homes",
  apiVersion: "2023-7-30",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [Home, Concepts, MainPage] },
});

export default config;
