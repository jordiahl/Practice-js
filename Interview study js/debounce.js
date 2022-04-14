/**
 * Makes sure that a function is only called after a delay of the last time
 * it was called
 *
 * @param fn - The async function to be called when the debounce is done
 * @param delay - The wait time between function calls
 * @returns {function(...[*]=)} - The debounced function
 */
export const debounce = (fn: Function, delay: number = 100) => {
    // @ts-ignore
    let timeout;

    // @ts-ignore
    return function (...args) {
        // @ts-ignore
        const context = this;
        // @ts-ignore
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};