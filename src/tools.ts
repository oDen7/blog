export const chekType = (obj: any, type: any) => {
    return Object.prototype.toString.call(obj) === "[object " + type + "]";
} 