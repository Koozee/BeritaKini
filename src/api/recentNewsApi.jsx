export const recentNewsApi = async () => {
    const response = await fetch(`https://api-berita-indonesia.vercel.app/cnn/terbaru/`)
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data;
}

