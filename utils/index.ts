import { MotorcycleData, SearchParams } from '@/interfaces';
import axios from 'axios';

export async function fetchMotorcycles({
  manufacturer,
  model,
  productionYear,
  offset,
}: SearchParams) {
  const url = 'https://api.api-ninjas.com/v1/motorcycles';
  const KEY = process.env.API_KEY as string;

  if (!manufacturer && !model && !productionYear) return null;

  try {
    const { data } = (await axios.get(url, {
      headers: { 'X-Api-Key': KEY },
      params: {
        make: manufacturer,
        model: model,
        year: productionYear,
        offset: offset,
      },
    })) as MotorcycleData;
    return data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}
