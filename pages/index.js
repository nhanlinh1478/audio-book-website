import Head from 'next/head';
import Layout from '../components/layout/Layout';
// import RadioGroupRating from "../components/RadioGroupRating";
// import SelectOtherProps from "../components/SelectOtherProps";
// import Button from "@mui/material/Button";
// import Image from "next/image";
import HomeContent from '../components/HomeContent/HomeContent';
import useWindowSize from '../utils/useWindowSize';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import Link from 'next/link';
//test///sd/sdasdasd
//sdasdasd
///testststs
//testcicd
///tests one more
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export default function Home({ categories, books }) {
    let windowSize = useWindowSize();
    const [selected, setSelected] = useState(0);
    return (
        <div>
            <Head>
                <title>Audio Book</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center items-center ">
                <ImageGallery
                    items={images}
                    thumbnailPosition="right"
                    showPlayButton={false}
                    // showNav={false}
                    showFullscreenButton={false}
                    autoPlay={true}
                    showBullets={true}
                    // showIndex={true}
                />
            </div>

            <div className="pt-10">
                <div className="flex justify-center ">
                    <div className="w-2/3">
                        {categories.map((category, key) => (
                            <div key={key}>
                                <div className="flex items-center text-blue-500 font-bold text-2xl ml-28 mb-5">
                                    {category.name}
                                </div>
                                <div className="flex justify-center  grid-flow-col grid-rows-1 grid-cols-4 gap-8 mb-5 ml-24">
                                    {books.map((book, index) =>
                                        book.categoryId._id === category._id ? (
                                            <Link key={index} href={`/book/${book.slug}`}>
                                                <div className="w-40 h-40 mx-2 cursor-pointer">
                                                    <img
                                                        className="rounded-2xl min-h-full min-w-full object-cover"
                                                        src={book.thumbnail}
                                                    />
                                                </div>
                                            </Link>
                                        ) : (
                                            ''
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                        {/* <div className="flex  items-center  text-blue-500 font-bold text-2xl  ml-28 mb-5">
              Nội dung mới cho bạn
            </div>
            <div className="flex justify-center  grid-flow-col grid-rows-1 grid-cols-4 gap-3 mb-5 ml-24">
              <div className="h-1/2">
                <div className="w-96 h-96 mx-2">
                  <img
                    className="rounded-2xl"
                    src={`https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/686/83467817430fcfbd09198ebc6214f5a9e1e46490.png`}
                  />
                </div>
              </div>
              <div className="h-1/4">
                <div className="w-44 h-44 mx-2 ">
                  <img
                    className="rounded-2xl"
                    src={`https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/686/83467817430fcfbd09198ebc6214f5a9e1e46490.png`}
                  />
                </div>
                <div className="w-44 h-44 mx-2 mt-7">
                  <img
                    className="rounded-2xl"
                    src={`https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/686/83467817430fcfbd09198ebc6214f5a9e1e46490.png`}
                  />
                </div>
              </div>
              <div className="h-1/4">
                <div className="w-44 h-44 mx-2 ">
                  <img
                    className="rounded-2xl"
                    src={`https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/686/83467817430fcfbd09198ebc6214f5a9e1e46490.png`}
                  />
                </div>
                <div className="w-44 h-44 mx-2 mt-7">
                  <img
                    className="rounded-2xl"
                    src={`https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/686/83467817430fcfbd09198ebc6214f5a9e1e46490.png`}
                  />
                </div>
              </div>
            </div> */}
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-center items-center mb-5 text-blue-500 text-2xl font-bold">
                            Bảng xếp hạng
                        </div>
                        <div className="flex justify-center items-center mb-10">
                            <div
                                className={`cursor-pointer font-bold py-2 px-5 rounded-full mx-2 ${
                                    selected == 0 ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-200'
                                }`}
                                onClick={() => setSelected(0)}
                            >
                                Sách nói
                            </div>
                            <div
                                className={`cursor-pointer font-bold py-2 px-5 rounded-full mx-2 ${
                                    selected == 1 ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-200'
                                }`}
                                onClick={() => setSelected(1)}
                            >
                                Podcast
                            </div>
                        </div>
                        {books.map((book, key) => (
                            <Link key={key} href={`/book/${book.slug}`}>
                                <div className="flex items-center mb-10 cursor-pointer">
                                    <img className="w-28 h-28 rounded-xl mx-3 object-cover" src={book.thumbnail} />
                                    <div>
                                        <div className="text-blue-500 font-bold text-xl">{key + 1}</div>
                                        <div className="font-bold text-lg">
                                            {book.name.slice(0, 35) + (book.name.length > 35 ? '...' : '')}
                                        </div>
                                        <div className="font-semibold text-gray-500">{book.author}</div>
                                        <div className="font-semibold text-gray-500">{book.channel}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* <HomeContent
        open={true}
        windowSize={windowSize}
        categories={categories}
        books={books}
      /> */}
        </div>
    );
}

//Layout
Home.layout = Layout;

export async function getServerSideProps(context) {
    let books = [];
    const res = await axios.get(`${process.env.NEXT_PUBLIC_CONTAINER_API_URL}/categories`);
    if (res.status == 200) {
        if (res.data.success == true) {
            const categories = res.data.data.categories;
            for (let i = 0; i < categories.length; i++) {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_CONTAINER_API_URL}/books/category/${categories[i]._id}`,
                );
                if (res.status == 200) {
                    if (res.data.success == true) {
                        const data = res.data.data.books;
                        data.forEach((book) => {
                            books.push(book);
                        });
                    }
                }
            }
            return {
                props: {
                    categories,
                    books,
                },
            };
        }
    }
    return {
        props: {
            categories: [],
            books: [],
        },
    };
    //Handle error
}
