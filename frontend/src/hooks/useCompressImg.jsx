import {useState } from "react";

import Resizer from "react-image-file-resizer";

const useCompressImg = () => {
    const [compressImg, setCompressImg] = useState(null);

    const compressImageHandler = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            try {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    300,
                    300,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        setCompressImg(uri);
                    },
                    "blob",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        } else {
            setCompressImg(null);
        }
    };


    return [compressImageHandler, compressImg, setCompressImg];
};

export default useCompressImg;