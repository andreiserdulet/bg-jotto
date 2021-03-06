import { checkPropTypes } from "prop-types";


export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}
export const checkProps = (component, confirmingProps) =>{
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}