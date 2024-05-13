export function float2str(
    num: number | undefined | null,
    precision: number,
    to_fixed: boolean = true
): string {
    if (!num && num !== 0) return 'undefined';
    const str = to_fixed ? num.toFixed(precision) : num.toPrecision(precision);
    const matches = str.match(/^0*([0-9]+\.)((?:0|[0-9]*?))(0*)$/);
    if (!matches) return str;
    if (matches.length < 2) return str;
    return `${matches[1]}${matches[2]}`;
}
