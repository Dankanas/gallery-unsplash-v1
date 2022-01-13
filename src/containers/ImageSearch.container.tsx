import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Grid from '../components/Grid/Grid';
import { ApplicationState } from '../store/types';

const ImageSearchContainer : FC = () => {
    const searchBar = useSelector ((state: ApplicationState) => state.searchBar);
    const numberOfGridPhotos = 24;
    const [data, setData] = useState([]);
    const GetUnsplashSearch = async () => {
        const response = await axios.get('https://api.unsplash.com/search/photos', { params: {
            per_page: numberOfGridPhotos,
            client_id: 'IpFv3wfhiTwFG5YhrM6R4Q0LGb3On_OOdCvFMREhyrk',
            query: searchBar
        }})
        setData(response.data.results.map((x : ImageGridProps) => {return {src: x.urls.regular , id: x.id}}))
console.log(response.data.results);
    }
    useEffect(() => {
        GetUnsplashSearch();
      }, [searchBar]);
return <Grid images={data}/>
}

export default ImageSearchContainer

interface ImageGridProps {
    urls: {
      regular: string;
    };
    id: string;
  }