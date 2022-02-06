import { TUIComponent } from "./src";
import { App, Plugin } from "vue";

export declare class HelloWorld extends TUIComponent implements Plugin {
  static install(app: App): void;
}
