import { useState, useEffect } from 'react';
import { teknologiNewsApi } from '../api/teknologiNewsApi';
import { formatDate } from '../utils/formatDate';

export const useFetchTeknologiNews = () => {
    const [teknologiNews, setTeknologiNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await teknologiNewsApi();
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setTeknologiNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { teknologiNews, loading, error };
};
