export const hidden: string[] = ['apple', 'banana', 'tomato', 'potato', 'pineapple', 'watermelon'];

export const getRandomWord = (): string => {
    const index = Math.floor(Math.random() * hidden.length);
    return hidden[index];
}
