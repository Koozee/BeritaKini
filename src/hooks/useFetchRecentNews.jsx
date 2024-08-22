import { useState, useEffect } from 'react';
import { recentNewsApi } from '../api/recentNewsApi';
import { formatDate } from '../utils/formatDate';

export const useFetchRecentNews = () => {
    const [recentNews, setRecentNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await recentNewsApi();
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
