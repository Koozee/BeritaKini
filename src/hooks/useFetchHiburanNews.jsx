import { useState, useEffect } from 'react';
import { hiburanNewsApi } from '../api/hiburanNewsApi';
import { formatDate } from '../utils/formatDate';

export const useFetchHiburanNews = () => {
    const [hiburanNews, setHiburanNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await hiburanNewsApi();
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setHiburanNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { hiburanNews, loading, error };
};
