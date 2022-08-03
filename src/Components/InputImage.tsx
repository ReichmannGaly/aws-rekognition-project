import {ProcessImage} from "../Functions/ProcessImage";
import React, {useState} from "react";
import {DetectFacesResponse} from "aws-sdk/clients/rekognition";
import AWS, {AWSError} from "aws-sdk";
import ValuesList from "./ValuesList";
import "./InputImage.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingSpinner from "./LoadingSpinner";

const InputImage = () => {
    const [values,setValues] = useState<DetectFacesResponse>();
    const [img,setImg] = useState<string>();
    const [isUploaded,setIsUploaded] = useState<boolean>(false);
    const [isLoading,setIsLoading] = useState<boolean>(false);

    function DetectFaces(imageData:ArrayBuffer) {
        const rekognition = new AWS.Rekognition();
        const params = {
            Image: {
                Bytes: imageData
            },
            Attributes: [
                'ALL',
            ]
        };
        rekognition.detectFaces(params, function (err:AWSError, data:DetectFacesResponse) {
            if (err) console.log(err, err.stack);
            else {
                console.log(data);
                setValues(data);
                setIsUploaded(true);
                setIsLoading(false);
            }
        });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // @ts-ignore
        ProcessImage(e.target.files[0], DetectFaces);
        // @ts-ignore
        setImg(URL.createObjectURL(e.target.files[0]));
        setIsLoading(true);
    }

    return (
        <>
            <div className="container">
                {isLoading? <LoadingSpinner/> :
                    <>
                        <div className="d-flex justify-content-center">
                        <input className="uploadButton" id="inputButton" type="file" name="fileToUpload" accept="image/*"
                               onChange={handleChange} hidden/>
                        <label htmlFor="inputButton">Choose a File</label>
                        </div>
                        <div className="d-flex bd-highlight m-1 flex-sm-row flex-column">
                        <div className="p-2 col-4 align-items-center justify-content-center flex-column">
                        <div className="p-2" id="imageContainer">
                            {
                                isUploaded ? <img className="rounded" id="uploadedImage" src={img} alt="..." /> :
                                <img id="uploadedImage" src="https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=" alt="..." />
                            }
                        </div>
                        </div>
                        <div className="p-2 m-2 col-8" id="valuesListContainer">
                            {
                                // @ts-ignore
                                isUploaded ? <ValuesList values={values?.FaceDetails[0]}/>: <h1 className="text-center">Choose an image to view results</h1>
                            }
                        </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default InputImage;