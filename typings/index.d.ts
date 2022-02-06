import { TUIComponent } from "./src";
import { App, Plugin } from "vue";

export declare class TUIComponentPlugin extends TUIComponent implements Plugin {
  static install(app: App): void;
}

export declare class HelloWorld extends TUIComponentPlugin {}
