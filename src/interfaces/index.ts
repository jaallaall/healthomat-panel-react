import common from "../i18n/fa/common.json";
import menu from "../i18n/fa/menu.json";

export type TKey = keyof typeof common;
export type TKeyMenu = keyof typeof menu;

export interface Options {
  [key: string]: any;
}

export enum Pages {
  Dashboard = "/",
}
