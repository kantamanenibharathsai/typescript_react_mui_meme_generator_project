import { Box, Button, TextField, Typography } from "@mui/material"
import { useState, ChangeEvent, useRef, useEffect, useCallback } from "react"
import memeGeneratorStyles from "./MemeGenerator.Styles"
import memeGeneratorImg from "../../assets/memeStaticImage.png"
import html2canvas from "html2canvas";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";

interface IState {
    memeOne: string,
    memeTwo: string
}

const MemeGenerator = () => {
    const [memeOne, setMemeOne] = useState<IState["memeOne"]>("");
    const [memeTwo, setMemeTwo] = useState<IState["memeOne"]>("");
    const imgRef = useRef<HTMLImageElement | null>(null);
    const paragraphOneRef = useRef<HTMLParagraphElement | null>(null);
    const paragraphTwoRef = useRef<HTMLParagraphElement | null>(null);

    const inputHandlerOne = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMemeOne(value);
    }

    const inputHandlerTwo = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMemeTwo(value);
    }

    const getTextWidth = (text: string, font: string) => {
        const canvas = document.createElement('canvas');
        // console.log("canvas", canvas)
        const context = canvas.getContext('2d');
        // console.log("context", context)
        context!.font = font;
        console.log("font", font)
        const metrics = context!.measureText(text);
        // console.log("metrics", metrics)
        return metrics.width;
    };

    const adjustFontSize = useCallback((value: string, paragraphRef: React.RefObject<HTMLParagraphElement>) => {
        if (paragraphRef.current) {
            const maxWidth = parseInt(window.getComputedStyle(paragraphRef.current).width);
            // console.log(window.getComputedStyle(paragraphRef.current).width)
            // console.log("maxWidth", maxWidth)
            const textWidth = getTextWidth(value, '16px Arial');
            // console.log("textWidth", textWidth)
            const scaleFactor = maxWidth / textWidth;
            // console.log("scaleFactor", scaleFactor)
            const newFontSize = 16 * scaleFactor;
            // console.log("newFontSize", newFontSize)
            return `${newFontSize}px`;
        }
        return '16px';
    }, [])

    const downloadImage = () => {
        if (imgRef.current) {
            html2canvas(imgRef.current).then((img) => {
                const link = document.createElement("a");
                link.href = img.toDataURL("image/png");
                link.download = "generated_image.png";
                document.body.appendChild(link);
                link.click();
            });
        }
    };

    useEffect(() => {
        if (paragraphOneRef.current) {
            paragraphOneRef.current.style.fontSize = adjustFontSize(memeOne, paragraphOneRef);
        }
    }, [memeOne, adjustFontSize]);

    useEffect(() => {
        if (paragraphTwoRef.current) {
            paragraphTwoRef.current.style.fontSize = adjustFontSize(memeTwo, paragraphTwoRef);
        }
    }, [memeTwo, adjustFontSize]);

    return (
        <Box sx={memeGeneratorStyles.mainContainer}>
            <Box sx={memeGeneratorStyles.childContainer}>
                <Typography sx={memeGeneratorStyles.memeGeneratorHeading}>Meme Generator</Typography>
                <Box sx={memeGeneratorStyles.childparentContainer}>
                    <Box sx={memeGeneratorStyles.memeContainer}>
                        <Box sx={memeGeneratorStyles.leftContainer} ref={imgRef}>
                            <Box component="img" alt="meme-image" sx={memeGeneratorStyles.image} src={memeGeneratorImg} />
                            <Box sx={memeGeneratorStyles.boxMemeOne}>
                                <Typography ref={paragraphOneRef} sx={{
                                    ...memeGeneratorStyles.memeOne,
                                    fontSize: adjustFontSize(memeOne, paragraphOneRef),
                                }}>{memeOne}</Typography>
                            </Box>
                            <Box sx={memeGeneratorStyles.boxMemeTwo}>
                                <Typography ref={paragraphTwoRef} sx={{
                                    ...memeGeneratorStyles.memeTwo,
                                    fontSize: adjustFontSize(memeTwo, paragraphTwoRef),
                                }}>{memeTwo}</Typography>
                            </Box>
                        </Box>
                        <Box sx={memeGeneratorStyles.rightContainer}>
                            <Box sx={memeGeneratorStyles.inputsContainer}>
                                <Box sx={memeGeneratorStyles.inputContainer}>
                                    <TextField
                                        label="Meme#1"
                                        multiline
                                        sx={memeGeneratorStyles.textField}
                                        name="memeOne"
                                        onChange={inputHandlerOne}
                                        value={memeOne}
                                    />
                                </Box>
                                <Box sx={memeGeneratorStyles.inputContainer}>
                                    <TextField
                                        label="Meme#2"
                                        multiline
                                        sx={memeGeneratorStyles.textField}
                                        name="memeTwo"
                                        onChange={inputHandlerTwo}
                                        value={memeTwo}
                                    />
                                </Box>
                                <Button variant="contained" sx={memeGeneratorStyles.memeBtn} color="success" onClick={downloadImage}>
                                    Generate Meme
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MemeGenerator;