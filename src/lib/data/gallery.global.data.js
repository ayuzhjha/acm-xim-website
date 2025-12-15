import nav1 from "../../assets/navbar_img/nav1.jpg";
import nav2 from "../../assets/navbar_img/nav2.jpg";
import nav3 from "../../assets/navbar_img/nav3.jpg";
import nav4 from "../../assets/navbar_img/nav4.jpg";
import nav5 from "../../assets/navbar_img/nav5.jpg";
import nav6 from "../../assets/navbar_img/nav6.jpg";

// Main Gallery Imports
import main1 from "../../assets/Main_gallery/9d3537bb-2dba-4b52-81e2-17a52f5b26ad.jpg";
import main2 from "../../assets/Main_gallery/DSCF5152.JPG";
import main3 from "../../assets/Main_gallery/DSCF5160.JPG";
import main4 from "../../assets/Main_gallery/IMG-20250811-WA0003.jpg";
import main5 from "../../assets/Main_gallery/IMG-20250811-WA0005.jpg";
import main6 from "../../assets/Main_gallery/IMG-20250909-WA0018.jpg";
import main7 from "../../assets/Main_gallery/IMG-20251209-WA0016.jpg";
import main8 from "../../assets/Main_gallery/IMG-20251209-WA0017.jpg";
import main9 from "../../assets/Main_gallery/IMG-20251209-WA0018.jpg";
import main10 from "../../assets/Main_gallery/IMG-20251209-WA0019.jpg";
import main11 from "../../assets/Main_gallery/IMG-20251209-WA0020.jpg";
import main12 from "../../assets/Main_gallery/IMG-20251209-WA0021.jpg";
import main13 from "../../assets/Main_gallery/IMG-20251209-WA0022.jpg";
import main14 from "../../assets/Main_gallery/IMG-20251209-WA0024.jpg";
import main15 from "../../assets/Main_gallery/IMG-20251209-WA0025.jpg";
import main16 from "../../assets/Main_gallery/IMG_0805.jpg";
import main17 from "../../assets/Main_gallery/IMG_1228.JPG";
import main18 from "../../assets/Main_gallery/IMG_20251209_234907.jpg";
import main19 from "../../assets/Main_gallery/IMG_20251209_234926.jpg";
import main20 from "../../assets/Main_gallery/IMG_20251209_234935.jpg";
import main21 from "../../assets/Main_gallery/IMG_20251209_234944.jpg";
import main22 from "../../assets/Main_gallery/IMG_20251209_234953.jpg";
import main23 from "../../assets/Main_gallery/IMG_20251209_235003.jpg";
import main24 from "../../assets/Main_gallery/IMG_20251209_235014.jpg";
import main25 from "../../assets/Main_gallery/IMG_20251209_235025.jpg";
import main26 from "../../assets/Main_gallery/IMG_20251209_235038.jpg";
import main27 from "../../assets/Main_gallery/IMG_20251209_235047.jpg";
import main28 from "../../assets/Main_gallery/IMG_20251209_235127.jpg";
import main29 from "../../assets/Main_gallery/IMG_20251209_235136.jpg";
import main30 from "../../assets/Main_gallery/IMG_20251209_235229.jpg";
import main31 from "../../assets/Main_gallery/IMG_20251210_000153.jpg";
import main32 from "../../assets/Main_gallery/IMG_20251210_000223.jpg";
import main33 from "../../assets/Main_gallery/IMG_20251210_000231.jpg";
import main34 from "../../assets/Main_gallery/IMG_20251211_012145.jpg";
import main35 from "../../assets/Main_gallery/IMG_2158.jpg";
import main36 from "../../assets/Main_gallery/IMG_2160.jpg";
import main37 from "../../assets/Main_gallery/IMG_2166.jpg";
import main38 from "../../assets/Main_gallery/IMG_2167.jpg";
import main39 from "../../assets/Main_gallery/IMG_3483.jpg";
import main40 from "../../assets/Main_gallery/IMG_3501.jpg";

import Img2 from "../../assets/homepage_photo/img_2_.jpg";
import Img3 from "../../assets/homepage_photo/img_3_.jpg";


// * FOR GALLERY SECTION IN HOME PAGE

const galleryRows = {
    upper: {
        images: [nav1, nav2, nav1, nav2, nav1],
        animation: "marquee-right 60s linear infinite",
    },
    middle: {
        images: [nav3, nav4, nav3, nav4, nav3],
        animation: "marquee-left 60s linear infinite",
    },
    lower: {
        images: [nav5, nav6, nav5, nav6, nav5],
        animation: "marquee-right 70s linear infinite",
    },
};

// * FOR GALLERY PAGE
const galleryDragables = [
    {
        src: Img2,
        alt: "Example image",
        rotate: "6deg",
        top: "10%",
        left: "25%",
        className: "w-36 md:w-56",
    },
    {
        src: Img3,
        alt: "Example image",
        rotate: "12deg",
        top: "45%",
        left: "60%",
        className: "w-24 md:w-48",
    },
    {
        src: nav1,
        alt: "Example image",
        rotate: "-6deg",
        top: "20%",
        left: "40%",
        className: "w-52 md:w-80",
    },
    {
        src: main23,
        alt: "Example image",
        rotate: "8deg",
        top: "50%",
        left: "40%",
        className: "w-48 md:w-72",
    },
    {
        src: nav5,
        alt: "Example image",
        rotate: "18deg",
        top: "20%",
        left: "65%",
        className: "w-40 md:w-64",
    },
    {
        src: nav6,
        alt: "Example image",
        rotate: "-3deg",
        top: "35%",
        left: "55%",
        className: "w-24 md:w-48",
    },
];

const mainGalleryImages = [
    main1, main2, main3, main4, main5, main6, main7, main8, main9, main10,
    main11, main12, main13, main14, main15, main16, main17, main18, main19, main20,
    main21, main22, main23, main24, main25, main26, main27, main28, main29, main30,
    main31, main32, main33, main34, main35, main36, main37, main38, main39, main40,
];

const galleryGridBase = mainGalleryImages.map((src, index) => ({
    src,
    alt: `Gallery image ${index + 1}`,
    description: "ACM Gallery",
    className: index % 3 === 0 ? "w-48 md:w-72" : index % 3 === 1 ? "w-24 md:w-48" : "w-36 md:w-56",
}));

const galleryGrid = galleryGridBase;

export { galleryRows, galleryDragables, galleryGrid };
