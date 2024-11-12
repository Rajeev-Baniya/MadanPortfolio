import React from 'react';

interface TitleProps {
    title: string;
    link?: string;
    paragraph: string
}

const Title: React.FC<TitleProps> = ({ title, link = '', paragraph }) => {
    return (
        <div className="text-center text-white">
            <h1 className="title mb-3">{title}</h1>
            <div className="flex justify-center gap-3 mb-3 text-grey"><p>{paragraph}  </p> {link && <> / <a href={`/${link}`} className="text-primary font-semibold">View All</a></>}</div>
            <div className="text-center ">
                <hr className="hr-short" />
            </div>
        </div>
    )
}

export default Title;