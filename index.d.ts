// declare module "*.hbs" {
//     const _: Function;
//     export default _;
// }
declare module "*.hbs"{
    import { TemplateDelegate } from "handlebars"
    const template: TemplateDelegate;
    export default template
}