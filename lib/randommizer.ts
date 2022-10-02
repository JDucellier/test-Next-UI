export const randommizer = (arr: any[], min?: number) => {
    const minIndex = min || 0;
    const index = Math.floor(Math.random() * (arr.length - minIndex) + minIndex);
    return arr[index];
}