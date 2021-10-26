/* Utility function that mimics the method 'once' from lodash library 
This method runs the function(it received as argument) only once */
export const once = (fn, context) => {
    let result;
    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}