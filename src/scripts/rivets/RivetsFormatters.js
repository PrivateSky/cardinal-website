export default class RivetsFormatters {
    static init() {
        rivets.formatters.eq = (value, compareToValue) => {
            return value === compareToValue;
        }

        rivets.formatters.neq = (initialValue, valueToCompare) => {
            return !(initialValue === valueToCompare);
        }
    }
}