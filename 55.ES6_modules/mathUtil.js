// export keyword is needed for function or variable to be exportable
export const PI  = 3.14159;

export function getCircumference(radius) {
    return PI * 2 * radius;
}
export function getArea(radius) {
    return (radius ** 2) * PI;
}
export function getVolume(radius){
    return (4/3) * PI * (radius ** 3);
}