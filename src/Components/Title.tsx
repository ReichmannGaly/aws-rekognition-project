import React from "react";
import "./Title.css";

type TitleProps = {
    title: string;
}

const Title = ({ title }: TitleProps) => (
    <h1 id="title">
        {title}
    </h1>
)

export default Title;