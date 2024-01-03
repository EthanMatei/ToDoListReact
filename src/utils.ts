export const shuffleArr = (array:any[]) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    [...array].sort(() => Math.random()-0.5);

}