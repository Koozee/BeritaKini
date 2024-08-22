import { useState, useEffect } from 'react';
import { olahragaNewsApi } from '../api/olahragaNewsApi';
import { formatDate } from '../utils/formatDate';

export const useFetchOlahragatNews = () => {
    const [olahragaNews, setOlahragaNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await olahragaNewsApi();
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setOlahragaNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { olahragaNews, loading, error };
};
