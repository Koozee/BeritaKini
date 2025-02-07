import { useState, useEffect } from "react";
import Search from "../../fragments/Search/Search";
import TittleSection from "../../fragments/Tittle/TittleSection";
import { useFetchRecentNews } from "../../../hooks/useFetchRecentNews";
import CardNews from "../../fragments/CardNews/CardNews";
import PaginationRecom from "../../fragments/Pagination/PaginationRecom";

const RecomNews = () => {
  const { recentNews, loading, error } = useFetchRecentNews();
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;

  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    setFilteredNews(recentNews);
  }, [recentNews]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPosts = filteredNews.length;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredNews.slice(firstPostIndex, lastPostIndex);

  return (
    <section className="p-7 lg:p-20 mx-auto">
      <div className="flex items-center justify-between lg:mr-10">
        <TittleSection name={"Rekomendasi Untuk Anda"} />
        <Search data={recentNews} setFilteredData={setFilteredNews} />
      </div>

      <article className="mt-10">
        <div className="lg:grid lg:grid-cols-4 gap-5 lg:gap-16">
          {currentPost.length > 0 ? (
            currentPost.map((item) => (
              <CardNews key={item.link} news={item} category={"Nasional"} />
            ))
          ) : (
            <p>Tidak ada hasil yang ditemukan.</p>
          )}
        </div>
      </article>

      {/* Pagination */}
      <PaginationRecom
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default RecomNews;
