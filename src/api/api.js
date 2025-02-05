const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getCards() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('카드 정보를 불러오지 못했습니다.');
  }
  return await response.json();
}
