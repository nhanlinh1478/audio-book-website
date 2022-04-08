import Box from '@mui/material/Box';

import { SCREEN_BREAKPOINTS } from '../../utils/constants'
import { CarouselNext, CarouselPrev } from '../../components/Icons/index'

export default function HomeCarousel(props) {

    const images = [
        {
            imgSrc: 'https://picsum.photos/1190/420?img=1',
            thumbnailSrc: '/images/carousel_1.png',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=2',
            thumbnailSrc: '/images/carousel_2.png',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=3',
            thumbnailSrc: '/images/carousel_3.png',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=4',
            thumbnailSrc: '/images/carousel_4.png',
            alt: "image 1"
        },
        {
            imgSrc: 'https://picsum.photos/1190/420?img=5',
            thumbnailSrc: '/images/carousel_5.png',
            alt: "image 1"
        }
    ]

    return (
        <Box sx={{ height: props.windowWidth <= SCREEN_BREAKPOINTS.sm ? '280px' : '420px', position: 'relative', width: '100%' }}>
            <div style={{ height: '100%', width: '100%' }}>
                {images.map((image, idx) => (
                    <img style={{
                        objectFit: 'cover',
                        // width: `calc(100% - ${DRAWER_WIDTH}px)`,
                        width: `100%`,
                        position: 'absolute',
                        height: '100%',
                        left: 0,
                        ...(props.windowWidth <= SCREEN_BREAKPOINTS.sm && { width: '100%' }),
                    }} alt={image.alt} key={idx} src={image.imgSrc}></img>
                ))}
            </div>
            <Box sx={{
                position: 'absolute',
                bottom: 33,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                right: { sm: 48, xs: 0 }
            }}>
                <div style={{
                    position: 'absolute',
                    left: '-18px',
                    width: 24,
                    height: 24,
                    ...(props.windowWidth <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselPrev></CarouselPrev>
                </div>
                {images.map((image, idx) => (
                    <img style={{
                        width: 95,
                        height: 45,
                        ...(props.windowWidth <= SCREEN_BREAKPOINTS.sm && { width: 60, height: 35 }),
                        marginLeft: '16px',
                        ...(idx === 0 && { marginLeft: 0 }),
                        borderRadius: '6px'
                    }} alt={image.alt} key={idx} src={image.imgSrc}></img>
                ))}
                <div style={{
                    position: 'absolute',
                    right: '-7px',
                    width: 24,
                    height: 24,
                    ...(props.windowWidth <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselNext></CarouselNext>
                </div>
            </Box>
        </Box>
    )
}