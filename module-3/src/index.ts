import { Button } from "./html/button";
import { CustomerSelect } from "./html/customer";
import { ProductSelect } from "./html/product";


interface UiFactory {
    button: () => Button;
    customer: () => CustomerSelect;
    product: () => ProductSelect;
}

export class Factory implements UiFactory {
    constructor(
      private buttonCtor: new () => Button,
      private customerCtor: new () => CustomerSelect,
      private productCtor: new () => ProductSelect
    ) {}
  
    button = () => new this.buttonCtor();
    customer = () => new this.customerCtor();
    product = () => new this.productCtor();
}

export const getHtmlFactory = () => new Factory(Button, CustomerSelect, ProductSelect);

let factory: Factory | null = null;

const variants = {
  html: getHtmlFactory
};

export const init = (variant: keyof typeof variants): void => {
  factory = variants[variant]();
};

type ControlProvider = <T extends keyof UiFactory>(type:T)=>ReturnType<UiFactory[T]>

const getControl: ControlProvider = (type) => {
    if (factory === null) {
      throw new Error("not initialized");
    }
    return factory[type]() as never;
};

init("html");
const button = getControl("button")
console.log(button);

button.execute();
