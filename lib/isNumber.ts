/**
 * Checks if the given value is a real number. Supports Number object.
 * @param val - value to check
 * @returns true if value is a real number
 */
export const isNumber = (val: any): boolean => {
    if (val instanceof Date) return false;
    const check = val && typeof val.valueOf === 'function' ? val.valueOf() : val;
    return typeof check === 'number' && Number.isFinite(check);
};
