
const getShortUrl = async (api_key:string) => {
  const request = await fetch(api_key);
  const { result } = await request.json();
  const { code, original_link, short_link } = result;

  return { code, original_link, short_link }
}

export default getShortUrl