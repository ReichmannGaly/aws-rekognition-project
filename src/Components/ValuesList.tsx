import React from "react";
import "./ValuesList.css"
import Title from "./Title";

export interface BoundingBox {
    Width: number;
    Height: number;
    Left: number;
    Top: number;
}

export interface AgeRange {
    Low: number;
    High: number;
}

export interface BoolValueAndConfidence {
    Value: boolean;
    Confidence: number;
}

export interface Gender {
    Value: string;
    Confidence: number;
}

export interface Emotion {
    Type: string;
    Confidence: number;
}

export interface Landmark {
    Type: string;
    X: number;
    Y: number;
}

export interface Pose {
    Roll: number;
    Yaw: number;
    Pitch: number;
}

export interface Quality {
    Brightness: number;
    Sharpness: number;
}

export interface RootObject {
    BoundingBox: BoundingBox;
    AgeRange: AgeRange;
    Smile: BoolValueAndConfidence;
    Eyeglasses: BoolValueAndConfidence;
    Sunglasses: BoolValueAndConfidence;
    Gender: Gender;
    Beard: BoolValueAndConfidence;
    Mustache: BoolValueAndConfidence;
    EyesOpen: BoolValueAndConfidence;
    MouthOpen: BoolValueAndConfidence;
    Emotions: Emotion[];
    Landmarks: Landmark[];
    Pose: Pose;
    Quality: Quality;
    Confidence: number;
}

const ValuesList: React.FC<{values: RootObject}> = (props:{values: RootObject}) => {

    return (
        <div id="ObjectContainer">
            <div>
                <Title title="BoundingBox"/>
                {
                    props.values !== undefined && props.values.BoundingBox !== undefined &&
                    <>
                        <p>Height : {props.values.BoundingBox.Height}</p>
                        <p>Width: {props.values.BoundingBox.Width}</p>
                        <p>Top: {props.values.BoundingBox.Top}</p>
                        <p>Left: {props.values.BoundingBox.Left}</p>
                    </>
                    }
            </div>
            <div>
                <Title title="AgeRange"/>
                <p>Low: {props.values.AgeRange.Low}</p>
                <p>High: {props.values.AgeRange.High}</p>
            </div>
            <div>
                <Title title="Smile"/>
                <p>Value: {String(props.values.Smile.Value)}</p>
                <p>Confidence : {props.values.Smile.Confidence}</p>
            </div>
            <div>
                <Title title="Eyeglasses"/>
                <p>Value: {String(props.values.Eyeglasses.Value)}</p>
                <p>Confidence : {props.values.Eyeglasses.Confidence}</p>
            </div>
            <div>
                <Title title="Sunglasses"></Title>
                <p>Value: {String(props.values.Sunglasses.Value)}</p>
                <p>Confidence : {props.values.Sunglasses.Confidence}</p>
            </div>
            <div>
                <Title title="Gender"/>
                <p>Value: {props.values.Gender.Value}</p>
                <p>Confidence : {props.values.Gender.Confidence}</p>
            </div>
            <div>
                <Title title="Beard"/>
                <p>Value: {String(props.values.Beard.Value)}</p>
                <p>Confidence : {props.values.Beard.Confidence}</p>
            </div>
            <div>
                <Title title="Mustache"/>
                <p>Value: {String(props.values.Mustache.Value)}</p>
                <p>Confidence : {props.values.Mustache.Confidence}</p>
            </div>
            <div>
                <Title title="EyesOpen"/>
                <p>Value: {String(props.values.EyesOpen.Value)}</p>
                <p>Confidence : {props.values.EyesOpen.Confidence}</p>
            </div>
            <div>
                <Title title="MouthOpen"/>
                <p>Value: {String(props.values.MouthOpen.Value)}</p>
                <p>Confidence : {props.values.MouthOpen.Confidence}</p>
            </div>
            <div>
                <Title title="Emotions"/>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Type
                        </th>
                        <th>
                            Confidence
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.values.Emotions.map(item => (
                            <tr>
                                <td>{item.Type}</td>
                                <td>{item.Confidence}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <Title title="Landmarks"/>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Type
                        </th>
                        <th>
                            X
                        </th>
                        <th>
                            Y
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.values.Landmarks.map(item => (
                            <tr>
                                <td>{item.Type}</td>
                                <td>{item.X}</td>
                                <td>{item.Y}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <Title title="Pose"/>
                <p>Roll: {props.values.Pose.Roll}</p>
                <p>Yaw: {props.values.Pose.Yaw}</p>
                <p>Pitch: {props.values.Pose.Pitch}</p>
            </div>
            <div>
                <Title title="Quality"/>
                <p>Brightness: {props.values.Quality.Brightness}</p>
                <p>Sharpness: {props.values.Quality.Sharpness}</p>
            </div>
            <div>
                <Title title="Confidence"/> {props.values.Confidence}
            </div>
        </div>
    );
}

export default ValuesList;