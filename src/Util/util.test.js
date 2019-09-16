import {
    AcceptOnlyumber,
    ArrayMidValue,
    FromateSignal
} from './index';

describe('Test Util functions', () => {
    it('Only Number', () => {
        expect(AcceptOnlyumber("123")).toBe(true);
        expect(AcceptOnlyumber("123g")).toBe(false);
    });
    it('Array Mid Value', () => {
        expect(ArrayMidValue([10, 20, 30])).toBe(15);
    });
    it('Fromate Signal', () => {
        expect(FromateSignal([10, 20, 30], 15)).toEqual([0, 1, 1]);
    });
});
