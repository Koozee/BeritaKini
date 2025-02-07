import { useState, useEffect } from 'react';
import { formatDate } from '../utils/formatDate';
import { getNewsApi } from '../api/getNewsApi';

export const useFetchRecentNews = () => {
    const [recentNews, setRecentNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await getNewsApi("terbaru");
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setRecentNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { recentNews, loading, error };
};
