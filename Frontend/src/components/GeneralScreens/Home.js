/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";
import API from "../../environmentVariables";

const Home = () => {
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get('search');
  const [stories, setStories] = useState([]); // Default to empty array
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API}/story/getAllStories?search=${searchKey || ""}&page=${page}`);

        // Update URL search parameters
        navigate({
          pathname: '/',
          search: `?search=${searchKey || ""}${page > 1 ? `&page=${page}` : ""}`,
        });

        setStories(data.data || []); // Default to empty array if data.data is undefined
        setPages(data.pages || 1); // Default to 1 if data.pages is undefined
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setLoading(false); // Ensure loading state is updated even on error
      }
    };

    getStories();
  }, [searchKey, page, navigate]);

  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  return (
    <div className="Inclusive-home-page">
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(6)].map(() => (
            <SkeletonStory key={uuidv4()} />
          ))}
        </div>
      ) : (
        <div>
          <div className="story-card-wrapper">
            {stories.length > 0 ? (
              stories.map((story) => (
                <CardStory key={uuidv4()} story={story} />
              ))
            ) : (
              <NoStories />
            )}
            <img className="bg-planet-svg" src="planet.svg" alt="planet" />
            <img className="bg-planet2-svg" src="planet2.svg" alt="planet" />
            <img className="bg-planet3-svg" src="planet3.svg" alt="planet" />
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
