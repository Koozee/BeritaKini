import { useState, useEffect } from 'react';
import { ekonomiNewsApi } from '../api/ekonomiNewsApi';
import { formatDate } from '../utils/formatDate';

export const useFetchEkonomiNews = () => {
    const [ekonomiNews, setEkonomiNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await ekonomiNewsApi();
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setEkonomiNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { ekonomiNews, loading, error };
};
