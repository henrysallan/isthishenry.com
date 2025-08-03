const CLOUDFLARE_ACCOUNT_ID = '625f6dd924445e0b90512bb849c0fcab';
const CLOUDFLARE_API_TOKEN = 'UDAc8hsaJbnoVIBrClOyloZk37u3VO2mgHXO0F8s';

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
      },
      body: formData,
    }
  );

  const result = await response.json();
  return result.result;
};

export const getVideoUrl = (videoId) => {
  return `https://customer-${CLOUDFLARE_ACCOUNT_ID}.cloudflarestream.com/${videoId}/manifest/video.m3u8`;
};