import type { StrapiApp } from "@strapi/strapi/admin";
import "./global.css"

export default {
  bootstrap(app: StrapiApp) {
    console.log(app);
  }
};
