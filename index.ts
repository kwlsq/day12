console.log('hello');
import Circle from "./interface/circle.js";

export function triangleArea(length: number, width: number): number {
    return length * width;
}

export function circleFormulas(radius: number): Circle {
    const phi = Math.PI;

    return {
        area: phi * ((radius) ** 2),
        circumference: 2 * phi * radius,
        diameter: radius * 2,
    }
}

export function findAngle(angleA: number, angleB: number): number {
    return 180 - (angleA + angleB);
}

export function dateDiffInDays(date1: Date, date2: Date): number {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

export function initialUppercase(name: string): string {
    const arrName = name.trim().split(" ");
    let result = "";

    arrName.forEach(el => {
        if (el.length > 0) {
            result += el[0].toUpperCase();
        }
    })
    return result;
}


console.log(triangleArea(5, 3));
console.log(circleFormulas(5).area);
console.log(circleFormulas(5).circumference);
console.log(circleFormulas(5).diameter);
console.log(findAngle(80, 65));
console.log(dateDiffInDays(new Date(2025, 1, 25), new Date(2025, 1, 26)));
console.log(initialUppercase("Jane Doe"));

