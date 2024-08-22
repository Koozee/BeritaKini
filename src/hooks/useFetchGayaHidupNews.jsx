import { useState, useEffect } from 'react';
import { gayaHidupNewsApi } from '../api/gayaHidupNewsApi';
import { formatDate } from '../utils/formatDate';

export const useGayaHidupNews = () => {
    const [gayaHidupNews, setGayaHidupNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await gayaHidupNewsApi();
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setGayaHidupNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { gayaHidupNews, loading, error };
};
