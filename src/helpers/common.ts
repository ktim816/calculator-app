export const getImage = (source: string) => {
  return new URL(`/src/assets/images/${source}`, import.meta.url).href;
};

export const onlyNumberKey = (e: KeyboardEvent) => {
  if (!/[0-9]/g.test(e.key)) {
    e.preventDefault();
    return false;
  }

  return true;
};

export const calculate = (expr: string) => {
  const calculation: number = new Function(`return ${expr}`)();
  return parseFloat(calculation.toFixed(2)).toString();
};
