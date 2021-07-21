import camelize from 'camelcase-keys';

export const httpResponseAdapter = (data: string) => {
  try {
    return camelize(JSON.parse(data), {deep: true});
  } catch {
    return data;
  }
};
